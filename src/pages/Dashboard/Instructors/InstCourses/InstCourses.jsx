import { useAuth } from "../../../../hooks/useAuth";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Spinner from "../../../../components/Spinner/Spinner";
import PageTitle from "../../../../components/PageTitle/PageTitle";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const InstCourses = () => {
  const { user, loading } = useAuth();

  const { axiosSecure } = useAxiosSecure();

  const {
    data: courses = [],
    isLoading: courseLoading,
    refetch,
  } = useQuery({
    queryKey: ["courses"],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure.get(`/courses/${user.email}`);
      return res.data;
    },
  });

  // handle to update
  const handleUpdate = (id) => {
    toast.error("Update course information coming soon");
  };

  if (courseLoading) {
    return <Spinner />;
  }
  return (
    <div>
      <PageTitle title="My All courses" subTitle="Result Your Courses" />
      <div>
        <div className="mb-4">
          <Link to="/dashboard/add-courses" className="btn btn-xs primary-btn">
            Add a new Class
          </Link>
        </div>
        <div className="overflow-x-auto">
          <table className="table ">
            {/* head */}
            <thead className="bg-base-200">
              <tr>
                <th>#</th>
                <th>Course Name</th>
                <th>Total Enrolled</th>
                <th>Status</th>
                <th>Action</th>
                <th>Feedback</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {courses?.length > 0 &&
                courses.map((course, index) => (
                  <tr key={index}>
                    <th>{index + 1}</th>
                    <td>{course?.course_name}</td>
                    <td>{(course?.enroll && course?.enroll) || 0}</td>
                    <td className="">
                      {course?.status ? course?.status : <span>pending</span>}
                    </td>
                    <td>
                      <button
                        onClick={handleUpdate}
                        className="btn btn-xs btn-warning"
                      >
                        Edit
                      </button>
                    </td>
                    <td>
                      <p>{course?.feedback ? course?.feedback : ""}</p>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default InstCourses;
