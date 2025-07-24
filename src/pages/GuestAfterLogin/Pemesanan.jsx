import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BiRocket } from "react-icons/bi";
import { FiArrowRight } from "react-icons/fi";
import { pemesananAPI } from "../../services/pemesananAPI";
import { produkAPI } from "../../services/produkAPI";
import { AiOutlineDelete } from "react-icons/ai";

export default function Pemesanan() {
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState("")
  const [query, setQuery] = useState("");
  const [error, setError] = useState("");
  const [editData, setEditData] = useState({});
  const navigate = useNavigate();
  const currentDate = new Date().toISOString().split("T")[0];
  // Tambahkan ke dalam komponen di bagian atas sebelum return
  const [dataForm, setDataForm] = useState({
    nama_produk: "", username: "", tanggal: "", durasi: "", email: "", harga_produk: ""
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

      const hargaProduk = parseInt(dataForm.harga_produk) || 0;
      const durasi = parseInt(dataForm.durasi) || 0;
      const totalHarga = hargaProduk * durasi;
      // Data yang dikirim ke backend
      const newData = {
        nama_produk: dataForm.nama_produk,
        username: dataForm.username,
        tanggal: dataForm.tanggal,
        durasi: dataForm.durasi,
        email: dataForm.email,
        harga_produk: totalHarga, // ini harga total sesuai durasi
      };

      await pemesananAPI.createPemesanan(newData)
      navigate("/guest");

      setSuccess("Catatan berhasil ditambahkan!")

      // Kosongkan Form setelah Success
      setDataForm({ nama_produk: "", username: "", tanggal: "", durasi: "", email: "", harga_produk: "" })

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
    if (name === "nama_produk") {
      const selectedProduct = products.find((p) => p.nama === value);
      const hargaProduk = selectedProduct ? selectedProduct.harga : 0;
      const durasi = parseInt(dataForm.durasi) || 0;

      setDataForm((prev) => ({
        ...prev,
        nama_produk: value,
        harga_produk: hargaProduk,
        harga: hargaProduk * durasi,
      }));
    } else if (name === "durasi") {
      const durasi = parseInt(value) || 0;
      const hargaProduk = parseInt(dataForm.harga_produk) || 0;

      setDataForm((prev) => ({
        ...prev,
        durasi: value,
        harga: hargaProduk * durasi,
      }));
    } else {
      setDataForm((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
    // setDataForm({
    //   ...dataForm,
    //   [name]: value,
    // })
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
      harga_produk: pemesanan.harga_produk,
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
        harga_produk: dataForm.harga_produk,
      })

      setSuccess("Produk berhasil diperbarui!")

      // Reset form
      setIsModalOpen(false);
      setDataForm({ nama_produk: "", username: "", tanggal: "", durasi: "", email: "", harga_produk: "" });

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
    const fetchProduk = async () => {
      try {
        const data = await produkAPI.fetchProducts();
        setProducts(data);
      } catch (err) {
        console.error("Gagal ambil produk:", err.message);
      }
    };
    fetchProduk();
    loadProduct();
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
    <section className="relative py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 overflow-hidden">
      <br /><br />

      <div className="container mx-auto px-6 relative z-10 max-w-screen-xl">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-medium">Pemesanan</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-RethinkSans-SemiBold text-gray-800 mb-6">Pesan <span className="text-blue-500 ml-2">Sekarang</span></h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-indigo-400 mx-auto mb-8 rounded-full"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Isi formulir di bawah ini untuk memesan kendaraan favorit Anda dengan mudah dan cepat.
          </p>
        </div>

        <div className="max-w-lg mx-auto bg-white rounded-3xl shadow-lg p-8 border border-blue-100">
          <form onSubmit={handleAddProduct} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Nama Lengkap</label>
              <input
                type="text"
                name="username"
                value={dataForm.username}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-blue-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input
                type="email"
                name="email"
                value={dataForm.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-blue-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Tanggal Pemesanan</label>
              <input
                type="date"
                name="tanggal"
                value={dataForm.tanggal}
                onChange={handleChange}
                min={currentDate}
                className="w-full px-4 py-2 border border-blue-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Durasi (Hari)</label>
              <input
                type="number"
                name="durasi"
                value={dataForm.durasi}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-blue-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Jenis Mobil</label>
              <select
                name="nama_produk"
                value={dataForm.nama_produk}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-blue-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
              >
                <option value="">Pilih Mobil</option>
                {products.map((product) => (
                  <option key={product.nama} value={product.nama}>
                    {product.nama} (Rp {product.harga.toLocaleString()}/hari)
                  </option>
                ))}
              </select>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-RethinkSans-SemiBold py-3 px-6 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
            >
              <BiRocket className="text-xl" />
              <span>Pesan Sekarang</span>
              <FiArrowRight className="text-lg transform hover:translate-x-1 transition-transform duration-300" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}