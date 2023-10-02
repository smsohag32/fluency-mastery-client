import { useQuery } from "@tanstack/react-query";
import PageTitle from "../../../../components/PageTitle/PageTitle";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { useAuth } from "../../../../hooks/useAuth";
import SingleEnroll from "./SingleEnroll";

const StEnrolCourses = () => {
  const { axiosSecure } = useAxiosSecure();
  const { user, loading } = useAuth();

  // handle load data in db
  const { data: enrollCourses = [], isLoading: courseLoading } = useQuery({
    queryKey: ["courses"],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure.get(`/courses/payments/${user.email}`);
      return res.data;
    },
  });

  // handle loading
  if (courseLoading) {
    return;
  }

  return (
    <div>
      <PageTitle title="Complete Enroll Courses" subTitle="Success"></PageTitle>
      <div className="overflow-x-auto">
        <table className="table ">
          {/* head */}
          <thead className="bg-base-200 font-bold uppercase text-sm">
            <tr>
              <th>#</th>
              <th>Photo</th>
              <th>Course</th>
              <th>Instructor</th>
              <th>Enroll Date</th>
            </tr>
          </thead>
          <tbody>
            {enrollCourses?.length > 0 &&
              enrollCourses?.map((course, index) => (
                <SingleEnroll
                  key={index}
                  course={course}
                  index={index}
                  courseLoading={courseLoading}
                />
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StEnrolCourses;
