import React, { useState } from 'react';
import usersData from './users';
import SingleUserComponent from './SingleUserComponent';

const AllUsersComponent = () => {
  const [userList, setUserList] = useState(usersData);

  const handleDelete = (id) => {
    const updatedList = userList.filter(user => user.id !== id);
    setUserList(updatedList);
  };

  return (
    <div>
      <h2>All Users</h2>
      <table border="1" cellPadding="8">
        <thead>
          <tr>
            <th>Name</th><th>Email</th><th>Phone</th><th>Address</th><th>Action</th>
          </tr>
        </thead>
        <tbody>
          {userList.map(user => (
            <SingleUserComponent key={user.id} user={user} onDelete={handleDelete} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllUsersComponent;
