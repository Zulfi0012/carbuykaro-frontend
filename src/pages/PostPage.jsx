import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const PostPage = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    fetch(`https://carbuykaro-backend.onrender.com/api/posts/${id}`)
      .then((res) => res.json())
      .then((data) => setPost(data))
      .catch((err) => console.error("Error fetching post:", err));
  }, [id]);

  if (!post) return <div className="text-center">Loading post...</div>;

  return (
    <div className="container">
      <h1 className="mb-3">{post.title}</h1>
      {post.imageUrl && (
        <img
          src={post.imageUrl}
          alt={post.title}
          className="img-fluid mb-4"
          style={{ maxHeight: "400px", objectFit: "cover" }}
        />
      )}
      <div dangerouslySetInnerHTML={{ __html: post.content }} />

      {post.tags && post.tags.length > 0 && (
        <div className="mt-4">
          <strong>Tags:</strong>{" "}
          {post.tags.map((tag, i) => (
            <span key={i} className="badge bg-secondary me-2">{tag}</span>
          ))}
        </div>
      )}
    </div>
  );
};

export default PostPage;
