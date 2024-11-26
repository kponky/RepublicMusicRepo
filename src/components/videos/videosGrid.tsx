import videoArticles from "@/data/video";
import React from "react";
import VideoCard from "./VideoCard";

const VideosGrid = () => {
  return (
    <div className="w-full mx-auto flex flex-row flex-wrap relative">
      {videoArticles.map((video, i) => (
        <VideoCard key={i} video={video} />
      ))}
    </div>
  );
};

export default VideosGrid;
