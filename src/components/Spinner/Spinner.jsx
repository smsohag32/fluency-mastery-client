import { CirclesWithBar, Watch } from "react-loader-spinner";

const Spinner = () => {
  return (
    <div className="w-full flex justify-center items-center min-h-[calc(100vh-80px)]">
      <Watch
        height="80"
        width="80"
        radius="48"
        color="#30a538"
        ariaLabel="watch-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
    </div>
  );
};

export default Spinner;
