import { useParams } from "react-router-dom";
import PageTitle from "../../../components/PageTitle/PageTitle";
import Spinner from "../../../components/Spinner/Spinner";
import useSelectedCart from "../../../hooks/useSelectedCart";
import Checkout from "./Checkout";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { Helmet } from "react-helmet";

const Payment = () => {
  const { selectedCourses, courseLoading } = useSelectedCart();
  const { id } = useParams();
  const paymentCourse = selectedCourses?.find((course) => course._id === id);

  const amount = paymentCourse?.price;
  console.log(amount);

  // stipe Promise
  const stripePromise = loadStripe(import.meta.env.VITE_PUBLISHABLE_KEY);

  if (courseLoading && paymentCourse) {
    return <Spinner />;
  }

  return (
    <div>
      <Helmet>
        <title>FluencyMastery | Payment</title>
      </Helmet>
      <PageTitle title="Payment now" subTitle=""></PageTitle>
      <div className="border-2 border-opacity-30 p-5">
        <div className="text-center">
          <h1>Course Name: {paymentCourse?.course_name}</h1>
          <h1>Instructor Name: {paymentCourse?.instructor_name}</h1>
          <h1>Course Price: {paymentCourse?.price}</h1>
        </div>
        <div className="flex w-3/4 mx-auto items-center justify-center">
          <Elements stripe={stripePromise}>
            <Checkout amount={amount} paymentCourse={paymentCourse} />
          </Elements>
        </div>
      </div>
    </div>
  );
};

export default Payment;
