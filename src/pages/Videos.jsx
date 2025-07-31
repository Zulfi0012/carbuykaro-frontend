import { useEffect, useState } from "react";
import API from "../services/api";
import VideoCard from "../components/VideoCard";

function Videos() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    API.get("/videos").then((res) => setVideos(res.data));
  }, []);

  return (
    <div className="container py-4">
      <h2 className="mb-4">All Videos</h2>
      <div className="row g-3">
        {videos.map((video) => (
          <div className="col-md-4" key={video._id}>
            <VideoCard video={video} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Videos;
