import { useLocation, useNavigate } from "react-router-dom";
import CoursesCard from "../../../components/Card/CoursesCard";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import Spinner from "../../../components/Spinner/Spinner";
import { useAuth } from "../../../hooks/useAuth";
import useCourse from "../../../hooks/useCourse";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { toast } from "react-toastify";

const Courses = () => {
  const { courses, courseLoading } = useCourse();
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const { axiosSecure } = useAxiosSecure();
  // handle add to Cart
  const handleCart = (courseInfo) => {
    const courseId = courseInfo?._id;
    delete courseInfo._id;
    const newCart = {
      ...courseInfo,
      courseId,
      student_email: user?.email,
    };

    if (user?.email) {
      axiosSecure.post("/carts", newCart).then((res) => {
        console.log(res.data);
        toast.success("Course Add to Cart Success");
      });
    } else {
      navigate("/login", { state: { from: location } });
    }
  };
  if (courseLoading) {
    return <Spinner />;
  }
  return (
    <div className="py-12 default-container">
      <SectionTitle title="All Courses" center={true} />
      <div className="px-8 md:px-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {courses?.length > 0 &&
          courses.map((course) => (
            <CoursesCard
              key={course._id}
              handleCart={handleCart}
              courseInfo={course}
            ></CoursesCard>
          ))}
      </div>
    </div>
  );
};

export default Courses;
