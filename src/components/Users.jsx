import { useState } from "react";
import { useLoaderData } from "react-router-dom";

const Users = () => {
  const loadedUsers = useLoaderData();
  const [users, setUsers] = useState(loadedUsers);
  console.log(loadedUsers);

  const handleDelete = (id) => {
    //make sure user is confirmed to delete

    fetch(`http://localhost:5000/user/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          console.log("User deleted!");
          // remove the user from the UI!
          // kono ekta jinis sorano mane hocche oita bade baki gula dekhano
          const remainingUsers = users.filter((user) => user._id != id);
          setUsers(remainingUsers);
        }
      });
  };

  return (
    <div>
      <h2>User : {loadedUsers.length}</h2>
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th></th>

              <th>Created At</th>
              <th>Last Logged In</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => {
              return (
                <tr key={user._id}>
                  <th>{user.email}</th>
                  <td>{user.createAt}</td>
                  <td></td>
                  <td>
                    <button
                      onClick={() => {
                        handleDelete(user._id);
                      }}
                      className=" btn"
                    >
                      X
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
