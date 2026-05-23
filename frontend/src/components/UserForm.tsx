import { useState } from "react";
import api from "../services/api";

function UserForm({ onUserCreated }: any) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    occupation: "",
  });

  const handleChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    await api.post("/users", formData);

    setFormData({
      name: "",
      email: "",
      occupation: "",
    });

    onUserCreated();
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        marginBottom: "40px",
      }}
    >
      <input
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
      />

      <input
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
      />

      <input
        name="occupation"
        placeholder="Occupation"
        value={formData.occupation}
        onChange={handleChange}
      />

      <button type="submit">Create User</button>
    </form>
  );
}

export default UserForm;
