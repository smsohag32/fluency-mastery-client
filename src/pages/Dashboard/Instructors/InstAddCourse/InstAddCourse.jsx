import { useForm } from "react-hook-form";
import PageTitle from "../../../../components/PageTitle/PageTitle";
import { useAuth } from "../../../../hooks/useAuth";
import { imageUpload } from "../../../../apis/imageUpload";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { toast } from "react-toastify";
import { useState } from "react";
import IconSpin from "../../../../components/Spinner/IconSpin";
import { Helmet } from "react-helmet";

const InstAddCourse = () => {
  const { user } = useAuth();
  const { axiosSecure } = useAxiosSecure();
  const [loading, setLoading] = useState(false);

  // react hook form
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  // handle to add new course
  const handleAddCourse = (data) => {
    setLoading(true);
    const course_name = data.course_name;
    const image = data.course_image[0];
    imageUpload(image)
      .then((imageData) => {
        // course information
        const newCourse = {
          instructor_name: user?.displayName,
          instructor_email: user?.email,
          course_name,
          course_image: imageData?.data?.display_url,
          available_seats: parseInt(data.available_seats),
          price: parseFloat(data.price),
          enroll: 0,
        };

        // data post to db

        axiosSecure
          .post("/courses", newCourse)
          .then((res) => {
            if (res.data.insertedId) {
              setLoading(false);
              toast.success("Your new course added successful!");
              reset();
            }
          })
          .catch((err) => {
            setLoading(false);
          });
      })
      .catch((err) => {
        setLoading(false);
      });
  };
  return (
    <div>
      <Helmet>
        <title>FluencyMastery | Add Courses</title>
      </Helmet>
      <PageTitle
        title="Add a new courses"
        subTitle="Share Your Knowledge with Passion"
      />
      <div className="shadow-xl py-8 px-4 rounded-md">
        <form onSubmit={handleSubmit(handleAddCourse)}>
          <div className="flex md:gap-4 flex-col md:flex-row">
            <div className="form-control w-full">
              <label className="input-group input-group-vertical">
                <span>Instructor Name</span>
                <input
                  type="text"
                  placeholder="info@site.com"
                  className="input input-bordered"
                  value={user?.displayName}
                  readOnly
                />
              </label>
            </div>
            <div className="form-control w-full mt-4 md:mt-0">
              <label className="input-group input-group-vertical">
                <span>Instructor Email</span>
                <input
                  type="text"
                  className="input input-bordered"
                  value={user?.email}
                  readOnly
                />
              </label>
            </div>
          </div>
          <div className="flex md:gap-4 flex-col md:flex-row">
            <div className="form-control w-full mt-4">
              <label className="input-group input-group-vertical">
                <span>Course Name</span>
                <input
                  {...register("course_name", {
                    required: "This field is required*",
                  })}
                  type="text"
                  placeholder="Enter course name"
                  className="input input-bordered"
                />
                {errors?.course_name && (
                  <span className="text-warning text-sm">
                    <small>{errors.course_name?.message}</small>
                  </span>
                )}
              </label>
            </div>
            <div className="form-control w-full mt-4">
              <label className="input-group input-group-vertical">
                <span>Course Image</span>
                <input
                  {...register("course_image", {
                    required: "This field is required*",
                  })}
                  type="file"
                  name="course_image"
                  accept="image/*"
                  placeholder="info@site.com"
                  className="input input-bordered"
                />
                {errors?.course_image && (
                  <span className="text-warning text-sm">
                    <small>{errors.course_image?.message}</small>
                  </span>
                )}
              </label>
            </div>
          </div>
          <div className="flex md:gap-4 flex-col md:flex-row">
            <div className="form-control w-full mt-4">
              <label className="input-group input-group-vertical">
                <span>Available Seats</span>
                <input
                  {...register("available_seats", {
                    required: "This field is required*",
                  })}
                  name="available_seats"
                  type="number"
                  placeholder="Enter available seats"
                  className="input input-bordered"
                />
                {errors?.available_seats && (
                  <span className="text-warning text-sm">
                    <small>{errors.available_seats?.message}</small>
                  </span>
                )}
              </label>
            </div>
            <div className="form-control w-full mt-4">
              <label className="input-group input-group-vertical">
                <span>Course Price</span>
                <input
                  {...register("price", {
                    required: "This field is required*",
                  })}
                  type="number"
                  name="price"
                  placeholder="Enter price"
                  className="input input-bordered"
                />
                {errors?.price && (
                  <span className="text-warning text-sm">
                    <small>{errors.price?.message}</small>
                  </span>
                )}
              </label>
            </div>
          </div>
          <div className="form-control mt-8">
            <button className="btn btn-sm w-1/2 btn-info">
              {loading ? <IconSpin /> : "Create"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default InstAddCourse;
