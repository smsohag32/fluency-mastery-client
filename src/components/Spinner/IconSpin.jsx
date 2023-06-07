import { FaSpinner } from "react-icons/fa";

const IconSpin = () => {
  return (
    <div className="w-full h-auto flex items-center justify-center">
      <FaSpinner size={30} className="animate-spin" />
    </div>
  );
};

export default IconSpin;
