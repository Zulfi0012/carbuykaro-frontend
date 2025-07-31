import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (search.trim()) {
      navigate(`/posts?search=${search}`);
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top shadow-sm">
      <div className="container">
        <Link className="navbar-brand" to="/">Carbuykaro</Link>
        <form className="d-flex ms-auto me-2" onSubmit={handleSearch}>
          <input
            type="text"
            className="form-control me-2"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button className="btn btn-outline-primary" type="submit">Search</button>
        </form>
        <ul className="navbar-nav">
          <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/posts">Posts</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/videos">Videos</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/about">About Us</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/contact">Contact</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/privacy">Privacy</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
