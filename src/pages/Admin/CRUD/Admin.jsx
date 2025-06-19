import { AiOutlineDelete } from "react-icons/ai";
import HeaderAdmin from "../../../components/Admin/HeaderAdmin";
import allProducts from "../../../data/products.json";
import { BsFillExclamationDiamondFill } from "react-icons/bs";
import React, { useState, useEffect } from "react";
import { BiEdit } from "react-icons/bi";
import { Link, NavLink } from "react-router-dom";

export default function admin() {
  const [products, setProducts] = useState(allProducts.products); // langsung dari JSON
  const [query, setQuery] = useState("");
  const [error, setError] = useState(null)

  useEffect(() => {
    const timeout = setTimeout(() => {
      const filtered = allProducts.products.filter((product) =>
        product.nama_produk.toLowerCase().includes(query.toLowerCase())
      );
      setProducts(filtered);
    }, 300);

    return () => clearTimeout(timeout);
  }, [query]); // <- array kosong artinya hanya dijalankan sekali setelah di-render

  const errorInfo = error ? (
    <div className="bg-red-200 mb-5 p-5 text-sm font-light text-gray-600 rounded flex items-center">
      <BsFillExclamationDiamondFill className="text-red-600 me-2 text-lg" />
      {error}
    </div>
  ) : null

  return (

    <div className="guest-page">
      <HeaderAdmin />
      <section id="" className="relative py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-blue-200 to-indigo-200 rounded-full opacity-30 animate-bounce"></div>
          <div className="absolute top-40 right-32 w-24 h-24 bg-gradient-to-br from-purple-200 to-blue-200 rounded-full opacity-40 animate-pulse"></div>
          <div className="absolute bottom-32 left-32 w-28 h-28 bg-gradient-to-br from-indigo-200 to-purple-200 rounded-full opacity-25 animate-bounce delay-1000"></div>
          <div className="absolute bottom-20 right-20 w-36 h-36 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full opacity-20 animate-pulse delay-500"></div>
        </div>

        <div className="overflow-x-auto max-w-6xl mx-auto px-6">
          {errorInfo}
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Cari produk..."
            className="mt-10 mb-4 p-3 w-full bg-white rounded-2xl shadow-lg"
          />
          <table className="min-w-full divide-y divide-gray-200 overflow-hidden rounded-2xl shadow-lg">
            <thead>
              <tr className="bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 text-white text-left text-sm font-semibold">
                <th className="px-4 py-3">No</th>
                <th className="px-4 py-3">Nama</th>
                <th className="px-4 py-3">Harga</th>
                <th className="px-4 py-3">Stok</th>
                <th className="px-4 py-3"></th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-100 text-sm text-gray-800">
              {products.map((product, index) => (
                <tr
                  key={product.id}
                  className="hover:bg-gray-50 transition-colors duration-200"
                >
                  <td className="px-6 py-4 font-medium text-gray-700">
                    {index + 1}.
                  </td>
                  <td className="px-6 py-4">
                    <Link to={`/admin/${product.id}`}>
                      {product.nama_produk}
                    </Link>
                  </td>
                  <td className="px-6 py-4">Rp {product.harga}</td>
                  <td className="px-6 py-4">{product.stok}</td>
                  <td className="px-6 py-4">
                    <div className="truncate text-gray-600 flex items-center gap-x-2">
                      <button
                        onClick={() => handleEdit(note)}
                      >
                        <BiEdit className="text-purple-400 text-2xl hover:text-purple-700 transition-colors" />
                      </button>
                      <button
                        onClick={() => handleDelete(note.id)}
                      >
                        <AiOutlineDelete className="text-purple-400 text-2xl hover:text-purple-700 transition-colors" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </section>

    </div>
  );
}
