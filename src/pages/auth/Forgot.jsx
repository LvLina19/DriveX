import React, { useState, useEffect } from "react";
import { loginAPI } from "../../../services/loginApi";

export default function Forgot() {
    const [loading, setLoading] = useState(false)
    const [success, setSuccess] = useState("")
    const [query, setQuery] = useState("");
    const [error, setError] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editData, setEditData] = useState({});
    // Tambahkan ke dalam komponen di bagian atas sebelum return
    const [dataForm, setDataForm] = useState({
        email: "",
        username: "",
        password: "",
        confirmPassword: "",
    })
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);

    const [Login, setLogin] = useState([])

    // Handle perubahan nilai input form
    const handleChange = (evt) => {
        const { name, value } = evt.target
        setDataForm({
            ...dataForm,
            [name]: value,
        })
    }

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

            await loginAPI.updateLogin(dataForm.id, {
                email: dataForm.email,
                username: dataForm.username,
                password: dataForm.password,
            })

            setSuccess("Produk berhasil diperbarui!")

            // Reset form
            setIsModalOpen(false);
            setDataForm({ email: "", username: "", password: "", confirmPassword: "" })

            setTimeout(() => setSuccess(""), 3000)

            // Refresh data
            loadProduct()
        } catch (err) {
            setError(`Terjadi kesalahan: ${err.message}`)
        } finally {
            setLoading(false)
        }
    };

    return (
        <div>
            <h2 className="text-2xl font-semibold text-gray-700 mb-2 text-center">
                Forgot Your Password?
            </h2>

            <p className="text-sm text-gray-500 mb-6 text-center">
                Enter your email address and we'll send you a link to reset your
                password.
            </p>

            <form>
                <div className="mb-5">
                    <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 mb-1"
                    >
                        Email Address
                    </label>
                    <input
                        type="email"
                        id="email"
                        className="w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg shadow-sm
                            placeholder-gray-400"
                        placeholder="you@example.com"
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4
                        rounded-lg transition duration-300"
                >
                    Send Reset Link
                </button>
            </form>
        </div>
    )
}
