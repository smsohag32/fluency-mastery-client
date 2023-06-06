/* eslint-disable react/no-unescaped-entities */
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import SocialLogin from "../../components/SocialLogin/SocialLogin";
import { toast } from "react-toastify";

const Register = () => {
  const { userCreate } = useAuth();
  const [singUpError, setSingUpError] = useState("");

  //   react hook form
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  // handle login
  const onSubmit = (data) => {
    console.log(data);
    toast.success("clickt");
  };

  return (
    <div className="bg-white py-12">
      <section className="flex flex-col md:flex-row  items-center">
        <div className="bg-indigo-600 h-full  hidden lg:block w-full "></div>

        <div
          className="bg-white md:max-w-md lg:max-w-full md:w-5/6 mx-auto w-full px-6 lg:px-16 xl:px-12
        flex items-center justify-center"
        >
          <div className="w-full h-full">
            <h1 className="text-xl md:text-2xl text-black opacity-70 font-bold leading-tight mt-12">
              Create your first account
            </h1>

            <form onSubmit={handleSubmit(onSubmit)} className="mt-6">
              <div>
                <label className="block text-gray-700">Name</label>
                <input
                  {...register("name", {
                    required: "This field is required*",
                  })}
                  type="text"
                  name="name"
                  placeholder="Enter Your Name"
                  className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                />
                {errors?.name && (
                  <span className="text-red-600 text-sm">
                    <small>{errors.name?.message}</small>
                  </span>
                )}
              </div>
              <div className="mt-4">
                <label className="block text-gray-700">Email Address</label>
                <input
                  {...register("email", {
                    required: "This field is required *",
                  })}
                  type="email"
                  name="email"
                  placeholder="Enter Email Address"
                  className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                  autoFocus
                />
                {errors?.email && (
                  <span className="text-red-600 text-sm">
                    <small>{errors.email?.message}</small>
                  </span>
                )}
              </div>
              <div className="mt-4">
                <label className="block text-gray-700">Photo URL</label>
                <input
                  {...register("photo", {
                    required: "This field is required *",
                  })}
                  type="url"
                  name="photo"
                  placeholder="Enter Photo url"
                  className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                  autoFocus
                />
                {errors?.password && (
                  <span className="text-red-600 text-sm">
                    <small>{errors.password?.message}</small>
                  </span>
                )}
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
              <div className="mt-4">
                <label className="block text-gray-700">Confirm Password</label>
                <input
                  {...register("confirm", {
                    required: true,
                  })}
                  type="confirm"
                  name="password"
                  placeholder="Enter Confirm Password"
                  className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500
                focus:bg-white focus:outline-none"
                />
              </div>

              {singUpError && (
                <div className="text-center mt-2">
                  <span className="text-sm font-semibold text-red-500 ">
                    {singUpError}
                  </span>
                </div>
              )}

              <button
                type="submit"
                className="w-full block btn-accent  focus: text-white font-semibold rounded-lg
              px-4 py-3 mt-6"
              >
                Sing up
              </button>
            </form>

            <hr className="my-6 border-gray-300 w-full" />
            <SocialLogin />

            <p className="mt-8 text-black">
              Already have an account?
              <Link
                to="/login"
                className="text-blue-500 ms-2 hover:text-blue-700 font-semibold"
              >
                Login
              </Link>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Register;
