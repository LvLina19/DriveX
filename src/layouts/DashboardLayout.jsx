import { Outlet } from 'react-router-dom';
import HeaderDashboard from '../components/Admin/HeaderDashboard';
// import Footer from '../components/Footer';

const DashboardLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <HeaderDashboard />
      <main className="flex-grow">
        <Outlet />
      </main>
      {/* <Footer /> */}
    </div>
  );
};

export default DashboardLayout;