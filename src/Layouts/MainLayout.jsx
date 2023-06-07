import { Outlet } from "react-router-dom";
import Header from "../components/shared/Header/Header";
import Footer from "../components/shared/Footer/Footer";

const MainLayout = () => {
  return (
    <div>
      <Header />
      <div className="min-h-[calc(100vh-135px)]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
