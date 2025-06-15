import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function HeaderGuest() {
  const location = useLocation();
  const [activeSection, setActiveSection] = useState("");

  const handleScroll = () => {
    const sections = ["#about", "#topProduk", "#testi", "#kontak"];
    const sectionInView = sections.find((section) => {
      const element = document.querySelector(section);
      const rect = element?.getBoundingClientRect();
      return rect && rect.top <= 0 && rect.bottom > 0;
    });
    setActiveSection(sectionInView);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed w-full top-0 z-50 bg-white">
      <div className="container max-w-screen-xl mx-auto px-6 flex items-center justify-between py-5">
        <a
          href="/guest"
          className="font-poppins-extrabold text-[40px] text-gray-900"
        >
          Sedap<span className="text-hijau">.</span>
        </a>

        <nav className="flex space-x-9 pl-50">
          <a
            href="/guest"
            className={`${
              location.pathname === "/guest" && activeSection === ""
                ? "text-orange-500"
                : "text-gray-800"
            } hover:text-orange-500 font-RethinkSans-SemiBold text-base tracking-wide`}
          >
            Home
          </a>
          <a
            href="/guest#about"
            className={`${
              activeSection === "#about" ? "text-orange-500" : "text-gray-800"
            } hover:text-orange-500 font-RethinkSans-SemiBold text-base tracking-wide`}
          >
            About
          </a>
          <a
            href="/guest#topProduk"
            className={`${
              activeSection === "#topProduk" ? "text-orange-500" : "text-gray-800"
            } hover:text-orange-500 font-RethinkSans-SemiBold text-base tracking-wide`}
          >
            Produk
          </a>
          <a
            href="/cekProduk"
            className={`${
              location.pathname === "/cekProduk" ? "text-orange-500" : "text-gray-800"
            } hover:text-orange-500 font-RethinkSans-SemiBold text-base tracking-wide`}
          >
            Cek Stok
          </a>

          <a
            href="/guest#testi"
            className={`${
              activeSection === "#testi" ? "text-orange-500" : "text-gray-800"
            } hover:text-orange-500 font-RethinkSans-SemiBold text-base tracking-wide`}
          >
            Testimoni
          </a>
          <a
            href="/guest#kontak"
            className={`${
              activeSection === "#kontak" ? "text-orange-500" : "text-gray-800"
            } hover:text-orange-500 font-RethinkSans-SemiBold text-base tracking-wide`}
          >
            Kontak
          </a>
        </nav>

        <div className="flex items-center space-x-5 ml-10">
          <a
            href="/login"
            className="px-5 py-2 bg-orange-500 text-white text-sm font-RethinkSans-SemiBold rounded-full hover:bg-orange-600 transition duration-300"
          >
            Login
          </a>
          <a
            href="/register"
            className="px-6 py-2 bg-transparent border-2 border-orange-500 text-orange-500 text-sm font-RethinkSans-SemiBold rounded-full hover:bg-orange-500 hover:text-white transition duration-300"
          >
            Register
          </a>
        </div>
      </div>
    </header>
  );
}
