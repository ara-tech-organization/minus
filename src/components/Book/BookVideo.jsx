import React, { useState, useRef } from "react";
import YouTube from "react-youtube";
import styles from "./BookVideo.module.css";

const BookVideo = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const playerRef = useRef(null);

  const onReady = (event) => {
    playerRef.current = event.target;
    event.target.mute();
    event.target.playVideo();
  };

  const onPlay = () => {
    setIsPlaying(true);
  };

  const onPause = () => {
    setIsPlaying(false);
  };

  const onEnd = () => {
    setIsPlaying(false);
  };

  const togglePlay = (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (!playerRef.current) return;

    if (isPlaying) {
      playerRef.current.pauseVideo();
    } else {
      playerRef.current.playVideo();
    }
  };

  const videoOptions = {
    playerVars: {
      autoplay: 1,
      mute: 1,
      loop: 1,
      playlist: "3vWbrrxhbV0",
      controls: 0,
      modestbranding: 1,
      showinfo: 0,
      rel: 0,
      fs: 0,
      iv_load_policy: 3,
      disablekb: 1,
      enablejsapi: 1,
    },
  };

  return (
    <section className={styles.videoWrapper}>
      <div className={styles.videoContainer}>
        <YouTube
          videoId="3vWbrrxhbV0"
          opts={videoOptions}
          onReady={onReady}
          onPlay={onPlay}
          onPause={onPause}
          onEnd={onEnd}
          className={styles.videoBG}
          iframeClassName={styles.videoBG}
        />

        <div className={styles.overlay}></div>

        <div className={`${styles.pauseOverlay} ${isPlaying ? styles.hidden : ""}`}></div>

        <div className={styles.centerContent}>
          <h2>Redefine Your Curves.</h2>
          <h1>Reveal a Better You.</h1>
        </div>

        <button onClick={togglePlay} className={styles.playButton}>
          {isPlaying ? "❚❚" : "►"}
        </button>
      </div>
    </section>
  );
};

export default BookVideo;
