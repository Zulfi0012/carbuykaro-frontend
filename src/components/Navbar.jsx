import { Link, useNavigate } from "react-router-dom";
import { getToken, logout } from "../services/auth";

const Navbar = () => {
  const token = getToken();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav style={{ padding: "1rem", borderBottom: "1px solid #ccc" }}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          <strong><Link to="/">Carbuykaro</Link></strong>
        </div>
        <div style={{ display: "flex", gap: "1rem" }}>
          <Link to="/">Home</Link>
          <Link to="/posts">Posts</Link>
          <Link to="/videos">Videos</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/privacy">Privacy</Link>

          {token ? (
            <>
              <Link to="/create-post">+ Post</Link>
              <Link to="/create-video">+ Video</Link>
              <button onClick={handleLogout} style={{ cursor: "pointer" }}>Logout</button>
            </>
          ) : (
            <>
              <Link to="/login">Login</Link>
              <Link to="/signup">Signup</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
