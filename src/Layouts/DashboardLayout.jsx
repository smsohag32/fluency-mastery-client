import { Link, NavLink, Outlet } from "react-router-dom";
import {
  AiOutlineClose,
  AiOutlineLogout,
  AiOutlineMenuFold,
} from "react-icons/ai";
const DashboardLayout = () => {
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
            <li>
              <NavLink to="/dashboard">Dashboard</NavLink>
            </li>
            <li>
              <a>Sidebar Item 2</a>
            </li>
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
