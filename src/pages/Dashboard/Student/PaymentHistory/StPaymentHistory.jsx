import { Helmet } from "react-helmet";
import PageTitle from "../../../../components/PageTitle/PageTitle";
import Spinner from "../../../../components/Spinner/Spinner";
import { useAuth } from "../../../../hooks/useAuth";
import usePaymentHistory from "../../../../hooks/usePaymentHistory";
import { FaDownload } from "react-icons/fa";
import jsPDF from "jspdf";
import "jspdf-autotable";

const StPaymentHistory = () => {
  const { paymentHistory, paymentLoading } = usePaymentHistory();

  if (paymentLoading) {
    return <Spinner />;
  }
  const handlePaymentHistoryDownload = () => {
    const doc = new jsPDF();
    const invoiceTitle = `Invoice - Payment History`;

    // Header
    doc.setFontSize(18);
    doc.text(invoiceTitle, 14, 20);

    // Table
    let startY = 30;
    const headers = ["#", "Course Name", "Price", "Transaction ID", "Status"];

    const data = paymentHistory.map((payment, index) => [
      index + 1,
      payment.course_name,
      `$ ${payment.price} USD`,
      payment.transactionId,
      "Success", // You can adjust the status based on your data
    ]);

    doc?.autoTable({
      startY,
      head: [headers],
      body: data,
      didDrawPage: (hookData) => {
        // Footer
        const pageCount = doc.internal.getNumberOfPages();
        doc.setFontSize(12);
        doc.text(`Page ${doc.internal.getNumberOfPages()}`, 190, doc.internal.pageSize.height - 10);
      },
    });

    // Save and download the PDF
    doc.save(`Invoice_Payment_History.pdf`);
  };

  const handleInvoiceDownload = (payment) => {
    const doc = new jsPDF();
    const invoiceTitle = `Invoice - ${payment.course_name}`;

    // Header
    doc.setFontSize(18);
    doc.text(invoiceTitle, 14, 20);

    // Table
    const headers = ["#", "Course Name", "Price", "Transaction ID", "Status"];
    const data = [[1, payment.course_name, `$ ${payment.price} USD`, payment.transactionId, "Success"]];

    doc.autoTable({
      head: [headers],
      body: data,
      startY: 30,
      didDrawPage: (hookData) => {
        const pageCount = doc.internal.getNumberOfPages();
        doc.setFontSize(12);
        doc.text(`Page ${pageCount}`, 190, doc.internal.pageSize.height - 10);
      },
    });

    // Save and download the PDF
    doc.save(`${invoiceTitle}.pdf`);
  };

  return (
    <div className="p-5">
      <Helmet>
        <title>FluencyMastery | Payment History</title>
      </Helmet>
     <div className="mb-6 flex items-center justify-between gap-6">
     <div className="w-full  whitespace-nowrap">
        <p className="text-[2rem]  font-semibold  ">
          Payment Histor<span className="text-primary">y</span>
        </p>
      </div>
     <div>
     <button onClick={() => handleInvoiceDownload(payment)} className="rounded-full px-6 bg-blue-600 flex items-center justify-center py-2 gap-2 font-bold text-white">Downlaod <FaDownload/></button>
     </div>
     </div>
      <div className="overflow-x-auto">
        <table className="table ">
          {/* head */}
          <thead className="bg-gray-200 text-black font-semibold text-lg">
            <tr>
              <th>#</th>
              <th>Course Name</th>
              <th>Price</th>
              <th>#TransactionId</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {paymentHistory?.length > 0 &&
              paymentHistory.map((payment, index) => (
                <tr key={index}>
                  <th>{index + 1}</th>
                  <th className="">{payment?.course_name}</th>
                  <th className="text-lg font-semibold">
                    $ {payment?.price} <span>USD</span>
                  </th>
                  <th>{payment?.transactionId}</th>
                  <th>
                    <span className="rounded-full px-6 bg-green-600 text-white">Success</span>
                  </th>

                  <th>
                    <button
                      onClick={() => handleInvoiceDownload(payment)}
                      className="rounded-full px-6 bg-blue-600 flex items-center justify-center py-2 text-white">
                      <FaDownload />
                    </button>
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
