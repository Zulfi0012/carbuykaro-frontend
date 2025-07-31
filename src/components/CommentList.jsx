function CommentList({ comments }) {
  return (
    <div>
      <h6 className="mt-4">Comments</h6>
      {comments.length === 0 ? (
        <p className="text-muted">No comments yet.</p>
      ) : (
        comments.map((c) => (
          <div key={c._id} className="mb-3 border p-2 rounded bg-light">
            <small className="text-muted">
              {c.anonymous ? "Anonymous" : c.user?.email || "Guest"}
            </small>
            <p className="mb-1">{c.content}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default CommentList;
