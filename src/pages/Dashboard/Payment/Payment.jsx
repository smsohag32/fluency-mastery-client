import { useParams } from "react-router-dom";
import PageTitle from "../../../components/PageTitle/PageTitle";
import Spinner from "../../../components/Spinner/Spinner";
import useSelectedCart from "../../../hooks/useSelectedCart";

const Payment = () => {
  const { selectedCourses, courseLoading } = useSelectedCart();
  const { id } = useParams();
  console.log(selectedCourses);
  const paymentCourse = selectedCourses?.find((course) => course._id === id);

  const amount = paymentCourse.price;
  console.log(amount);

  if (courseLoading) {
    return <Spinner />;
  }

  return (
    <div>
      <PageTitle title="Payment now" subTitle=""></PageTitle>
      <div className="border-2 border-opacity-30 p-5">
        <div className="text-center">
          <h1>Course Name: {paymentCourse.course_name}</h1>
          <h1>Instructor Name: {paymentCourse.instructor_name}</h1>
          <h1>Course Price: {paymentCourse.price}</h1>
        </div>
      </div>
    </div>
  );
};

export default Payment;
