import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useInstructors = () => {
  const {
    data: instructors = [],
    isLoading: inLoading,
    refetch,
  } = useQuery({
    queryKey: ["courses"],
    queryFn: async () => {
      const res = await axios.get("http://localhost:5000/users/instructors");
      return res.data;
    },
  });

  return { instructors, inLoading, refetch };
};

export default useInstructors;
