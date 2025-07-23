import { ImSpinner2 } from "react-icons/im";
import { BsFillExclamationDiamondFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { BsFillPersonPlusFill } from "react-icons/bs";
import { loginAPI } from "../../services/loginApi";

export default function Login() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [dataForm, setDataForm] = useState({
    username: "",
    password: "",
  });

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setDataForm({
      ...dataForm,
      [name]: value,
    });
  };

  //proses inputnya
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
        // 🔄 Redirect berdasarkan role
        if (user.role === "Admin") {
          navigate("/admin");
        } else if (user.role === "Guest") {
          navigate("/guest");
        } else {
          // Optional: fallback jika role tidak diketahui
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

  /* error & loading status */
  const errorInfo = error ? (
    <div className="bg-red-200 mb-5 p-5 text-sm font-light text-gray-600 rounded flex items-center">
      <BsFillExclamationDiamondFill className="text-red-600 me-2 text-lg" />
      {error}
    </div>
  ) : null;

  const loadingInfo = loading ? (
    <div className="bg-gray-200 mb-5 p-5 text-sm rounded flex items-center">
      <ImSpinner2 className="me-2 animate-spin" />
      Mohon Tunggu...
    </div>
  ) : null;
  return (
    <div>
      <h2 className="text-2xl font-semibold text-gray-700 mb-6 text-center">
        Welcome Back 👋
      </h2>

      {errorInfo}

      {loadingInfo}

      <form onSubmit={handleSubmit}>
        <div className="mb-5">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Username
          </label>
          <input
            type="text"
            id="username"
            className="w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg shadow-sm
                            placeholder-gray-400"
            placeholder="Username"
            name="username"
            onChange={handleChange}
          />
        </div>
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg shadow-sm
                            placeholder-gray-400"
            placeholder="********"
            name="password"
            onChange={handleChange}
          />
        </div>
        <button
          type="submit"
          className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4
                        rounded-lg transition duration-300"
        >
          Login
        </button>
      </form>
      {/* button forgot dan register */}
      <div className="mt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <Link
          to="/register"
          className="w-full sm:w-auto px-3 py-2 text-sm text-white bg-gradient-to-r from-blue-500
           to-blue-700 rounded-lg shadow-md hover:bg-blue-800 hover:scale-105 transition-all duration-300
            text-center flex items-center justify-center gap-2"
        >
          <BsFillPersonPlusFill className="w-5 h-5" />
          Daftar Akun
        </Link>

        <Link
          to="/forgot"
          className="w-full sm:w-auto px-3 py-2 text-sm text-gray-700 bg-gray-100 rounded-lg border
           border-gray-300 hover:bg-gray-300 hover:scale-105 transition-all duration-300 text-center 
           flex items-center justify-center gap-2"
        >
          Lupa Password?
        </Link>
      </div>
    </div>
  );
}
