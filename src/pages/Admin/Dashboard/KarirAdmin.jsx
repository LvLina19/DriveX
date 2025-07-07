import { AiFillFileAdd, AiOutlineDelete } from "react-icons/ai";
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
// import careers from "../../../data/careers.json";
import { FaEdit } from "react-icons/fa";
import { karirAPI } from "../../../services/karirAPI";
import { useState, useEffect, useMemo } from "react";

export default function KarirAdmin() {
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState("")
  const [karirs, setKarirs] = useState([]); // data produk dari JSON
  const [query, setQuery] = useState("");
  const [error, setError] = useState("");

  const [selectedCategory, setSelectedCategory] = useState("Semua");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  // Tambahkan ke dalam komponen di bagian atas sebelum return
  const [dataForm, setDataForm] = useState({
    judul: "", gambar: "", lokasi: "", tanggal_tutup: "", deskripsi: ""
  })
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  // Filter artikel berdasarkan kategori
  const filteredArticles = useMemo(() => {
    return selectedCategory === "Semua"
      ? karirs
      : karirs.filter((article) => article.kategori === selectedCategory);
  }, [selectedCategory, karirs]);

  // Pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentArticles = filteredArticles.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredArticles.length / itemsPerPage);

  // Handler untuk mengubah kategori
  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
    setCurrentPage(1); // Reset ke halaman 1 saat kategori berubah
  };

  // Handler untuk mengubah halaman
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const [editData, setEditData] = useState([]);

  const loadKarirs = async () => {
    try {
      const data = await karirAPI.fetchKarirs();
      setKarirs(data);
    } catch (err) {
      setError("Gagal memuat produk");
      console.error(err);
    }
  };

  // Fungsi Edit produk (contoh: tampilkan data ke form/modal, disesuaikan kebutuhanmu)
  const handleEdit = (karir) => {
    setDataForm({
      id: karir.id,
      judul: karir.judul,
      gambar: karir.gambar,
      lokasi: karir.lokasi,
      tanggal_tutup: karir.tanggal_tutup,
      deskripsi: karir.deskripsi
    })
    setEditData(karir);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setEditData({});
  };

  const handleAddProduct = async (e) => {
    e.preventDefault()

    try {
      setLoading(true)
      setError("")
      setSuccess("")

      await karirAPI.createKarir(dataForm)

      setSuccess("Artikel berhasil ditambahkan!")

      // Kosongkan Form setelah Success
      setDataForm({ judul: "", gambar: "", lokasi: "", tanggal_tutup: "", deskripsi: "" })

      // Hilangkan pesan Success setelah 3 detik
      setTimeout(() => setSuccess(""), 3000)

      //Panggil Ulang loadNotes untuk refresh data
      loadKarirs()

    } catch (err) {
      setError(`Terjadi kesalahan: ${err.message}`);
    } finally {
      setLoading(false)
    }
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

      await karirAPI.updateKarir(dataForm.id, {
        judul: dataForm.judul,
        gambar: dataForm.gambar,
        lokasi: dataForm.lokasi,
        tanggal_tutup: dataForm.tanggal_tutup,
        deskripsi: dataForm.deskripsi
      })

      setSuccess("Artikel berhasil diperbarui!")

      // Reset form
      setIsModalOpen(false);
      setDataForm({ judul: "", gambar: "", lokasi: "", tanggal_tutup: "", deskripsi: "" })

      setTimeout(() => setSuccess(""), 3000)

      // Refresh data
      loadKarirs()
    } catch (err) {
      setError(`Terjadi kesalahan: ${err.message}`)
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

  // Fungsi Hapus produk
  const handleDelete = async (id) => {
    const konfirmasi = confirm("Yakin ingin menghapus catatan ini?")
    if (!konfirmasi) return

    try {
      setLoading(true)
      setError("")
      setSuccess("")

      await karirAPI.deleteKarir(id)

      // Refresh data
      loadKarirs()
    } catch (err) {
      setError(`Terjadi kesalahan: ${err.message}`)
    } finally {
      setLoading(false)
    }
  };


  // Load data saat pertama di-render
  useEffect(() => {
    loadKarirs()
  }, [])
  return (
    <section className="relative py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 overflow-hidden">
      <br /><br />

      <div className="container mx-auto px-6 relative z-10 max-w-screen-xl">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-medium">Karir</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-RethinkSans-SemiBold text-gray-800 mb-6">Bergabung <span className="text-blue-500 ml-2">dengan Kami </span>
            <button onClick={() => setIsAddModalOpen(true)}
              className="bg-transparent border-2 border-blue-500 text-blue-500 text-sm font-RethinkSans-SemiBold px-6 py-4 rounded-2xl inset-0 bg-gradient-to-r hover:from-blue-600 hover:to-indigo-500 hover:text-white transition duration-300">
              <div className="relative flex items-center gap-2">
                <AiFillFileAdd className="text-xl" />
              </div>
            </button></h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-indigo-400 mx-auto mb-8 rounded-full"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Temukan peluang karier di Drive-X dan jadi bagian dari tim kami yang inovatif dan dinamis.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {karirs.map((career) => (
            <div key={career.id} className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-blue-100">
              <Link
                to={`/karir/${career.id}`} // Rute untuk detail lowongan (opsional)
                className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-blue-100"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={career.gambar}
                    alt={career.judul}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-RethinkSans-SemiBold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                    {career.judul}
                  </h3>
                </div>
                <p className="text-gray-600 text-sm mb-2 px-6">{career.lokasi}</p>
                <p className="text-gray-500 text-xs mb-4 px-6">
                  Ditutup: {new Date(career.tanggal_tutup).toLocaleDateString("id-ID")}
                </p>
                <p className="text-gray-600 text-sm mb-4">{career.deskripsi_singkat}</p>
              </Link>
              <div className="flex flex-auto gap-4">
                <button className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-RethinkSans-SemiBold py-2 px-4 rounded-2xl transition-all duration-300 transform group-hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2">
                  <span>Lamar Sekarang</span>
                  <FiArrowRight className="text-lg transform group-hover:translate-x-1 transition-transform duration-300" />
                </button>
                <button onClick={() => handleEdit(career)}
                  className="bg-transparent border-2 border-blue-500 text-blue-500 text-sm font-RethinkSans-SemiBold px-4 py-4 rounded-2xl inset-0 bg-gradient-to-r hover:from-blue-600 hover:to-indigo-500 hover:text-white transition duration-300">
                  <div className="relative flex items-center gap-2">
                    <AiFillFileAdd className="text-xl" />
                  </div>
                </button>
                <button onClick={() => handleDelete(career.id)}
                  className="bg-transparent border-2 border-blue-500 text-blue-500 text-sm font-RethinkSans-SemiBold px-4 py-4 rounded-2xl inset-0 bg-gradient-to-r hover:from-blue-600 hover:to-indigo-500 hover:text-white transition duration-300">
                  <div className="relative flex items-center gap-2">
                    <AiOutlineDelete className="text-xl" />
                  </div>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Modal untuk Tambah Produk (di dalam return, di bawah modal edit) */}
      {isAddModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50">
          <div className="bg-white w-full max-w-md p-6 rounded-xl shadow-xl relative">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Tambah Pekerjaan
            </h3>
            <form onSubmit={handleAddProduct} className="space-y-4">
              <input
                type="text"
                name="judul"
                value={dataForm.judul}
                onChange={handleChange}
                className="w-full p-3 bg-gray-100 rounded-xl border border-gray-200"
                placeholder="Judul Pekerjaan"
                required
              />
              <input
                type="text"
                name="gambar"
                value={dataForm.gambar}
                onChange={handleChange}
                className="w-full p-3 bg-gray-100 rounded-xl border border-gray-200"
                placeholder="Foto Url Artikel"
                required
              />
              <input
                type="text"
                name="lokasi"
                value={dataForm.lokasi}
                onChange={handleChange}
                className="w-full p-3 bg-gray-100 rounded-xl border border-gray-200"
                placeholder="Lokasi Pekerjaan"
                required
              />
              <input
                type="date"
                name="tanggal_tutup"
                value={dataForm.tanggal_tutup}
                onChange={handleChange}
                className="w-full p-3 bg-gray-100 rounded-xl border border-gray-200"
                placeholder="Deadline Penutupan"
                required
              />
              <input
                type="text"
                name="deskripsi"
                value={dataForm.deskripsi}
                onChange={handleChange}
                className="w-full p-3 bg-gray-100 rounded-xl border border-gray-200"
                placeholder="Deskripsi Singkat"
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
      )
      }

      {/* Modal Edit */}
      {
        isModalOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50">
            <div className="bg-white w-full max-w-md p-6 rounded-xl shadow-xl relative">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Edit Produk
              </h3>
              <form onSubmit={handleUpdate} className="space-y-4">
                <input
                  type="text"
                  name="judul"
                  value={dataForm.judul}
                  onChange={handleChange}
                  className="w-full p-3 bg-gray-100 rounded-xl border border-gray-200"
                  placeholder="Judul Pekerjaan"
                  required
                />
                <input
                  type="text"
                  name="gambar"
                  value={dataForm.gambar}
                  onChange={handleChange}
                  className="w-full p-3 bg-gray-100 rounded-xl border border-gray-200"
                  placeholder="Foto Url Artikel"
                  required
                />
                <input
                  type="text"
                  name="lokasi"
                  value={dataForm.lokasi}
                  onChange={handleChange}
                  className="w-full p-3 bg-gray-100 rounded-xl border border-gray-200"
                  placeholder="Lokasi Pekerjaan"
                  required
                />
                <input
                  type="date"
                  name="tanggal_tutup"
                  value={dataForm.tanggal_tutup}
                  onChange={handleChange}
                  className="w-full p-3 bg-gray-100 rounded-xl border border-gray-200"
                  placeholder="Deadline Penutupan"
                  required
                />
                <input
                  type="text"
                  name="deskripsi"
                  value={dataForm.deskripsi}
                  onChange={handleChange}
                  className="w-full p-3 bg-gray-100 rounded-xl border border-gray-200"
                  placeholder="Deskripsi Singkat"
                  required
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
        )
      }
    </section>
  );
}