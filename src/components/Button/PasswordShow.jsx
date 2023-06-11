import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
const PasswordShow = ({ setIsShow, isShow }) => {
  return (
    <span
      onClick={() => setIsShow(!isShow)}
      className="peer-focus:font-medium absolute right-5 text-sm text-gray-500 dark:text-gray-400 duration-300  top-1/2 mt-1 cursor-pointer Z-10 peer-focus:text-blue-300 "
    >
      {isShow ? (
        <AiFillEye className="w-5 h-5" />
      ) : (
        <AiFillEyeInvisible className="w-5 h-5" />
      )}
    </span>
  );
};

export default PasswordShow;
