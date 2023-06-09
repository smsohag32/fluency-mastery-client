import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useCourse = () => {
  const {
    data: courses = [],
    isLoading: courseLoading,
    refetch,
  } = useQuery({
    queryKey: ["courses"],
    queryFn: async () => {
      const res = await axios.get("http://localhost:5000/courses");
      return res.data;
    },
  });

  return { courses, courseLoading, refetch };
};

export default useCourse;
