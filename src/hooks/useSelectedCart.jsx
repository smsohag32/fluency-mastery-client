import { useAuth } from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const useSelectedCart = () => {
  const { axiosSecure } = useAxiosSecure();
  const { user, loading } = useAuth();

  const {
    data: selectedCourses = [],
    isLoading: courseLoading,
    refetch,
  } = useQuery({
    queryKey: ["selected", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure.get(`/carts/${user?.email}`);
      return res.data;
    },
  });
  return { courseLoading, selectedCourses, refetch };
};

export default useSelectedCart;
