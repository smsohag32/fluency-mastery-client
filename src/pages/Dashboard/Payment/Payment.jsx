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
      <PageTitle
        title="Secure Payment"
        subTitle="Complete your Enroll with confidence"
      ></PageTitle>
      <div className="">
        <div className="max-w-md mt-4 mx-auto">
          <h1 className="text-xl font-bold">
            Course Name: {paymentCourse?.course_name}
          </h1>
          <h1 className="text-sm mb-4">
            Instructor Name: {paymentCourse?.instructor_name}
          </h1>
          <h1 className="font-bold text-lg text-warning">
            Course Price: ${paymentCourse?.price}
          </h1>
        </div>
        <div className="flex  rounded-xl md:my-8  items-center justify-center">
          <Elements stripe={stripePromise}>
            <Checkout amount={amount} paymentCourse={paymentCourse} />
          </Elements>
        </div>
      </div>
    </div>
  );
};

export default Payment;
