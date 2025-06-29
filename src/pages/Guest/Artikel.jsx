import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import articles from "../../data/articles.json";

export default function Artikel() {
  const [selectedCategory, setSelectedCategory] = useState("Semua");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  // Filter artikel berdasarkan kategori
  const filteredArticles = useMemo(() => {
    return selectedCategory === "Semua"
      ? articles
      : articles.filter((article) => article.kategori === selectedCategory);
  }, [selectedCategory]);

  // Pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentArticles = filteredArticles.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredArticles.length / itemsPerPage);

  // Handler untuk mengubah kategori
  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
    setCurrentPage(1); // Reset ke halaman 1 saat kategori berubah
  };

  // Handler untuk mengubah halaman
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <section className="relative py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 overflow-hidden">
     <br /><br />
      <div className="container mx-auto px-6 relative z-10 max-w-screen-xl">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-medium">Berita & Tips</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-semibold text-gray-800 mb-6">
            Artikel <span className="text-blue-500 ml-2">Terkini</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-indigo-400 mx-auto mb-8 rounded-full"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Temukan informasi terbaru, tips perjalanan, dan promo menarik dari Drive-X.
          </p>
        </div>

        {/* Filter Kategori brains */}
        <div className="mb-8">
          <select
            value={selectedCategory}
            onChange={handleCategoryChange}
            className="w-full md:w-64 px-4 py-2 bg-white rounded-2xl shadow-lg border border-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
            aria-label="Pilih kategori artikel"
          >
            <option value="Semua">Semua Kategori</option>
            <option value="Tips Perjalanan">Tips Perjalanan</option>
            <option value="Promo">Promo</option>
            <option value="Berita">Berita</option>
          </select>
        </div>

        {/* Daftar Artikel */}
        {currentArticles.length === 0 ? (
          <div className="text-center text-lg text-gray-600">
            Tidak ada artikel ditemukan untuk kategori ini.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentArticles.map((article) => (
              <Link
                key={article.id}
                to={`/artikel/${article.id}`}
                className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-blue-100"
                aria-label={`Baca artikel: ${article.judul}`}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={article.gambar}
                    alt={article.judul}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <span className="inline-block mb-2 px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-medium">
                    {article.kategori}
                  </span>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                    {article.judul}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">{article.isi_singkat}</p>
                  <p className="text-gray-500 text-xs mb-4">{new Date(article.tanggal).toLocaleDateString("id-ID")}</p>
                  <button
                    className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-semibold py-2 px-4 rounded-2xl transition-all duration-300 transform group-hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
                    aria-label={`Baca selengkapnya tentang ${article.judul}`}
                  >
                    <span>Baca Selengkapnya</span>
                    <FiArrowRight className="text-lg transform group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              </Link>
            ))}
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="mt-12 flex justify-center items-center space-x-2">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => paginate(page)}
                className={`px-4 py-2 rounded-full transition-all duration-300 ${
                  currentPage === page
                    ? "bg-blue-500 text-white"
                    : "bg-white border border-blue-100 hover:bg-blue-100"
                }`}
                aria-label={`Pindah ke halaman ${page}`}
              >
                {page}
              </button>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}