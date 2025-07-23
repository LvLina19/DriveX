import { loginAPI } from "../../services/loginApi"
import { data, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Register() {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState("");
    const [error, setError] = useState("");
    const [dataForm, setDataForm] = useState({
        email: "",
        username: "",
        password: "",
        confirmPassword: "",
    });

    const handleAddUser = async (e) => {
        e.preventDefault()

        try {
            setLoading(true)
            setError("")
            setSuccess("")

            // VALIDASI PASSWORD & CONFIRM
            if (dataForm.password !== dataForm.confirmPassword) {
                setError("Password dan Confirm Password tidak sama");
                return;
            }

            // Jangan kirim confirmPassword ke API
            const { email, username, password } = dataForm;
            await loginAPI.createLogin({ email, username, password, role:"Guest" });

            navigate("/login");

            setSuccess("Catatan berhasil ditambahkan!")

            // Kosongkan Form setelah Success
            setDataForm({ email: "", username: "", password: "", confirmPassword:"" })

            // Hilangkan pesan Success setelah 3 detik
            setTimeout(() => setSuccess(""), 3000)

            //Panggil Ulang loadNotes untuk refresh data
            loadLogin()

        } catch (err) {
            setError(`Terjadi kesalahan: ${err.message}`);
        } finally {
            setLoading(false)
        }
    };

    // Memanggil fetchNotes beserta error/loading handling
    const loadLogin = async () => {
        try {
            setLoading(true)
            setError("")
            const data = await loginAPI.fetchLogins()
            setLogins(data)
        } catch (err) {
            setError("Gagal memuat catatan")
            console.error(err)
        } finally {
            setLoading(false)
        }
    }

    const [logins, setLogins] = useState([])

    const handleChange = (e) => {
        const { name, value } = e.target;
        setDataForm((prev) => ({ ...prev, [name]: value }));
    }
    return (
        <div>
            <h2 className="text-2xl font-semibold text-gray-700 mb-6 text-center">
                Create Your Account ✨
            </h2>

            <form onSubmit={handleAddUser}>
                <div className="mb-5">
                    <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 mb-1"
                    >
                        Email Address
                    </label>
                    <input
                        type="email"
                        name="email"
                        value={dataForm.email}
                        id="email"
                        onChange={handleChange}
                        className="w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg shadow-sm
                            placeholder-gray-400"
                        placeholder="you@example.com"
                    />
                </div>

                <div className="mb-5">
                    <label
                        htmlFor="username"
                        className="block text-sm font-medium text-gray-700 mb-1"
                    >
                        Username
                    </label>
                    <input
                        type="text"
                        name="username"
                        value={dataForm.username}
                        id="username"
                        onChange={handleChange}
                        className="w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg shadow-sm
                            placeholder-gray-400"
                        placeholder="Username.."
                    />
                </div>

                <div className="mb-5">
                    <label
                        htmlFor="password"
                        className="block text-sm font-medium text-gray-700 mb-1"
                    >
                        Password
                    </label>
                    <input
                        type="password"
                        name="password"
                        value={dataForm.password}
                        id="password"
                        onChange={handleChange}
                        className="w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg shadow-sm
                            placeholder-gray-400"
                        placeholder="********"
                    />
                </div>

                <div className="mb-6">
                    <label
                        htmlFor="confirmPassword"
                        className="block text-sm font-medium text-gray-700 mb-1"
                    >
                        Confirm Password
                    </label>
                    <input
                        type="password"
                        name="confirmPassword"
                        value={dataForm.confirmPassword}
                        id="confirmPassword"
                        onChange={handleChange}
                        className="w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg shadow-sm
                            placeholder-gray-400"
                        placeholder="********"
                    />
                </div>

                <button
                    type="submit"
                    className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4
                        rounded-lg transition duration-300"
                >
                    Register
                </button>
            </form>
        </div>
    )
}
