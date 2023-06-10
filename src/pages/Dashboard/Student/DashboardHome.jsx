import { FaDatabase } from "react-icons/fa";
import { useAuth } from "../../../hooks/useAuth";

const DashboardHome = () => {
  const { user } = useAuth();
  return (
    <div>
      <div className="text-center mt-12">
        <h1 className="text-3xl uppercase  leading-relaxed">
          Welcome !! {user?.displayName}
        </h1>
      </div>
    </div>
  );
};

export default DashboardHome;
