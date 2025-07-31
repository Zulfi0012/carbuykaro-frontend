import { useState } from "react";
import API from "../services/api";

function CreateVideo() {
  const [form, setForm] = useState({ title: "", videoUrl: "", thumbnail: "", description: "", category: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await API.post("/videos", form);
      alert("Video created!");
    } catch (err) {
      alert(err.response?.data?.message || "Failed to create video.");
    }
  };

  return (
    <div className="container py-4">
      <h2>Create New Video</h2>
      <form onSubmit={handleSubmit}>
        <input name="title" className="form-control mb-2" placeholder="Title" onChange={handleChange} />
        <input name="videoUrl" className="form-control mb-2" placeholder="YouTube/MP4 URL" onChange={handleChange} />
        <input name="thumbnail" className="form-control mb-2" placeholder="Thumbnail URL" onChange={handleChange} />
        <textarea name="description" className="form-control mb-2" rows={4} placeholder="Description" onChange={handleChange} />
        <input name="category" className="form-control mb-2" placeholder="Category" onChange={handleChange} />
        <button className="btn btn-success">Create</button>
      </form>
    </div>
  );
}

export default CreateVideo;
