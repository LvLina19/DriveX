import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer id="kontak" className="bg-gradient-to-br from-blue-950 via-indigo-900 to-blue-800 text-white pt-16 pb-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 opacity-50"></div>
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Kontak Kami */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-yellow-300">Kontak Kami</h3>
            <p className="mb-3 text-gray-300 leading-relaxed">Jl. Sudirman No. 456</p>
            <p className="mb-3 text-gray-300 leading-relaxed">Pekanbaru, Riau 28116, Indonesia</p>
            <p className="mb-3 text-gray-300 leading-relaxed">Email: support@drivex.id</p>
            <p className="mb-3 text-gray-300 leading-relaxed">Telepon: +62 761 1234 567</p>
          </div>

          {/* Menu */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-yellow-300">Navigasi</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/"
                  className="text-gray-300 hover:text-yellow-400 transition duration-300 ease-in-out"
                  aria-label="Beranda DriveX"
                >
                  Beranda
                </Link>
              </li>
              <li>
                <Link
                  to="/simulasi"
                  className="text-gray-300 hover:text-yellow-400 transition duration-300 ease-in-out"
                  aria-label="Simulasi DriveX"
                >
                  Simulasi
                </Link>
              </li>
              <li>
                <Link
                  to="/Karir"
                  className="text-gray-300 hover:text-yellow-400 transition duration-300 ease-in-out"
                  aria-label="Karir DriveX"
                >
                  Karir
                </Link>
              </li>
              <li>
                <Link
                  to="/artikel"
                  className="text-gray-300 hover:text-yellow-400 transition duration-300 ease-in-out"
                  aria-label="Artikel DriveX"
                >
                  Artikel
                </Link>
              </li>
              <li>
                <Link
                  to="/galeri"
                  className="text-gray-300 hover:text-yellow-400 transition duration-300 ease-in-out"
                  aria-label="Galeri DriveX"
                >
                  Galeri
                </Link>
              </li>
            </ul>
          </div>

          {/* Media Sosial */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-yellow-300">Ikuti Kami</h3>
            <div className="flex items-center space-x-6 mb-8">
              <a
                href="https://facebook.com/drivexid"
                target="_blank"
                rel="noopener noreferrer"
                className="text-3xl text-gray-300 hover:text-yellow-400 transition duration-300 transform hover:scale-110"
                aria-label="Facebook DriveX"
              >
                <FaFacebook />
              </a>
              <a
                href="https://twitter.com/drivexid"
                target="_blank"
                rel="noopener noreferrer"
                className="text-3xl text-gray-300 hover:text-yellow-400 transition duration-300 transform hover:scale-110"
                aria-label="Twitter DriveX"
              >
                <FaTwitter />
              </a>
              <a
                href="https://instagram.com/drivexid"
                target="_blank"
                rel="noopener noreferrer"
                className="text-3xl text-gray-300 hover:text-yellow-400 transition duration-300 transform hover:scale-110"
                aria-label="Instagram DriveX"
              >
                <FaInstagram />
              </a>
              <a
                href="https://linkedin.com/company/drivexid"
                target="_blank"
                rel="noopener noreferrer"
                className="text-3xl text-gray-300 hover:text-yellow-400 transition duration-300 transform hover:scale-110"
                aria-label="LinkedIn DriveX"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>

          {/* Partner Kami */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-yellow-300">Partner Kami</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              <div className="bg-white p-3 rounded-lg shadow-md">
                <img
                  src="/img/pcr.png"
                  alt="Partner PCR"
                  className="h-10 w-full object-contain"
                />
              </div>
              <div className="bg-white p-3 rounded-lg shadow-md">
                <img
                  src="/img/partner2.png"
                  alt="Partner 2"
                  className="h-10 w-full object-contain"
                />
              </div>
             
            </div>
          </div>
        </div>

        <div className="border-t border-gray-600 mt-12 pt-8 text-center text-sm text-gray-300">
          <p>© 2025 DriveX. All rights reserved.</p>
         
        </div>
      </div>
    </footer>
  );
}