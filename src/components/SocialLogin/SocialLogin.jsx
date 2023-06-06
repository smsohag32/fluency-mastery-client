import { FcGoogle } from "react-icons/fc";
import { useAuth } from "../../hooks/useAuth";

const SocialLogin = () => {
  const { googleLogin } = useAuth();

  //   handle google login
  const handleGoogleLogin = () => {
    googleLogin()
      .then()
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <button
      type="button"
      onClick={handleGoogleLogin}
      className="w-full block bg-white hover:bg-gray-100 focus:bg-gray-100 text-gray-900 font-semibold rounded-lg px-4 py-3 border border-gray-300"
    >
      <div className="flex items-center justify-center">
        <FcGoogle />
        <span className="ml-4">Continue with Google</span>
      </div>
    </button>
  );
};

export default SocialLogin;
