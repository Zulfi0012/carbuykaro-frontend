import { useState } from "react";
import API from "../services/api";

function Signup() {
  const [form, setForm] = useState({ name: "", email: "", password: "", role: "author" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await API.post("/auth/signup", form);
      alert("Signup successful. You can now login.");
    } catch (err) {
      alert("Signup failed");
    }
  };

  return (
    <div className="container py-4">
      <h2>Signup</h2>
      <form onSubmit={handleSubmit}>
        <input name="name" className="form-control mb-2" placeholder="Name" onChange={handleChange} />
        <input name="email" className="form-control mb-2" placeholder="Email" onChange={handleChange} />
        <input name="password" type="password" className="form-control mb-2" placeholder="Password" onChange={handleChange} />
        <select name="role" className="form-control mb-2" onChange={handleChange}>
          <option value="author">Author</option>
          <option value="viewer">Viewer</option>
        </select>
        <button className="btn btn-success">Signup</button>
      </form>
    </div>
  );
}

export default Signup;
