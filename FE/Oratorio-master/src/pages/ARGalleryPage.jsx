import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const ARGalleryPage = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    setLoading(true);
    axios.get('http://192.168.23.214:5000/api/wisata')
      .then(response => {
        if (mounted) {
          setItems(response.data || []);
          setLoading(false);
        }
      })
      .catch(error => {
        console.error("Error fetching data:", error);
        if (mounted) {
          setItems([]);
          setLoading(false);
        }
      });
    return () => { mounted = false; };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#C9E4E2] via-[#FFFFFF] to-[#C9E4E2]">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-[#005954] text-white">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#C9E4E2] rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#C9E4E2] rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 py-16 sm:py-20">
          <div className="text-center space-y-4">
            <div className="inline-block px-4 py-2 bg-[#C9E4E2] bg-opacity-20 rounded-full text-sm font-medium backdrop-blur-sm border border-[#C9E4E2] border-opacity-30">
              Augmented Reality Experience
            </div>
            <h1 className="text-5xl sm:text-6xl font-bold tracking-tight">
              Galeri AR
              <span className="block text-[#C9E4E2] mt-2">Torio Wisata</span>
            </h1>
            <p className="text-lg sm:text-xl text-[#C9E4E2] max-w-2xl mx-auto">
              Jelajahi destinasi wisata dengan teknologi Augmented Reality yang menghadirkan pengalaman imersif dan interaktif
            </p>
            <div className="flex items-center justify-center gap-8 pt-4 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#C9E4E2] rounded-full animate-pulse"></div>
                <span>Real-time AR</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#C9E4E2] rounded-full animate-pulse"></div>
                <span>3D Models</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#C9E4E2] rounded-full animate-pulse"></div>
                <span>Interactive</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="bg-white border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-wrap justify-center gap-8 text-center">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-[#005954] bg-opacity-10 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-[#005954]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <div className="text-left">
                <div className="text-2xl font-bold text-[#005954]">{items.length}</div>
                <div className="text-sm text-gray-600">Destinasi</div>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-[#005954] bg-opacity-10 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-[#005954]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <div className="text-left">
                <div className="text-2xl font-bold text-[#005954]">A-Frame</div>
                <div className="text-sm text-gray-600">Framework</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-[#005954] bg-opacity-10 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-[#005954]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div className="text-left">
                <div className="text-2xl font-bold text-[#005954]">MindAR</div>
                <div className="text-sm text-gray-600">Technology</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Gallery Content */}
      <div className="max-w-7xl mx-auto px-4 py-12 sm:py-16">
        {loading ? (
          <div className="flex items-center justify-center py-20">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 border-4 border-[#C9E4E2] border-t-[#005954] rounded-full animate-spin mx-auto"></div>
              <p className="text-gray-600">Memuat galeri AR...</p>
            </div>
          </div>
        ) : items.length === 0 ? (
          <div className="bg-white rounded-3xl shadow-lg p-12 text-center border border-gray-100">
            <div className="w-24 h-24 bg-[#C9E4E2] bg-opacity-30 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-12 h-12 text-[#005954]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">Galeri Kosong</h3>
            <p className="text-gray-600">Belum ada destinasi AR yang tersedia saat ini</p>
          </div>
        ) : (
          <>
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold text-[#005954]">Eksplorasi Destinasi</h2>
              <div className="text-sm text-gray-600">
                {items.length} destinasi tersedia
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {items.map((item) => (
                <article 
                  key={item.id} 
                  className="group relative bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100"
                >
                  {/* Image Section */}
                  <div className="relative h-56 bg-gradient-to-br from-[#C9E4E2] to-[#005954] overflow-hidden">
                    <img
                      src={`http://192.168.23.214:5000/static/uploads/${item.marker_image}`}
                      alt={item.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      onError={(e) => { e.target.src = "https://via.placeholder.com/400x300?text=No+Image"; }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    {/* AR Badge */}
                    <div className="absolute top-4 right-4">
                      <div className="px-3 py-1.5 bg-[#005954] text-white text-xs font-bold rounded-full shadow-lg flex items-center gap-1.5 backdrop-blur-sm">
                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M10 3.5a1.5 1.5 0 013 0V4a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-.5a1.5 1.5 0 000 3h.5a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-.5a1.5 1.5 0 00-3 0v.5a1 1 0 01-1 1H6a1 1 0 01-1-1v-3a1 1 0 00-1-1h-.5a1.5 1.5 0 010-3H4a1 1 0 001-1V6a1 1 0 011-1h3a1 1 0 001-1v-.5z" />
                        </svg>
                        AR Ready
                      </div>
                    </div>

                    {/* ID Badge */}
                    <div className="absolute top-4 left-4">
                      <div className="w-10 h-10 bg-white bg-opacity-90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg">
                        <span className="text-[#005954] text-xs font-bold">#{item.id}</span>
                      </div>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="p-6 space-y-4">
                    {/* Location Badge */}
                    <div className="flex items-center gap-2">
                      <div className="flex items-center gap-1.5 px-3 py-1.5 bg-[#C9E4E2] bg-opacity-50 rounded-full">
                        <svg className="w-4 h-4 text-[#005954]" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-[#005954] text-xs font-semibold">{item.location || 'Indonesia'}</span>
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#005954] transition-colors line-clamp-1">
                      {item.name}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 text-sm leading-relaxed line-clamp-2">
                      {item.description}
                    </p>

                    {/* CTA Button */}
                    <Link 
                      to={`/ar/${item.id}`} 
                      className="block w-full"
                    >
                      <button className="w-full bg-[#005954] hover:bg-[#004440] text-white font-semibold py-3.5 px-6 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl group/btn">
                        <svg className="w-5 h-5 transition-transform group-hover/btn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                        <span>Mulai AR Experience</span>
                      </button>
                    </Link>
                  </div>

                  {/* Hover Effect Border */}
                  <div className="absolute inset-0 border-2 border-[#005954] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                </article>
              ))}
            </div>
          </>
        )}
      </div>

      {/* Footer */}
      <div className="bg-[#005954] text-white py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-[#C9E4E2] text-sm">
            Powered by <span className="font-bold">A-Frame</span> & <span className="font-bold">MindAR</span> Technology
          </p>
        </div>
      </div>
    </div>
  );
};

export default ARGalleryPage;