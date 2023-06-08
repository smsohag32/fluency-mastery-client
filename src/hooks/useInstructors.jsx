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
      const res = await axios.get("/data.json");
      return res.data;
    },
  });

  return { instructors, inLoading, refetch };
};

export default useInstructors;
