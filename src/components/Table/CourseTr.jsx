const CourseTr = ({
  course,
  index,
  handleFeedback,
  handleDenied,
  handleApprove,
  setIsOpen,
}) => {
  return (
    <tr className="text-xs">
      <td>{index + 1}</td>
      <td>
        {course?.course_image ? (
          <div className="avatar">
            <div className="mask mask-squircle w-10 h-10">
              <img src={course?.course_image} alt="Course" />
            </div>
          </div>
        ) : (
          <span>not found</span>
        )}
      </td>
      <td>{course?.course_name}</td>
      <td>{course?.instructor_name}</td>
      <td className="text-xs">{course?.instructor_email}</td>
      <td>{course?.instructor_available_seats || 0}</td>
      <td>$ {course?.price || 0}</td>
      <td className="font-bold">{course?.status || "pending"}</td>

      <td>
        <div className="flex flex-col gap-2">
          <button
            onClick={() => handleApprove(course?._id)}
            className="btn btn-xs btn-success"
          >
            Approve
          </button>
          <button
            onClick={() => handleDenied(course?._id)}
            className="btn btn-xs btn-warning"
          >
            Deny
          </button>
          <button
            onClick={() => {
              setIsOpen(true), handleFeedback(course);
            }}
            className="btn btn-xs btn-info"
          >
            Feedback
          </button>
        </div>
      </td>
    </tr>
  );
};

export default CourseTr;
