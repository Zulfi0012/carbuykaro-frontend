import { Link, useNavigate } from "react-router-dom";
import { getToken, logout } from "../services/auth";

const Navbar = () => {
  const token = getToken();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  console.log("Navbar token check →", token); // ✅ Debug: Check if token is detected

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light px-4 py-3">
      <Link className="navbar-brand" to="/">Carbuykaro</Link>

      <ul className="navbar-nav ms-auto d-flex flex-row gap-3">
        <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
        <li className="nav-item"><Link className="nav-link" to="/posts">Posts</Link></li>
        <li className="nav-item"><Link className="nav-link" to="/videos">Videos</Link></li>
        <li className="nav-item"><Link className="nav-link" to="/about">About</Link></li>
        <li className="nav-item"><Link className="nav-link" to="/contact">Contact</Link></li>
        <li className="nav-item"><Link className="nav-link" to="/privacy">Privacy</Link></li>

        {token ? (
          <>
            <li className="nav-item"><Link className="nav-link" to="/create-post">+ Post</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/create-video">+ Video</Link></li>
            <li className="nav-item">
              <button className="btn btn-link nav-link" onClick={handleLogout}>Logout</button>
            </li>
          </>
        ) : (
          <>
            <li className="nav-item"><Link className="nav-link" to="/login">Login</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/signup">Signup</Link></li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
