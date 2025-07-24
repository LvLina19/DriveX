import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { artikelAPI } from '../../services/artikelAPI';
import { FiArrowLeft } from 'react-icons/fi'; 

const DetailArtikelAfter = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [artikel, setArtikels] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadartikel = async () => {
      try {
        const data = await artikelAPI.fetchArtikels();
        const found = data.find((p) => String(p.id) === id); 
        setArtikels(found || null);
      } catch (err) {
        console.error("Gagal memuat artikel", err);
      } finally {
        setLoading(false);
      }
    };

    loadartikel();
  }, [id]);

  if (loading) {
    return (
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
        <p className="text-xl text-gray-600 animate-pulse">Loading...</p>
      </section>
    );
  }

  if (!artikel) {
    return (
      <section className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-RethinkSans-SemiBold text-gray-800">
            Artikel tidak ditemukan
          </h2>
          <button
            onClick={() => navigate('/artikel')}
            className="mt-4 inline-flex items-center px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition duration-300"
          >
            <FiArrowLeft className="mr-2" /> Kembali ke Daftar Artikel
          </button>
        </div>
      </section>
    );
  }

  return (
  
    <section className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-12">
      
      <br /><br />
      <div className="container mx-auto px-4 max-w-4xl relative">
       
        <button
          onClick={() => navigate('/artikel')}
          className="absolute top-4 left-4 flex items-center px-4 py-2 bg-white text-blue-600 rounded-full shadow-md hover:bg-blue-50 hover:text-blue-700 transition duration-300"
        >
          <FiArrowLeft className="mr-2" /> Kembali
        </button>

        
        <div className="bg-white rounded-2xl shadow-lg p-6 mt-12">
          <img
            src={artikel.foto}
            alt={artikel.judul}
            className="w-full h-80 object-cover rounded-lg mb-6 hover:scale-105 transition-transform duration-300"
          />
          <h1 className="text-4xl font-RethinkSans-SemiBold text-gray-800 mb-4 bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text">
            {artikel.judul}
          </h1>
          <div className="flex justify-between items-center mb-6 text-gray-600">
            <span className="text-sm">{artikel.kategori}</span>
            <span className="text-sm">{artikel.tanggal}</span>
          </div>
          <p className="text-lg text-gray-700 leading-relaxed">{artikel.detail}</p>
        </div>
      </div>
    </section>
  );
};

export default DetailArtikelAfter;