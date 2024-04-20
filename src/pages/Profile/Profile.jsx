import { useAuth } from "../../hooks/useAuth";
import userIcon from "../../assets/user.png";
import { FaEdit } from "react-icons/fa";
import { MdMenu } from "react-icons/md";
const Profile = () => {
  const { user } = useAuth();

  return (
    <div className="bg-gradient-to-bl py-20 min-h-[90vh] from-gray-500 via-gray-600 to-gray-700">
      <div className="default-container flex flex-col lg:flex-row gap-16 pt-8">
        {user?.photoUrl ? (
          <div className="avatar">
            <div className="w-60 rounded-[2rem] ring ring-secondary ring-offset-base-100 ring-offset-2">
              <img
                src={user?.photoUrl}
                className="w-60"
              />
            </div>
          </div>
        ) : (
          <div className="avatar rounded-[2rem] ring ring-primary ring-offset-base-100">
            <div className="w-60 rounded-[2rem] ring ring-primary ring-offset-base-100 ring-offset-2">
              <img
                src={userIcon}
                className=""
              />
            </div>
          </div>
        )}
        

        <div className="text-white">
            <h1 className="text-[2.5rem] mt-3 font-semibold">{user?.displayName}</h1>
            <p className="text-lg font-semibold"> <span>Email: </span>{user?.email}</p>
            <p className="text-xl font-bold mt-1"><span className="text-gray-200">StudentID# <span>{user?.uid}</span></span></p>
           <div className="text-lg">
           <p className="mt-4">Address: {user?.address || "N/A"}</p>
            <p className="">Phone number: <span>{user?.phoneNumber || "N/A"}</span></p>
            <p>Gender <span>{user?.gender || "N/A"}</span></p>
           </div>
           <Link className="text-white bg-green-600  flex items-center justify-center gap-2 px-6 py-2 mt-6 font-semibold"> <MdMenu />Go to Dashboard</Link>
        </div>
        <div>
        <button className="text-white bg-green-600  flex items-center justify-center gap-2 px-6 py-2 mt-6 font-semibold"> <FaEdit />Edit profile</button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
