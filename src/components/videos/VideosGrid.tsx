"use client";
import { useAppStore } from "@/store/appStore";
import { useEffect } from "react";
import VideoCard from "./VideoCard";

const VideosGrid = () => {
  const { videos, fetchVideos } = useAppStore();

  // get video data
  useEffect(() => {
    fetchVideos(1000);
  }, []);

  return (
    <div className="w-full mx-auto flex flex-row flex-wrap relative">
      {videos.map((video, i) => (
        <VideoCard key={i} video={video} />
      ))}
    </div>
  );
};

export default VideosGrid;
