import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const PostDetail = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    fetch(`https://carbuykaro-backend.onrender.com/api/posts/${id}`)
      .then((res) => res.json())
      .then((data) => setPost(data))
      .catch((err) => console.error("Failed to fetch post:", err));
  }, [id]);

  if (!post) return <div className="text-center">Loading post...</div>;

  return (
    <div className="container">
      <h1 className="mb-3">{post.title}</h1>
      <img
        src={post.imageUrl}
        alt={post.title}
        className="img-fluid mb-4"
        style={{ maxHeight: "400px", objectFit: "cover" }}
      />
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
      <div className="mt-4">
        <strong>Tags:</strong>{" "}
        {post.tags?.map((tag, index) => (
          <span key={index} className="badge bg-secondary mx-1">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default PostDetail;
