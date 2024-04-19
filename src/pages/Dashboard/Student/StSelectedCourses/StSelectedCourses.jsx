import Spinner from "../../../../components/Spinner/Spinner";
import SelectedCourseTr from "../../../../components/Table/SelectedCourseTr";
import useSelectedCart from "../../../../hooks/useSelectedCart";

import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { toast } from "react-toastify";
import { useState } from "react";

const StSelectedCourses = () => {
  const { selectedCourses, courseLoading, refetch } = useSelectedCart();
  const { axiosSecure } = useAxiosSecure();
  const [searchText, setSearchText] = useState("")
  // handle Delete selected courses
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "Do you want Remove",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed) {
        if (id) {
          axiosSecure.delete(`/carts/${id}`).then((res) => {
            if (res?.data?.deletedCount > 0) {
              refetch();
              toast.success("Deleted Successful");
            }
          });
        }
      }
    });
  };

  if (courseLoading) {
    return <Spinner />;
  }
  const filteredCourses = selectedCourses.filter((course) => {
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
    <div>
      <div className="flex justify-between gap-2 flex-col lg:flex-row p-6">
      <div className="w-full  whitespace-nowrap">
        <p className="text-[2rem] font-semibold text-gray-700">My Cart</p>
      </div>
      <div className="w-full flex items-end justify-end">
        <input onChange={(e) => setSearchText(e.target.value)} type="text" placeholder="Search...." className="px-6 py-2 outline-none rounded-[2rem] border border-gray-200 focus:ring focus:ring-green-600" />
      </div>
      </div>
      <div className="p-6 border border-gray-100">
        <div className="overflow-auto">
          <table className="table ">
            {/* head */}
            <thead className="bg-gray-200 text-black  font-bold text-lg">
              <tr>
                <th>#</th>
                <th>Course</th>
                <th>Instructor</th>
                <th>Available</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredCourses?.length > 0 &&
                filteredCourses?.map((course, index) => (
                  <SelectedCourseTr
                    key={course?._id}
                    course={course}
                    handleDelete={handleDelete}
                    index={index}
                  />
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default StSelectedCourses;
