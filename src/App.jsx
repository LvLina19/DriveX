import React, { Suspense } from "react";
import './assets/tailwind.css';
import { Route, Routes } from "react-router-dom";
import Admin from "./pages/Admin/Admin";
const Guest = React.lazy(() => import("./pages/Guest/HomeGuest"))
const Loading = React.lazy(() => import("./components/Guest/Loading"));
const GuestLayout = React.lazy(() => import("./layouts/GuestLayout"));
const AuthLayout = React.lazy(() => import("./layouts/AuthLayout"));
const AdminLayout = React.lazy(() => import("./layouts/AdminLayout"));
const Login = React.lazy(() => import("./pages/auth/Login"));
const Register = React.lazy(() => import("./pages/auth/Register"));
const Forgot = React.lazy(() => import("./pages/auth/Forgot"));

;function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route element={<GuestLayout />}>
          <Route path="/" element={<Guest />} />
        </Route>

        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot" element={<Forgot />} />
        </Route>

        <Route element={<AdminLayout />}>
          <Route path="/admin" element={<Admin />} />
        </Route>
        
      </Routes>
    </Suspense>
  );
}

export default App;