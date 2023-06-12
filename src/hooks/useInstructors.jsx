import { useQuery } from "@tanstack/react-query";
import axios from "axios";

// use instructor hook can get all instructors in db
const useInstructors = () => {
  const {
    data: instructors = [],
    isLoading: inLoading,
    refetch,
  } = useQuery({
    queryKey: ["courses"],
    queryFn: async () => {
      const res = await axios.get(
        "https://fluencymastery-server.vercel.app/users/instructors"
      );
      return res.data;
    },
  });

  return { instructors, inLoading, refetch };
};

export default useInstructors;
