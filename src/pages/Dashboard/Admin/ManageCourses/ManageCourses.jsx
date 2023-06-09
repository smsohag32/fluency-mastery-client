import Swal from "sweetalert2";
import PageTitle from "../../../../components/PageTitle/PageTitle";
import Spinner from "../../../../components/Spinner/Spinner";
import CourseTr from "../../../../components/Table/CourseTr";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import useCourse from "../../../../hooks/useCourse";
import "./style.css";
import { toast } from "react-toastify";
const ManageCourses = () => {
  const { courses, courseLoading, refetch } = useCourse();
  const { axiosSecure } = useAxiosSecure();

  const handleApprove = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "Do you want to Approve it",
      icon: "success",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure
          .patch(`/courses/${id}`, { status: "approved" })
          .then((data) => {
            console.log(data);
            if (data?.data?.modifiedCount) {
              toast.success("Approved successful");
              refetch();
            }
          });
      }
    });
  };
  // handle course denied
  const handleDenied = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "Do you want to Denied it",
      icon: "success",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure
          .patch(`/courses/${id}`, { status: "denied" })
          .then((data) => {
            console.log(data);
            if (data?.data?.modifiedCount) {
              toast.success("Approved successful");
              refetch();
            }
          });
      }
    });
  };
  // send product feedback
  const handleFeedback = (id) => {
    console.log(id);
  };

  if (courseLoading) {
    return <Spinner />;
  }
  return (
    <div>
      <PageTitle
        title="Course Management"
        subTitle="Empowering You to Shape the Learning Experience"
      ></PageTitle>
      <div className="overflow-x-auto w-full mx-auto overflow-scroll md:max-w-3xl border-2">
        <table className="table">
          {/* head */}
          <thead className="bg-base-200 font-bold">
            <tr>
              <th>#</th>
              <th>Photo</th>
              <th>Course</th>
              <th>Instructor</th>
              <th>Email</th>
              <th>Available Seats</th>
              <th>Price</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody className=" w-full">
            {courses?.length > 0 &&
              courses?.map((course, index) => (
                <CourseTr
                  key={course._id}
                  course={course}
                  handleApprove={handleApprove}
                  handleDenied={handleDenied}
                  handleFeedback={handleFeedback}
                  index={index}
                />
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageCourses;
