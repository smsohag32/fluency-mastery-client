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
    <div className="h-16 bg-gray-800  shadow-xl  items-center md:px-12 px-5 flex justify-between">
      <div>
        <Link to={'/dashboard'} className="text-[2rem] text-white"><span className="text-green-600">F</span>luenc<span className="text-green-600">Y</span></Link>
      </div>
      <div className="flex gap-2 justify-between md:justify-end w-full items-center">
      
        <span
          onClick={handleThemeToggle}
          className="mr-5 text-4xl md:text-2xl text-white cursor-pointer hover:text-slate-400">
          {isDarkMode ? <MdLightMode /> : <MdDarkMode />}
        </span>
        <div className="flex gap-5 text-white items-center ">
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

        <div className="md:hidden text-white mb-2">
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
