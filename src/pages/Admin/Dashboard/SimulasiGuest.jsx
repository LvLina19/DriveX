// import { useState } from "react";
// import { Link } from "react-router-dom";
// import { BiRocket } from "react-icons/bi";
// import { FiArrowRight } from "react-icons/fi";
// import products from "../../data/products.json";

// export default function SimulasiGuest() {
//   const [formData, setFormData] = useState({
//     jenis_mobil: "",
//     durasi: "",
//     asuransi: false,
//   });
//   const [totalHarga, setTotalHarga] = useState(0);
//   const [errors, setErrors] = useState({});
//   const currentDate = new Date().toISOString().split("T")[0]; // 2025-06-29

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setFormData({
//       ...formData,
//       [name]: type === "checkbox" ? checked : value,
//     });
//     // Reset error untuk field yang diubah
//     setErrors({ ...errors, [name]: "" });
//     calculateTotal();
//   };

//   const validateForm = () => {
//     let tempErrors = {};
//     if (!formData.jenis_mobil) tempErrors.jenis_mobil = "Jenis mobil wajib dipilih.";
//     if (!formData.durasi) {
//       tempErrors.durasi = "Durasi wajib diisi.";
//     } else if (isNaN(formData.durasi) || formData.durasi <= 0) {
//       tempErrors.durasi = "Durasi harus angka positif.";
//     }
//     setErrors(tempErrors);
//     return Object.keys(tempErrors).length === 0;
//   };

//   const calculateTotal = () => {
//     let harga = 0;
//     const selectedProduct = products.products.find(
//       (p) => p.nama_produk === formData.jenis_mobil
//     );
//     if (selectedProduct && formData.durasi) {
//       harga = selectedProduct.harga * parseInt(formData.durasi);
//       if (formData.asuransi) {
//         harga += 100000; // Biaya asuransi tetap Rp 100.000
//       }
//     }
//     setTotalHarga(harga);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (validateForm()) {
//       alert(`Simulasi Harga Berhasil! Total: Rp ${totalHarga.toLocaleString()}`);
//       // Opsional: Simpan ke Local Storage atau kirim ke API
//     }
//   };

//   return (
//     <section className="relative py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 overflow-hidden">
//       <div className="absolute inset-0 pointer-events-none">
//         <div className="absolute top-16 right-12 w-32 h-32 bg-blue-200 rounded-full opacity-20 animate-pulse"></div>
//         <div className="absolute bottom-16 left-12 w-24 h-24 bg-indigo-200 rounded-full opacity-30 animate-bounce"></div>
//         <div className="absolute top-1/3 left-8 w-16 h-16 bg-purple-200 rounded-full opacity-25"></div>
//       </div>

//       <div className="container mx-auto px-6 relative z-10 max-w-screen-xl">
//         <div className="text-center mb-16">
//           <div className="inline-block mb-4">
//             <span className="px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-medium">Simulasi</span>
//           </div>
//           <h2 className="text-4xl md:text-5xl font-RethinkSans-SemiBold text-gray-800 mb-6">Simulasi <span className="text-blue-500 ml-2">Harga</span></h2>
//           <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-indigo-400 mx-auto mb-8 rounded-full"></div>
//           <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
//             Hitung estimasi biaya sewa kendaraan Anda dengan mudah dan cepat.
//           </p>
//         </div>

//         <div className="max-w-lg mx-auto bg-white rounded-3xl shadow-lg p-8 border border-blue-100">
//           <form onSubmit={handleSubmit} className="space-y-6">
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">Jenis Mobil</label>
//               <select
//                 name="jenis_mobil"
//                 value={formData.jenis_mobil}
//                 onChange={handleChange}
//                 className="w-full px-4 py-2 border border-blue-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
//               >
//                 <option value="">Pilih Mobil</option>
//                 {products.products.map((product) => (
//                   <option key={product.kode_produk} value={product.nama_produk}>
//                     {product.nama_produk} (Rp {product.harga.toLocaleString()}/hari)
//                   </option>
//                 ))}
//               </select>
//               {errors.jenis_mobil && <p className="text-red-500 text-sm mt-1">{errors.jenis_mobil}</p>}
//             </div>

//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">Durasi Sewa (Hari)</label>
//               <input
//                 type="number"
//                 name="durasi"
//                 value={formData.durasi}
//                 onChange={handleChange}
//                 className="w-full px-4 py-2 border border-blue-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
//               />
//               {errors.durasi && <p className="text-red-500 text-sm mt-1">{errors.durasi}</p>}
//             </div>

//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">
//                 <input
//                   type="checkbox"
//                   name="asuransi"
//                   checked={formData.asuransi}
//                   onChange={handleChange}
//                   className="mr-2 accent-blue-500"
//                 />
//                 Tambah Asuransi (Rp 100.000)
//               </label>
//             </div>

//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">Total Harga</label>
//               <p className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent">
//                 Rp {totalHarga.toLocaleString()}
//               </p>
//             </div>

//             <button
//               type="submit"
//               className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-RethinkSans-SemiBold py-3 px-6 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
//             >
//               <BiRocket className="text-xl" />
//               <span>Hitung Sekarang</span>
//               <FiArrowRight className="text-lg transform hover:translate-x-1 transition-transform duration-300" />
//             </button>
//           </form>
//         </div>
//       </div>
//     </section>
//   );
// }