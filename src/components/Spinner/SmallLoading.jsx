import { CirclesWithBar, RotatingLines } from "react-loader-spinner";

const SmallLoading = () => {
  return (
    <div className="w-full flex justify-center items-center min-h-[calc(100vh-80px)]">
      <RotatingLines
        visible={true}
        height="96"
        width="96"
        color="grey"
        strokeWidth="5"
        animationDuration="0.75"
        ariaLabel="rotating-lines-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
};

export default SmallLoading;
