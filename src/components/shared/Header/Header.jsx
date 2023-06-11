import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { Sling } from "hamburger-react";
import { useAuth } from "../../../hooks/useAuth";

import { MdDarkMode, MdLightMode } from "react-icons/md";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, userLogout } = useAuth();
  const lightTheme = true;
  // handle log out
  const handleLogout = () => {
    userLogout();
  };
  return (
    <div className="custom-bg  fixed top-0 backdrop-blur-2xl z-20 left-0 right-0">
      <div className="navbar relative px-5 default-container">
        <div className="flex-1">
          <Link to="/" className="text-xl uppercase font-bold">
            <span className="text-info">Fluency</span>Mastery
          </Link>
        </div>
        <ul
          className={`flex flex-col md:flex-row md:bg-transparent md:py-0 top-[80px] duration-500 transform h-[calc(100vh-70px)]  right-2/3 md:h-auto absolute md:static gap-5 md:mr-10 ${
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
        <span className="mr-5 text-2xl cursor-pointer hover:text-slate-400">
          {lightTheme ? <MdDarkMode /> : <MdLightMode />}
        </span>
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
                  <a className="justify-between">Profile</a>
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
