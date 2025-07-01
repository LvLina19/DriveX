import { useParams, Link } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";
import { BiRocket, BiPlay } from "react-icons/bi";
import { FiArrowRight, FiArrowLeft } from "react-icons/fi"; 
import products from "../../../data/products.json";
import testi from "../../../data/testi.json";

export default function DetailProdukAdmin() {
  const { kode_produk } = useParams();
  const product = products.products.find((p) => p.kode_produk === kode_produk);

  if (!product) {
    return (
      <section className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-RethinkSans-SemiBold text-gray-800">
            Produk tidak ditemukan
          </h2>
        </div>
      </section>
    );
  }

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 overflow-hidden py-20">
      
      <br /><br />
      <div className="container mx-auto px-6 relative z-10 max-w-screen-xl">
        <div className="mb-8">
          <Link
            to="/dashboard#topProduk"
            className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-md px-4 py-2 rounded-full shadow-lg border border-blue-200 hover:bg-blue-100 transition-all duration-300"
          >
            <FiArrowLeft className="text-blue-600" />
            <span className="text-sm font-medium text-blue-600">Kembali</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-blue-100">
            <div className="relative overflow-hidden">
              <img
                src={product.gambar}
                alt={product.nama_produk}
                className="w-full h-96 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-blue-600 shadow-lg">
                {product.stok > 0 ? "Tersedia" : "Habis"}
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-RethinkSans-SemiBold text-gray-800 mb-3">
                {product.nama_produk}
              </h3>
              <p className="text-3xl font-bold bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent mb-4">
                Rp {product.harga.toLocaleString()}/hari
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                {product.deskripsi}
              </p>
              <p className="text-sm text-gray-500 mb-4">Stok: {product.stok}</p>
              <div className="flex items-center space-x-1 text-yellow-400 mb-4">
                <AiFillStar className="text-sm" />
                <span className="text-sm text-gray-600">4.8</span>
              </div>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 animate-fadeIn delay-800">
              <Link
                to="/pemesanan"
                className="group relative overflow-hidden bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-8 py-4 rounded-2xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                <div className="relative flex items-center gap-2">
                  <BiRocket className="text-xl" />
                  <span>Sewa Sekarang</span>
                  <FiArrowRight className="text-lg transform group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </Link>
            </div>
            </div>
          </div>

          {/* Reviews Section */}
          <div className="bg-white rounded-3xl p-8 shadow-lg border border-blue-100">
            <h3 className="text-2xl font-RethinkSans-SemiBold text-gray-800 mb-6">
              Ulasan Pelanggan
            </h3>
            <div className="space-y-6 max-h-[500px] overflow-y-auto pr-4">
              {testi.testi.map((review) => (
                <div
                  key={review.id}
                  className="flex items-start space-x-4 border-b border-gray-100 pb-4"
                >
                  <img
                    src={review.avatar} 
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800">
                      {review.name}
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {review.review}
                    </p>
                    <div className="flex items-center space-x-1 text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <AiFillStar key={i} className="text-sm" />
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
