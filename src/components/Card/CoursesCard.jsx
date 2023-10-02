import { Fade, Flip, Zoom } from "react-reveal";
const CoursesCard = ({
  courseInfo,
  cardLoading,
  handleCart,
  isAdmin,
  isInstructor,
}) => {
  return (
    <div className="shadow-xl w-full border-b-2 border-gray-300 group duration-1000 overflow-hidden">
      <div className="card w-full h-full">
        <div className="relative min-h-[40%]  object-contain overflow-hidden bg-cover bg-no-repeat">
          <Zoom>
            <img
              src={courseInfo?.course_image}
              className="min-w-full object-cover h-60 transition duration-300 ease-in group-hover:scale-x-110"
            ></img>
          </Zoom>
          {courseInfo?.available_seats == 0 && (
            <div className="badge font-bold leading-relaxed badge-warning absolute top-0 right-0">
              <span>Seats Full</span>
            </div>
          )}
        </div>
        <div className="card-body">
          <Flip right>
            <h2 className=" text-xl font-bold leading-tight">
              {courseInfo?.course_name}
            </h2>
          </Flip>
          <p className="mb-2 text-sm">
            Instructor: {courseInfo?.instructor_name}
          </p>
          <div className="">
            <h1 className="text-2xl text-orange-400 font-medium opacity-80">
              Price: $ {courseInfo?.price}
            </h1>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-lg text-warning">
              <span className="text-primary text-sm mr-1">
                Available Seats:
              </span>
              {courseInfo?.available_seats}
            </p>
          </div>
          <div className="w-full mt-6 flex justify-end">
            <button
              onClick={() => handleCart(courseInfo)}
              className=" w-full primary-btn text-white uppercase"
              disabled={
                isInstructor ||
                isAdmin ||
                courseInfo?.available_seats == 0 ||
                cardLoading
              }
            >
              Enroll Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursesCard;
