import Swal from "sweetalert2";
import PageTitle from "../../../../components/PageTitle/PageTitle";
import Spinner from "../../../../components/Spinner/Spinner";
import CourseTr from "../../../../components/Table/CourseTr";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import useCourse from "../../../../hooks/useCourse";
import "./style.css";
import { toast } from "react-toastify";
import { useState } from "react";
import FeedbackModal from "../../../../components/Modal/FeedbackModal";
import { Helmet } from "react-helmet";

const ManageCourses = () => {
  const { courses, courseLoading, refetch } = useCourse();
  const { axiosSecure } = useAxiosSecure();
  const [isOpen, setIsOpen] = useState(false);
  const [singleCourse, setSingleCourse] = useState([]);
  const closeModal = () => {
    setIsOpen(false);
  };

  //   handle approve
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
            if (data?.data?.modifiedCount) {
              toast.success("Approved successful");
              refetch();
            }
          });
      }
    });
  };

  // send course  feedback for denied
  const handleFeedback = (course) => {
    setSingleCourse(course);
  };

  const handleDenied = (id, message) => {
    if (message) {
      axiosSecure
        .patch(`/courses/feedback/${id}`, { message })
        .then((res) => {
          if (res?.data?.modifiedCount) {
            axiosSecure
              .patch(`/courses/${id}`, { status: "denied" })
              .then((data) => {
                if (data?.data?.modifiedCount) {
                  toast.success("Course Denied Successful");
                  refetch();
                  setIsOpen(false);
                }
              });
          } else {
            toast.error("Try to next time");
          }
        })
        .catch((err) => {
          toast("something went wrong");
        });
    } else {
      toast.error("Please type message");
    }
  };

  // handle loading
  if (courseLoading) {
    return <Spinner />;
  }
  return (
    <div>
      <Helmet>
        <title>Manage Courses | Fluency</title>
      </Helmet>
      <PageTitle
        title="Course Management"
        subTitle="Empowering You to Shape the Learning Experience"
      ></PageTitle>
      <div className=" table-container w-full mx-auto overflow-x-scroll ">
        <table className="table">
          {/* head */}
          <thead className="bg-base-200 font-bold">
            <tr>
              <th>#</th>
              <th>Photo</th>
              <th>Course</th>
              <th>Instructor</th>
              <th>Email</th>
              <th>Seats</th>
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
                  handleFeedback={handleFeedback}
                  index={index}
                  setIsOpen={setIsOpen}
                />
              ))}
          </tbody>
        </table>
      </div>
      <FeedbackModal
        isOpen={isOpen}
        closeModal={closeModal}
        handleFeedback={handleFeedback}
        course={singleCourse}
        handleDenied={handleDenied}
      />
    </div>
  );
};

export default ManageCourses;
