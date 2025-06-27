import React, { Suspense } from "react";
import './assets/tailwind.css';
import { Route, Routes } from "react-router-dom";
const Admin = React.lazy(() => import("./pages/Admin/CRUD/Admin"))
const HomeAdmin = React.lazy(() => import("./pages/Admin/Dashboard/HomeAdmin"))
const Guest = React.lazy(() => import("./pages/Guest/HomeGuest"))
const Loading = React.lazy(() => import("./components/Guest/Loading"));
const GuestLayout = React.lazy(() => import("./layouts/GuestLayout"));
const AuthLayout = React.lazy(() => import("./layouts/AuthLayout"));
const AdminLayout = React.lazy(() => import("./layouts/AdminLayout"));
const Login = React.lazy(() => import("./pages/auth/Login"));
const Register = React.lazy(() => import("./pages/auth/Register"));
const Forgot = React.lazy(() => import("./pages/auth/Forgot"));
const ProductDetail = React.lazy(() => import("./pages/Admin/CRUD/ProductDetail"));
const DetailProduk = React.lazy(() => import("./pages/Guest/DetailProduk"));
const Artikel = React.lazy(() => import("./pages/Guest/Artikel"));
const DetailArtikel = React.lazy(() => import("./pages/Guest/DetailArtikel"));


function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route element={<GuestLayout />}>
          <Route path="/" element={<Guest />} />
          <Route path="/detail/:kode_produk" element={<DetailProduk />} /> 
          <Route path="/artikel" element={<Artikel />} />
          <Route path="/artikel/:id" element={<DetailArtikel />} />
        </Route>

        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot" element={<Forgot />} />
        </Route>

        <Route element={<AdminLayout />}>
          <Route path="/admin" element={<Admin />} />
          <Route path="/dashboard" element={<HomeAdmin />} />
          <Route path="/admin/:id" element={<ProductDetail />} />
        </Route>
        
      </Routes>
    </Suspense>
  );
}

export default App;