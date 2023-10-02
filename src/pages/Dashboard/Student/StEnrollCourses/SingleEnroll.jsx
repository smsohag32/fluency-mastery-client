import React from "react";
import useEnCourse from "../../../../hooks/useEnCourse";

const SingleEnroll = ({ course, index }) => {
  const courseId = course?.courseId || "";

  if (!courseId) {
    return;
  }
  console.log(courseId);
  const { enCourse, eLoading } = useEnCourse({ courseId });

  if (eLoading) {
    return;
  }

  const originalDate = new Date(course?.date);

  const year = originalDate.getFullYear();
  const month = String(originalDate.getMonth() + 1).padStart(2, "0");
  const day = String(originalDate.getDate()).padStart(2, "0");
  const hours = String(originalDate.getHours()).padStart(2, "0");
  const minutes = String(originalDate.getMinutes()).padStart(2, "0");

  const formattedDate = `${year}-${month}-${day} (${hours}:${minutes})`;

  return (
    <tr key={course?._id}>
      <th>{index + 1}</th>
      <td>
        <img src={enCourse?.course_image} className="h-32" alt="" />
      </td>
      <td>{course?.course_name}</td>
      <td>{course?.instructor_name}</td>
      <td>{formattedDate}</td>
    </tr>
  );
};

export default SingleEnroll;
