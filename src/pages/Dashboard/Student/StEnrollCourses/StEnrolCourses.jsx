import { useQuery } from "@tanstack/react-query";
import PageTitle from "../../../../components/PageTitle/PageTitle";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { useAuth } from "../../../../hooks/useAuth";
import SingleEnroll from "./SingleEnroll";
import { useState } from "react";
import Spinner from "../../../../components/Spinner/Spinner";

const StEnrolCourses = () => {
  const { axiosSecure } = useAxiosSecure();
  const { user, loading } = useAuth();
  const [searchText, setSearchText] = useState("")
  // handle load data in db
  const { data: enrollCourses = [], isLoading: courseLoading } = useQuery({
    queryKey: ["courses"],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure.get(`/courses/payments/${user.email}`);
      return res.data;
    },
  });

  const filteredCourses = enrollCourses?.filter((course) => {
    const instructorName = course?.instructor_name?.toLowerCase();
    const instructorEmail = course?.instructor_email?.toLowerCase();
    const courseName = course?.course_name?.toLowerCase();
    const searchLowerCase = searchText?.toLowerCase();

    return (
      instructorName?.includes(searchLowerCase) ||
      instructorEmail?.includes(searchLowerCase) ||
      courseName?.includes(searchLowerCase)
    );
  });

  return (
    <div className="p-5">
     <div className="flex justify-between gap-2 flex-col lg:flex-row mb-6">
        <div className="w-full  whitespace-nowrap">
          <p className="text-[2rem]  font-semibold  ">My Enrollment courses</p>
        </div>
        <div className="w-full flex items-end justify-end">
          <input
            onChange={(e) => setSearchText(e.target.value)}
            type="text"
            placeholder="Search...."
            className="px-6 py-2 outline-none rounded-[2rem] border border-gray-200 focus:ring focus:ring-green-600"
          />
        </div>
      </div>

      {courseLoading ? <Spinner/> :  <div className="overflow-x-auto">
        <table className="table ">
          {/* head */}
          <thead className="bg-gray-200 text-gray-900 font-bold uppercase text-sm">
            <tr>
              <th>#</th>
              <th>Photo</th>
              <th>Course</th>
              <th>Instructor</th>
              <th>Enroll Date</th>
            </tr>
          </thead>
          <tbody>
            {filteredCourses?.length > 0 &&
              filteredCourses?.map((course, index) => (
                <SingleEnroll
                  key={index}
                  course={course}
                  index={index}
                  courseLoading={courseLoading}
                />
              ))}
          </tbody>
        </table>
      </div>}
     
    </div>
  );
};

export default StEnrolCourses;
