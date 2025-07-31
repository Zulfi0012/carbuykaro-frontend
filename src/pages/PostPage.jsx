import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../services/api";
import CommentBox from "../components/CommentBox";
import CommentList from "../components/CommentList";

function PostPage() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    API.get(`/posts/${id}`).then((res) => setPost(res.data));
    API.get(`/comments/post/${id}`).then((res) => setComments(res.data));
  }, [id]);

  const handleNewComment = (c) => {
    setComments([c, ...comments]);
  };

  if (!post) return <p className="container py-4">Loading...</p>;

  return (
    <div className="container py-4">
      <h2>{post.title}</h2>
      {post.image && <img src={post.image} alt={post.title} className="img-fluid my-3" />}
      <div dangerouslySetInnerHTML={{ __html: post.content }}></div>
      <div className="mt-4">
        <strong>Tags:</strong> {post.tags?.join(", ")}
      </div>
      <CommentBox type="post" id={id} onComment={handleNewComment} />
      <CommentList comments={comments} />
    </div>
  );
}

export default PostPage;
