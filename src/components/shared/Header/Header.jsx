import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { Sling } from "hamburger-react";
import { useAuth } from "../../../hooks/useAuth";
import useAdmin from "../../../hooks/useAdmin";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, userLogout } = useAuth();
  // const { isAdmin } = useAdmin();
  // handle log out
  const handleLogout = () => {
    userLogout();
  };
  return (
    <div className="custom-bg  fixed top-0 backdrop-blur-2xl z-20 left-0 right-0">
      <div className="navbar relative px-5 default-container">
        <div className="flex-1">
          <Link to="/">FluencyMastery</Link>
        </div>
        <ul
          className={`flex flex-col md:flex-row md:bg-transparent md:py-0 top-[80px] duration-500 transform h-[calc(100vh-70px)] left-0 right-2/3 md:h-auto absolute md:static gap-5 md:mr-10 ${
            isOpen ? "custom-bg py-10 left-0" : "-left-full"
          }`}
        >
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "text-primary" : "")}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/instructors"
              className={({ isActive }) => (isActive ? "text-primary" : "")}
            >
              Instructors
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/courses"
              className={({ isActive }) => (isActive ? "text-primary" : "")}
            >
              Courses
            </NavLink>
          </li>
          {user?.email && (
            <li>
              <NavLink
                to="/dashboard"
                className={({ isActive }) => (isActive ? "text-primary" : "")}
              >
                Dashboard
              </NavLink>
            </li>
          )}
        </ul>

        {user?.email ? (
          <div title={user?.displayName} className="flex-none gap-5">
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img src={user.photoURL} />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="mt-3 p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
              >
                <li>
                  <a className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </a>
                </li>
                <li>
                  <a>Settings</a>
                </li>
                <li>
                  <button
                    onClick={handleLogout}
                    className="btn-accent py-1 px-5"
                  >
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          </div>
        ) : (
          <Link className="btn-accent py-1 px-5" to="/login">
            Login
          </Link>
        )}
        <div className="md:hidden ms-4">
          <Sling toggled={isOpen} size={40} toggle={() => setIsOpen(!isOpen)} />
        </div>
      </div>
    </div>
  );
};

export default Header;
