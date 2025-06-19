import React from 'react';
import { FaLinkedin, FaInstagram, FaEnvelope, FaStar, FaQuoteLeft, FaEdit } from "react-icons/fa";
import tim from "../../../data/tim.json";

export default function TimKita() {
  return (
    <section id="tim" className="relative py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-16 w-32 h-32 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full opacity-10 animate-pulse"></div>
        <div className="absolute bottom-32 right-24 w-24 h-24 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full opacity-15 animate-bounce"></div>
        <div className="absolute top-1/2 left-8 w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full opacity-20 animate-pulse delay-1000"></div>

        <div className="absolute top-32 right-32 w-64 h-64 bg-gradient-to-br from-blue-200 to-indigo-300 rounded-full opacity-20 blur-3xl animate-pulse delay-500"></div>
        <div className="absolute bottom-20 left-20 w-48 h-48 bg-gradient-to-br from-purple-200 to-pink-300 rounded-full opacity-15 blur-2xl animate-pulse delay-700"></div>

        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 max-w-7xl">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 mb-6">
            <div className="h-px w-8 bg-gradient-to-r from-transparent to-blue-500"></div>
            <span className="px-6 py-3 bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-700 rounded-full text-sm font-semibold border border-blue-200 shadow-sm">
              Tim Profesional Kami
            </span>
            <div className="h-px w-8 bg-gradient-to-l from-transparent to-blue-500"></div>
          </div>

          <h2 className="text-2xl md:text-6xl font-bold bg-gradient-to-r from-gray-800 via-blue-800 to-indigo-800 bg-clip-text text-transparent mb-6 leading-tight">
            Kenalan dengan <br />
            <span className="text-transparent bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 bg-clip-text">
              Tim DriveX
            </span>
          </h2>

          <div className="flex justify-center mb-8">
            <div className="w-32 h-1.5 bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-500 rounded-full relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-500 rounded-full blur-sm opacity-50"></div>
            </div>
          </div>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Di balik pelayanan cepat dan armada terbaik, inilah tim yang berdedikasi untuk
            <span className="font-semibold text-blue-600"> menjamin kenyamanan setiap perjalanan Anda</span>.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {tim.tim.map((member, i) => (
            <div
              key={i}
              className="group relative bg-white/90 backdrop-blur-sm p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-3 border border-white/50 overflow-hidden"
            >
              <button href="#"
                className="bg-transparent border-2 border-blue-500 text-blue-500 text-sm font-RethinkSans-SemiBold px-4 py-3 rounded-2xl inset-0 bg-gradient-to-r hover:from-blue-600 hover:to-indigo-500 hover:text-white transition duration-300">
                <div className="relative flex items-center gap-2">
                  <FaEdit className="text-xl" />
                </div>
              </button>
              <div className="absolute inset-0 bg-gradient-to-br from-white via-blue-50/30 to-indigo-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-blue-100 to-indigo-200 rounded-full opacity-0 group-hover:opacity-30 transform scale-0 group-hover:scale-100 transition-all duration-500"></div>

              <div className="relative z-10 text-center">
                <div className="relative mb-6 mx-auto w-32 h-32">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full animate-pulse group-hover:animate-none"></div>
                  <img
                    src={member.photo}
                    alt={member.name}
                    className="relative w-full h-full rounded-full object-cover shadow-xl border-4 border-white transform group-hover:scale-110 transition-all duration-500 z-10"
                  />
                  <div className="absolute bottom-2 right-2 w-6 h-6 bg-green-500 rounded-full border-3 border-white shadow-lg z-20">
                    <div className="w-full h-full bg-green-400 rounded-full animate-ping"></div>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors duration-300 mb-2">
                  {member.name}
                </h3>
                <div className="inline-block px-4 py-2 bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-700 rounded-full text-sm font-semibold mb-4 border border-blue-200">
                  {member.role}
                </div>

                <p className="text-gray-600 text-sm leading-relaxed mb-4 px-2">
                  {member.description}
                </p>

                <div className="flex justify-center gap-3 opacity-100 group-hover:opacity-0 transition-opacity duration-300 relative z-20">
                  <a
                    href={member.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-gradient-to-br from-pink-500 to-rose-500 text-white rounded-xl shadow-lg hover:shadow-xl transform hover:scale-110 hover:-translate-y-1 transition-all duration-300 group/icon"
                  >
                    <FaInstagram className="text-lg group-hover/icon:animate-bounce" />
                  </a>
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-xl shadow-lg hover:shadow-xl transform hover:scale-110 hover:-translate-y-1 transition-all duration-300 group/icon"
                  >
                    <FaLinkedin className="text-lg group-hover/icon:animate-bounce" />
                  </a>
                  <a
                    href={`mailto:${member.email}`}
                    className="p-3 bg-gradient-to-br from-gray-600 to-gray-700 text-white rounded-xl shadow-lg hover:shadow-xl transform hover:scale-110 hover:-translate-y-1 transition-all duration-300 group/icon"
                  >
                    <FaEnvelope className="text-lg group-hover/icon:animate-bounce" />
                  </a>
                </div>
              </div>

              <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-blue-600/95 to-blue-600/20 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-700 rounded-b-3xl backdrop-blur-sm z-10">
                <div className="flex items-start gap-3 mb-3">
                  <FaQuoteLeft className="text-blue-200 text-sm flex-shrink-0 mt-1" />
                  <p className="text-xs italic leading-relaxed">
                    "Komitmen kami adalah memberikan pengalaman terbaik untuk setiap pelanggan."
                  </p>
                </div>
                <div className="flex justify-center gap-3 pt-2 border-t border-white/20">
                  <a
                    href={member.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-white/20 hover:bg-white/30 text-white rounded-lg shadow-md hover:shadow-lg transform hover:scale-110 transition-all duration-300"
                  >
                    <FaInstagram className="text-sm" />
                  </a>
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-white/20 hover:bg-white/30 text-white rounded-lg shadow-md hover:shadow-lg transform hover:scale-110 transition-all duration-300"
                  >
                    <FaLinkedin className="text-sm" />
                  </a>
                  <a
                    href={`mailto:${member.email}`}
                    className="p-2 bg-white/20 hover:bg-white/30 text-white rounded-lg shadow-md hover:shadow-lg transform hover:scale-110 transition-all duration-300"
                  >
                    <FaEnvelope className="text-sm" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .bg-grid-pattern {
          background-image: 
            linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px);
          background-size: 50px 50px;
        }
      `}</style>
    </section>
  );
}