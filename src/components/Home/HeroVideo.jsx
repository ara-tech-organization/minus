import React, { useRef, useState } from "react";
import styles from "./HeroVideo.module.css";

const HeroVideo = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const togglePlay = () => {
    if (isPlaying) videoRef.current.pause();
    else videoRef.current.play();
    setIsPlaying(!isPlaying);
  };

  return (
    <div className={styles.heroWrapper}>
      <div className={styles.heroContainer}>
        <video
          ref={videoRef}
          className={styles.videoBG}
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/src/assets/Women-back.png" type="video/mp4" />
        </video>

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
