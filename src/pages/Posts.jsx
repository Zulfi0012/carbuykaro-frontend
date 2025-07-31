import { useEffect, useState } from "react";
import API from "../services/api";
import PostCard from "../components/PostCard";

function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    API.get("/posts").then((res) => setPosts(res.data));
  }, []);

  return (
    <div className="container py-4">
      <h2 className="mb-4">All Posts</h2>
      <div className="row g-3">
        {posts.map((post) => (
          <div className="col-md-4" key={post._id}>
            <PostCard post={post} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Posts;
