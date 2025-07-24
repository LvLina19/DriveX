import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
// import careers from "../../data/careers.json";
import { karirAPI } from "../../services/karirAPI";
import { useState, useEffect, useMemo } from "react";

export default function Karir() {
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState("")
  const [karirs, setKarirs] = useState([]);
  const [query, setQuery] = useState("");
  const [error, setError] = useState("");

  const [selectedCategory, setSelectedCategory] = useState("Semua");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;


  const [dataForm, setDataForm] = useState({
    judul: "", gambar: "", lokasi: "", tanggal_tutup: "", deskripsi: ""
  })
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);


  const filteredArticles = useMemo(() => {
    return selectedCategory === "Semua"
      ? karirs
      : karirs.filter((article) => article.kategori === selectedCategory);
  }, [selectedCategory, karirs]);


  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentArticles = filteredArticles.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredArticles.length / itemsPerPage);


  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
    setCurrentPage(1); 
  };


  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  
  const loadKarirs = async () => {
    try {
      const data = await karirAPI.fetchKarirs();
      setKarirs(data);
    } catch (err) {
      setError("Gagal memuat produk");
      console.error(err);
    }
  };
  

  useEffect(() => {
    loadKarirs()
  }, [])
  return (
    <section className="relative py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 overflow-hidden">
      <br /><br />

      <div className="container mx-auto px-6 relative z-10 max-w-screen-xl">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-medium">Karir</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-RethinkSans-SemiBold text-gray-800 mb-6">Bergabung <span className="text-blue-500 ml-2">dengan Kami</span></h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-indigo-400 mx-auto mb-8 rounded-full"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Temukan peluang karier di Drive-X dan jadi bagian dari tim kami yang inovatif dan dinamis.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {karirs.map((career) => (
            <Link
              key={career.id}
              to={`/karirGuest/${career.id}`} 
              className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-blue-100"
            >
              <div className="relative overflow-hidden">
                <img
                  src={career.gambar}
                  alt={career.judul}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-RethinkSans-SemiBold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                  {career.judul}
                </h3>
                <p className="text-gray-600 text-sm mb-2">{career.lokasi}</p>
                <p className="text-gray-500 text-xs mb-4">
                  Ditutup: {new Date(career.tanggal_tutup).toLocaleDateString("id-ID")}
                </p>
                <p className="text-gray-600 text-sm mb-4">{career.deskripsi_singkat}</p>
               
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}