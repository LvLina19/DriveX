import { BiMoneyWithdraw } from "react-icons/bi";
import { AiOutlineCar } from "react-icons/ai";
import { MdDirectionsCar } from "react-icons/md";
import { AiFillStar } from "react-icons/ai";
import { BiRocket, BiPlay } from "react-icons/bi";
import { FiArrowRight } from "react-icons/fi";
import React from "react";
import testi from "../../data/testi.json";
import products from "../../data/products.json";


export default function Admin() {
  return (
    <div className="guest-page">
      <section className="relative min-h-screen bg-gradient-to-br from-blue-50 via-indigo-25 to-purple-50 overflow-hidden pt-24">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-blue-200 to-indigo-200 rounded-full opacity-30 animate-bounce"></div>
          <div className="absolute top-40 right-32 w-24 h-24 bg-gradient-to-br from-purple-200 to-blue-200 rounded-full opacity-40 animate-pulse"></div>
          <div className="absolute bottom-32 left-32 w-28 h-28 bg-gradient-to-br from-indigo-200 to-purple-200 rounded-full opacity-25 animate-bounce delay-1000"></div>
          <div className="absolute bottom-20 right-20 w-36 h-36 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full opacity-20 animate-pulse delay-500"></div>

          <div className="absolute top-32 left-1/4 w-12 h-12 bg-blue-300 transform rotate-45 opacity-20 animate-spin"></div>
          <div className="absolute bottom-40 right-1/4 w-16 h-16 bg-indigo-300 transform rotate-12 opacity-25 animate-pulse"></div>

          <div className="absolute top-1/4 right-12 w-64 h-64 bg-gradient-to-br from-blue-300 to-transparent rounded-full opacity-10 animate-pulse"></div>
          <div className="absolute bottom-1/4 left-12 w-48 h-48 bg-gradient-to-br from-indigo-300 to-transparent rounded-full opacity-15 animate-bounce"></div>
        </div>

        <div className="container mx-auto px-6 py-20 flex flex-col lg:flex-row items-center justify-between min-h-screen relative z-10 max-w-screen-xl">
          <div className="lg:w-1/2 mb-12 lg:mb-0 space-y-8">
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-md px-4 py-2 rounded-full shadow-lg border border-blue-200 animate-fadeIn">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-blue-600">
                Platform Rental Mobil Terpercaya
              </span>
            </div>

            <div className="space-y-4 animate-slideUp">
              <h1 className="text-lg md:text-xl font-medium text-gray-600 animate-fadeIn delay-200">
                Wujudkan Perjalanan Impian Anda
              </h1>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight animate-fadeIn delay-400">
                Sewa Mobil
                <br />
                <span className="bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 bg-clip-text text-transparent animate-gradient-x">
                  Mudah & Terpercaya
                </span>
              </h1>
            </div>

            <p className="text-lg text-gray-600 leading-relaxed max-w-lg animate-fadeIn delay-600">
              Temukan berbagai pilihan kendaraan sesuai kebutuhan dan budget Anda dengan
              <span className="font-semibold text-blue-600"> RentCar</span>.
              Nikmati kemudahan menyewa mobil dengan armada terawat dan layanan berkualitas
              untuk perjalanan yang nyaman dan aman.
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 animate-fadeIn delay-800">
              <a
                href="#topProduk"
                className="group relative overflow-hidden bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-8 py-4 rounded-2xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                <div className="relative flex items-center gap-2">
                  <BiRocket className="text-xl" />
                  <span>Sewa Sekarang</span>
                  <FiArrowRight className="text-lg transform group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </a>
            </div>
          </div>

          <div className="lg:w-1/2 relative animate-fadeIn delay-300">
            <div className="relative">
              <div className="relative bg-white/20 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/30">
                <img
                  src="/img/fotoawal1.png"
                  alt="Rental Mobil"
                  className="w-full h-auto transform hover:scale-105 transition-transform duration-700"
                />

                <div className="absolute -top-4 -right-4 bg-white rounded-2xl p-4 shadow-lg animate-bounce">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <MdDirectionsCar className="text-blue-500" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold">Mobil Bersih</div>
                      <div className="text-xs text-gray-500">Terawat Baik</div>
                    </div>
                  </div>
                </div>

                <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl p-4 shadow-lg animate-bounce delay-500">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                      <AiOutlineCar className="text-green-500" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold">24 Jam</div>
                      <div className="text-xs text-gray-500">Layanan</div>
                    </div>
                  </div>
                </div>

                <div className="absolute top-1/2 -left-6 bg-white rounded-2xl p-3 shadow-lg animate-pulse">
                  <div className="flex items-center gap-2">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <AiFillStar key={i} className="text-sm" />
                      ))}
                    </div>
                    <span className="text-sm font-semibold">4.9</span>
                  </div>
                </div>
              </div>

              <div className="absolute -z-10 inset-0 bg-gradient-to-br from-blue-200 to-indigo-200 rounded-3xl transform rotate-6 scale-110 opacity-20"></div>
              <div className="absolute -z-20 inset-0 bg-gradient-to-br from-purple-200 to-blue-200 rounded-3xl transform -rotate-3 scale-105 opacity-15"></div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-blue-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-blue-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="relative py-20 bg-gradient-to-br from-blue-50 via-white to-blue-50 overflow-hidden"
      >
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 left-10 w-20 h-20 bg-blue-200 rounded-full opacity-30 animate-pulse"></div>
          <div className="absolute top-32 right-20 w-16 h-16 bg-indigo-200 rounded-full opacity-40 animate-bounce"></div>
          <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-purple-200 rounded-full opacity-50 animate-pulse"></div>
          <div className="absolute bottom-32 right-1/3 w-24 h-24 bg-blue-100 rounded-full opacity-30"></div>
          <div className="absolute top-1/4 right-10 w-8 h-8 bg-blue-300 transform rotate-45 opacity-20"></div>
          <div className="absolute bottom-1/4 left-16 w-6 h-6 bg-indigo-300 transform rotate-12 opacity-30"></div>
          <svg
            className="absolute top-0 left-0 w-full h-32"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
              opacity=".25"
              fill="#dbeafe"
            ></path>
          </svg>
        </div>

        <div className="container mx-auto px-6 relative z-10 max-w-screen-xl">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-medium">
                Tentang Kami
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-RethinkSans-SemiBold text-gray-800 mb-6">
              Mengapa Memilih
              <span className="text-blue-500 ml-2">RentCar?</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-indigo-400 mx-auto mb-8 rounded-full"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              RentCar adalah platform rental mobil yang menyediakan berbagai pilihan kendaraan
              berkualitas dengan harga terjangkau, memberikan kemudahan dan kenyamanan
              untuk perjalanan Anda.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="group relative bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-blue-100 flex flex-col justify-between">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-3xl opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              <div className="relative mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <MdDirectionsCar className="text-3xl text-white" />
                </div>
                <div className="absolute inset-0 w-16 h-16 mx-auto">
                  <div className="absolute inset-0 bg-blue-400 rounded-2xl opacity-30 animate-ping"></div>
                  <div
                    className="absolute inset-0 bg-blue-300 rounded-2xl opacity-20 animate-ping"
                    style={{ animationDelay: "0.5s" }}
                  ></div>
                </div>
              </div>
              <h3 className="font-RethinkSans-SemiBold text-xl mb-4 text-gray-800 group-hover:text-blue-600 transition-colors duration-300 text-center">
                Armada Berkualitas
              </h3>
              <p className="text-gray-600 leading-relaxed text-center">
                Kami menyediakan armada kendaraan yang terawat dengan baik, 
                bersih, dan selalu dalam kondisi prima untuk kenyamanan perjalanan Anda.
              </p>
            </div>

            <div className="group relative bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-blue-100 flex flex-col justify-between">
              <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-400 rounded-3xl opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              <div className="relative mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <AiOutlineCar className="text-3xl text-white" />
                </div>
                <div className="absolute inset-0 w-16 h-16 mx-auto">
                  <div className="absolute inset-0 bg-green-400 rounded-2xl opacity-30 animate-ping"></div>
                </div>
              </div>
              <h3 className="font-RethinkSans-SemiBold text-xl mb-4 text-gray-800 group-hover:text-green-600 transition-colors duration-300 text-center">
                Layanan 24/7
              </h3>
              <p className="text-gray-600 leading-relaxed text-center">
                Tim support kami siap melayani Anda kapan saja dengan respons cepat
                untuk memastikan perjalanan Anda berjalan lancar tanpa kendala.
              </p>
            </div>

            <div className="group relative bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-blue-100 flex flex-col justify-between">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-red-400 rounded-3xl opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              <div className="relative mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <BiMoneyWithdraw className="text-3xl text-white" />
                </div>
                <div className="absolute inset-0 w-16 h-16 mx-auto">
                  <div className="absolute inset-0 bg-orange-400 rounded-2xl opacity-30 animate-ping"></div>
                </div>
              </div>
              <h3 className="font-RethinkSans-SemiBold text-xl mb-4 text-gray-800 group-hover:text-orange-600 transition-colors duration-300 text-center">
                Harga Kompetitif
              </h3>
              <p className="text-gray-600 leading-relaxed text-center">
                Dapatkan harga rental terbaik sesuai budget Anda dengan berbagai pilihan
                paket harian, mingguan, dan bulanan yang fleksibel.
              </p>
            </div>
          </div>

          <div className="mt-20 bg-white rounded-3xl shadow-xl p-8 border border-blue-100">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div className="group">
                <div className="text-3xl font-bold text-blue-500 mb-2 group-hover:scale-110 transition-transform duration-300">
                  1000+
                </div>
                <div className="text-gray-600 font-medium">Pelanggan Puas</div>
              </div>
              <div className="group">
                <div className="text-3xl font-bold text-indigo-500 mb-2 group-hover:scale-110 transition-transform duration-300">
                  50+
                </div>
                <div className="text-gray-600 font-medium">Unit Kendaraan</div>
              </div>
              <div className="group">
                <div className="text-3xl font-bold text-green-500 mb-2 group-hover:scale-110 transition-transform duration-300">
                  24/7
                </div>
                <div className="text-gray-600 font-medium">Layanan</div>
              </div>
              <div className="group">
                <div className="text-3xl font-bold text-purple-500 mb-2 group-hover:scale-110 transition-transform duration-300">
                  2 Jam
                </div>
                <div className="text-gray-600 font-medium">Persiapan</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section
        id="topProduk"
        className="relative py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 overflow-hidden"
      >
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-16 right-12 w-32 h-32 bg-blue-200 rounded-full opacity-20 animate-pulse"></div>
          <div className="absolute bottom-16 left-12 w-24 h-24 bg-indigo-200 rounded-full opacity-30 animate-bounce"></div>
          <div className="absolute top-1/3 left-8 w-16 h-16 bg-purple-200 rounded-full opacity-25"></div>
          <div className="absolute bottom-1/3 right-16 w-20 h-20 bg-cyan-200 rounded-full opacity-20"></div>
          <div className="absolute top-20 left-1/4 w-12 h-12 bg-blue-300 transform rotate-45 opacity-15"></div>
          <div className="absolute bottom-20 right-1/4 w-8 h-8 bg-indigo-300 transform rotate-12 opacity-25"></div>

          <svg
            className="absolute top-0 left-0 w-full h-32"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
              opacity=".25"
              fill="#e0e7ff"
            ></path>
          </svg>
        </div>

        <div className="container mx-auto px-6 relative z-10 max-w-screen-xl">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-medium">
                Armada Pilihan
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-RethinkSans-SemiBold text-gray-800 mb-6">
              Kendaraan
              <span className="text-blue-500 ml-2">Unggulan</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-indigo-400 mx-auto mb-8 rounded-full"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Pilih dari berbagai jenis kendaraan yang sesuai dengan kebutuhan perjalanan Anda,
              mulai dari city car hingga SUV dengan harga yang kompetitif.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.products.map((product, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-blue-100"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-3xl opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>

                <div className="relative overflow-hidden">
                  <img
                    src={product.gambar}
                    alt={product.nama_produk}
                    className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-blue-600 shadow-lg">
                    Tersedia
                  </div>
                </div>

                <div className="p-6 relative">
                  <h3 className="text-xl font-RethinkSans-SemiBold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                    {product.nama_produk}
                  </h3>

                  <div className="flex items-center justify-between mb-4">
                    <p className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent">
                      Rp {product.harga.toLocaleString()}/hari
                    </p>
                    <div className="flex items-center space-x-1 text-yellow-400">
                      <AiFillStar className="text-sm" />
                      <span className="text-sm text-gray-600">4.8</span>
                    </div>
                  </div>

                  <button className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-RethinkSans-SemiBold py-3 px-6 rounded-2xl transition-all duration-300 transform group-hover:scale-105 shadow-lg hover:shadow-xl">
                    <span className="flex items-center justify-center space-x-2">
                      <span>Sewa Sekarang</span>
                      <svg
                        className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                        />
                      </svg>
                    </span>
                  </button>

                  <div className="w-0 group-hover:w-full h-0.5 bg-gradient-to-r from-blue-400 to-indigo-400 mt-4 transition-all duration-500 rounded-full"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <svg
          className="absolute bottom-0 left-0 w-full h-32"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            opacity=".25"
            fill="#e0e7ff"
            transform="rotate(180 600 60)"
          ></path>
        </svg>
      </section>

      <section
        id="testi"
        className="relative py-20 bg-gradient-to-br from-purple-50 via-pink-50 to-rose-50 overflow-hidden"
      >
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-12 left-16 w-28 h-28 bg-purple-200 rounded-full opacity-20 animate-pulse"></div>
          <div className="absolute bottom-12 right-16 w-32 h-32 bg-pink-200 rounded-full opacity-25 animate-bounce"></div>
          <div className="absolute top-1/2 right-8 w-16 h-16 bg-rose-200 rounded-full opacity-30"></div>
          <div className="absolute bottom-1/4 left-12 w-20 h-20 bg-purple-300 rounded-full opacity-15"></div>

          <div className="absolute top-16 right-1/4 text-yellow-300 opacity-20">
            <AiFillStar className="text-3xl animate-pulse" />
          </div>
          <div className="absolute bottom-16 left-1/4 text-yellow-300 opacity-30">
            <AiFillStar className="text-2xl animate-bounce" />
          </div>
          <div className="absolute top-1/3 left-1/3 text-yellow-300 opacity-25">
            <AiFillStar className="text-xl animate-pulse" />
          </div>

          <svg
            className="absolute top-0 left-0 w-full h-32"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
              opacity=".25"
              fill="#fdf2f8"
            ></path>
          </svg>
        </div>

        <div className="container mx-auto px-6 relative z-10 max-w-screen-xl">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="px-4 py-2 bg-purple-100 text-purple-600 rounded-full text-sm font-medium">
                Kata Mereka
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-RethinkSans-SemiBold text-gray-800 mb-6">
              Testimoni
              <span className="text-purple-500 ml-2">Pelanggan</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto mb-8 rounded-full"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Dengarkan pengalaman luar biasa dari pelanggan setia kami yang
              telah merasakan kelezatan makanan Sedap.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testi.testi.map((testimonial) => (
              <div
                key={testimonial.id}
                className="group relative bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-purple-100 flex flex-col justify-between h-full"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 rounded-3xl opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>

                <div className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white text-lg font-bold shadow-lg">
                  "
                </div>

                <div className="relative flex-grow">
                  <div className="flex items-center justify-center space-x-1 text-yellow-400 text-xl mb-6">
                    {[...Array(5)].map((_, i) => (
                      <AiFillStar
                        key={i}
                        className="transform group-hover:scale-110 transition-transform duration-300"
                        style={{ animationDelay: `${i * 0.1}s` }}
                      />
                    ))}
                  </div>

                  <p className="text-gray-600 italic text-center leading-relaxed mb-6 group-hover:text-gray-700 transition-colors duration-300">
                    "{testimonial.review}"
                  </p>

                  <div className="flex items-center justify-center space-x-4">
                    <div className="relative">
                      <img
                        src={testimonial.avatar}
                        alt={`Avatar ${testimonial.name}`}
                        className="w-14 h-14 rounded-full border-3 border-purple-200 shadow-lg group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-white"></div>
                    </div>
                    <div className="text-center">
                      <h3 className="font-RethinkSans-SemiBold text-gray-800 group-hover:text-purple-600 transition-colors duration-300">
                        {testimonial.name}
                      </h3>
                      <p className="text-sm text-gray-500">Pelanggan Setia</p>
                    </div>
                  </div>

                  <div className="w-0 group-hover:w-full h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 mt-6 transition-all duration-500 rounded-full mx-auto"></div>
                </div>

                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="text-pink-400 animate-bounce">
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white rounded-3xl shadow-xl p-8 border border-purple-100 max-w-2xl mx-auto">
            <h3 className="text-2xl font-RethinkSans-SemiBold text-gray-800 mb-4">
              Ingin Berbagi Pengalaman Anda?
            </h3>
            <p className="text-gray-600 mb-6">
              Kami sangat menghargai feedback Anda untuk terus meningkatkan
              layanan terbaik.
            </p>
            <button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-RethinkSans-SemiBold py-3 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
              Tulis Review
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
