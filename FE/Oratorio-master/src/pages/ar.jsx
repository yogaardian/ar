import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

const ArDetailGuidancePage = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    let mounted = true;
    axios.get(`http://192.168.23.214:5000/api/wisata/${id}`)
      .then(res => {
        if (mounted) {
          setData(res.data);
          setLoading(false);
        }
      })
      .catch(err => {
        if (mounted) {
          console.error(err);
          setError('Gagal memuat data');
          setLoading(false);
        }
      });
    return () => { mounted = false; };
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#C9E4E2] via-[#FFFFFF] to-[#C9E4E2]">
        <div className="text-center space-y-6">
          <div className="relative w-20 h-20 mx-auto">
            <div className="absolute inset-0 border-4 border-[#C9E4E2] rounded-full"></div>
            <div className="absolute inset-0 border-4 border-[#005954] border-t-transparent rounded-full animate-spin"></div>
          </div>
          <div className="space-y-2">
            <p className="text-[#005954] font-semibold text-lg">Memuat AR Experience</p>
            <p className="text-gray-600 text-sm">Menyiapkan konten untuk Anda...</p>
          </div>
        </div>
      </div>
    );
  }

  if (error || !data) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#C9E4E2] via-[#FFFFFF] to-[#C9E4E2] p-4">
        <div className="bg-white rounded-3xl shadow-2xl p-10 max-w-md text-center border border-gray-100">
          <div className="w-20 h-20 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Oops! Terjadi Kesalahan</h2>
          <p className="text-gray-600 mb-8">{error || 'Data tidak ditemukan. Silakan coba lagi.'}</p>
          <Link 
            to="/ar" 
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#005954] hover:bg-[#004440] text-white rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Kembali ke Galeri
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#C9E4E2] via-[#FFFFFF] to-[#C9E4E2]">
      {/* Top Navigation Bar */}
      <div className="bg-white border-b border-gray-100 shadow-sm sticky top-0 z-50 backdrop-blur-lg bg-opacity-90">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link 
              to="/ar" 
              className="flex items-center gap-2 text-[#005954] hover:text-[#004440] transition-colors group"
            >
              <svg className="w-5 h-5 transition-transform group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              <span className="font-semibold">Kembali</span>
            </Link>
            <div className="flex items-center gap-2 px-4 py-2 bg-[#005954] bg-opacity-10 rounded-full">
              <div className="w-2 h-2 bg-[#005954] rounded-full animate-pulse"></div>
              <span className="text-[#005954] text-sm font-medium">AR Ready</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8 sm:py-12">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-[#005954] to-[#007066] rounded-3xl shadow-2xl overflow-hidden mb-8">
          <div className="relative p-8 sm:p-12">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#C9E4E2] rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#C9E4E2] rounded-full blur-3xl"></div>
            </div>
            
            <div className="relative">
              <div className="flex items-center gap-3 mb-4">
                <div className="px-4 py-1.5 bg-[#C9E4E2] bg-opacity-20 rounded-full text-sm font-medium text-[#C9E4E2] backdrop-blur-sm border border-[#C9E4E2] border-opacity-30">
                  ID: #{data.id}
                </div>
                <div className="px-4 py-1.5 bg-[#C9E4E2] bg-opacity-20 rounded-full text-sm font-medium text-[#C9E4E2] backdrop-blur-sm border border-[#C9E4E2] border-opacity-30 flex items-center gap-1.5">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  {data.location || 'Indonesia'}
                </div>
              </div>
              
              <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
                {data.name}
              </h1>
              
              <p className="text-[#C9E4E2] text-lg max-w-3xl leading-relaxed">
                {data.description}
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Instructions */}
          <div className="lg:col-span-2 space-y-6">
            {/* Marker Preview Card */}
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
              <div className="p-6 border-b border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-[#005954] bg-opacity-10 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-[#005954]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-gray-900">Marker AR</h2>
                    <p className="text-sm text-gray-600">Scan marker ini untuk memulai</p>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <div className="relative bg-gradient-to-br from-[#C9E4E2] to-[#005954] rounded-2xl overflow-hidden shadow-inner">
                  <div className="aspect-video flex items-center justify-center p-4">
                    <img
                      src={`http://192.168.23.214:5000/static/uploads/${data.marker_image}`}
                      alt="AR Marker"
                      className="max-w-full max-h-full object-contain rounded-lg shadow-lg"
                      onError={(e) => { 
                        e.target.parentElement.innerHTML = '<div class="text-white text-center"><svg class="w-16 h-16 mx-auto mb-2 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg><p class="opacity-75">Marker tidak tersedia</p></div>';
                      }}
                    />
                  </div>
                  
                  {/* Decorative corners */}
                  <div className="absolute top-4 left-4 w-8 h-8 border-t-4 border-l-4 border-white opacity-50 rounded-tl-lg"></div>
                  <div className="absolute top-4 right-4 w-8 h-8 border-t-4 border-r-4 border-white opacity-50 rounded-tr-lg"></div>
                  <div className="absolute bottom-4 left-4 w-8 h-8 border-b-4 border-l-4 border-white opacity-50 rounded-bl-lg"></div>
                  <div className="absolute bottom-4 right-4 w-8 h-8 border-b-4 border-r-4 border-white opacity-50 rounded-br-lg"></div>
                </div>
              </div>
            </div>

            {/* Instructions Card */}
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
              <div className="p-6 border-b border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-[#005954] bg-opacity-10 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-[#005954]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                    </svg>
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-gray-900">Panduan Penggunaan</h2>
                    <p className="text-sm text-gray-600">Ikuti langkah berikut untuk memulai AR</p>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <div className="space-y-5">
                  {[
                    {
                      number: 1,
                      title: 'Mulai AR Experience',
                      description: 'Klik tombol "Mulai AR Torio" untuk membuka halaman scanning dengan teknologi AR.',
                      icon: (
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      )
                    },
                    {
                      number: 2,
                      title: 'Scan QR Code',
                      description: 'Arahkan kamera smartphone Anda ke QR Code yang muncul di layar komputer.',
                      icon: (
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" />
                        </svg>
                      )
                    },
                    {
                      number: 3,
                      title: 'Izinkan Akses Kamera',
                      description: 'Berikan izin akses kamera pada browser smartphone Anda untuk pengalaman AR yang optimal.',
                      icon: (
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      )
                    },
                    {
                      number: 4,
                      title: 'Arahkan ke Marker',
                      description: 'Arahkan kamera smartphone ke marker image yang ditampilkan di layar untuk memicu konten AR.',
                      icon: (
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                      )
                    }
                  ].map((step) => (
                    <div key={step.number} className="flex gap-4 group">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-gradient-to-br from-[#005954] to-[#007066] text-white rounded-xl flex items-center justify-center font-bold text-lg shadow-lg group-hover:scale-110 transition-transform duration-300">
                          {step.number}
                        </div>
                      </div>
                      <div className="flex-1 pt-1">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="text-[#005954]">{step.icon}</div>
                          <h3 className="font-bold text-gray-900">{step.title}</h3>
                        </div>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Pro Tip */}
                <div className="mt-8 relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#C9E4E2] to-[#FFFFFF] p-6 border-l-4 border-[#005954]">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-[#005954] bg-opacity-10 rounded-full flex items-center justify-center">
                        <svg className="w-6 h-6 text-[#005954]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-bold text-[#005954] mb-2 flex items-center gap-2">
                        Pro Tips untuk Pengalaman Terbaik
                      </h4>
                      <ul className="space-y-1.5 text-sm text-gray-700">
                        <li className="flex items-start gap-2">
                          <span className="text-[#005954] mt-0.5">•</span>
                          <span>Pastikan smartphone dan laptop terhubung ke jaringan WiFi yang sama</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#005954] mt-0.5">•</span>
                          <span>Gunakan pencahayaan yang cukup untuk hasil tracking yang optimal</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#005954] mt-0.5">•</span>
                          <span>Jaga jarak 20-30cm antara kamera dan marker untuk deteksi terbaik</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Actions */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              {/* Info Card */}
              <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
                <div className="p-6 bg-gradient-to-br from-[#005954] to-[#007066]">
                  <h3 className="text-lg font-bold text-white mb-1">Informasi Destinasi</h3>
                  <p className="text-[#C9E4E2] text-sm">Detail lokasi wisata AR</p>
                </div>
                
                <div className="p-6 space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-[#C9E4E2] bg-opacity-50 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-[#005954]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                      </svg>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-1">Nama Destinasi</p>
                      <p className="text-sm font-semibold text-gray-900">{data.name}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-[#C9E4E2] bg-opacity-50 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-[#005954]" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-1">Lokasi</p>
                      <p className="text-sm font-semibold text-gray-900">{data.location || 'Indonesia'}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-[#C9E4E2] bg-opacity-50 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-[#005954]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" />
                      </svg>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-1">ID Destinasi</p>
                      <p className="text-sm font-semibold text-gray-900">#{data.id}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3">
                <Link
                  to={`/scan/${id}`}
                  className="group relative w-full flex items-center justify-center gap-3 py-4 px-6 bg-gradient-to-r from-[#005954] to-[#007066] hover:from-[#004440] hover:to-[#005954] text-white font-bold rounded-2xl transition-all duration-300 shadow-lg hover:shadow-2xl overflow-hidden"
                >
                  <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity"></div>
                  <svg className="w-6 h-6 transition-transform group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                  <span className="relative">Mulai AR Torio</span>
                  <div className="absolute top-0 right-0 w-20 h-20 bg-[#C9E4E2] rounded-full blur-2xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
                </Link>

                <Link
                  to="/ar"
                  className="w-full flex items-center justify-center gap-2 py-4 px-6 bg-white hover:bg-gray-50 text-[#005954] font-semibold rounded-2xl transition-all duration-300 border-2 border-[#005954] shadow-md hover:shadow-lg"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                  </svg>
                  <span>Kembali ke Galeri</span>
                </Link>
              </div>

              {/* Tech Stack Badge */}
              <div className="bg-gradient-to-br from-[#C9E4E2] to-[#FFFFFF] rounded-2xl p-6 border border-gray-100">
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">Powered By</p>
                <div className="flex items-center gap-3">
                  <div className="px-3 py-1.5 bg-white rounded-lg shadow-sm">
                    <p className="text-[#005954] font-bold text-sm">A-Frame</p>
                  </div>
                  <div className="text-gray-400">+</div>
                  <div className="px-3 py-1.5 bg-white rounded-lg shadow-sm">
                    <p className="text-[#005954] font-bold text-sm">MindAR</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
