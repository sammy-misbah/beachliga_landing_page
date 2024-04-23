import React from "react";

const Video = () => {
  return (
    <div>
      <video
        src="./assets/video.mp4"
        className="w-full max-h-[700px]"
        controls="controls"
      />
    </div>
  );
};

export default Video;
