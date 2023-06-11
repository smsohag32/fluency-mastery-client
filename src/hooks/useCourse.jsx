import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import { useAuth } from "./useAuth";

const useCourse = () => {
  const { axiosSecure } = useAxiosSecure();
  const { loading } = useAuth();
  const {
    data: courses = [],
    isLoading: courseLoading,
    refetch,
  } = useQuery({
    queryKey: ["courses"],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure.get("http://localhost:5000/courses");
      return res.data;
    },
  });

  return { courses, courseLoading, refetch };
};

export default useCourse;
