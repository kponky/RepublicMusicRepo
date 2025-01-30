"use client"
import { IVideo } from "@/interfaces/video.interface";
import { getVideos } from "@/lib/data";
import { useEffect, useState } from "react";
import VideoCard from "./VideoCard";

const VideosGrid = () => {
  const [videoArticles, setVideoArticles] = useState<IVideo[]>([]);

  // get video data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getVideos(1000);

        setVideoArticles(res?.data.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="w-full mx-auto flex flex-row flex-wrap relative">
      {videoArticles.map((video, i) => (
        <VideoCard key={i} video={video} />
      ))}
    </div>
  );
};

export default VideosGrid;
