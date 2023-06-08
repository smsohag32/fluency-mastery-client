import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import useInstructorRole from "../hooks/useInstructorRole";
import Spinner from "../components/Spinner/Spinner";

const InstructorRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const { isInstructor, instructorLoading } = useInstructorRole();
  const location = useLocation();
  if (loading || instructorLoading) {
    return <Spinner />;
  }
  if (user && isInstructor) {
    return children;
  }
  return <Navigate to="/" state={{ from: location }}></Navigate>;
};

export default InstructorRoute;
