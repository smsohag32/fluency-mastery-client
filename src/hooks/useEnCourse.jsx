import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import { useAuth } from "./useAuth";

// all courses access in only admin

const useEnCourse = ({ courseId }) => {
  const { axiosSecure } = useAxiosSecure();
  const { loading } = useAuth();
  console.log(courseId);
  const {
    data: enCourse = [],
    isLoading: eLoading,
    refetch,
  } = useQuery({
    queryKey: ["enCourse"],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure.get(`/courses/${courseId}`);
      return res.data;
    },
  });

  return { enCourse, eLoading, refetch };
};

export default useEnCourse;
