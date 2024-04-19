import { FaMoneyBill } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";

const SelectedCourseTr = ({ course, index, handleDelete }) => {
  return (
    <tr className="border-b-2 border-gray-200">
      <td>{index + 1}</td>
      <td className="text-blue-600 font-semibold cursor-pointer">{course?.course_name}</td>
      <td>{course?.instructor_name}</td>
     
      <td>
        {course?.available_seats} <span className="text-opacity-20">seats</span>
      </td>
      <td className="text-gray-600 text-lg font-bold">$ {course?.price} USD</td>
      <td>
        <div className="flex flex-col justify-center gap-4">
          <div className="flex items-center">
         
          </div>
          <Link
            to={`/dashboard/payment/${course?._id}`}
            className="px-6 py-1 flex items-center justify-center gap-2 text-white bg-green-600 rounded-full"
          >
          <FaMoneyBill/>  Pay
          </Link>
          <button
            onClick={() => handleDelete(course?._id)}
            className="px-6 py-1 flex items-center justify-center gap-2 text-white bg-orange-600 rounded-full"
          >
           <MdDelete/> Remove
          </button>
        </div>
      </td>
    </tr>
  );
};

export default SelectedCourseTr;
