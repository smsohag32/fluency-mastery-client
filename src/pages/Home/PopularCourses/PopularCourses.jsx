import { useQuery } from "@tanstack/react-query";
import CoursesCard from "../../../components/Card/CoursesCard";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import axios from "axios";
import Spinner from "../../../components/Spinner/Spinner";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAdmin from "../../../hooks/useAdmin";
import useInstructorRole from "../../../hooks/useInstructorRole";
import { useAuth } from "../../../hooks/useAuth";
import useSelectedCart from "../../../hooks/useSelectedCart";

const PopularCourses = () => {
  const [cardLoading, setCardLoading] = useState();
  const navigate = useNavigate();
  const { axiosSecure } = useAxiosSecure();
  const { user } = useAuth();
  const { isAdmin } = useAdmin();
  const { isInstructor } = useInstructorRole();
  const {refetch}= useSelectedCart()

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
        refetch()
      });
    } else {
      navigate("/login", { state: { from: location } });
      setCardLoading(false);
    }
  };

  return (
    <section className="mb-20">
      <div className="mb-8 flex justify-between items-end default-container mt-10">
        <div>
        <p className=" text-[2rem] ">Exclusive Language Learning </p> <br />
        <p className="text-[1.5rem] font-bold">Popular course</p>
        </div>

        <div>
          <Link to={"/courses"} className="text-blue-600 font-bold text-lg px-6 py-2 border border-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300">See More</Link>
        </div>
      </div>
      <div className="default-container">
        {isLoading ? (
          <Spinner />
        ) : (
          <div className="default-container px-6 md:px-0 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid gap-6">
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
