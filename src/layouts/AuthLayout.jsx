import { Outlet } from "react-router-dom";

export default function AuthLayout() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 via-blue-50 to-cyan-50 animate-fadeIn">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md transition-all duration-300 hover:shadow-xl">
        <div className="flex items-center justify-center mb-8">
          <h1 className="text-4xl font-poppins font-extrabold text-gray-800">
            <a
              href="/"
              className="font-poppins-extrabold text-[40px] text-gray-900 hover:text-cyan-500 transition duration-300"
            >
              Drive<span className="text-cyan-400">X</span>
            </a>
          </h1>
        </div>

        <Outlet />

        <p className="text-center text-sm text-gray-500 mt-6">
          © 2025 DriveX. All rights reserved.
        </p>
      </div>
    </div>
  );
}