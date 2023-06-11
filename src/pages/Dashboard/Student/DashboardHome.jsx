import { useAuth } from "../../../hooks/useAuth";
import dashboard from "../../../assets/animation/dashboard.json";
import Lottie from "lottie-react";
import { Helmet } from "react-helmet";
const DashboardHome = () => {
  const { user } = useAuth();
  return (
    <>
      <Helmet>
        <title>FluencyMastery | Dashboard</title>
      </Helmet>
      <div className="flex flex-col gap-8">
        <div className="text-center mt-12 w-full">
          <h1 className="text-3xl uppercase font-bold text-info">
            Welcome !! {user?.displayName}
          </h1>
        </div>
        <div className="w-full h-[480px]">
          <Lottie className="h-full" animationData={dashboard} loop={true} />
        </div>
      </div>
    </>
  );
};

export default DashboardHome;
