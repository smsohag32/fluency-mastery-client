import { Link, NavLink, useLocation } from "react-router-dom";
import { useContext, useState } from "react";
import { Sling } from "hamburger-react";
import { useAuth } from "../../../hooks/useAuth";
import image from "/logo.png";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { ThemeContext } from "../../../Context/ThemeProvider";
import { useEffect } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, userLogout } = useAuth();
  const { isDarkMode, handleThemeToggle } = useContext(ThemeContext);
  const { pathname } = useLocation() || "/";

  // route change scroll position to top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  // handle log out
  const handleLogout = () => {
    userLogout();
  };
  return (
    <div
      className={`${
        isDarkMode ? "bg-white text-black" : "bg-black text-white"
      } bg-opacity-90 z-40 fixed top-0 shadow-md backdrop-blur-2xl left-0 right-0`}
    >
      <div className="navbar  relative px-5 default-container">
        <div className="flex-1">
          <Link
            to="/"
            className="text-lg flex items-center md:text-xl uppercase font-bold"
          >
            <span className="text-3xl">F</span>
            <img src={image} alt="" className="w-9" />
          </Link>
        </div>
        <ul
          className={`flex flex-col md:flex-row md:bg-transparent md:py-0 top-[80px] duration-500 transform h-[calc(100vh-70px)] w-full md:w-auto right-0 md:h-auto absolute md:static gap-5 md:mr-10 ${
            isOpen ? "bg-base-200 py-10 left-0" : "-left-full"
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
              to="/courses"
              className={({ isActive }) => (isActive ? "text-primary" : "")}
            >
              Courses
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
              to="/about"
              className={({ isActive }) => (isActive ? "text-primary" : "")}
            >
              About us
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) => (isActive ? "text-primary" : "")}
            >
              Contact us
            </NavLink>
          </li>
        </ul>
        <span
          onClick={handleThemeToggle}
          className="mr-5 text-4xl md:text-2xl cursor-pointer hover:text-slate-400"
        >
          {isDarkMode ? <MdLightMode /> : <MdDarkMode />}
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
                {user?.email && (
                  <li>
                    <NavLink
                      to="/dashboard"
                      className={({ isActive }) =>
                        isActive ? "text-primary" : ""
                      }
                    >
                      Dashboard
                    </NavLink>
                  </li>
                )}
                <li>
                  <button onClick={handleLogout} className="py-2 px-3 ">
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          </div>
        ) : (
          <Link className="primary-btn text-white py-1 px-5" to="/login">
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
