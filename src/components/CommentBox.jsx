import { useState } from "react";
import API from "../services/api";

function CommentBox({ type, id, onComment }) {
  const [content, setContent] = useState("");
  const [anonymous, setAnonymous] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!content.trim()) return;
    try {
      const res = await API.post("/comments", {
        content,
        targetType: type,
        targetId: id,
        anonymous,
      });
      onComment(res.data);
      setContent("");
    } catch (err) {
      alert(err.response?.data?.message || "Comment failed");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-3">
      <textarea
        className="form-control mb-2"
        rows={3}
        placeholder="Write a comment (no links allowed)..."
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <div className="form-check mb-2">
        <input
          className="form-check-input"
          type="checkbox"
          checked={anonymous}
          onChange={(e) => setAnonymous(e.target.checked)}
          id="anon"
        />
        <label className="form-check-label" htmlFor="anon">Post as anonymous</label>
      </div>
      <button type="submit" className="btn btn-secondary">Submit</button>
    </form>
  );
}

export default CommentBox;
