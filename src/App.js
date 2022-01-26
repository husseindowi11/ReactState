import React, { useState } from 'react';

import AddUser from './components/Users/AddUser'
import UsersList from './components/Users/UsersList';


function App() {
  const [users, setUsers] = useState([]);
  const addUserHandler = (username, age) => {
    setUsers((prevUsers,) => {
      return [...prevUsers, {id: Math.random().toString(), username: username, age: age}];
    })
  }
  return (
    <div>
      <AddUser onAddUser={addUserHandler}/>
      <UsersList users={users}/>
    </div>
  );
}

export default App;
