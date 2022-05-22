import { Outlet } from 'react-router-dom';
import Navbar from '../components/Header/Navbar';
import Footer from '../components/Footer/Footer';

function PublicLayout(props) {
  return (
    <div className="themain">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default PublicLayout;
