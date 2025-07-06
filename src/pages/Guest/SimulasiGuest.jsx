import { useState, useEffect } from "react";
import products from "../../data/products.json";

export default function SimulasiGuest() {
  const [formData, setFormData] = useState({
    jenis_mobil: "",
    durasi: "",
  });
  const [totalHarga, setTotalHarga] = useState(0);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
    setShowResult(false);
  };

  const validateForm = () => {
    let tempErrors = {};

    if (!formData.jenis_mobil) {
      tempErrors.jenis_mobil = "Silakan pilih jenis mobil terlebih dahulu";
    }

    if (!formData.durasi) {
      tempErrors.durasi = "Durasi sewa wajib diisi";
    } else if (isNaN(formData.durasi) || parseInt(formData.durasi) <= 0) {
      tempErrors.durasi = "Durasi harus berupa angka positif";
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const calculateTotal = () => {
    if (validateForm()) {
      const product = products.products.find(
        (p) => p.nama_produk === formData.jenis_mobil
      );
      if (product) {
        const harga = product.harga * parseInt(formData.durasi);
        setSelectedProduct(product);
        setTotalHarga(harga);
        setShowResult(true);
      }
    }
  };

  const resetForm = () => {
    setFormData({ jenis_mobil: "", durasi: "" });
    setTotalHarga(0);
    setSelectedProduct(null);
    setShowResult(false);
    setErrors({});
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 py-12 px-4">
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 right-20 w-40 h-40 bg-blue-200 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-32 h-32 bg-indigo-200 rounded-full opacity-30 animate-bounce"></div>
        <div className="absolute top-1/3 left-10 w-20 h-20 bg-purple-200 rounded-full opacity-25"></div>
        <div className="absolute bottom-1/3 right-10 w-24 h-24 bg-cyan-200 rounded-full opacity-20"></div>
      </div>
      <br />
      <br /> <br />
      <div className="text-center mb-5">
        <div className="inline-block mb-4">
          <span className="px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-medium">
            Estimasi
          </span>
        </div>
        <h2 className="text-4xl md:text-5xl font-semibold text-gray-800 mb-6">
          Kalkulator Sewa Mobil{" "}
          <span className="text-blue-500 ml-2">Terkini</span>
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-indigo-400 mx-auto mb-8 rounded-full"></div>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Hitung estimasi biaya sewa kendaraan Anda
        </p>
      </div>
      <div className="max-w-md mx-auto relative z-10">

        <div className="bg-white rounded-3xl shadow-2xl border border-blue-100 overflow-hidden">
          <div className="bg-gradient-to-r from-blue-500 to-indigo-600 px-6 py-4">
            <h2 className="text-xl font-semibold text-white">Simulasi Harga</h2>
          </div>
          <div className="p-6 space-y-6">
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Pilih Jenis Mobil
              </label>
              <select
                name="jenis_mobil"
                value={formData.jenis_mobil}
                onChange={handleChange}
                className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 transition-all duration-300 ${
                  errors.jenis_mobil
                    ? "border-red-300 focus:ring-red-500"
                    : "border-gray-300 focus:ring-blue-500"
                }`}
              >
                <option value="">-- Pilih Kendaraan --</option>
                {products.products.map((product) => (
                  <option key={product.kode_produk} value={product.nama_produk}>
                    {product.nama_produk} - Rp {product.harga.toLocaleString()}
                    /hari
                  </option>
                ))}
              </select>
              {errors.jenis_mobil && (
                <p className="text-red-500 text-sm flex items-center gap-1">
                  <span>⚠️</span>
                  {errors.jenis_mobil}
                </p>
              )}
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Durasi Sewa (Hari)
              </label>
              <input
                type="number"
                name="durasi"
                value={formData.durasi}
                onChange={handleChange}
                min="1"
                max="365"
                placeholder="Masukkan jumlah hari..."
                className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 transition-all duration-300 ${
                  errors.durasi
                    ? "border-red-300 focus:ring-red-500"
                    : "border-gray-300 focus:ring-blue-500"
                }`}
              />
              {errors.durasi && (
                <p className="text-red-500 text-sm flex items-center gap-1">
                  <span>⚠️</span>
                  {errors.durasi}
                </p>
              )}
            </div>

            {/* Total Harga Display - Hanya tampil setelah hitung */}
            {showResult && (
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-4 border border-blue-200 transform transition-all duration-500 scale-100">
                <div className="text-center">
                  <p className="text-sm text-gray-600 mb-1">Total Biaya Sewa</p>
                  <p className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                    Rp {totalHarga.toLocaleString()}
                  </p>
                  {selectedProduct && formData.durasi && (
                    <p className="text-xs text-gray-500 mt-2">
                      {formData.durasi} hari × Rp{" "}
                      {selectedProduct.harga.toLocaleString()}/hari
                    </p>
                  )}
                </div>
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex gap-3 pt-2">
              <button
                type="button"
                onClick={resetForm}
                className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium py-3 px-4 rounded-xl transition-all duration-300 transform hover:scale-105"
              >
                Reset
              </button>
              <button
                type="button"
                onClick={calculateTotal}
                className="flex-1 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-medium py-3 px-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Hitung Total
              </button>
            </div>
          </div>
        </div>

        {/* Footer Info */}
        <div className="text-center mt-6 text-sm text-gray-500">
          <p>
            💡 Tip: Isi data kendaraan dan durasi, lalu klik "Hitung Total"
            untuk melihat estimasi biaya
          </p>
        </div>
      </div>
    </div>
  );
}
