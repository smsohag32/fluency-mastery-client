import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";
import {
  AiOutlineClose,
  AiOutlineFileDone,
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
import { BiLogOut } from "react-icons/bi";
import { FaHome, FaUserShield } from "react-icons/fa";
import useAdmin from "../hooks/useAdmin";
import useInstructorRole from "../hooks/useInstructorRole";
import { useEffect, useState } from "react";
import { useAuth } from "../hooks/useAuth";
const DashboardLayout = () => {
  const [isStudent, setIsStudent] = useState(true);
  const { isAdmin } = useAdmin();
  const { isInstructor } = useInstructorRole();
  const { user, userLogout } = useAuth();
  const navigate = useNavigate();

  // isStudent condition check
  useEffect(() => {
    if (isAdmin || isInstructor) {
      setIsStudent(false);
    }
  }, [isAdmin, isInstructor]);

  // handle logout
  const handleLogout = () => {
    userLogout().then(() => {
      navigate("/");
    });
  };
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
              <AiOutlineMenuFold size={40} className="" />
            </label>
          </div>
          {/* content */}
          <Outlet />
        </div>

        {/* side bar */}
        <div className="drawer-side">
          <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
            <div className="md:hidden text-right flex items-end justify-end">
              <label
                htmlFor="my-drawer-2"
                className="drawer-overlay cursor-pointer"
              >
                <AiOutlineClose size={40} />
              </label>
            </div>
            {/* Sidebar content here */}
            <div className="flex items-center justify-center flex-col my-4">
              <img
                src={user?.photoURL}
                className="rounded-full w-20 border-2"
                alt="USER"
              />
              <p className="mt-2 font-bold">{user?.displayName}</p>
              <p className="text-xs opacity-70">{user?.email}</p>
            </div>
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
                    to="/dashboard"
                    className={({ isActive }) =>
                      isActive
                        ? "text-xl font-bold text-success"
                        : "text-xl font-bold text-success"
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
              <div className="divider"></div>
              <Link
                className="font-bold flex hover:text-info transition ease-in duration-150 items-center w-5/6 mx-auto"
                to="/"
              >
                <FaHome className="text-xl mr-3" /> Back To Home
              </Link>
            </div>
            <div className="mt-auto w-5/6 mx-auto">
              <button
                onClick={handleLogout}
                className=" flex text-base transition ease-in duration-900 items-center gap-2 font-bold hover:text-stone-500"
              >
                <BiLogOut size={30} /> Logout
              </button>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
