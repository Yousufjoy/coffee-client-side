import { useLoaderData } from "react-router-dom";

const Users = () => {
  const loadedUsers = useLoaderData();
  console.log(loadedUsers);
  return (
    <div>
      <h2>User : {loadedUsers.length}</h2>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>

              <th>Created At</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {loadedUsers.map((user) => {
              return (
                <tr key={user._id}>
                  <th>{user.email}</th>
                  <td>{user.createAt}</td>

                  <td>Blue</td>
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
