import { Outlet } from 'react-router-dom';
import HeaderAdmin from '../components/Admin/HeaderAdmin';
import HeaderDashboard from '../components/Admin/HeaderDashboard';
// import Footer from '../components/Footer';

const AdminLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <Outlet />
      </main>
      {/* <Footer /> */}
    </div>
  );
};

export default AdminLayout;