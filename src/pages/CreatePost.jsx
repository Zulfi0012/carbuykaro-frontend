import { useState } from "react";
import API from "../services/api";

function CreatePost() {
  const [form, setForm] = useState({ title: "", content: "", image: "", tags: "", category: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await API.post("/posts", {
        ...form,
        tags: form.tags.split(",").map((t) => t.trim()),
      });
      alert("Post created!");
    } catch (err) {
      alert(err.response?.data?.message || "Failed to create post.");
    }
  };

  return (
    <div className="container py-4">
      <h2>Create New Post</h2>
      <form onSubmit={handleSubmit}>
        <input name="title" className="form-control mb-2" placeholder="Title" onChange={handleChange} />
        <textarea name="content" className="form-control mb-2" rows={5} placeholder="HTML or plain content" onChange={handleChange} />
        <input name="image" className="form-control mb-2" placeholder="Image URL" onChange={handleChange} />
        <input name="tags" className="form-control mb-2" placeholder="Tags (comma separated)" onChange={handleChange} />
        <input name="category" className="form-control mb-2" placeholder="Category" onChange={handleChange} />
        <button className="btn btn-primary">Create</button>
      </form>
    </div>
  );
}

export default CreatePost;
