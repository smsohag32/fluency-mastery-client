import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import axios from "axios";
import Spinner from "../../../../components/Spinner/Spinner";
import { useAuth } from "../../../../hooks/useAuth";
import SectionTitle from "../../../../components/SectionTitle/SectionTitle";

const ManageUsers = () => {
  const { loading } = useAuth();
  const { axiosSecure } = useAxiosSecure();
  const {
    data: users = [],
    isLoading: usersLoading,
    refetch,
  } = useQuery({
    queryKey: ["users"],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });

  console.log(users);
  if (usersLoading) {
    return <Spinner />;
  }
  return (
    <div>
      <SectionTitle title="Manage User" center={true}></SectionTitle>
    </div>
  );
};

export default ManageUsers;
