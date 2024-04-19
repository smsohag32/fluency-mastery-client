import { MdOutlineScreenRotationAlt } from "react-icons/md";
import { useAuth } from "../../../hooks/useAuth";
import { Helmet } from "react-helmet";
const DashboardHome = () => {
  const { user } = useAuth();
  return (
    <>
      <Helmet>
        <title>FluencyMastery | Dashboard</title>
      </Helmet>
      <div className="p-5">
        <div>
          <h1 className="text-[2rem] font-semibold text-gray-700">Dashboard</h1>
        </div>
        {/* stat  */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-5">
          <div className="flex items-center text-white bg-gradient-to-br from-green-600 via-green-500 to-green-400 text-[1.5rem] gap-2">
            <span className="py-3 px-6 flex items-center justify-center h-full bg-gradient-to-br from-green-600 via-green-500 to-green-400">
              <MdOutlineScreenRotationAlt />
            </span>
           <div className="p-3">
           <p className="font-bold">Total Enrollment</p>
           <span>01</span>
           </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardHome;
