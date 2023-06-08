import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import DashboardLayout from "../Layouts/DashboardLayout";

import Courses from "../pages/Courses/Courses/Courses";
import Instructors from "../pages/Instructors/Instructors";
import StudentHome from "../pages/Dashboard/Student/StudentHome/StudentHome";
import StEnrolCourses from "../pages/Dashboard/Student/StEnrollCourses/StEnrolCourses";
import StPaymentHistory from "../pages/Dashboard/Student/PaymentHistory/StPaymentHistory";
import StSelectedCourses from "../pages/Dashboard/Student/StSelectedCourses/StSelectedCourses";

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
      {
        path: "selected-courses",
        element: <StSelectedCourses />,
      },
      {
        path: "enrolled-courses",
        element: <StEnrolCourses />,
      },
      {
        path: "payment-history",
        element: <StPaymentHistory />,
      },
    ],
  },
]);

export default routes;
