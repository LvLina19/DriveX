import { Link } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";
import products from "../../data/products.json";
import { useState,useEffect } from "react";
import { produkAPI } from "../../services/produkAPI";

export default function DaftarProduk() {
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState("")
  const [query, setQuery] = useState("");
  const [error, setError] = useState("");
  const [products, setProducts] = useState([])
  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const filteredProducts = products.filter((product) =>
    product.nama.toLowerCase().includes(query.toLowerCase())
  );

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  // Load data saat pertama di-render
  useEffect(() => {
    loadProduct()
  }, [])

  // Memanggil fetchNotes beserta error/loading handling
  const loadProduct = async () => {
    try {
      setLoading(true)
      setError("")
      const data = await produkAPI.fetchProducts()
      setProducts(data)
    } catch (err) {
      setError("Gagal memuat catatan")
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="topProduk" className="relative py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-16 right-12 w-32 h-32 bg-blue-200 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-16 left-12 w-24 h-24 bg-indigo-200 rounded-full opacity-30 animate-bounce"></div>
        <div className="absolute top-1/3 left-8 w-16 h-16 bg-purple-200 rounded-full opacity-25"></div>
        <div className="absolute bottom-1/3 right-16 w-20 h-20 bg-cyan-200 rounded-full opacity-20"></div>
        <svg className="absolute top-0 left-0 w-full h-32" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" fill="#e0e7ff"></path>
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10 max-w-screen-xl">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-medium">Armada Pilihan</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-RethinkSans-SemiBold text-gray-800 mb-6">Kendaraan <span className="text-blue-500 ml-2">Unggulan</span></h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-indigo-400 mx-auto mb-8 rounded-full"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Pilih dari berbagai jenis kendaraan yang sesuai dengan kebutuhan perjalanan Anda,
            mulai dari city car hingga SUV dengan harga yang kompetitif.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentProducts.map((product) => (
            <div key={product.id} className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-blue-100">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-3xl opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
              <div className="relative overflow-hidden">
                <img
                  src={product.gambar}
                  alt={product.nama}
                  className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-blue-600 shadow-lg">
                  {product.stok > 0 ? "Tersedia" : "Habis"}
                </div>
              </div>
              <div className="p-6 relative">
                <Link
                  to={`/detailAdmin/${product.id}`}
                  className="text-xl font-RethinkSans-SemiBold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors duration-300 inline-block"
                >
                  {product.nama}
                </Link>
                <div className="flex items-center justify-between mb-4">
                  <p className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent">{`Rp ${product.harga.toLocaleString()}/hari`}</p>
                  <div className="flex items-center space-x-1 text-yellow-400">
                    <AiFillStar className="text-sm" />
                    <span className="text-sm text-gray-600">4.8</span>
                  </div>
                </div>
                <div className="flex item gap-4 mt-10 mb-4 justify-end">
                  <button className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-RethinkSans-SemiBold py-3 px-6 rounded-2xl transition-all duration-300 transform group-hover:scale-105 shadow-lg hover:shadow-xl">
                    <span className="flex items-center justify-center space-x-2">
                      <span>Sewa Sekarang</span>
                      <svg
                        className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                      </svg>
                    </span>
                  </button>
                </div>
                <div className="w-0 group-hover:w-full h-0.5 bg-gradient-to-r from-blue-400 to-indigo-400 mt-4 transition-all duration-500 rounded-full"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}