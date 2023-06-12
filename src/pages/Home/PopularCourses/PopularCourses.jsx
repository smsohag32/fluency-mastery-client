import { useQuery } from "@tanstack/react-query";
import CoursesCard from "../../../components/Card/CoursesCard";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import axios from "axios";
import Spinner from "../../../components/Spinner/Spinner";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAdmin from "../../../hooks/useAdmin";
import useInstructorRole from "../../../hooks/useInstructorRole";
import { useAuth } from "../../../hooks/useAuth";

const PopularCourses = () => {
  const [cardLoading, setCardLoading] = useState();
  const navigate = useNavigate();
  const { axiosSecure } = useAxiosSecure();
  const { user } = useAuth();
  const { isAdmin } = useAdmin();
  const { isInstructor } = useInstructorRole();

  // popular course data load in db
  const { data: popularCourses = [], isLoading } = useQuery({
    queryKey: ["courses"],
    queryFn: async () => {
      const res = await axios.get(
        "https://fluencymastery-server.vercel.app/courses/popular"
      );
      return res.data;
    },
  });

  // course card handle
  const handleCart = (courseInfo) => {
    setCardLoading(true);
    const courseId = courseInfo?._id;
    delete courseInfo._id;
    const newCart = {
      ...courseInfo,
      courseId,
      student_email: user?.email,
    };

    if (user?.email) {
      axiosSecure.post("/carts", newCart).then((res) => {
        toast.success("Course Add to Cart Success");
        setCardLoading(false);
        if (res.data.insertedId) {
          navigate(`/dashboard/payment/${res?.data?.insertedId}`);
        }
      });
    } else {
      navigate("/login", { state: { from: location } });
      setCardLoading(false);
    }
  };

  return (
    <section className="mb-20">
      <SectionTitle
        subTitle="Limitless learning, more possibilities"
        title="Popular Course"
        center={false}
      />
      <div className="default-container">
        {isLoading ? (
          <Spinner />
        ) : (
          <div className="default-container px-6 md:px-0 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid gap-12">
            {popularCourses?.length > 0 &&
              popularCourses.map((course) => (
                <CoursesCard
                  key={course._id}
                  courseInfo={course}
                  handleCart={handleCart}
                  cardLoading={cardLoading}
                  isAdmin={isAdmin}
                  isInstructor={isInstructor}
                />
              ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default PopularCourses;
