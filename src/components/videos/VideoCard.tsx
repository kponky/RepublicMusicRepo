import { IVideo } from "@/interfaces/video.interface";
import Link from "next/link";
import React from "react";

const VideoCard = ({ video }: { video: IVideo }) => {
  return (
    <article className="video-grid-article__card lg:w-[calc(33%-1rem)] relative group m-2">
      <figure className="relative block">
        <div className="video-article_card__thumb">
          <div className="video-article_card__thumb-overlay">
            <Link
              href={video.link}
              target="_blank"
              className="play-button"
              title="Play Video"
            >
              <span>Play Video</span>
            </Link>
          </div>
          <div
            className="__thumb-bg-image"
            style={{
              backgroundImage: `url(${video.imageUrl})`,
            }}
          ></div>
        </div>
        <div className="video-article_card__footer">
          <div className="__footer-header">
            <h3>{video.title}</h3>
          </div>
        </div>
      </figure>
    </article>
  );
};

export default VideoCard;
