import { useEffect, useState } from "react";
import API from "../services/api";
import PostCard from "../components/PostCard";
import VideoCard from "../components/VideoCard";

function Home() {
  const [posts, setPosts] = useState([]);
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const postRes = await API.get("/posts");
      const videoRes = await API.get("/videos");
      setPosts(postRes.data.slice(0, 3));
      setVideos(videoRes.data.slice(0, 3));
    };
    fetchData();
  }, []);

  return (
    <div className="container py-4">
      <h3 className="mb-3">Latest Posts</h3>
      <div className="row g-3">
        {posts.map((post) => (
          <div className="col-md-4" key={post._id}>
            <PostCard post={post} />
          </div>
        ))}
      </div>

      <h3 className="my-4">Latest Videos</h3>
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

export default Home;
