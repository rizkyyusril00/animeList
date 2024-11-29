"use client";
import { useState } from "react";
import YouTube from "react-youtube";
export default function VideoPlayer({ YouTubeId }) {
  const option = {
    width: "300",
    height: "150",
  };
  const [openVideo, setOpenVideo] = useState(true);

  const handleVideo = () => {
    setOpenVideo((prevstate) => !prevstate);
  };

  const playerVideo = () => {
    return (
      <div className="fixed bottom-10  right-4">
        <button
          onClick={handleVideo}
          className="w-5 h-5 rounded-full border-2 p-3 border-acent flex items-center justify-center mb-2 hover:bg-acent group transition-all duration-300 ease-in-out"
        >
          <span className="text-acent text-[14px] group-hover:text-secondary">
            X
          </span>
        </button>
        <YouTube
          videoId={YouTubeId}
          onReady={(event) => event.target.pauseVideo()}
          opts={option}
          onError={() => alert("Video Tidak Dapat Di Tampilkan")}
        />
      </div>
    );
  };

  return openVideo ? playerVideo() : null;
}
