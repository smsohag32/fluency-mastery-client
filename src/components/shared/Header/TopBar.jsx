import { IoMdNotificationsOutline } from "react-icons/io";

import { Link } from "react-router-dom";
import { useAuth } from "../../../hooks/useAuth";
import { useContext } from "react";
import { ThemeContext } from "../../../Context/ThemeProvider";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { AiOutlineMenuFold } from "react-icons/ai";
import userIcon from "../../../assets/user.png"
const TopBar = () => {
  const { user, loading } = useAuth();
  const { isDarkMode, handleThemeToggle } = useContext(ThemeContext);

  if (loading) {
    return;
  }
  return (
    <div className="h-16 bg-green-200  shadow-sm  items-center md:px-12 px-5 flex justify-between">
      <div className="flex gap-2 justify-between md:justify-end w-full items-center">
        <span>
          <Link
            to="/dashboard/notification"
            className="relative inline-flex items-center p-3 text-sm font-medium text-center rounded-lg">
            <IoMdNotificationsOutline className=" text-xl" />

            <div className="absolute inline-flex items-center justify-center bg-[#ff6633c7]  text-xs font-bold marker:bg-red-500 rounded-full top-2 right-2 ">
              <span className="p-1"></span>
            </div>
          </Link>
        </span>
        <span
          onClick={handleThemeToggle}
          className="mr-5 text-4xl md:text-2xl cursor-pointer hover:text-slate-400">
          {isDarkMode ? <MdLightMode /> : <MdDarkMode />}
        </span>
        <div className="flex gap-5 items-center ">
          <Link
            to="/"
            className="">
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
          </Link>
          <div>
            <p className="font-semibold text-sm">{user?.displayName}</p>
          </div>
        </div>

        <div className="md:hidden mb-2">
          <label
            htmlFor="my-drawer-2"
            className="drawer-overlay cursor-pointer">
            <AiOutlineMenuFold
              size={40}
              className=""
            />
          </label>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
