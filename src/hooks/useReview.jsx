import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import { useAuth } from "./useAuth";
import axios from "axios";

// all reviews access in only admin

const useReviews = () => {
  const {
    data: reviews = [],
    isLoading: rLoading,
    refetch,
  } = useQuery({
    queryKey: ["reviews"],
    queryFn: async () => {
      const res = await axios.get(
        "https://fluencymastery-server.vercel.app/reviews"
      );
      return res.data;
    },
  });

  return { reviews, rLoading, refetch };
};

export default useReviews;
