import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-light border-top mt-5 pt-4 pb-2">
      <div className="container d-flex flex-column align-items-center">
        <div className="mb-2">
          <Link className="mx-2" to="/">Home</Link>
          <Link className="mx-2" to="/posts">Posts</Link>
          <Link className="mx-2" to="/videos">Videos</Link>
          <Link className="mx-2" to="/about">About</Link>
          <Link className="mx-2" to="/contact">Contact</Link>
          <Link className="mx-2" to="/privacy">Privacy</Link>
        </div>
        <form className="d-flex mb-2">
          <input type="text" className="form-control me-2" placeholder="Search..." />
          <button className="btn btn-outline-secondary">Search</button>
        </form>
        <small className="text-muted">&copy; {new Date().getFullYear()} Carbuykaro</small>
      </div>
    </footer>
  );
}

export default Footer;
