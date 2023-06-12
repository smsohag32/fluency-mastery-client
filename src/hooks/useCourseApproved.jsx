import { useQuery } from "@tanstack/react-query";
import axios from "axios";

// get data in only approved courses
const useCourseApproved = () => {
  const {
    data: courses = [],
    isLoading: courseLoading,
    refetch,
  } = useQuery({
    queryKey: ["courses"],
    queryFn: async () => {
      const res = await axios.get(
        "https://fluencymastery-server.vercel.app/courses/approved"
      );
      return res.data;
    },
  });

  return { courses, courseLoading, refetch };
};

export default useCourseApproved;
