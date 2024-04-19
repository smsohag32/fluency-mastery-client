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
  const stripePromise = loadStripe("pk_test_51NEENrEnsmeMvdEkDtvGqdtaMGg0S4boovj3p05tw6PNIbwbVgNuHc7jz69VYoviDnTeDx5TddVFSiL9DADNFotu00GjKR5sEy");

  if (courseLoading && paymentCourse) {
    return <Spinner />;
  }


  console.log(paymentCourse);
  return (
    <div className="p-5">
      <Helmet>
        <title>FluencyMastery | Payment</title>
      </Helmet>
    
    <div>
      <h1 className="text-[2rem] font-semibold">Stripe mayment</h1>
    </div>

      <div className="mt-4">
        <p className="text-[1.5rem]">Course overview and payment details</p>
        <div className=" bg-green-100 text-black justify-between gap-6 flex flex-col-reverse lg:flex-row p-4 mt-4">
         <div className="">
          <p className="text-lg mb-2"> <span>CourseID# </span>{paymentCourse?._id}</p>
         <h1 className="text-xl font-bold">
            Course Name: {paymentCourse?.course_name}
          </h1>
          <h1 className="text-sm mb-4">
            Instructor Name: {paymentCourse?.instructor_name}
          </h1>
          <h1 className="font-bold text-xl">
            Course Price: ${paymentCourse?.price} <span>USD</span>
          </h1>
         </div>

         <div className="">
          <img src={paymentCourse?.course_image} alt="courseImage" />
         </div>
        </div>
        <div className="flex  rounded-xl  items-center justify-center">
          <Elements stripe={stripePromise}>
            <Checkout amount={amount} paymentCourse={paymentCourse} />
          </Elements>
        </div>
      </div>
    </div>
  );
};

export default Payment;
