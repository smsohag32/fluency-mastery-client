import { Link } from "react-router-dom";

const CoursesCard = ({ courseInfo, handleCart }) => {
  return (
    <div className="shadow-xl w-full border-b-2 rounded-xl group duration-1000 overflow-hidden">
      <div className="card w-full h-full">
        <div className="relative min-h-[40%]  object-contain overflow-hidden bg-cover bg-no-repeat">
          <img
            src={courseInfo?.course_image}
            className="min-w-full object-cover h-60 transition duration-300 ease-in group-hover:scale-x-110"
          ></img>
        </div>
        <div className="card-body">
          <h2 className="card-title text-lg font-bold mb-1">
            {courseInfo?.course_name}
          </h2>
          <div className=" ">
            <p>Instructors by {courseInfo?.instructor_name}</p>
            <h1 className="text-2xl text-orange-400 font-medium opacity-80">
              {courseInfo?.price}
            </h1>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-xs">
              Available Seats : {courseInfo?.available_seats}
            </p>
          </div>
          <div className="w-full mt-6 flex justify-end">
            <Link to={`/dashboard/payment/${courseInfo?._id}`}>
              <button
                onClick={() => handleCart(courseInfo)}
                className="btn btn-sm btn-primary"
              >
                Enroll Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursesCard;
