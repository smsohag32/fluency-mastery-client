import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { Sling } from "hamburger-react";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const user = false;
  return (
    <div className="custom-bg fixed top-0 backdrop-blur-2xl z-20 left-0 right-0">
      <div className="navbar default-container">
        <div className="flex-1">
          <Link to="/">FluencyMastery</Link>
          <div>
            <Sling toggled={isOpen} toggle={setIsOpen} />
          </div>
        </div>
        <ul className="flex gap-5 md:mr-10">
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
              to="/classes"
              className={({ isActive }) => (isActive ? "text-primary" : "")}
            >
              Classes
            </NavLink>
          </li>
        </ul>
        {user?.email ? (
          <div className="flex-none gap-5">
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
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
                  <button className="btn-accent py-1 px-5">Logout</button>
                </li>
              </ul>
            </div>
          </div>
        ) : (
          <Link className="btn-accent py-1 px-5" to="/login">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
