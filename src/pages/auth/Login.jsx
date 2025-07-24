import { ImSpinner2 } from "react-icons/im";
import { BsFillExclamationDiamondFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { BsFillPersonPlusFill } from "react-icons/bs";
import { FiUser, FiLock, FiEye, FiEyeOff, FiShield } from "react-icons/fi";
import { loginAPI } from "../../services/loginApi";

export default function Login() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [focusedField, setFocusedField] = useState("");
  const [dataForm, setDataForm] = useState({
    username: "",
    password: "",
  });

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setDataForm({
      ...dataForm,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setError("");

    try {
      const user = await loginAPI.findUserByEmailAndPassword(
        dataForm.username,
        dataForm.password
      );

      if (!user) {
        setError("Username atau password salah");
        return;
      } else {
        if (user.role === "Admin") {
          navigate("/admin");
        } else if (user.role === "Guest") {
          navigate("/guest");
        } else {
          navigate("/");
        }
      }
    } catch (err) {
      console.error("Login error:", err);
      setError("Gagal login. Silakan coba lagi.");
    } finally {
      setLoading(false);
    }
  };

  const errorInfo = error ? (
    <div className="relative overflow-hidden bg-gradient-to-r from-red-50 to-pink-50 border border-red-200 mb-6 p-4 rounded-2xl animate-shake">
      <div className="absolute inset-0 bg-gradient-to-r from-red-100/20 to-pink-100/20 animate-pulse"></div>
      <div className="relative flex items-center">
        <div className="flex-shrink-0 w-10 h-10 bg-red-100 rounded-full flex items-center justify-center mr-4">
          <BsFillExclamationDiamondFill className="text-red-500 text-lg animate-bounce" />
        </div>
        <div>
          <p className="text-red-800 text-sm font-semibold">Oops! Terjadi kesalahan</p>
          <p className="text-red-600 text-xs mt-1">{error}</p>
        </div>
      </div>
    </div>
  ) : null;

  const loadingInfo = loading ? (
    <div className="relative overflow-hidden bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-200 mb-6 p-4 rounded-2xl">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-100/30 to-cyan-100/30 animate-pulse"></div>
      <div className="relative flex items-center">
        <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-4">
          <ImSpinner2 className="text-blue-500 text-lg animate-spin" />
        </div>
        <div>
          <p className="text-blue-800 text-sm font-semibold">Sedang memproses...</p>
          <p className="text-blue-600 text-xs mt-1">Mohon tunggu sebentar</p>
        </div>
      </div>
    </div>
  ) : null;

  return (
    <div className={`space-y-6 transition-all duration-700 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
      {/* Header */}
      <div className="text-center space-y-3 mb-8">
        <div className="relative">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-gray-800 via-gray-700 to-gray-600 bg-clip-text text-transparent animate-fadeInUp">
            Selamat Datang Kembali
          </h2>
          <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full animate-slideInUp"></div>
        </div>
        <p className="text-gray-500 text-sm animate-fadeInUp delay-200">
          Masuk ke akun DriveX Anda untuk melanjutkan
        </p>
      </div>

      {/* Error and Loading Messages */}
      {errorInfo}
      {loadingInfo}

      {/* Login Form */}
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Username Field */}
        <div className="space-y-2 animate-fadeInUp delay-300">
          <label className="block text-sm font-semibold text-gray-700 transition-all duration-300">
            Username
          </label>
          <div className="relative group">
            <div className={`absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none transition-all duration-300 ${
              focusedField === 'username' ? 'transform scale-110' : ''
            }`}>
              <FiUser className={`h-5 w-5 transition-all duration-300 ${
                focusedField === 'username' ? 'text-cyan-500' : 'text-gray-400'
              }`} />
            </div>
            <input
              type="text"
              id="username"
              name="username"
              value={dataForm.username}
              onChange={handleChange}
              onFocus={() => setFocusedField('username')}
              onBlur={() => setFocusedField('')}
              className={`w-full pl-12 pr-4 py-4 bg-gray-50 border-2 rounded-2xl text-gray-900 placeholder-gray-400 transition-all duration-300 transform focus:scale-[1.02] hover:shadow-lg focus:shadow-xl ${
                focusedField === 'username' 
                  ? 'border-cyan-400 bg-white shadow-lg ring-4 ring-cyan-100' 
                  : 'border-gray-200 hover:border-gray-300'
              }`}
              placeholder="Masukkan username Anda"
              required
            />
            <div className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-300 ${
              focusedField === 'username' ? 'w-full' : 'w-0'
            }`}></div>
          </div>
        </div>

        {/* Password Field */}
        <div className="space-y-2 animate-fadeInUp delay-400">
          <label className="block text-sm font-semibold text-gray-700 transition-all duration-300">
            Password
          </label>
          <div className="relative group">
            <div className={`absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none transition-all duration-300 ${
              focusedField === 'password' ? 'transform scale-110' : ''
            }`}>
              <FiLock className={`h-5 w-5 transition-all duration-300 ${
                focusedField === 'password' ? 'text-cyan-500' : 'text-gray-400'
              }`} />
            </div>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              value={dataForm.password}
              onChange={handleChange}
              onFocus={() => setFocusedField('password')}
              onBlur={() => setFocusedField('')}
              className={`w-full pl-12 pr-12 py-4 bg-gray-50 border-2 rounded-2xl text-gray-900 placeholder-gray-400 transition-all duration-300 transform focus:scale-[1.02] hover:shadow-lg focus:shadow-xl ${
                focusedField === 'password' 
                  ? 'border-cyan-400 bg-white shadow-lg ring-4 ring-cyan-100' 
                  : 'border-gray-200 hover:border-gray-300'
              }`}
              placeholder="Masukkan password Anda"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className={`absolute inset-y-0 right-0 pr-4 flex items-center transition-all duration-300 hover:scale-110 ${
                showPassword ? 'text-cyan-500' : 'text-gray-400 hover:text-gray-600'
              }`}
            >
              {showPassword ? (
                <FiEyeOff className="h-5 w-5" />
              ) : (
                <FiEye className="h-5 w-5" />
              )}
            </button>
            <div className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-300 ${
              focusedField === 'password' ? 'w-full' : 'w-0'
            }`}></div>
          </div>
        </div>

        {/* Submit Button */}
        <div className="animate-fadeInUp delay-500">
          <button
            type="submit"
            disabled={loading || !dataForm.username || !dataForm.password}
            className={`w-full relative overflow-hidden py-4 px-4 rounded-2xl font-bold text-white shadow-xl transition-all duration-500 transform focus:outline-none focus:ring-4 focus:ring-cyan-300 ${
              loading || !dataForm.username || !dataForm.password
                ? 'bg-gray-400 cursor-not-allowed'
                : 'bg-gradient-to-r from-cyan-500 via-blue-500 to-blue-600 hover:from-cyan-600 hover:via-blue-600 hover:to-blue-700 hover:scale-[1.02] hover:shadow-2xl active:scale-[0.98]'
            }`}
          >
            <div className={`absolute inset-0 bg-gradient-to-r from-white/20 to-transparent transform transition-transform duration-1000 ${
              loading ? 'translate-x-0 animate-shimmer' : '-translate-x-full'
            }`}></div>
            <div className="relative flex items-center justify-center">
              {loading ? (
                <>
                  <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin mr-3"></div>
                  <span className="animate-pulse">Memproses Login...</span>
                </>
              ) : (
                <span className="flex items-center">
                  <span>Masuk ke DriveX</span>
                  <div className="ml-2 w-5 h-5 bg-white/20 rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full animate-ping"></div>
                  </div>
                </span>
              )}
            </div>
          </button>
        </div>
      </form>

      {/* Divider */}
      <div className="relative my-8 animate-fadeInUp delay-600">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-200"></div>
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="px-6 bg-white text-gray-500 font-medium rounded-full border border-gray-100">
            atau lanjutkan dengan
          </span>
        </div>
      </div>

      {/* Action Links */}
      <div className="space-y-4">
        <div className="animate-fadeInUp delay-700">
          <Link
            to="/register"
            className="w-full group relative overflow-hidden flex items-center justify-center gap-3 px-6 py-4 text-sm font-bold text-white bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-[1.02] focus:outline-none focus:ring-4 focus:ring-blue-300 active:scale-[0.98]"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative flex items-center">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mr-3 group-hover:rotate-12 transition-transform duration-300">
                <BsFillPersonPlusFill className="w-4 h-4" />
              </div>
              <span>Buat Akun Baru</span>
            </div>
          </Link>
        </div>
        
        <div className="animate-fadeInUp delay-800">
          <Link
            to="/forgot"
            className="w-full group flex items-center justify-center gap-3 px-6 py-4 text-sm font-semibold text-gray-600 bg-gray-50 hover:bg-gray-100 rounded-2xl border-2 border-gray-200 hover:border-gray-300 transition-all duration-300 transform hover:scale-[1.02] focus:outline-none focus:ring-4 focus:ring-gray-300 active:scale-[0.98]"
          >
            <FiLock className="w-4 h-4 group-hover:animate-bounce" />
            <span>Lupa Password?</span>
          </Link>
        </div>
      </div>

      {/* Security Note */}
      <div className="mt-8 animate-fadeInUp delay-900">
        <div className="relative overflow-hidden p-6 bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl border border-gray-100">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500"></div>
          <div className="flex items-center justify-center space-x-3">
            <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center">
              <FiShield className="w-5 h-5 text-white" />
            </div>
            <div className="text-center">
              <p className="text-sm font-semibold text-gray-700">Keamanan Terjamin</p>
              <p className="text-xs text-gray-500 mt-1">
                Data Anda dilindungi dengan enkripsi SSL 256-bit
              </p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-5px); }
          75% { transform: translateX(5px); }
        }
        
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        
        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out forwards;
        }
        
        .animate-slideInUp {
          animation: slideInUp 0.4s ease-out forwards;
        }
        
        .animate-shake {
          animation: shake 0.5s ease-in-out;
        }
        
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
        
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-400 { animation-delay: 0.4s; }
        .delay-500 { animation-delay: 0.5s; }
        .delay-600 { animation-delay: 0.6s; }
        .delay-700 { animation-delay: 0.7s; }
        .delay-800 { animation-delay: 0.8s; }
        .delay-900 { animation-delay: 0.9s; }
      `}</style>
    </div>
  );
}