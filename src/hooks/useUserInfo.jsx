import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import { useAuth } from "./useAuth";

// all courses access in only admin

const useUserInfo = () => {
  const { axiosSecure } = useAxiosSecure();
  const { loading } = useAuth();
  const {
    data: userInfo = [],
    isLoading: uLoading,
    refetch,
  } = useQuery({
    queryKey: ["userInfo"],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure.get(
        "https://fluencymastery-server.vercel.app/userInfo"
      );
      return res.data;
    },
  });

  return { userInfo, uLoading, refetch };
};

export default useUserInfo;
