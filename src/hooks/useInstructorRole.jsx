import { useQuery } from "@tanstack/react-query";
import { useAuth } from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

// instructor role find in db
const useInstructorRole = () => {
  const { loading, user } = useAuth();
  const { axiosSecure } = useAxiosSecure();

  const { data: isInstructor, isLoading: instructorLoading } = useQuery({
    queryKey: ["isInstructor", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/instructor/${user?.email}`);
      return res.data.role;
    },
  });
  return { isInstructor, instructorLoading };
};

export default useInstructorRole;
