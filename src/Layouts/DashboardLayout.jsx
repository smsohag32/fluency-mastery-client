import { Link, NavLink, Outlet } from "react-router-dom";
import {
  AiOutlineClose,
  AiOutlineFileDone,
  AiOutlineLogout,
  AiOutlineMenuFold,
  AiOutlineSelect,
} from "react-icons/ai";
import {
  MdDashboard,
  MdOutlinePlaylistAdd,
  MdPayments,
  MdPermDataSetting,
  MdTerminal,
} from "react-icons/md";
import { FaUserShield } from "react-icons/fa";
import useAdmin from "../hooks/useAdmin";
import useInstructorRole from "../hooks/useInstructorRole";
const DashboardLayout = () => {
  const { isAdmin } = useAdmin();
  const { isInstructor } = useInstructorRole();
  console.log(isAdmin, isInstructor);
  const isStudent = false;
  return (
    <div>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content p-6">
          {/* button side bar  */}
          <div className="md:hidden mb-2">
            <label
              htmlFor="my-drawer-2"
              className="drawer-overlay cursor-pointer"
            >
              <AiOutlineMenuFold size={40} color="white" />
            </label>
          </div>

          {/* content */}
          <Outlet />
        </div>
        <div className="drawer-side">
          <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
            <div className="md:hidden text-right flex items-end justify-end">
              <label
                htmlFor="my-drawer-2"
                className="drawer-overlay cursor-pointer"
              >
                <AiOutlineClose size={40} color="white" />
              </label>
            </div>
            {/* Sidebar content here */}
            {isStudent && (
              <>
                <li>
                  <NavLink
                    to="/dashboard"
                    className={({ isActive }) =>
                      isActive ? "text-xl font-bold text-success" : ""
                    }
                  >
                    <MdDashboard /> Dashboard
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/selected-courses"
                    className={({ isActive }) =>
                      isActive ? "text-primary" : ""
                    }
                  >
                    <AiOutlineSelect /> My Selected Courses
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/enrolled-courses"
                    className={({ isActive }) =>
                      isActive ? "text-primary" : ""
                    }
                  >
                    <AiOutlineFileDone /> My Enrolled Courses
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/payment-history"
                    className={({ isActive }) =>
                      isActive ? "text-primary" : ""
                    }
                  >
                    <MdPayments /> Payment History
                  </NavLink>
                </li>
              </>
            )}
            {isInstructor && (
              <>
                <li>
                  <NavLink
                    to="/dashboard"
                    className={({ isActive }) =>
                      isActive ? "text-xl font-bold text-success" : ""
                    }
                  >
                    <MdDashboard /> Dashboard
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/add-courses"
                    className={({ isActive }) =>
                      isActive ? "text-primary" : ""
                    }
                  >
                    <MdOutlinePlaylistAdd /> Add A Course
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/my-courses"
                    className={({ isActive }) =>
                      isActive ? "text-primary" : ""
                    }
                  >
                    <MdTerminal /> My Courses
                  </NavLink>
                </li>
              </>
            )}
            {isAdmin && (
              <>
                <li>
                  <NavLink
                    to="/dashboard/dashboard"
                    className={({ isActive }) =>
                      isActive ? "text-xl font-bold text-success" : ""
                    }
                  >
                    <MdDashboard /> Dashboard
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/manage-courses"
                    className={({ isActive }) =>
                      isActive ? "text-primary" : ""
                    }
                  >
                    <MdPermDataSetting /> Manage Courses
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/manage-users"
                    className={({ isActive }) =>
                      isActive ? "text-primary" : ""
                    }
                  >
                    <FaUserShield /> Manage Users
                  </NavLink>
                </li>
              </>
            )}
            <div className="flex flex-col gap-5 text-left">
              <hr />
              <Link to="/">Home</Link>
            </div>
            <div className="mt-auto flex justify-around items-center">
              <button className="btn btn-accent">
                Logout <AiOutlineLogout size={30} />
              </button>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
