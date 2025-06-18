import { FaEdit } from "react-icons/fa";
import { AiOutlineCar } from "react-icons/ai";
import { MdDirectionsCar } from "react-icons/md";
import { AiFillStar } from "react-icons/ai";
import { BiRocket, BiPlay } from "react-icons/bi";
import { FiArrowRight } from "react-icons/fi";
import Tentang from "./Tentang";
import DaftarProduk from "./DaftarProduk";
import Testi from "./Testi";
import TimKita from "./TimKita";
import Faq from "./Faq";

export default function HomeAdmin() {
  return (
    <div className="guest-page">
      <section id="" className="relative py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-blue-200 to-indigo-200 rounded-full opacity-30 animate-bounce"></div>
          <div className="absolute top-40 right-32 w-24 h-24 bg-gradient-to-br from-purple-200 to-blue-200 rounded-full opacity-40 animate-pulse"></div>
          <div className="absolute bottom-32 left-32 w-28 h-28 bg-gradient-to-br from-indigo-200 to-purple-200 rounded-full opacity-25 animate-bounce delay-1000"></div>
          <div className="absolute bottom-20 right-20 w-36 h-36 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full opacity-20 animate-pulse delay-500"></div>
        </div>

        <div className="container mx-auto px-6 py-20 flex flex-col lg:flex-row items-center justify-between min-h-screen relative z-10 max-w-screen-xl">
          <div className="lg:w-1/2 mb-12 lg:mb-0 space-y-8">
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-md px-4 py-2 rounded-full shadow-lg border border-blue-200 animate-fadeIn">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-blue-600">Platform Rental Mobil Terpercaya</span>
            </div>

            <div className="space-y-4 animate-slideUp">
              <h1 className="text-lg md:text-xl font-medium text-gray-600 animate-fadeIn delay-200">Wujudkan Perjalanan Impian Anda</h1>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight animate-fadeIn delay-400">
                Sewa Mobil
                <br />
                <span className="bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 bg-clip-text text-transparent animate-gradient-x">Mudah & Terpercaya</span>
              </h1>
            </div>

            <p className="text-lg text-gray-600 leading-relaxed max-w-lg animate-fadeIn delay-600">
              Temukan berbagai pilihan kendaraan sesuai kebutuhan dan budget Anda dengan
              <span className="font-semibold text-blue-600"> DriveX</span>.
              Nikmati kemudahan menyewa mobil dengan armada terawat dan layanan berkualitas
              untuk perjalanan yang nyaman dan aman.
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 animate-fadeIn delay-800">
              <a href="#topProduk" className="group relative overflow-hidden bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-8 py-4 rounded-2xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                <div className="relative flex items-center gap-2">
                  <BiRocket className="text-xl" />
                  <span>Sewa Sekarang</span>
                  <FiArrowRight className="text-lg transform group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </a>
              <button href="#"
                className="bg-transparent border-2 border-blue-500 text-blue-500 text-sm font-RethinkSans-SemiBold px-8 py-4 rounded-2xl inset-0 bg-gradient-to-r hover:from-blue-600 hover:to-indigo-500 hover:text-white transition duration-300">
                <div className="relative flex items-center gap-2">
                  <FaEdit className="text-xl"/>
                </div>
              </button>
            </div>

          </div>

          <div className="lg:w-1/2 relative animate-fadeIn delay-300">
            <div className="relative">
              <div className="relative bg-white/20 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/30">
                <img src="/img/fotoawal1.png" alt="Rental Mobil" className="w-full h-auto transform hover:scale-105 transition-transform duration-700" />

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
      <Tentang />
      <DaftarProduk />
      <TimKita />
      <Testi />
      <Faq />
    </div>
  );
}
