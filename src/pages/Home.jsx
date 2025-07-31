import React, { useEffect, useState } from "react";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetch("https://carbuykaro-backend.onrender.com/api/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data || []));

    fetch("https://carbuykaro-backend.onrender.com/api/videos")
      .then((res) => res.json())
      .then((data) => setVideos(data || []));
  }, []);

  return (
    <div className="container mt-4">
      <h2 className="mb-3">Latest Posts</h2>
      <div className="row">
        {posts.length > 0 ? (
          posts.map((post) => (
            <div className="col-md-4 mb-4" key={post._id}>
              <div className="card h-100">
                <img
                  src={post.thumbnail || "https://via.placeholder.com/300"}
                  className="card-img-top"
                  alt={post.title}
                />
                <div className="card-body">
                  <h5 className="card-title">{post.title}</h5>
                  <p className="card-text">{post.description}</p>
                  <a href={`/posts/${post._id}`} className="btn btn-primary">
                    Read More
                  </a>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No posts available</p>
        )}
      </div>

      <h2 className="mt-5 mb-3">Latest Videos</h2>
      <div className="row">
        {videos.length > 0 ? (
          videos.map((video) => (
            <div className="col-md-4 mb-4" key={video._id}>
              <div className="card h-100">
                <img
                  src={video.thumbnail || "https://via.placeholder.com/300"}
                  className="card-img-top"
                  alt={video.title}
                />
                <div className="card-body">
                  <h5 className="card-title">{video.title}</h5>
                  <p className="card-text">{video.description}</p>
                  <a href={`/videos/${video._id}`} className="btn btn-success">
                    Watch / Download
                  </a>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No videos available</p>
        )}
      </div>
    </div>
  );
};

export default Home;
