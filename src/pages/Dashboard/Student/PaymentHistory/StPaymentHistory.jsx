import { Helmet } from "react-helmet";
import PageTitle from "../../../../components/PageTitle/PageTitle";
import Spinner from "../../../../components/Spinner/Spinner";
import { useAuth } from "../../../../hooks/useAuth";
import usePaymentHistory from "../../../../hooks/usePaymentHistory";

const StPaymentHistory = () => {
  const { user } = useAuth();
  const { paymentHistory, paymentLoading } = usePaymentHistory();

  if (paymentLoading) {
    return <Spinner />;
  }
  return (
    <div>
      <Helmet>
        <title>FluencyMastery | Payment History</title>
      </Helmet>
      <PageTitle
        subTitle={`Hi! ${user?.displayName}`}
        title="Your Payment History"
      ></PageTitle>
      <div className="overflow-x-auto">
        <table className="table ">
          {/* head */}
          <thead className="bg-base-200">
            <tr>
              <th>#</th>
              <th>Course Name</th>
              <th>Price</th>
              <th>TransactionId</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {paymentHistory?.length > 0 &&
              paymentHistory.map((payment, index) => (
                <tr key={index}>
                  <th>{index + 1}</th>
                  <th>{payment?.course_name}</th>
                  <th>{payment?.price}</th>
                  <th>{payment?.transactionId}</th>
                  <th>
                    <span className="text-success">Success</span>
                  </th>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StPaymentHistory;
