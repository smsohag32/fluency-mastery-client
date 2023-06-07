import { Link, useRouteError } from "react-router-dom";
import Lottie from "lottie-react";
import errorImage from "../../assets/animation/error.json";
const ErrorPage = () => {
  const { error, status } = useRouteError();

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex flex-col items-center justify-center">
        <Lottie animationData={errorImage} />
        <div className="text-center">
          <p className="text-sm  text-warning">
            {error.message || `something went wrong`}
          </p>
          <p className="text-3xl font-bold mt-1">{status || "404"}</p>
          <Link className="btn btn-accent mt-8" to="/">
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
