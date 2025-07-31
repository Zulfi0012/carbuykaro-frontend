import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../services/api";
import CommentBox from "../components/CommentBox";
import CommentList from "../components/CommentList";

function VideoPage() {
  const { id } = useParams();
  const [video, setVideo] = useState(null);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    API.get(`/videos/${id}`).then((res) => setVideo(res.data));
    API.get(`/comments/video/${id}`).then((res) => setComments(res.data));
  }, [id]);

  const handleNewComment = (c) => {
    setComments([c, ...comments]);
  };

  if (!video) return <p className="container py-4">Loading...</p>;

  return (
    <div className="container py-4">
      <h2>{video.title}</h2>
      <div className="ratio ratio-16x9 mb-3">
        <iframe src={video.videoUrl} title={video.title} allowFullScreen />
      </div>
      <p>{video.description}</p>
      <CommentBox type="video" id={id} onComment={handleNewComment} />
      <CommentList comments={comments} />
    </div>
  );
}

export default VideoPage;
