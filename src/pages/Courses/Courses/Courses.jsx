import { useLocation, useNavigate } from "react-router-dom";
import CoursesCard from "../../../components/Card/CoursesCard";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import Spinner from "../../../components/Spinner/Spinner";
import { useAuth } from "../../../hooks/useAuth";

import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { toast } from "react-toastify";
import { useState } from "react";
import useAdmin from "../../../hooks/useAdmin";
import useInstructorRole from "../../../hooks/useInstructorRole";
import useCourseApproved from "../../../hooks/useCourseApproved";
import { Helmet } from "react-helmet";

const Courses = () => {
  const { courses, courseLoading } = useCourseApproved();
  const { isAdmin } = useAdmin();
  const { isInstructor } = useInstructorRole();
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const { axiosSecure } = useAxiosSecure();
  const [cardLoading, setCardLoading] = useState(false);
  // handle add to Cart
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
  if (courseLoading) {
    return <Spinner />;
  }
  return (
    <>
      <Helmet>
        <title>FluencyMastery | Courses</title>
      </Helmet>
      <div className="py-12 default-container">
        <SectionTitle
          title="Explore Our Courses"
          subTitle="Expand your knowledge with our diverse selection of courses"
          center={true}
        />
        <div className="px-8 md:px-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses?.length > 0 &&
            courses.map((course) => (
              <CoursesCard
                cardLoading={cardLoading}
                key={course._id}
                handleCart={handleCart}
                courseInfo={course}
                isAdmin={isAdmin}
                isInstructor={isInstructor}
              ></CoursesCard>
            ))}
        </div>
      </div>
    </>
  );
};

export default Courses;
