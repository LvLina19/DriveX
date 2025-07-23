import { useState } from "react";
import { Link } from "react-router-dom";
import { BiRocket } from "react-icons/bi";
import { FiArrowRight } from "react-icons/fi";
import products from "../../data/products.json";

export default function Pemesanan() {
  const [formData, setFormData] = useState({
    nama: "",
    email: "",
    tanggal: "",
    durasi: "",
    jenis_mobil: "",
  });
  const [errors, setErrors] = useState({});
  const currentDate = new Date().toISOString().split("T")[0]; // 2025-06-29

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // Reset error untuk field yang diubah
    setErrors({ ...errors, [name]: "" });
  };

  const validateForm = () => {
    let tempErrors = {};
    if (!formData.nama.trim()) tempErrors.nama = "Nama wajib diisi.";
    if (!formData.email.trim()) {
      tempErrors.email = "Email wajib diisi.";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      tempErrors.email = "Email tidak valid.";
    }
    if (!formData.tanggal) {
      tempErrors.tanggal = "Tanggal pemesanan wajib diisi.";
    } else if (new Date(formData.tanggal) < new Date(currentDate)) {
      tempErrors.tanggal = "Tanggal pemesanan tidak boleh sebelum hari ini.";
    }
    if (!formData.durasi) {
      tempErrors.durasi = "Durasi wajib diisi.";
    } else if (isNaN(formData.durasi) || formData.durasi <= 0) {
      tempErrors.durasi = "Durasi harus angka positif.";
    }
    if (!formData.jenis_mobil) tempErrors.jenis_mobil = "Jenis mobil wajib dipilih.";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert("Pemesanan berhasil! Detail: " + JSON.stringify(formData));
      // Di sini Anda bisa mengganti alert dengan pengiriman data ke API
      setFormData({ nama: "", email: "", tanggal: "", durasi: "", jenis_mobil: "" });
    }
  };

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
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Nama Lengkap</label>
              <input
                type="text"
                name="nama"
                value={formData.nama}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-blue-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
              />
              {errors.nama && <p className="text-red-500 text-sm mt-1">{errors.nama}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-blue-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Tanggal Pemesanan</label>
              <input
                type="date"
                name="tanggal"
                value={formData.tanggal}
                onChange={handleChange}
                min={currentDate}
                className="w-full px-4 py-2 border border-blue-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
              />
              {errors.tanggal && <p className="text-red-500 text-sm mt-1">{errors.tanggal}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Durasi (Hari)</label>
              <input
                type="number"
                name="durasi"
                value={formData.durasi}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-blue-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
              />
              {errors.durasi && <p className="text-red-500 text-sm mt-1">{errors.durasi}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Jenis Mobil</label>
              <select
                name="jenis_mobil"
                value={formData.jenis_mobil}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-blue-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
              >
                <option value="">Pilih Mobil</option>
                {products.products.map((product) => (
                  <option key={product.kode_produk} value={product.nama_produk}>
                    {product.nama_produk} (Rp {product.harga.toLocaleString()}/hari)
                  </option>
                ))}
              </select>
              {errors.jenis_mobil && <p className="text-red-500 text-sm mt-1">{errors.jenis_mobil}</p>}
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