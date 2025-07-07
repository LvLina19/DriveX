import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
// import articles from '../../../data/articles.json';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import { artikelAPI } from '../../../services/artikelAPI';

const DetailArtikelAdmin = () => {
  const { kode_produk } = useParams();
  const [artikel, setArtikels] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const loadartikel = async () => {
      try {
        const data = await artikelAPI.fetchArtikels();
        const found = data.find((p) => String(p.id) === id); // pastikan pencocokan id
        setArtikels(found || null);
      } catch (err) {
        console.error("Gagal memuat produk", err);
      } finally {
        setLoading(false);
      }
    };

    loadartikel();
  }, [id]);

  if (loading) {
    return (
      <section className="min-h-screen flex items-center justify-center">
        <p>Loading...</p>
      </section>
    );
  }

  if (!artikel) {
    return (
      <section className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold text-gray-800">
            Artikel tidak ditemukan
          </h2>
        </div>
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
        </div>
      </section>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <img
        src={artikel.foto}
        alt={artikel.judul}
        className="w-full h-96 object-cover rounded-lg mb-6"
      />
      <h1 className="text-3xl font-bold mb-4">{artikel.judul}</h1>
      <div className="flex justify-between items-center mb-6">
        <span className="text-sm text-gray-600">{artikel.kategori}</span>
        <span className="text-sm text-gray-600">{artikel.tanggal}</span>
      </div>
      <p className="text-lg text-gray-700 mb-6">{artikel.detail}</p>
    </div>
  );
};

export default DetailArtikelAdmin;