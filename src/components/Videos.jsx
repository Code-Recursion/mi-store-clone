import React from "react";
import VideoCard from "../components/VideoCard";
import "../styles/Videos.css";
function Videos({ videos }) {
  return (
    <div className="Videos">
      {videos.map((video, index) => (
        <VideoCard
          index={index}
          key={index}
          image={video.image}
          name={video.name}
        />
      ))}
    </div>
  );
}

export default Videos;
