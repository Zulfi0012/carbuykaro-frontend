import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const VideoPage = () => {
  const { id } = useParams();
  const [video, setVideo] = useState(null);

  useEffect(() => {
    fetch(`https://carbuykaro-backend.onrender.com/api/videos/${id}`)
      .then((res) => res.json())
      .then((data) => setVideo(data))
      .catch((err) => console.error("Error fetching video:", err));
  }, [id]);

  if (!video) return <div className="text-center">Loading video...</div>;

  return (
    <div className="container">
      <h1 className="mb-3">{video.title}</h1>

      <div className="ratio ratio-16x9 mb-4">
        <iframe
          src={video.videoUrl}
          title={video.title}
          allowFullScreen
          className="w-100"
        ></iframe>
      </div>

      <p>{video.description}</p>
    </div>
  );
};

export default VideoPage;
