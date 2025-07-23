import React, { useState } from 'react';
import { FaChevronDown, FaQuestionCircle, FaLightbulb, FaHeadset, FaSearch } from "react-icons/fa";
import faq from "../../data/faq.json";

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const filteredFAQ = faq.faq.filter(item =>
    item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section id="faq" className="relative py-24 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-16 w-32 h-32 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full opacity-10 animate-pulse"></div>
        <div className="absolute bottom-32 right-24 w-24 h-24 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full opacity-15 animate-bounce"></div>
        <div className="absolute top-1/2 right-8 w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full opacity-20 animate-pulse delay-1000"></div>
        
        <div className="absolute top-32 left-32 w-64 h-64 bg-gradient-to-br from-blue-200 to-indigo-300 rounded-full opacity-20 blur-3xl animate-pulse delay-500"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-gradient-to-br from-purple-200 to-pink-300 rounded-full opacity-15 blur-2xl animate-pulse delay-700"></div>
        
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 max-w-4xl">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-6">
            <div className="h-px w-8 bg-gradient-to-r from-transparent to-blue-500"></div>
            <span className="px-6 py-3 bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-700 rounded-full text-sm font-semibold border border-blue-200 shadow-sm">
              ❓ Pertanyaan Umum
            </span>
            <div className="h-px w-8 bg-gradient-to-l from-transparent to-blue-500"></div>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-gray-800 via-blue-800 to-indigo-800 bg-clip-text text-transparent mb-6 leading-tight">
            Frequently Asked <br />
            <span className="text-transparent bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 bg-clip-text">
              Questions
            </span>
          </h2>
          
          <div className="flex justify-center mb-8">
            <div className="w-32 h-1.5 bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-500 rounded-full relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-500 rounded-full blur-sm opacity-50"></div>
            </div>
          </div>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
            Temukan jawaban dari pertanyaan yang sering ditanyakan tentang layanan 
            <span className="font-semibold text-blue-600"> DriveX</span>.
          </p>

          <div className="relative max-w-lg mx-auto">
            <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Cari pertanyaan..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-white/80 backdrop-blur-sm rounded-2xl border border-blue-200 focus:border-blue-400 focus:ring-4 focus:ring-blue-200/50 transition-all duration-300 shadow-lg focus:shadow-xl"
            />
          </div>
        </div>

        <div className="space-y-4">
          {filteredFAQ.map((item, index) => (
            <div
              key={index}
              className="group bg-white/90 backdrop-blur-sm rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-white/50 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white via-blue-50/30 to-indigo-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full p-6 text-left relative z-10 flex items-center justify-between group-hover:bg-gradient-to-r group-hover:from-blue-50/50 group-hover:to-indigo-50/50 transition-all duration-300"
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl shadow-lg group-hover:shadow-xl transform group-hover:scale-110 transition-all duration-300">
                    <FaQuestionCircle className="text-white text-lg" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 group-hover:text-blue-600 transition-colors duration-300 pr-4">
                    {item.question}
                  </h3>
                </div>
                
                <div className="flex-shrink-0 ml-4">
                  <div className={`p-2 rounded-full bg-gradient-to-br from-blue-100 to-indigo-100 border border-blue-200 transform transition-all duration-300 ${
                    activeIndex === index ? 'rotate-180 bg-gradient-to-br from-blue-500 to-indigo-600' : ''
                  }`}>
                    <FaChevronDown className={`text-sm transition-colors duration-300 ${
                      activeIndex === index ? 'text-white' : 'text-blue-600'
                    }`} />
                  </div>
                </div>
              </button>
              
              <div className={`overflow-hidden transition-all duration-500 ${
                activeIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}>
                <div className="px-6 pb-6 relative z-10">
                  <div className="pl-16 pr-4">
                    <div className="p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl border border-blue-100 shadow-inner">
                      <div className="flex items-start gap-3">
                        <FaLightbulb className="text-yellow-500 text-lg flex-shrink-0 mt-1" />
                        <p className="text-gray-700 leading-relaxed">
                          {item.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredFAQ.length === 0 && (
          <div className="text-center py-12">
            <div className="p-6 bg-white/80 backdrop-blur-sm rounded-3xl shadow-lg border border-white/50 max-w-md mx-auto">
              <FaSearch className="text-4xl text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-600 mb-2">Tidak ada hasil</h3>
              <p className="text-gray-500">
                Coba kata kunci lain atau hubungi tim support kami.
              </p>
            </div>
          </div>
        )}

        <div className="text-center mt-16">
        <a
            href="https://wa.me/6285264919002"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
        >
            <div className="inline-flex items-center gap-4 p-6 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
            <div className="p-3 bg-white/20 rounded-full">
                <FaHeadset className="text-xl" />
            </div>
            <div className="text-left">
                <h4 className="font-semibold text-lg">Masih Ada Pertanyaan?</h4>
                <p className="text-blue-100 text-sm">Tim support kami siap membantu Anda 24/7</p>
            </div>
            </div>
        </a>
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