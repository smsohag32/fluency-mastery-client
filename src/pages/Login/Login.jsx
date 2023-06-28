/* eslint-disable react/no-unescaped-entities */
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import loginImage from "../../assets/login/login.svg";

import { useState } from "react";
import SocialLogin from "../../components/SocialLogin/SocialLogin";
import { useAuth } from "../../hooks/useAuth";
import { toast } from "react-toastify";
import IconSpin from "../../components/Spinner/IconSpin";
import PasswordShow from "../../components/Button/PasswordShow";

const Login = () => {
  const { loginUser, loading, setLoading } = useAuth();
  const [loginError, setLoginError] = useState("");
  const [isShow, setIsShow] = useState();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";

  //   react hook from
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  // handle login
  const onSubmit = (data) => {
    setLoginError("");

    const email = data.email;
    const password = data.password;

    // user login
    loginUser(email, password)
      .then((result) => {
        toast.success("Login Successfully");
        reset();
        navigate(from, { replace: true });
      })
      .catch((error) => {
        setLoading(false);
        if (error.message.includes("not-found")) {
          setLoginError("Account not found! Please Sing up now.");
        } else if (error.message.includes("wrong")) {
          setLoginError("Password is not correct.");
        }
      });
  };

  return (
    <div className=" bg-white py-12">
      <section className="flex flex-col default-container md:flex-row min-h-[50vh] items-center">
        <div className=" hidden lg:block w-full h-full">
          <img
            src={loginImage}
            alt="Login"
            className="w-full h-full object-cover"
          />
        </div>

        <div
          className="bg-white w-full md:max-w-md md:w-5/6  lg:max-w-full md:mx-auto  h-full px-6 lg:px-16 xl:px-12
        flex items-center justify-center"
        >
          <div className="w-full h-100">
            <h1 className="text-xl md:text-2xl font-bold text-black opacity-70 leading-tight mt-12">
              Log in to your account
            </h1>
            <p className="text-xs mt-2 text-black">Demo account:</p>
            <p className="text-xs">
              admin: <span className="text-black"> sohag2@gmail </span>
              <span className="">
                password: <span className="text-black"> Sohag1234@</span>
              </span>
            </p>
            <p className="text-xs">
              instructor: <span className="text-black"> sohag3@gmail </span>
              <span className="">
                password: <span className="text-black"> Sohag1234@</span>
              </span>
            </p>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="mt-6"
              action="#"
              method="POST"
            >
              <div>
                <label className="block text-gray-700">Email Address</label>
                <input
                  {...register("email", {
                    required: "This Field is required *",
                  })}
                  type="email"
                  name="email"
                  placeholder="Enter Email Address"
                  className="w-full px-4 py-3 text-black rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                />
                {errors?.email && (
                  <span className="text-red-600 text-sm">
                    <small>{errors.email?.message}</small>
                  </span>
                )}
              </div>

              <div className="mt-4 relative">
                <label className="block text-gray-700">Password</label>
                <input
                  {...register("password", {
                    required: "This field is required",
                  })}
                  type={`${isShow ? "text" : "password"}`}
                  name="password"
                  placeholder="Enter Password"
                  className="w-full px-4 text-black py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500
                focus:bg-white focus:outline-none"
                />
                <PasswordShow isShow={isShow} setIsShow={setIsShow} />
                {errors?.password && (
                  <span className="text-red-600 text-sm">
                    <small>{errors.password?.message}</small>
                  </span>
                )}
              </div>
              <button
                type="submit"
                className="w-full block btn-accent  focus: text-white font-semibold rounded-lg
              px-4 py-3 mt-6"
              >
                {loading ? <IconSpin /> : "Login"}
              </button>
            </form>
            {loginError && (
              <div className="text-center text-orange-700 mt-4">
                <p>
                  <small>{loginError}</small>
                </p>
              </div>
            )}
            <hr className="my-6 border-gray-300 w-full" />

            <SocialLogin />

            <p className="mt-8 text-black">
              Need an account?
              <Link
                to="/register"
                className="text-blue-500 ms-2 hover:text-blue-700 font-semibold"
              >
                Create an account
              </Link>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
