import { Outlet } from "react-router-dom";
import Header from "../components/shared/Header/Header";

const MainLayout = () => {
  return (
    <div>
      <Header />
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
