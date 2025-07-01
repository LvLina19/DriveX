import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import articles from '../../../data/articles.json';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

const DetailArtikelAdmin = () => {
  const { id } = useParams();
  const [article, setArticle] = useState(null);

  useEffect(() => {
    const foundArticle = articles.find((article) => article.id === id);
    setArticle(foundArticle);
  }, [id]);

  if (!article) {
    return <div className="text-center text-xl mt-10">Artikel tidak ditemukan</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <img
        src={article.gambar}
        alt={article.judul}
        className="w-full h-96 object-cover rounded-lg mb-6"
      />
      <h1 className="text-3xl font-bold mb-4">{article.judul}</h1>
      <div className="flex justify-between items-center mb-6">
        <span className="text-sm text-gray-600">{article.kategori}</span>
        <span className="text-sm text-gray-600">{article.tanggal}</span>
      </div>
      <p className="text-lg text-gray-700 mb-6">{article.isi_singkat}</p>
      <div className="prose max-w-none">
        <p className="text-gray-800 leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <p className="text-gray-800 leading-relaxed mt-4">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    </div>
  );
};

export default DetailArtikelAdmin;