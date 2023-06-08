import { Navigate, useLocation } from "react-router-dom";
import Spinner from "../components/Spinner/Spinner";
import useAdmin from "../hooks/useAdmin";
import { useAuth } from "../hooks/useAuth";

const AdminRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const { isAdmin, adminLoading } = useAdmin();
  const location = useLocation();
  if (loading || adminLoading) {
    return <Spinner />;
  }
  if (user && isAdmin) {
    return children;
  }
  return <Navigate to="/" state={{ from: location }}></Navigate>;
};

export default AdminRoute;
