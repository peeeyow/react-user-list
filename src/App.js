import { useState } from "react";
import uuid from "react-uuid";
import UserForm from "./components/Users/UserForm";
import UserList from "./components/Users/UserList";

function App() {
  const [users, setUsers] = useState([
    {
      id: uuid(),
      username: "ako",
      age: 23,
    },
    {
      id: uuid(),
      username: "siya",
      age: 28,
    },
  ]);
  const onAddUserHandler = (userInfo) => {
    setUsers((oldUsers) => {
      userInfo.id = uuid();
      return [userInfo, ...oldUsers];
    });
  };

  return (
    <main>
      <UserForm onAddUser={onAddUserHandler}></UserForm>
      <UserList users={users} />
    </main>
  );
}

export default App;
