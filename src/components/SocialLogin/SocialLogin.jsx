import { FcGoogle } from "react-icons/fc";
import { useAuth } from "../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import saveUser from "../../apis/users";

const SocialLogin = () => {
  const { googleLogin, updateProfileInfo, setLoading } = useAuth();
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";
  const navigate = useNavigate();
  //   handle google login
  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        const loggedUser = result.user;
        updateProfileInfo(loggedUser.displayName, loggedUser.photoURL)
          .then(() => {
            saveUser(loggedUser);
            navigate(from, { replace: true });
          })
          .then((err) => setLoading(false));
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
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
