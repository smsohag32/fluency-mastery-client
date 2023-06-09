import { Link } from "react-router-dom";

const SelectedCourseTr = ({ course, index, handleDelete }) => {
  return (
    <tr>
      <td>{index + 1}</td>
      <td>{course?.course_name}</td>
      <td>{course?.instructor_name}</td>
      <td>${course?.price}</td>
      <td>
        {course?.available_seats} <span className="text-opacity-20">seats</span>
      </td>
      <td>
        <div className="flex flex-col gap-4">
          <Link
            to={`/dashboard/payment/${course?._id}`}
            className="btn btn-xs btn-success"
          >
            Pay
          </Link>
          <button
            onClick={() => handleDelete(course)}
            className="btn btn-xs btn-warning"
          >
            Delete
          </button>
        </div>
      </td>
    </tr>
  );
};

export default SelectedCourseTr;
