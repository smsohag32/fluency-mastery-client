import { useAuth } from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

// get user payment history
const usePaymentHistory = () => {
  const { axiosSecure } = useAxiosSecure();
  const { user, loading } = useAuth();

  const {
    data: paymentHistory = [],
    isLoading: paymentLoading,
    refetch,
  } = useQuery({
    queryKey: ["selected", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure.get(`/payment-history/${user?.email}`);

      return res.data;
    },
  });
  return { paymentLoading, paymentHistory, refetch };
};

export default usePaymentHistory;
