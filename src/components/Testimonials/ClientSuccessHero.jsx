import React, { useState } from "react";
import { Play, X } from "lucide-react";
import styles from "./ClientSuccessHero.module.css";
import testimonial from "@/assets/testi.png";

const ClientSuccessHero = () => {
  const [showVideoModal, setShowVideoModal] = useState(false);
  const youtubeVideoId = "3vWbrrxhbV0"; // Same video as Book page

  return (
    <>
      <section className={styles.heroSection}>
        <div className={styles.heroOverlay}></div>
        <img
          src={testimonial}
          alt="Client Success"
          className={styles.heroImage}
        />

        <div className={styles.heroContent}>
          <div className={styles.container}>
            <div className={styles.badge}>CLIENT SUCCESS</div>
            <h1 className={styles.title}>
              Real Stories,
              <br />
              Real Transformations
            </h1>
            <p className={styles.description}>
              Discover how our personalized treatments have helped our clients
              <br />
              reclaim their confidence and achieve their body goals.
            </p>
            <div className={styles.buttons}>
              <button className={styles.primaryBtn} onClick={() => setShowVideoModal(true)}>
                <Play size={18} strokeWidth={2.5} fill="currentColor" />
                Watch Stories
              </button>
              <button className={styles.secondaryBtn} onClick={() => { document.getElementById('reviews')?.scrollIntoView({ behavior: 'smooth' }); }}>Read Reviews</button>
            </div>
          </div>
        </div>
      </section>

      {/* YouTube Video Modal */}
      {showVideoModal && (
        <div className={styles.modalOverlay} onClick={() => setShowVideoModal(false)}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <button className={styles.closeButton} onClick={() => setShowVideoModal(false)}>
              <X size={24} />
            </button>
            <div className={styles.videoWrapper}>
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${youtubeVideoId}?autoplay=1`}
                title="Client Stories"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ClientSuccessHero;
