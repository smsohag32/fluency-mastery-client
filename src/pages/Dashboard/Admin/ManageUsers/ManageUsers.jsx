import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import Spinner from "../../../../components/Spinner/Spinner";
import { useAuth } from "../../../../hooks/useAuth";
import UsersTr from "../../../../components/Table/UsersTr";
import Swal from "sweetalert2";
import { toast } from "react-toastify";
import PageTitle from "../../../../components/PageTitle/PageTitle";
import { Helmet } from "react-helmet";

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

  if (usersLoading) {
    return <Spinner />;
  }
  // make admin
  const handleMakeAdmin = (email) => {
    Swal.fire({
      title: "Are you sure?",
      text: "Do you want to make admin",
      icon: "success",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.patch(`/users/${email}`, { role: "admin" }).then((data) => {
          if (data?.data?.modifiedCount) {
            toast.success("User Make Admin Successful");
            refetch();
          }
        });
      }
    });
  };

  // make instructor
  const handleMakeInstructor = (email) => {
    Swal.fire({
      title: "Are you sure?",
      text: "Do you want to make Instructor",
      icon: "success",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure
          .patch(`/users/${email}`, { role: "instructor" })
          .then((data) => {
            if (data?.data?.modifiedCount) {
              toast.success("Make instructor successful");
              refetch();
            }
          });
      }
    });
  };

  // handle delete
  const handleDelete = (email) => {
    Swal.fire({
      title: "Are you sure?",
      text: "Do you delete user",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/users/${email}`).then((data) => {
          if (data?.data?.deletedCount) {
            toast.success("User Deleted successful");
            refetch();
          }
        });
      }
    });
  };

  return (
    <div>
      <Helmet>
        <title>Manage Users | Fluency</title>
      </Helmet>
      <PageTitle title="Manage Users" subTitle="Look forward"></PageTitle>
      <div className="overflow-x-auto">
        <table className="table ">
          {/* head */}
          <thead className="bg-base-200 font-bold text-sm">
            <tr>
              <th>#</th>
              <th>Photo</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users?.length > 0 &&
              users?.map((singleUser, index) => (
                <UsersTr
                  key={singleUser._id}
                  index={index}
                  singleUser={singleUser}
                  handleDelete={handleDelete}
                  handleMakeAdmin={handleMakeAdmin}
                  handleMakeInstructor={handleMakeInstructor}
                />
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUsers;
