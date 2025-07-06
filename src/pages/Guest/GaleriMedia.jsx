import React, { useState } from 'react';
import { FiPlay, FiImage, FiCalendar, FiEye, FiX } from 'react-icons/fi';
import media from "../../data/media.json";

export default function GaleriMedia() {
  const [selectedMedia, setSelectedMedia] = useState(null);
  const [filter, setFilter] = useState('all');
  const [hoveredItem, setHoveredItem] = useState(null);

  const filteredMedia = filter === 'all' ? media : media.filter(item => item.type === filter);

  const openModal = (item) => {
    setSelectedMedia(item);
  };

  const closeModal = () => {
    setSelectedMedia(null);
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('id-ID', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  };

  return (
    <section className="relative py-24 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-16 w-40 h-40 bg-blue-200 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 left-16 w-32 h-32 bg-indigo-200 rounded-full opacity-30 animate-bounce"></div>
        <div className="absolute top-1/3 left-12 w-24 h-24 bg-purple-200 rounded-full opacity-25"></div>
        <div className="absolute top-2/3 right-8 w-16 h-16 bg-pink-200 rounded-full opacity-20"></div>
      </div>
<br /><br />
      <div className="container mx-auto px-6 relative z-10 max-w-7xl">
        
        <div className="text-center mb-16">
          <div className="inline-block mb-6">
            <span className="px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-full text-sm font-semibold shadow-lg">
              Galeri Media
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
            Katalog <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-600">Media</span>
          </h2>
          <div className="w-32 h-1.5 bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Jelajahi koleksi foto dan video perjalanan dengan kendaraan premium kami dalam galeri yang menawan.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-full p-2 shadow-lg border border-gray-200">
            <div className="flex gap-2">
              {[
                { key: 'all', label: 'Semua', icon: null },
                { key: 'image', label: 'Foto', icon: FiImage },
                { key: 'video', label: 'Video', icon: FiPlay }
              ].map((filterItem) => (
                <button
                  key={filterItem.key}
                  onClick={() => setFilter(filterItem.key)}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center gap-2 ${
                    filter === filterItem.key
                      ? 'bg-gradient-to-r from-blue-500 to-indigo-500 text-white shadow-md'
                      : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                  }`}
                >
                  {filterItem.icon && <filterItem.icon size={18} />}
                  {filterItem.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredMedia.map((item) => (
            <div
              key={item.id}
              className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 cursor-pointer"
              onMouseEnter={() => setHoveredItem(item.id)}
              onMouseLeave={() => setHoveredItem(null)}
              onClick={() => openModal(item)}
            >
              <div className="relative overflow-hidden h-64">
                {item.type === "image" ? (
                  <img
                    src={item.url}
                    alt={item.judul}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                ) : (
                  <div className="relative w-full h-full">
                    {/* Untuk video, gunakan thumbnail sebagai background */}
                    <img
                      src={item.thumbnail || `https://via.placeholder.com/400x300/1f2937/ffffff?text=Video+Thumbnail`}
                      alt={item.judul}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    {/* Overlay gradien untuk video */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                    
                    {/* Play button overlay */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-white/30 group-hover:scale-110 transition-all duration-300 shadow-lg">
                        <FiPlay size={24} className="text-white ml-1" />
                      </div>
                    </div>
                  </div>
                )}

                {/* Overlay untuk hover effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Type Badge */}
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium shadow-md ${
                    item.type === 'image' 
                      ? 'bg-green-500 text-white' 
                      : 'bg-red-500 text-white'
                  }`}>
                    {item.type === 'image' ? 'Foto' : 'Video'}
                  </span>
                </div>

                {/* Hover Actions */}
                <div className={`absolute top-4 right-4 transform transition-all duration-300 ${
                  hoveredItem === item.id ? 'translate-y-0 opacity-100' : '-translate-y-2 opacity-0'
                }`}>
                  <button className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300 shadow-lg">
                    <FiEye size={18} className="text-white" />
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors duration-300 line-clamp-2">
                  {item.judul}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3 leading-relaxed">
                  {item.deskripsi}
                </p>
                
                {/* Meta Information */}
                <div className="flex items-center justify-between text-xs text-gray-500 border-t border-gray-100 pt-4">
                  <div className="flex items-center gap-1">
                    <FiCalendar size={14} />
                    <span>{formatDate(item.tanggal)}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <FiEye size={14} />
                    <span>{item.views}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredMedia.length === 0 && (
          <div className="text-center py-16">
            <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
              <FiImage size={32} className="text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-600 mb-2">Tidak ada media ditemukan</h3>
            <p className="text-gray-500">Coba ubah filter atau periksa kembali nanti.</p>
          </div>
        )}
      </div>

      {/* Modal */}
      {selectedMedia && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={closeModal}>
          <div className="bg-white rounded-2xl overflow-hidden max-w-4xl w-full max-h-[90vh] flex flex-col" onClick={(e) => e.stopPropagation()}>
            {/* Modal Header */}
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-bold text-gray-800">{selectedMedia.judul}</h3>
                <button
                  onClick={closeModal}
                  className="w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors duration-200"
                >
                  <FiX size={20} className="text-gray-600" />
                </button>
              </div>
            </div>

            {/* Modal Content */}
            <div className="flex-1 overflow-auto">
              <div className="aspect-video bg-gray-900">
                {selectedMedia.type === "image" ? (
                  <img
                    src={selectedMedia.url}
                    alt={selectedMedia.judul}
                    className="w-full h-full object-contain"
                  />
                ) : (
                  <video
                    controls
                    className="w-full h-full object-contain"
                    autoPlay
                    poster={selectedMedia.thumbnail}
                  >
                    <source src={selectedMedia.url} type="video/mp4" />
                    Video tidak didukung.
                  </video>
                )}
              </div>
              
              <div className="p-6">
                <p className="text-gray-600 leading-relaxed mb-4">{selectedMedia.deskripsi}</p>
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <FiCalendar size={16} />
                    <span>{formatDate(selectedMedia.tanggal)}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <FiEye size={16} />
                    <span>{selectedMedia.views} views</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}