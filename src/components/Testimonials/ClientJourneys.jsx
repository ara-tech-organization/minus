import React from "react";
import { Play } from "lucide-react";
import styles from "./ClientJourneys.module.css";
import miniInvasive1 from "@/assets/mini-invasive-1.png";
import miniInvasive2 from "@/assets/mini-invasive-2.png";
import miniInvasive3 from "@/assets/mini-invasive-3.png";
const VideoCard = ({ image, duration, name, procedure, category, delay }) => {
  return (
    <div className={styles.videoCard} style={{ animationDelay: `${delay}s` }}>
      <div className={styles.videoThumbnail}>
        <img src={image} alt={name} className={styles.thumbnailImage} />
        <div className={styles.playButton}>
          <Play size={24} fill="currentColor" strokeWidth={0} />
        </div>
        <div className={styles.duration}>{duration}</div>
      </div>
      <div className={styles.videoInfo}>
        <h3 className={styles.videoTitle}>{name}</h3>
        <p className={styles.videoCategory}>{category}</p>
      </div>
    </div>
  );
};

const ClientJourneys = () => {
  const videos = [
    {
      image: miniInvasive1,
      duration: "03:24",
      name: "Sarah - CryoSculpt Journey",
      procedure: "CryoSculpt Journey",
      category: "Non-Invasive Fat Freezing",
    },
    {
      image: miniInvasive2,
      duration: "05:12",
      name: "Michael - Total Body Lift",
      procedure: "Total Body Lift",
      category: "Post-Weight Loss Surgery",
    },
    {
      image: miniInvasive3,
      duration: "02:30",
      name: "Elena - RF Skin Tightening",
      procedure: "RF Skin Tightening",
      category: "Non-Invasive Contouring",
    },
  ];

  return (
    <section id="stories" className={styles.section}>
      <div className={styles.container}>
        {/* Heading moved to ClientTestimonials component */}
        {/* <div className={styles.grid}>
          {videos.map((video, index) => (
            <VideoCard
              key={index}
              image={video.image}
              duration={video.duration}
              name={video.name}
              procedure={video.procedure}
              category={video.category}
              delay={index * 0.15}
            />
          ))}
        </div> */}
      </div>
    </section>
  );
};

export default ClientJourneys;
