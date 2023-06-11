/* eslint-disable react/no-unescaped-entities */
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import SocialLogin from "../../components/SocialLogin/SocialLogin";
import { toast } from "react-toastify";
import IconSpin from "../../components/Spinner/IconSpin";
import registerImage from "../../assets/login/register.svg";
import saveUser from "../../apis/users";
import PasswordShow from "../../components/Button/PasswordShow";
const Register = () => {
  const { createUser, userLogout, updateProfileInfo, loading, setLoading } =
    useAuth();
  const [registerError, setRegisterError] = useState("");
  const navigate = useNavigate();
  const [isShow, setIsShow] = useState(false);
  //   react hook form
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    watch,
  } = useForm();
  const password = watch("password", "");

  // handle login
  const onSubmit = (data) => {
    console.log(data);
    const name = data.name;
    const email = data.email;
    const password = data.password;
    const photo = data.photo;

    // create a user
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        updateProfileInfo(name, photo)
          .then(() => {
            saveUser(user);
            userLogout();
            navigate("/login");
            toast.success(`${name} your account create successful`);

            reset();
          })
          .catch((err) => {
            setLoading(false);
          });
      })
      .catch((err) => {
        if (err.message.includes("already")) {
          setRegisterError("Your already have a account please Login");
          setLoading(false);
        }
      });
  };

  return (
    <div className="bg-white py-12">
      <section className="flex default-container flex-col md:flex-row  items-center">
        <div className=" h-full  hidden lg:block w-full ">
          <img src={registerImage} alt="Register" />
        </div>

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
                <label className="block text-gray-900">Name</label>
                <input
                  {...register("name", {
                    required: "This field is required*",
                  })}
                  type="text"
                  name="name"
                  placeholder="Enter Your Name"
                  className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 text-slate-700 focus:bg-white focus:outline-none"
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
                  className="w-full px-4 py-3 rounded-lg text-slate-700  bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
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
                  className="w-full px-4 py-3 text-slate-700  rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                  autoFocus
                />
                {errors?.photo && (
                  <span className="text-red-600 text-sm">
                    <small>{errors.photo?.message}</small>
                  </span>
                )}
              </div>

              <div className="mt-4 relative">
                <label className="block text-gray-700">Password</label>
                <input
                  {...register("password", {
                    required: "This field is required* ",
                    minLength: {
                      value: 6,
                      message: "Password must be at least 6 characters long",
                    },
                    pattern: {
                      value: /^(?=.*[A-Z])(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/,
                      message:
                        "Password must contain at least one capital letter and one special character",
                    },
                  })}
                  type={`${isShow ? "text" : "password"}`}
                  name="password"
                  placeholder="Enter Password"
                  className="w-full px-4 py-3 text-slate-700  rounded-lg bg-gray-200 mt-2 border focus:border-blue-500
                focus:bg-white focus:outline-none"
                />
                <PasswordShow isShow={isShow} setIsShow={setIsShow} />
                {errors?.password && (
                  <span className="text-red-600 text-sm">
                    <small>{errors.password?.message}</small>
                  </span>
                )}
              </div>
              <div className="mt-4 relative">
                <label className="block text-gray-700">Confirm Password</label>
                <input
                  {...register("confirm", {
                    required: "This field is required",
                    validate: (value) =>
                      value === password || "Passwords do not match",
                  })}
                  type={`${isShow ? "text" : "password"}`}
                  name="confirm"
                  placeholder="Enter Confirm Password"
                  className="w-full px-4 py-3 rounded-lg text-slate-700  bg-gray-200 mt-2 border focus:border-blue-500
                focus:bg-white focus:outline-none"
                />
                <PasswordShow isShow={isShow} setIsShow={setIsShow} />
                {errors?.confirm && (
                  <span className="text-red-600 text-sm">
                    <small>{errors.confirm?.message}</small>
                  </span>
                )}
              </div>

              {registerError && (
                <div className="text-center mt-2">
                  <span className="text-sm font-semibold text-red-500 ">
                    {registerError}
                  </span>
                </div>
              )}

              <button
                type="submit"
                className="w-full block btn-accent  focus: text-white font-semibold rounded-lg
              px-4 py-3 mt-6"
              >
                {loading ? <IconSpin /> : "Register"}
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
