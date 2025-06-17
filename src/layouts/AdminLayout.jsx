import { Outlet } from 'react-router-dom';
import HeaderAdmin from '../components/Admin/HeaderAdmin';
// import Footer from '../components/Footer';

const GuestLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <HeaderAdmin />
      <main className="flex-grow">
        <Outlet />
      </main>
      {/* <Footer /> */}
    </div>
  );
};

export default GuestLayout;