import { Link } from "react-router-dom";

function VideoCard({ video }) {
  return (
    <div className="card h-100">
      {video.thumbnail && <img src={video.thumbnail} className="card-img-top" alt={video.title} />}
      <div className="card-body">
        <h5 className="card-title">{video.title}</h5>
        <p className="card-text">{video.description?.substring(0, 100)}...</p>
        <p className="badge bg-info">{video.category}</p>
        <Link to={`/video/${video._id}`} className="btn btn-success mt-2">Watch / Download</Link>
      </div>
    </div>
  );
}

export default VideoCard;
