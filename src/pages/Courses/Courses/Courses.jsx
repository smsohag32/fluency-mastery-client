import CoursesCard from "../../../components/Card/CoursesCard";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import Spinner from "../../../components/Spinner/Spinner";
import useCourse from "../../../hooks/useCourse";

const Courses = () => {
  const { courses, courseLoading } = useCourse();
  console.log(courses);
  if (courseLoading) {
    return <Spinner />;
  }
  return (
    <div className="py-12 default-container">
      <SectionTitle title="All Courses" center={true} />
      <div className="px-8 md:px-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {courses?.length > 0 &&
          courses.map((course) => (
            <CoursesCard key={course._id} courseInfo={course}></CoursesCard>
          ))}
      </div>
    </div>
  );
};

export default Courses;
