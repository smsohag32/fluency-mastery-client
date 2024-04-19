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
import imageCompression from "browser-image-compression";
import axios from "axios";
const Register = () => {
  const { createUser, userLogout, updateProfileInfo, loading, setLoading } = useAuth();
  const [registerError, setRegisterError] = useState("");
  const navigate = useNavigate();
  const [photo, setPhoto] = useState("")
  const [isShow, setIsShow] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    watch,
  } = useForm();
  const password = watch("password", "");
  const [photoUrl, setPhotoUrl] = useState(""); // State to hold base64 image data

  const handleFileInputChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      try {
        const options = {
          maxSizeMB: 0.1,
          maxWidthOrHeight: 400,
          useWebWorker: true,
        };

        const compressedFile = await imageCompression(file, options);

        const reader = new FileReader();
        reader.onloadend = () => {
          const base64String = reader.result;
          setPhotoUrl(base64String);
        };
        reader.readAsDataURL(compressedFile);
      } catch (error) {
        console.error("Image compression error:", error);
      }
    }
  };


  // todo 
  const shortUrl = async () => {
    try {
      const response = await axios(
        `https://api.shrtco.de/v2/shorten?url=${photoUrl}`
      );
      setPhoto(response.data.result.full_short_link);
    } catch (e) {
      console.log(e);
    }


  }



  const onSubmit = async (data) => {
    const { name, email, password } = data;
    createUser(email, password)
      .then((result) => {
        saveUser({...result?.user, photoUrl: photo});
        updateProfileInfo(name, photo)
          .then(() => {
            userLogout();
            navigate("/login");
            toast.success(`${name}, your account was created successfully!`);
            reset();
          })
          .catch((err) => {
            console.log(err);
            setLoading(false);
          });
      })
      .catch((err) => {
        console.log(err);
        if (err.message.includes("already")) {
          setRegisterError("You already have an account. Please log in.");
          setLoading(false);
        }
      });
  };

  return (
    <div className="bg-white py-12">
      <section className="flex default-container flex-col md:flex-row  items-center">
        <div className="h-full hidden lg:block w-full">
          <img src={registerImage} alt="Register" />
        </div>

        <div className="bg-white md:max-w-md lg:max-w-full md:w-5/6 mx-auto w-full px-6 lg:px-16 xl:px-12 flex items-center justify-center">
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
                  className="w-full px-4 py-3 rounded-lg text-slate-700 bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                  autoFocus
                />
                {errors?.email && (
                  <span className="text-red-600 text-sm">
                    <small>{errors.email?.message}</small>
                  </span>
                )}
              </div>
              <div className="mt-4">
                <label className="block text-gray-700">Profile Photo</label>
                <input
                  type="file"
                  onChange={(e) => handleFileInputChange(e)}
                  className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                />
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
                  })}
                  type={`${isShow ? "text" : "password"}`}
                  name="password"
                  placeholder="Enter Password"
                  className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                />
                <PasswordShow isShow={isShow} setIsShow={setIsShow} />
                {errors?.password && (
                  <span className="text-red-600 text-sm">
                    <small>{errors.password?.message}</small>
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
                className="w-full block primary-btn focus: text-white font-semibold rounded-lg px-4 py-3 mt-6"
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
