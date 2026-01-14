import React, { useState, useRef } from "react";
import YouTube from "react-youtube";
import styles from "./HeroVideo.module.css";

const HeroVideo = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const playerRef = useRef(null);

  const onReady = (event) => {
    playerRef.current = event.target;
    event.target.mute();
    event.target.playVideo();
  };

  const togglePlay = () => {
    if (!playerRef.current) return;

    if (isPlaying) {
      playerRef.current.pauseVideo();
    } else {
      playerRef.current.playVideo();
    }

    setIsPlaying(!isPlaying);
  };

  const videoOptions = {
    playerVars: {
      autoplay: 1,
      mute: 1,
      loop: 1,
      playlist: "3vWbrrxhbV0", // required for looping
      controls: 0,
      modestbranding: 1,
      showinfo: 0,
      rel: 0,
    },
  };

  return (
    <div className={styles.heroWrapper}>
      <div className={styles.heroContainer}>
        <YouTube
          videoId="3vWbrrxhbV0"
          opts={videoOptions}
          onReady={onReady}
          className={styles.videoBG}
          iframeClassName={styles.videoBG}
        />

        <div className={styles.overlay}></div>

        <div className={styles.centerContent}>
          <h2>Redefine Your Curves.</h2>
          <h1>Reveal a Better You.</h1>
        </div>

        <button onClick={togglePlay} className={styles.playButton}>
          {isPlaying ? "❚❚" : "►"}
        </button>
      </div>
    </div>
  );
};

export default HeroVideo;
