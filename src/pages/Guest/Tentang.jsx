import { BiMoneyWithdraw } from "react-icons/bi";
import { AiOutlineCar } from "react-icons/ai";
import { MdDirectionsCar } from "react-icons/md";

export default function Tentang() {
  return (
    <section id="tentang" className="relative py-20 bg-gradient-to-br from-blue-50 via-white to-blue-50 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 w-20 h-20 bg-blue-200 rounded-full opacity-30 animate-pulse"></div>
        <div className="absolute top-32 right-20 w-16 h-16 bg-indigo-200 rounded-full opacity-40 animate-bounce"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-purple-200 rounded-full opacity-50 animate-pulse"></div>
        <div className="absolute bottom-32 right-1/3 w-24 h-24 bg-blue-100 rounded-full opacity-30"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 max-w-screen-xl">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-medium">Tentang Kami</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-RethinkSans-SemiBold text-gray-800 mb-6">
            Mengapa Memilih <span className="text-blue-500 ml-2">RentCar?</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-indigo-400 mx-auto mb-8 rounded-full"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            RentCar adalah platform rental mobil yang menyediakan berbagai pilihan kendaraan berkualitas dengan harga terjangkau, memberikan kemudahan dan kenyamanan untuk perjalanan Anda.
          </p>
        </div>


        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">

          <div className="group relative bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-blue-100 flex flex-col justify-between">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-3xl opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
            <div className="relative mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto shadow-lg group-hover:scale-110 transition-transform duration-300">
                <MdDirectionsCar className="text-3xl text-white" />
              </div>
            </div>
            <h3 className="font-RethinkSans-SemiBold text-xl mb-4 text-gray-800 group-hover:text-blue-600 transition-colors duration-300 text-center">Armada Berkualitas</h3>
            <p className="text-gray-600 leading-relaxed text-center">
              Kami menyediakan armada kendaraan yang terawat dengan baik, bersih, dan selalu dalam kondisi prima untuk kenyamanan perjalanan Anda.
            </p>
          </div>


          <div className="group relative bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-blue-100 flex flex-col justify-between">
            <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-400 rounded-3xl opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
            <div className="relative mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto shadow-lg group-hover:scale-110 transition-transform duration-300">
                <AiOutlineCar className="text-3xl text-white" />
              </div>
            </div>
            <h3 className="font-RethinkSans-SemiBold text-xl mb-4 text-gray-800 group-hover:text-green-600 transition-colors duration-300 text-center">Layanan 24/7</h3>
            <p className="text-gray-600 leading-relaxed text-center">
              Tim support kami siap melayani Anda kapan saja dengan respons cepat untuk memastikan perjalanan Anda berjalan lancar tanpa kendala.
            </p>
          </div>


          <div className="group relative bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-blue-100 flex flex-col justify-between">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-red-400 rounded-3xl opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
            <div className="relative mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto shadow-lg group-hover:scale-110 transition-transform duration-300">
                <BiMoneyWithdraw className="text-3xl text-white" />
              </div>
            </div>
            <h3 className="font-RethinkSans-SemiBold text-xl mb-4 text-gray-800 group-hover:text-orange-600 transition-colors duration-300 text-center">Harga Kompetitif</h3>
            <p className="text-gray-600 leading-relaxed text-center">
              Dapatkan harga rental terbaik sesuai budget Anda dengan berbagai pilihan paket harian, mingguan, dan bulanan yang fleksibel.
            </p>
          </div>
        </div>

        <div className="mt-20 bg-white rounded-3xl shadow-xl p-8 border border-blue-100">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="group">
              <div className="text-3xl font-bold text-blue-500 mb-2 group-hover:scale-110 transition-transform duration-300">1000+</div>
              <div className="text-gray-600 font-medium">Pelanggan Puas</div>
            </div>
            <div className="group">
              <div className="text-3xl font-bold text-indigo-500 mb-2 group-hover:scale-110 transition-transform duration-300">50+</div>
              <div className="text-gray-600 font-medium">Unit Kendaraan</div>
            </div>
            <div className="group">
              <div className="text-3xl font-bold text-green-500 mb-2 group-hover:scale-110 transition-transform duration-300">24/7</div>
              <div className="text-gray-600 font-medium">Layanan</div>
            </div>
            <div className="group">
              <div className="text-3xl font-bold text-purple-500 mb-2 group-hover:scale-110 transition-transform duration-300">2 Jam</div>
              <div className="text-gray-600 font-medium">Persiapan</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
