import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

export default function HeaderAdmin() {

  return (
    <header className="fixed w-full top-0 z-50 bg-white">
      <div className="container max-w-screen-xl mx-auto px-6 flex items-center justify-between py-5">
        <a
          href="/admin"
          className="font-poppins-extrabold text-[40px] text-gray-900"
        >
          Drive<span className="text-cyan-300">X</span>
        </a>

        <nav className="flex space-x-9 pl-50">
          <NavLink
            to="/admin"
            className={({ isActive }) =>
              `text-base tracking-wide font-RethinkSans-SemiBold ${isActive ? "text-blue-500 font-bold border-b-2 border-blue-500" : "text-gray-800 hover:text-blue-500"
              }`
            }
          >
            Data
          </NavLink>

          <NavLink
            to="/user"
            className={({ isActive }) =>
              `text-base tracking-wide font-RethinkSans-SemiBold ${isActive ? "text-blue-500 font-bold border-b-2 border-blue-500" : "text-gray-800 hover:text-blue-500"
              }`
            }
          >
            User
          </NavLink>
          
          <NavLink
            to="/pesan"
            className={({ isActive }) =>
              `text-base tracking-wide font-RethinkSans-SemiBold ${isActive ? "text-blue-500 font-bold border-b-2 border-blue-500" : "text-gray-800 hover:text-blue-500"
              }`
            }
          >
            Pemesanan
          </NavLink>

          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              `text-base tracking-wide font-RethinkSans-SemiBold ${isActive ? "text-blue-500 font-bold border-b-2 border-blue-500" : "text-gray-800 hover:text-blue-500"
              }`
            }
          >
            Dashboard
          </NavLink>
        </nav>

        <div className="flex items-center space-x-5 ml-10">
          <a
            href="/"
            className="px-6 py-2 bg-transparent border-2 border-blue-500 text-blue-500 text-sm font-RethinkSans-SemiBold rounded-full hover:bg-blue-500 hover:text-white transition duration-300"
          >
            Logout
          </a>
        </div>
      </div>
    </header>
  );
}
