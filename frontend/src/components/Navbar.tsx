import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      style={{
        padding: "20px",
        borderBottom: "1px solid #ccc",
        display: "flex",
        gap: "20px",
      }}
    >
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </nav>
  );
}

export default Navbar;
