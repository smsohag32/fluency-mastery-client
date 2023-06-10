import { useQuery } from "@tanstack/react-query";
import CoursesCard from "../../../components/Card/CoursesCard";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import axios from "axios";
import Spinner from "../../../components/Spinner/Spinner";

const PopularClasses = () => {
  const { data: popularCourses = [], isLoading } = useQuery({
    queryKey: ["courses"],
    queryFn: async () => {
      const res = await axios.get("http://localhost:5000/courses/popular");
      return res.data;
    },
  });
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
          <div className="default-container px-6 md:px-0 grid-cols-1 md:grid-cols-2 grid gap-12">
            {popularCourses?.length > 0 &&
              popularCourses.map((course) => (
                <CoursesCard key={course._id} courseInfo={course} />
              ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default PopularClasses;
