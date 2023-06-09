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
import InstAddCourse from "../pages/Dashboard/Instructors/InstAddCourse/InstAddCourse";
import InstCourses from "../pages/Dashboard/Instructors/InstCourses/InstCourses";
import ManageUsers from "../pages/Dashboard/Admin/ManageUsers/ManageUsers";
import AdminRoute from "./AdminRoute";
import PrivateRoute from "./PrivateRoute";
import InstructorRoute from "./InstructorRoute";
import ManageCourses from "../pages/Dashboard/Admin/ManageCourses/ManageCourses";
import Payment from "../pages/Dashboard/Payment/Payment";

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
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    children: [
      {
        path: "/dashboard/",
        element: <StudentHome />,
      },
      // student dashboard routes
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
      {
        path: "payment/:id",
        element: <Payment />,
      },
      // instructors dashboard routes
      {
        path: "add-courses",
        element: (
          <InstructorRoute>
            <InstAddCourse />
          </InstructorRoute>
        ),
      },
      {
        path: "my-courses",
        element: <InstCourses />,
      },

      // admin dashboard routes
      {
        path: "manage-courses",
        element: <ManageCourses />,
      },
      {
        path: "manage-users",
        element: (
          <AdminRoute>
            <ManageUsers />
          </AdminRoute>
        ),
      },
    ],
  },
]);

export default routes;
