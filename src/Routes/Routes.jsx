import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import DashboardLayout from "../Layouts/DashboardLayout";
import StudentHome from "../pages/Dashboard/StudentHome/StudentHome";
import Courses from "../pages/Courses/Courses/Courses";
import Instructors from "../pages/Instructors/Instructors";

// all routes
const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "/courses",
        element: <Courses />,
      },
      {
        path: "/instructors",
        element: <Instructors />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        path: "/dashboard/",
        element: <StudentHome />,
      },
    ],
  },
]);

export default routes;
