import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";

import "./checkout.css";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useAuth } from "../../../hooks/useAuth";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Checkout = ({ amount, paymentCourse }) => {
  const stripe = useStripe();
  const elements = useElements();
  const { user } = useAuth();
  const { axiosSecure } = useAxiosSecure();
  const [clientSecret, setClientSecret] = useState("");
  const [cardError, setCardError] = useState("");
  const [success, setSuccess] = useState("");
  const [transactionId, setTransactionId] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    if (amount > 0) {
      axiosSecure.post("/confirm-payment", { amount }).then((res) => {
        setClientSecret(res.data.clientSecret);
      });
    }
  }, [axiosSecure, amount]);

  // handle payment pay
  const handleSubmit = async (event) => {
    event.preventDefault();
    setCardError("");
    setIsProcessing(true);
    if (!stripe || !elements) {
      setIsProcessing(false);
      return;
    }

    const card = elements.getElement(CardElement);
    if (card === null) {
      setIsProcessing(false);
      return;
    }

    const { error } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    if (error) {
      setCardError(error.message);
      setIsProcessing(false);
    }

    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "unknown",
            name: user?.displayName || "anonymous",
          },
        },
      });

    if (confirmError) {
      setIsProcessing(false);
      setCardError(confirmError.message);
    }
    setIsProcessing(false);
    // save payment information in db
    if (paymentIntent.status === "succeeded") {
      setTransactionId(paymentIntent.id);
      const paymentInfo = {
        student_email: user?.email,
        transactionId: paymentIntent.id,
        courseId: paymentCourse?.courseId,
        cartId: paymentCourse?._id,
        course_name: paymentCourse?.course_name,
        price: amount,
        instructor_name: paymentCourse?.instructor_name,
        date: new Date(),
      };

      axiosSecure.post("/payments", paymentInfo).then((res) => {
        if (res.data.insertedId) {
          card.clear();
          toast.success("Payment successfully complete");
          navigate("/dashboard/payment-history");
        }
      });
    }
  };

  return (
    <form
      className=" p-10 flex w-full flex-col items-center justify-center"
      onSubmit={handleSubmit}
    >
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#fff",
              "::placeholder": {
                color: "#aab7c4",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      />
      <div className="text-center">
        {cardError && <p className="text-warning">{cardError}</p>}
        {success && <p className="text-primary">{success}</p>}
      </div>
      <div className="ms-12">
        <button
          type="submit"
          className="bg-green-400 text-white px-3 rounded-sm py-1"
          disabled={!stripe || isProcessing}
        >
          Confirm Pay
        </button>
      </div>
    </form>
  );
};

export default Checkout;
