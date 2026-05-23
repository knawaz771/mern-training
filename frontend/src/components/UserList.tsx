function UserList({ users }: any) {
  return (
    <div>
      <h2>Users</h2>

      {users.map((user: any) => (
        <div
          key={user._id}
          style={{
            border: "1px solid #ccc",
            padding: "10px",
            marginBottom: "10px",
          }}
        >
          <h3>{user.name}</h3>

          <p>{user.email}</p>

          <p>{user.occupation}</p>
        </div>
      ))}
    </div>
  );
}

export default UserList;