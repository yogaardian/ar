import React, { useEffect, useState } from "react";

// Ganti URL ini sesuai dengan konfigurasi Flask kamu
const BASE_API_URL = "http://localhost:5000/api/wisata";

// Daftar Kategori Konten. KEY HARUS COCOK dengan nilai ENUM di Database (MySQL).
const CATEGORIES = [
    { key: 'FAVORIT', label: 'Destinasi Favorit' },
    { key: 'AR', label: 'Destinasi AR' },
    { key: 'VR', label: 'Destinasi VR' },
];

// --- SVG Icons (Pengganti react-icons/fi) ---
const FiStar = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279L12 18.251l-7.416 3.962 1.48-8.279L.0 9.306l8.332-1.151L12 .587z"/>
  </svg>
);
const FiEdit = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z" />
  </svg>
);
const FiTrash2 = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <polyline points="3 6 5 6 21 6" />
    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
    <line x1="10" y1="11" x2="10" y2="17" />
    <line x1="14" y1="11" x2="14" y2="17" />
  </svg>
);
const FiPlus = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <line x1="12" y1="5" x2="12" y2="19" />
    <line x1="5" y1="12" x2="19" y2="12" />
  </svg>
);
// ------------------------------------------

const ContentPage = () => {
  const [destinations, setDestinations] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [editingItem, setEditingItem] = useState(null);
  const [message, setMessage] = useState("");
  const [isConfirming, setIsConfirming] = useState(false);
  const [itemToDelete, setItemToDelete] = useState(null);
  const [loading, setLoading] = useState(false);

  // STATE BARU: Untuk melacak kategori yang aktif
  const [activeCategory, setActiveCategory] = useState(CATEGORIES[0].key);

  const [formData, setFormData] = useState({
    destination_name: "",
    location: "",
    description: "",
    image_url: "",
    total_visits: 0,
    recent_visits: 0,
    rating: 0,
    reviews_count: 0,
    category: activeCategory,
  });

  // Sinkronisasi kategori form saat tab berubah
  useEffect(() => {
    setFormData(prev => ({ ...prev, category: activeCategory }));
  }, [activeCategory]);

  // Menghapus pesan setelah beberapa waktu
  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => setMessage(""), 3000);
      return () => clearTimeout(timer);
    }
  }, [message]);

  // GET ALL DESTINATIONS (Memfilter berdasarkan activeCategory)
  const fetchDestinations = async () => {
    setLoading(true);
    // Jika backend /api/wisata tidak support category param, server biasanya mengabaikannya.
    const url = `${BASE_API_URL}?category=${activeCategory}`;
    try {
      const response = await fetch(url);
      if (!response.ok) {
        const errorData = await response.json().catch(() => ({ message: response.statusText }));
        setMessage(`Error: ${errorData.message || response.statusText}`);
        setDestinations([]);
        return;
      }
      const data = await response.json();
      setDestinations(Array.isArray(data) ? data : []);
    } catch (error) {
      console.error("Error fetching destinations:", error);
      setMessage("Gagal terhubung ke server API. Pastikan Flask berjalan.");
      setDestinations([]);
    } finally {
      setLoading(false);
    }
  };

  // Panggil fetchDestinations setiap kali activeCategory berubah
  useEffect(() => {
    fetchDestinations();
  }, [activeCategory]);

  // FORM CHANGE
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]:
        ["total_visits", "recent_visits", "rating", "reviews_count"].includes(name)
          ? Number(value)
          : value,
    });
  };

  // FUNGSI PERBAIKAN: Menyeleksi semua teks saat input number di-fokus
  const handleFocus = (e) => {
    if (e.target.type === "number") {
      e.target.select();
    }
  };

  // ADD NEW
  const openAddModal = () => {
    setEditingItem(null);
    setFormData({
      destination_name: "",
      location: "",
      description: "",
      image_url: "",
      total_visits: 0,
      recent_visits: 0,
      rating: 0,
      reviews_count: 0,
      category: activeCategory,
    });
    setShowModal(true);
  };

  // EDIT EXISTING
  const openEditModal = (item) => {
    setEditingItem(item);

    setFormData({
      destination_name: (item.name ?? item.destination_name) || "",
      location: item.location || "",
      description: item.description || "",
      image_url: item.image_url || item.marker_image || "",
      total_visits: Number(item.total_visits) || 0,
      recent_visits: Number(item.recent_visits) || 0,
      rating: Number(item.rating) || 0,
      reviews_count: Number(item.reviews_count) || 0,
      category: item.category || activeCategory,
    });

    setShowModal(true);
  };

  // SAVE (ADD OR UPDATE)
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const method = editingItem ? "PUT" : "POST";
    const id = editingItem ? (editingItem.id ?? editingItem.destination_id) : null;
    const url = editingItem ? `${BASE_API_URL}/${id}` : BASE_API_URL;

    try {
      const response = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json().catch(() => ({}));

      if (response.ok) {
        setShowModal(false);
        setMessage(data.message || `Destinasi berhasil di${method === "POST" ? "tambah" : "perbarui"}!`);
        fetchDestinations(); // Refresh data di tab yang aktif
      } else {
        setMessage(`Gagal: ${data.message || response.statusText}`);
      }
    } catch (error) {
      console.error("Error saving destination:", error);
      setMessage("Terjadi kesalahan server saat menyimpan data.");
    } finally {
      setLoading(false);
    }
  };

  // DELETE Logic
  const confirmDelete = (item) => {
    setItemToDelete(item);
    setIsConfirming(true);
  };

  const deleteDestination = async () => {
    if (!itemToDelete) return;
    setLoading(true);

    try {
      const id = itemToDelete.id ?? itemToDelete.destination_id;
      const response = await fetch(`${BASE_API_URL}/${id}`, { method: "DELETE" });
      const data = await response.json().catch(() => ({}));

      if (response.ok) {
        setMessage(data.message || "Destinasi berhasil dihapus!");
        fetchDestinations();
      } else {
        setMessage(`Gagal: ${data.message || response.statusText}`);
      }
    } catch (error) {
      console.error("Error deleting destination:", error);
      setMessage("Terjadi kesalahan server saat menghapus data.");
    } finally {
      setIsConfirming(false);
      setItemToDelete(null);
      setLoading(false);
    }
  };

  // Fungsi untuk memformat label (misal: total_visits -> Total Visits)
  const formatLabel = (key) => {
    switch(key) {
        case 'destination_name': return 'Nama Destinasi';
        case 'location': return 'Lokasi';
        case 'description': return 'Deskripsi Singkat';
        case 'image_url': return 'URL Gambar Utama';
        case 'total_visits': return 'Total Kunjungan';
        case 'recent_visits': return 'Kunjungan Terbaru';
        case 'rating': return 'Rating (0.0 - 5.0)';
        case 'reviews_count': return 'Jumlah Review';
        case 'category': return 'Kategori Konten';
        default: return key.split("_").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
    }
  }

  // Helper untuk mendapatkan label kategori aktif
  const activeLabel = CATEGORIES.find(c => c.key === activeCategory)?.label || 'Manajemen Konten';

  // --- Render Component ---
  return (
    <div className="p-4 sm:p-8 bg-gray-50 min-h-screen font-sans">

      {/* HEADER SECTION - Judul Dinamis */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 pb-4 border-b border-gray-200">
        <h1 className="text-3xl font-extrabold text-gray-800 mb-4 sm:mb-0">{activeLabel}</h1>
        <button
          className="flex items-center space-x-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-xl shadow-lg transition duration-300 transform hover:scale-[1.02] disabled:opacity-50"
          onClick={openAddModal}
          disabled={loading}
        >
          <FiPlus className="w-5 h-5" />
          <span>Tambah Destinasi Baru</span>
        </button>
      </div>

      {/* TABS NAVIGATION */}
      <div className="flex border-b border-gray-300 mb-6 overflow-x-auto">
        {CATEGORIES.map((cat) => (
          <button
            key={cat.key}
            onClick={() => setActiveCategory(cat.key)}
            className={`
              px-6 py-3 text-sm font-semibold transition duration-200 
              ${activeCategory === cat.key 
                ? 'border-b-4 border-indigo-600 text-indigo-700' 
                : 'text-gray-500 hover:text-indigo-600 hover:border-b-4 hover:border-indigo-300/50'
              }
            `}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Notifikasi */}
      {message && (
        <div className={`p-4 mb-6 rounded-xl shadow-md font-medium text-sm transition duration-300 ${message.startsWith("Gagal") || message.startsWith("Error") ? "bg-red-100 text-red-700 border border-red-300" : "bg-green-100 text-green-700 border border-green-300"}`}>
          {message}
        </div>
      )}

      {/* TAB CONTENT: TABEL DATA */}
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden ring-1 ring-gray-200">
        <table className="min-w-full divide-y divide-gray-100">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-4 text-left text-xs font-bold text-gray-600 uppercase tracking-wider w-1/4">Nama Destinasi</th>
              <th className="px-6 py-4 text-left text-xs font-bold text-gray-600 uppercase tracking-wider w-1/4">Lokasi</th>
              <th className="px-6 py-4 text-center text-xs font-bold text-gray-600 uppercase tracking-wider">Rating</th>
              <th className="px-6 py-4 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">Kunjungan Total</th>
              <th className="px-6 py-4 text-right text-xs font-bold text-gray-600 uppercase tracking-wider">Aksi</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-100">
            {loading ? (
                <tr>
                    <td colSpan="5" className="px-6 py-10 text-center text-indigo-500 font-semibold text-lg">
                        Memuat data {activeLabel.toLowerCase()}...
                    </td>
                </tr>
            ) : destinations.length > 0 ? (
              destinations.map((itemRaw) => {
                // normalize fields with fallbacks
                const item = {
                  id: itemRaw.id ?? itemRaw.destination_id,
                  name: itemRaw.name ?? itemRaw.destination_name ?? "-",
                  location: itemRaw.location ?? "-",
                  rating: Number(itemRaw.rating) || 0,
                  total_visits: Number(itemRaw.total_visits) || 0,
                };

                return (
                  <tr key={item.id ?? itemRaw.id ?? itemRaw.destination_id} className="hover:bg-indigo-50/50 transition duration-150">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-gray-900">{item.name}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{item.location}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-center text-sm text-gray-800">
                      <span className="flex items-center justify-center font-bold text-base text-yellow-600">
                          <FiStar className="w-4 h-4 mr-1 text-yellow-500" />
                          {item.rating.toFixed(1)}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{item.total_visits.toLocaleString('id-ID')}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <div className="flex justify-end space-x-3">
                        <button
                          className="text-indigo-600 hover:text-indigo-800 p-2 rounded-lg hover:bg-indigo-100 transition duration-150 disabled:opacity-50"
                          onClick={() => openEditModal(itemRaw)}
                          title="Edit Data"
                          disabled={loading}
                        >
                          <FiEdit className="w-5 h-5" />
                        </button>
                        <button
                          className="text-red-600 hover:text-red-800 p-2 rounded-lg hover:bg-red-100 transition duration-150 disabled:opacity-50"
                          onClick={() => confirmDelete(itemRaw)}
                          title="Hapus Destinasi"
                          disabled={loading}
                        >
                          <FiTrash2 className="w-5 h-5" />
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <td colSpan="5" className="px-6 py-10 text-center text-gray-500 text-lg">
                  Tidak ada data destinasi di kategori **{activeLabel}**. Silakan tambah yang baru.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* MODAL FORM */}
      {showModal && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-70 flex items-center justify-center p-4 z-50 transition-opacity" onClick={() => setShowModal(false)}>
          <div className="bg-white rounded-3xl shadow-2xl w-full max-w-xl overflow-hidden transition-transform transform scale-100" onClick={(e) => e.stopPropagation()}>
            <div className="p-6 border-b border-gray-100 bg-indigo-50">
              <h2 className="text-2xl font-bold text-indigo-700">{editingItem ? "Edit Destinasi" : "Tambah Destinasi Baru"}</h2>
              <p className="text-sm text-gray-600 mt-1">Mengelola data untuk kategori: **{CATEGORIES.find(c => c.key === (editingItem?.category || activeCategory))?.label}**</p>
            </div>
            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              {Object.keys(formData).map((key) => {
                  // Sembunyikan field category di sini
                  if (key === 'category') return null;

                  return (
                    <div className="flex flex-col space-y-1" key={key}>
                      <label className="text-sm font-semibold text-gray-700">
                        {formatLabel(key)}
                      </label>

                      {key === 'description' ? (
                         <textarea
                          name={key}
                          value={formData[key]}
                          onChange={handleChange}
                          rows="3"
                          placeholder={`Masukkan ${formatLabel(key).toLowerCase()} di sini...`}
                          className="border border-gray-300 p-3 rounded-xl focus:ring-indigo-500 focus:border-indigo-500 transition duration-150 resize-y"
                          required={["destination_name", "location"].includes(key)}
                          disabled={loading}
                         />
                      ) : (
                        <input
                          type={
                            ["total_visits", "recent_visits", "rating", "reviews_count"].includes(key)
                              ? "number"
                              : "text"
                          }
                          name={key}
                          value={formData[key]}
                          onChange={handleChange}
                          onFocus={handleFocus}
                          placeholder={`Masukkan ${formatLabel(key).toLowerCase()}...`}
                          className="border border-gray-300 p-3 rounded-xl focus:ring-indigo-500 focus:border-indigo-500 transition duration-150"
                          required={["destination_name", "location"].includes(key)}
                          step={key === 'rating' ? '0.1' : '1'}
                          disabled={loading}
                        />
                      )}
                    </div>
                  );
              })}

              {/* DROPDOWN KATEGORI (WAJIB ADA di Modal untuk set data sebelum simpan) */}
              <div className="flex flex-col space-y-1 pt-2">
                  <label className="text-sm font-semibold text-gray-700">Kategori Konten</label>
                  <select
                      name="category"
                      value={formData.category}
                      onChange={handleChange}
                      className="border border-gray-300 p-3 rounded-xl focus:ring-indigo-500 focus:border-indigo-500 transition duration-150 bg-white"
                      disabled={loading}
                      required
                  >
                      {CATEGORIES.map(cat => (
                          <option key={cat.key} value={cat.key}>{cat.label}</option>
                      ))}
                  </select>
              </div>

              <div className="pt-4 flex justify-end space-x-3">
                <button
                  type="button"
                  className="px-6 py-2 text-gray-700 bg-gray-200 hover:bg-gray-300 rounded-xl font-medium transition duration-150 disabled:opacity-50"
                  onClick={() => setShowModal(false)}
                  disabled={loading}
                >
                  Batal
                </button>
                <button type="submit"
                    className="px-6 py-2 bg-indigo-600 text-white hover:bg-indigo-700 rounded-xl font-medium transition duration-150 shadow-lg shadow-indigo-300/50 disabled:opacity-50"
                    disabled={loading}
                >
                  {loading ? (editingItem ? 'Menyimpan...' : 'Menambah...') : 'Simpan'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* MODAL KONFIRMASI HAPUS */}
      {isConfirming && itemToDelete && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-70 flex items-center justify-center p-4 z-50" onClick={() => setIsConfirming(false)}>
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-sm p-6 space-y-6" onClick={(e) => e.stopPropagation()}>
            <h2 className="text-xl font-bold text-red-600 border-b pb-2">Hapus Destinasi</h2>
            <p className="text-gray-700">Apakah Anda yakin ingin menghapus destinasi **{(itemToDelete.destination_name ?? itemToDelete.name)}** secara permanen? Aksi ini tidak dapat dibatalkan.</p>
            <div className="flex justify-end space-x-3">
              <button
                type="button"
                className="px-4 py-2 text-gray-700 bg-gray-200 hover:bg-gray-300 rounded-xl font-medium disabled:opacity-50"
                onClick={() => setIsConfirming(false)}
                disabled={loading}
              >
                Batal
              </button>
              <button
                type="button"
                className="px-4 py-2 bg-red-600 text-white hover:bg-red-700 rounded-xl font-medium shadow-lg shadow-red-300/50 disabled:opacity-50"
                onClick={deleteDestination}
                disabled={loading}
              >
                {loading ? 'Menghapus...' : 'Hapus'}
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

// Pastikan komponen ini adalah export default
export default ContentPage;