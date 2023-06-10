import Spinner from "../../../../components/Spinner/Spinner";
import PageTitle from "../../../../components/PageTitle/PageTitle";
import SelectedCourseTr from "../../../../components/Table/SelectedCourseTr";
import useSelectedCart from "../../../../hooks/useSelectedCart";
import { useAuth } from "../../../../hooks/useAuth";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { toast } from "react-toastify";

const StSelectedCourses = () => {
  const { user } = useAuth();
  const { selectedCourses, courseLoading, refetch } = useSelectedCart();
  const { axiosSecure } = useAxiosSecure();

  // handle Delete selected courses
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "Do you want Remove",
      icon: "success",
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

  return (
    <div>
      <PageTitle
        title={`Welcome back ${user?.displayName}`}
        subTitle="Continue to your choose"
      ></PageTitle>
      <div>
        <div className="overflow-x-auto">
          <table className="table ">
            {/* head */}
            <thead className="bg-base-200 font-bold text-sm">
              <tr>
                <th>#</th>
                <th>Course</th>
                <th>Instructor</th>
                <th>Price</th>
                <th>Available</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {selectedCourses?.length > 0 &&
                selectedCourses?.map((course, index) => (
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
