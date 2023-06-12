const UsersTr = ({
  singleUser,
  index,
  handleMakeInstructor,
  handleDelete,
  handleMakeAdmin,
}) => {
  return (
    <tr>
      <td>{index + 1}</td>
      <td>
        {singleUser?.image ? (
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={singleUser.image} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
        ) : (
          <span>not found</span>
        )}
      </td>
      <td>{singleUser?.name}</td>
      <td>{singleUser?.email}</td>
      <td>{singleUser?.role || "student"}</td>
      <td>
        <div className="flex flex-col gap-4">
          <button
            disabled={singleUser?.role === "admin"}
            onClick={() => handleMakeAdmin(singleUser?.email)}
            className="btn btn-xs btn-info"
          >
            Make Admin
          </button>
          <button
            disabled={singleUser?.role === "instructor"}
            onClick={() => handleMakeInstructor(singleUser?.email)}
            className="btn btn-xs btn-info"
          >
            Make Instructor
          </button>
          <button
            onClick={() => handleDelete(singleUser?.email)}
            className="btn btn-xs btn-warning"
          >
            Delete
          </button>
        </div>
      </td>
    </tr>
  );
};

export default UsersTr;
