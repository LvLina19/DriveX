import { AiFillStar } from "react-icons/ai";
import testi from "../../data/testi.json";
import { FaEdit } from "react-icons/fa";

export default function Testi() {
  return (
    <section id="testi" className="relative py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-12 left-16 w-28 h-28 bg-purple-200 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-12 right-16 w-32 h-32 bg-pink-200 rounded-full opacity-25 animate-bounce"></div>
        <div className="absolute top-1/2 right-8 w-16 h-16 bg-rose-200 rounded-full opacity-30"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 max-w-screen-xl">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-purple-100 text-purple-600 rounded-full text-sm font-medium">Kata Mereka</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-RethinkSans-SemiBold text-gray-800 mb-6">
            Testimoni
            <span className="text-purple-500 ml-2">Pelanggan </span>
            <button href="#"
              className="bg-transparent border-2 border-purple-400 text-purple-400 text-sm font-RethinkSans-SemiBold px-6 py-3 rounded-2xl inset-0 bg-gradient-to-r hover:from-purple-400 hover:to-pink-400 hover:text-white transition duration-300">
              <div className="relative flex items-center gap-2">
                <FaEdit className="text-xl" />
              </div>
            </button>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto mb-8 rounded-full"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Dengarkan pengalaman luar biasa dari pelanggan setia kami yang telah merasakan kelezatan makanan Sedap.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testi.testi.map((testimonial) => (
            <div key={testimonial.id} className="group relative bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-purple-100 flex flex-col justify-between h-full">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 rounded-3xl opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white text-lg font-bold shadow-lg">"</div>

              <div className="relative flex-grow">
                <div className="flex items-center justify-center space-x-1 text-yellow-400 text-xl mb-6">
                  {[...Array(5)].map((_, i) => (
                    <AiFillStar key={i} className="transform group-hover:scale-110 transition-transform duration-300" style={{ animationDelay: `${i * 0.1}s` }} />
                  ))}
                </div>
                <p className="text-gray-600 italic text-center leading-relaxed mb-6 group-hover:text-gray-700 transition-colors duration-300">"{testimonial.review}"</p>

                <div className="flex items-center justify-center space-x-4">
                  <div className="relative">
                    <img src={testimonial.avatar} alt={`Avatar ${testimonial.name}`} className="w-14 h-14 rounded-full border-3 border-purple-200 shadow-lg group-hover:scale-110 transition-transform duration-300" />
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
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-16 text-center">
        <div className="bg-white rounded-3xl shadow-xl p-8 border border-purple-100 max-w-2xl mx-auto">
          <h3 className="text-2xl font-RethinkSans-SemiBold text-gray-800 mb-4">Ingin Berbagi Pengalaman Anda?</h3>
          <p className="text-gray-600 mb-6">Kami sangat menghargai feedback Anda untuk terus meningkatkan layanan terbaik.</p>
          <button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-RethinkSans-SemiBold py-3 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
            Tulis Review
          </button>
        </div>
      </div>
    </section>
  );
}
