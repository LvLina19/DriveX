import { CgAdd } from "react-icons/cg";
import { AiOutlineDelete } from "react-icons/ai";
import React, { useState, useEffect } from "react";
import { BiEdit } from "react-icons/bi";
import { Link, NavLink } from "react-router-dom";
import { produkAPI } from "../../../services/produkAPI";
import { pemesananAPI } from "../../../services/pemesananAPI";

export default function pesan() {
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState("")
  const [query, setQuery] = useState("");
  const [error, setError] = useState("");
  const [editData, setEditData] = useState({});
  const currentDate = new Date().toISOString().split("T")[0];
  // Tambahkan ke dalam komponen di bagian atas sebelum return
  const [dataForm, setDataForm] = useState({
    nama_produk: "", username: "", tanggal: "", durasi: "", email: ""
  })
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  const [pemesanan, setPemesanans] = useState([]);
  const [products, setProducts] = useState([]);

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const filteredPemesanans = pemesanan.filter((pemesanan) =>
    (pemesanan?.nama_produk || "").toLowerCase().includes(query.toLowerCase())
  );

  const handleAddProduct = async (e) => {
    e.preventDefault()

    try {
      setLoading(true)
      setError("")
      setSuccess("")

      await pemesananAPI.createPemesanan(dataForm)

      setSuccess("Catatan berhasil ditambahkan!")

      // Kosongkan Form setelah Success
      setDataForm({ nama_produk: "", username: "", tanggal: "", durasi: "", email: "" })

      // Hilangkan pesan Success setelah 3 detik
      setTimeout(() => setSuccess(""), 3000)

      //Panggil Ulang loadNotes untuk refresh data
      loadProduct()

    } catch (err) {
      setError(`Terjadi kesalahan: ${err.message}`);
    } finally {
      setLoading(false)
    }
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
  const handleEdit = (pemesanan) => {
    setDataForm({
      id: pemesanan.id,
      nama_produk: pemesanan.nama_produk,
      username: pemesanan.username,
      tanggal: pemesanan.tanggal,
      durasi: pemesanan.durasi,
      email: pemesanan.email,
    })
    setEditData(pemesanan);
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

      await pemesananAPI.updatePemesanan(dataForm.id, {
        nama_produk: dataForm.nama_produk,
        username: dataForm.username,
        tanggal: dataForm.tanggal,
        durasi: dataForm.durasi,
        email: dataForm.email,
      })

      setSuccess("Produk berhasil diperbarui!")

      // Reset form
      setIsModalOpen(false);
      setDataForm({ nama_produk: "", username: "", tanggal: "", durasi: "", email: "" })

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

      await pemesananAPI.deletePemesanan(id)

      // Refresh data
      loadProduct()
    } catch (err) {
      setError(`Terjadi kesalahan: ${err.message}`)
    } finally {
      setLoading(false)
    }
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
      const data = await pemesananAPI.fetchPemesanans()
      setPemesanans(data)
    } catch (err) {
      setError("Gagal memuat catatan")
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentPemesanans = filteredPemesanans.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredPemesanans.length / itemsPerPage);


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
          </div>

          <table className="min-w-full divide-y divide-gray-200 overflow-hidden rounded-2xl shadow-lg">
            <thead>
              <tr className="bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 text-white text-left text-sm font-semibold">
                <th className="px-4 py-3">No</th>
                <th className="px-4 py-3">Username</th>
                <th className="px-4 py-3">Email</th>
                <th className="px-4 py-3">Tanggal</th>
                <th className="px-4 py-3">Durasi</th>
                <th className="px-4 py-3">Jenis Kendaraan</th>
                <th className="px-4 py-3"></th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-100 text-sm text-gray-800">
              {currentPemesanans.map((pemesanans, index) => (
                <tr
                  key={pemesanans.id}
                  className="hover:bg-gray-50 transition-colors duration-200"
                >
                  <td className="px-6 py-4 font-medium text-gray-700">
                    {index + 1}.
                  </td>
                  <td className="px-6 py-4">
                    <Link to={`/admin/${pemesanans.id}`}>
                      {pemesanans.username}
                    </Link>
                  </td>
                  <td className="px-6 py-4">{pemesanans.email}</td>
                  <td className="px-6 py-4">{pemesanans.tanggal}</td>
                  <td className="px-6 py-4">{pemesanans.durasi}</td>
                  <td className="px-6 py-4">{pemesanans.nama_produk}</td>
                  <td className="px-6 py-4">
                    <div className="truncate text-gray-600 flex items-center gap-x-2">
                      <button
                        onClick={() => handleDelete(pemesanans.id)}
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
    </div>
  );
}
