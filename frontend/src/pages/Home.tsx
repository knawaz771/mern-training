import { useEffect, useState } from "react";
import api from "../services/api";
import UserForm from "../components/UserForm";
import UserList from "../components/UserList";

function Home() {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    const response = await api.get("/users");
    setUsers(response.data);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>MERN User App</h1>

      <UserForm onUserCreated={fetchUsers} />

      <UserList users={users} />
    </div>
  );
}

export default Home;
