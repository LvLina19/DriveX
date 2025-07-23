import { CgAdd } from "react-icons/cg";
import { AiOutlineDelete } from "react-icons/ai";
import React, { useState, useEffect } from "react";
import { BiEdit } from "react-icons/bi";
import { Link, NavLink } from "react-router-dom";
import { produkAPI } from "../../../services/produkAPI";

export default function admin() {
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState("")
  const [query, setQuery] = useState("");
  const [error, setError] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editData, setEditData] = useState({});
  // Tambahkan ke dalam komponen di bagian atas sebelum return
  const [dataForm, setDataForm] = useState({
    nama: "", detail: "", stok: "", harga: "", gambar: ""
  })
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  const [products, setProducts] = useState([])

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const filteredProducts = products.filter((product) =>
    product.nama.toLowerCase().includes(query.toLowerCase())
  );

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  const handleAddProduct = async (e) => {
    e.preventDefault()

    try {
      setLoading(true)
      setError("")
      setSuccess("")

      await produkAPI.createProduct(dataForm)

      setSuccess("Catatan berhasil ditambahkan!")

      // Kosongkan Form setelah Success
      setDataForm({ nama: "", detail: "", stok: "", harga: "", gambar: "" })

      // Hilangkan pesan Success setelah 3 detik
      setTimeout(() => setSuccess(""), 3000)

      //Panggil Ulang loadNotes untuk refresh data
      loadProduct()

    } catch (err) {
      setError(`Terjadi kesalahan: ${err.message}`);
    } finally {
      setLoading(false)
    }
    // e.preventDefault();
    // const idBaru = Date.now(); // Atau logika lain untuk ID unik
    // const produkBaru = { ...newProduct, id: idBaru };
    // setProducts([...products, produkBaru]);
    // setNewProduct({ nama_produk: "", harga: "", stok: "" });
    // setIsAddModalOpen(false);
  };

  // Handle perubahan nilai input form
  const handleChange = (evt) => {
    const { name, value } = evt.target
    setDataForm({
      ...dataForm,
      [name]: value,
    })
  }

  // Fungsi Edit produk (contoh: tampilkan data ke form/modal, disesuaikan kebutuhanmu)
  const handleEdit = (product) => {
    setDataForm({
      id: product.id,          // tambahkan id agar tahu mana yang diupdate
      nama: product.nama,
      detail: product.detail,
      stok: product.stok,
      harga: product.harga,
      gambar: product.gambar
    })
    setEditData(product);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setEditData({});
  };

  const handleUpdate = async (e) => {
    e.preventDefault()

    if (!dataForm.id) {
      setError("ID tidak ditemukan. Tidak bisa update.")
      return
    }

    try {
      setLoading(true)
      setError("")
      setSuccess("")

      await produkAPI.updateProduct(dataForm.id, {
        nama: dataForm.nama,
        detail: dataForm.detail,
        stok: dataForm.stok,
        harga: dataForm.harga,
        gambar: dataForm.gambar,
      })

      setSuccess("Produk berhasil diperbarui!")

      // Reset form
      setIsModalOpen(false);
      setDataForm({ nama: "", detail: "", stok: "", harga: "", gambar: "" })

      setTimeout(() => setSuccess(""), 3000)

      // Refresh data
      loadProduct()
    } catch (err) {
      setError(`Terjadi kesalahan: ${err.message}`)
    } finally {
      setLoading(false)
    }
  };

  // Fungsi Hapus produk
  const handleDelete = async (id) => {
    const konfirmasi = confirm("Yakin ingin menghapus catatan ini?")
    if (!konfirmasi) return

    try {
      setLoading(true)
      setError("")
      setSuccess("")

      await produkAPI.deleteProduct(id)

      // Refresh data
      loadProduct()
    } catch (err) {
      setError(`Terjadi kesalahan: ${err.message}`)
    } finally {
      setLoading(false)
    }

    // const konfirmasi = confirm("Yakin ingin menghapus produk ini?");
    // if (!konfirmasi) return;

    // const updatedProducts = products.filter((p) => p.id !== id);
    // setProducts(updatedProducts);
  };

  // Load data saat pertama di-render
  useEffect(() => {
    loadProduct()
  }, [])

  // Memanggil fetchNotes beserta error/loading handling
  const loadProduct = async () => {
    try {
      setLoading(true)
      setError("")
      const data = await produkAPI.fetchProducts()
      setProducts(data)
    } catch (err) {
      setError("Gagal memuat catatan")
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="guest-page">
      <section id="" className="relative py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-blue-200 to-indigo-200 rounded-full opacity-30 animate-bounce"></div>
          <div className="absolute top-40 right-32 w-24 h-24 bg-gradient-to-br from-purple-200 to-blue-200 rounded-full opacity-40 animate-pulse"></div>
          <div className="absolute bottom-32 left-32 w-28 h-28 bg-gradient-to-br from-indigo-200 to-purple-200 rounded-full opacity-25 animate-bounce delay-1000"></div>
          <div className="absolute bottom-20 right-20 w-36 h-36 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full opacity-20 animate-pulse delay-500"></div>
        </div>

        <div className="overflow-x-auto max-w-6xl mx-auto px-6">
          <div className="flex ite gap-4 mt-10 mb-4">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Cari produk..."
              className="flex-grow p-3 w-full bg-white rounded-2xl shadow-lg"
            />
            <button onClick={() => setIsAddModalOpen(true)}
              className="bg-transparent border-2 border-blue-500 text-blue-500 text-sm font-RethinkSans-SemiBold px-8 py-3 rounded-2xl inset-0 bg-gradient-to-r hover:from-blue-600 hover:to-indigo-500 hover:text-white transition duration-300">
              <div className="relative flex items-center gap-2">
                <CgAdd className="text-xl" />
              </div>
            </button>
          </div>

          <table className="min-w-full divide-y divide-gray-200 overflow-hidden rounded-2xl shadow-lg">
            <thead>
              <tr className="bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 text-white text-left text-sm font-semibold">
                <th className="px-4 py-3">No</th>
                <th className="px-4 py-3">Nama</th>
                <th className="px-4 py-3">Detail</th>
                <th className="px-4 py-3">Harga</th>
                <th className="px-4 py-3">Stok</th>
                <th className="px-4 py-3"></th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-100 text-sm text-gray-800">
              {currentProducts.map((product, index) => (
                <tr
                  key={product.id}
                  className="hover:bg-gray-50 transition-colors duration-200"
                >
                  <td className="px-6 py-4 font-medium text-gray-700">
                    {index + 1}.
                  </td>
                  <td className="px-6 py-4">
                    <Link to={`/admin/${product.id}`}>
                      {product.nama}
                    </Link>
                  </td>
                  <td className="px-6 py-4">{product.detail}</td>
                  <td className="px-6 py-4">Rp {product.harga}</td>
                  <td className="px-6 py-4">{product.stok}</td>
                  <td className="px-6 py-4">
                    <div className="truncate text-gray-600 flex items-center gap-x-2">
                      <button
                        onClick={() => handleEdit(product)}
                      >
                        <BiEdit className="text-purple-400 text-2xl hover:text-purple-700 transition-colors" />
                      </button>
                      <button
                        onClick={() => handleDelete(product.id)}
                      >
                        <AiOutlineDelete className="text-purple-400 text-2xl hover:text-purple-700 transition-colors" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="mt-6 flex justify-center items-center gap-2">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="px-3 py-1 text-sm bg-white rounded hover:bg-gray-300 disabled:opacity-50"
            >
              Prev
            </button>

            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i + 1)}
                className={`px-3 py-1 text-sm rounded ${currentPage === i + 1
                  ? "bg-purple-600 text-white"
                  : "bg-gray-100 hover:bg-gray-200"
                  }`}
              >
                {i + 1}
              </button>
            ))}

            <button
              onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="px-3 py-1 text-sm bg-white rounded hover:bg-gray-300 disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </div>
      </section>

      {/* Modal untuk Tambah Produk (di dalam return, di bawah modal edit) */}
      {isAddModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50">
          <div className="bg-white w-full max-w-md p-6 rounded-xl shadow-xl relative">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Tambah Produk
            </h3>
            <form onSubmit={handleAddProduct} className="space-y-4">
              <input
                type="text"
                name="nama"
                value={dataForm.nama}
                onChange={handleChange}
                className="w-full p-3 bg-gray-100 rounded-xl border border-gray-200"
                placeholder="Nama Produk"
                required
              />
              <input
                type="number"
                name="harga"
                value={dataForm.harga}
                onChange={handleChange}
                className="w-full p-3 bg-gray-100 rounded-xl border border-gray-200"
                placeholder="Harga Produk"
                required
              />
              <input
                type="number"
                name="stok"
                value={dataForm.stok}
                onChange={handleChange}
                className="w-full p-3 bg-gray-100 rounded-xl border border-gray-200"
                placeholder="Stok Produk"
                required
              />
              <input
                type="text"
                name="detail"
                value={dataForm.detail}
                onChange={handleChange}
                className="w-full p-3 bg-gray-100 rounded-xl border border-gray-200"
                placeholder="Detail Produk"
                required
              />
              <input
                type="text"
                name="gambar"
                value={dataForm.gambar}
                onChange={handleChange}
                className="w-full p-3 bg-gray-100 rounded-xl border border-gray-200"
                placeholder="Gambar Produk"
                required
              />
              <div className="flex justify-end gap-2 pt-4">
                <button
                  type="button"
                  onClick={() => setIsAddModalOpen(false)}
                  className="border-2 border-blue-500 text-blue-700 text-sm font-RethinkSans-SemiBold px-8 py-3 rounded-2xl inset-0 bg-gradient-to-r hover:bg-blue-400 hover:text-white transition duration-300"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="border-2 border-blue-400 text-white from-blue-400 to-purple-400  text-sm font-RethinkSans-SemiBold px-8 py-3 rounded-2xl inset-0 bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 transition duration-300"
                >
                  Tambah
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Modal Edit */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50">
          <div className="bg-white w-full max-w-md p-6 rounded-xl shadow-xl relative">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Edit Produk
            </h3>
            <form onSubmit={handleUpdate} className="space-y-4">
              <input
                type="text"
                name="nama"
                value={dataForm.nama}
                onChange={handleChange}
                className="w-full p-3 bg-gray-100 rounded-xl border border-gray-200"
                placeholder="Nama Produk"
                required
              />
              <input
                type="number"
                name="harga"
                value={dataForm.harga}
                onChange={handleChange}
                className="w-full p-3 bg-gray-100 rounded-xl border border-gray-200"
                placeholder="Harga"
                required
              />
              <input
                type="number"
                name="stok"
                value={dataForm.stok}
                onChange={handleChange}
                className="w-full p-3 bg-gray-100 rounded-xl border border-gray-200"
                placeholder="Stok"
                required
              />
              <input
                type="text"
                name="detail"
                value={dataForm.detail}
                onChange={handleChange}
                className="w-full p-3 bg-gray-100 rounded-xl border border-gray-200"
                placeholder="Detail Produk"
              />
              <input
                type="text"
                name="gambar"
                value={dataForm.gambar}
                onChange={handleChange}
                className="w-full p-3 bg-gray-100 rounded-xl border border-gray-200"
                placeholder="URL Gambar"
              />
              <div className="flex justify-end gap-2 pt-4">
                <button
                  type="button"
                  onClick={handleCloseModal}
                  className="border-2 border-blue-500 text-blue-700 text-sm font-RethinkSans-SemiBold px-8 py-3 rounded-2xl inset-0 bg-gradient-to-r hover:bg-blue-400 hover:text-white transition duration-300"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="border-2 border-blue-400 text-white from-blue-400 to-purple-400  text-sm font-RethinkSans-SemiBold px-8 py-3 rounded-2xl inset-0 bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 transition duration-300"
                >
                  Update
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
