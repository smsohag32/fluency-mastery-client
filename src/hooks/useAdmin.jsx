import { useQuery } from "@tanstack/react-query";
import { useAuth } from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

// use admin hook use to get is admin true or false
const useAdmin = () => {
  const { user, loading } = useAuth();
  const { axiosSecure } = useAxiosSecure();
  const { data: isAdmin, isLoading: adminLoading } = useQuery({
    queryKey: ["isAdmin", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/admin/${user?.email}`);
      return res.data.role;
    },
  });
  return { isAdmin, adminLoading };
};

export default useAdmin;
