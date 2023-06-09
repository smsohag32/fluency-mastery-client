import Spinner from "../../../../components/Spinner/Spinner";
import PageTitle from "../../../../components/PageTitle/PageTitle";
import SelectedCourseTr from "../../../../components/Table/SelectedCourseTr";
import useSelectedCart from "../../../../hooks/useSelectedCart";
import { useAuth } from "../../../../hooks/useAuth";

const StSelectedCourses = () => {
  const { user } = useAuth();
  const { selectedCourses, courseLoading } = useSelectedCart();

  // handle Delete selected courses
  const handleDelete = (id) => {
    console.log(id);
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
