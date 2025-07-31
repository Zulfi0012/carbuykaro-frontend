import { Link } from "react-router-dom";

function PostCard({ post }) {
  return (
    <div className="card h-100">
      {post.image && <img src={post.image} className="card-img-top" alt={post.title} />}
      <div className="card-body">
        <h5 className="card-title">{post.title}</h5>
        <p className="card-text">{post.content?.substring(0, 100)}...</p>
        <p className="badge bg-secondary">{post.category}</p>
        <Link to={`/post/${post._id}`} className="btn btn-primary mt-2">Read More</Link>
      </div>
    </div>
  );
}

export default PostCard;
