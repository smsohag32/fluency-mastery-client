/* eslint-disable react/no-unescaped-entities */
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";

import { useState } from "react";
import SocialLogin from "../../components/SocialLogin/SocialLogin";
import { useAuth } from "../../hooks/useAuth";

const Login = () => {
  const { userLogin } = useAuth();
  const { loginError, setLoginError } = useState("");

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
    const email = data.email;
    const password = data.password;
  };

  return (
    <div className=" bg-white py-12">
      <section className="flex flex-col default-container md:flex-row min-h-[50vh] items-center">
        <div className="bg-indigo-600 hidden lg:block w-full h-full">
          <img
            src="https://images.unsplash.com/photo-1516841273335-e39b37888115?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=847&q=80"
            alt=""
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
                    required: true,
                  })}
                  type="email"
                  name="email"
                  placeholder="Enter Email Address"
                  className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                  autoFocus
                />
              </div>

              <div className="mt-4">
                <label className="block text-gray-700">Password</label>
                <input
                  {...register("password", {
                    required: true,
                  })}
                  type="password"
                  name="password"
                  placeholder="Enter Password"
                  minLength="6"
                  className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500
                focus:bg-white focus:outline-none"
                />
              </div>
              <button
                type="submit"
                className="w-full block btn-accent  focus: text-white font-semibold rounded-lg
              px-4 py-3 mt-6"
              >
                Log In
              </button>
            </form>

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
