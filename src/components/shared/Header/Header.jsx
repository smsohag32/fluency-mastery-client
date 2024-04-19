import { Link, NavLink, useLocation } from "react-router-dom";
import { useContext, useState } from "react";
import { Sling } from "hamburger-react";
import { useAuth } from "../../../hooks/useAuth";
import image from "/logo.png";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { ThemeContext } from "../../../Context/ThemeProvider";
import { useEffect } from "react";
import userIcon from "../../../assets/user.png";
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
      } bg-opacity-90 z-40 fixed top-0 shadow-md backdrop-blur-2xl left-0 right-0`}>
      <div className="navbar  relative px-5 default-container">
        <div className="flex-1">
          <Link
            to="/"
            className="text-lg flex items-center md:text-xl font-bold">
            <span className="text-[2rem]">
              Flu<span className="text-green-600">e</span>nc<span className="text-green-600">Y</span>
            </span>
          </Link>
        </div>
        <ul
          className={`flex font-semibold flex-col md:flex-row md:bg-transparent md:py-0 top-[80px] duration-500 transform h-[calc(100vh-70px)] w-full md:w-auto right-0 md:h-auto absolute md:static gap-5 md:mr-10 ${
            isOpen ? "bg-base-200 py-10 left-0" : "-left-full"
          }`}>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "text-primary" : "")}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/courses"
              className={({ isActive }) => (isActive ? "text-primary" : "")}>
              Courses
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/instructors"
              className={({ isActive }) => (isActive ? "text-primary" : "")}>
              Instructors
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? "text-primary" : "")}>
              About us
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) => (isActive ? "text-primary" : "")}>
              Contact us
            </NavLink>
          </li>
        </ul>
       <div className="mr-6">
       <label className="swap  swap-rotate ">
            {/* this hidden checkbox controls the state */}
            <input onChange={handleThemeToggle} type="checkbox" />
            {/* sun icon */}
            <svg
              className="swap-on fill-current w-8 h-8"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24">
              <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
            </svg>

            {/* moon icon */}
            <svg
              className="swap-off fill-current w-8 h-8"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24">
              <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
            </svg>
          </label>
       </div>
        {user?.email ? (
          <div
            title={user?.displayName}
            className="flex-none gap-5">
            <div className="dropdown dropdown-end">
              <label
                tabIndex={0}
                className="btn btn-ghost btn-circle avatar">
                {user?.photoUrl ? (
                  <div className="avatar">
                    <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                      <img
                        src={user?.photoUrl}
                        className="w-24"
                      />
                    </div>
                  </div>
                ) : (
                  <div className="avatar rounded-full ring ring-primary ring-offset-base-100">
                    <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                      <img
                        src={userIcon}
                        className=""
                      />
                    </div>
                  </div>
                )}
              </label>
              <ul
                tabIndex={0}
                className="mt-3 p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                {user?.email && (
                  <li>
                    <NavLink
                      to="/dashboard"
                      className={({ isActive }) => (isActive ? "text-primary" : "")}>
                      Dashboard
                    </NavLink>
                  </li>
                )}
                <li>
                  <button
                    onClick={handleLogout}
                    className="py-2 px-3 ">
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          </div>
        ) : (
          <Link
            className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white font-semibold"
            to="/login">
            Login
          </Link>
        )}
        <div className="md:hidden ms-4">
          <Sling
            toggled={isOpen}
            size={40}
            toggle={() => setIsOpen(!isOpen)}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
