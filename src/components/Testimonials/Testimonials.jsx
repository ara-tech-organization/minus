import React from 'react';
import { Star } from 'lucide-react';
import styles from './Testimonials.module.css';

// Image imports (placeholders)
import abdomenBefore from "@/assets/Before-chin-treatment.png";
import abdomenAfter from "@/assets/After-chin-treatment.png";
import jawlineBefore from "@/assets/Before-treatment.png";
import jawlineAfter from "@/assets/After-treatment.png";

const ClientTestimonials = () => {
  const testimonials = [
    {
      id: 1,
      rating: 5,
      title: '"I finally feel like myself again."',
      text: "After struggling with stubborn pockets of fat despite working out, the CryoSculpt treatment was a game changer. The staff at MINUS made me feel comfortable from day one. The results are subtle but exactly what I wanted.",
      author: "Rachel J.",
      role: "CryoSculpt Client",
      initials: "RJ",
      type: "text",
    },
    {
      id: 2,
      rating: 5,
      title: '"Professional, clean, and effective."',
      text: "I was nervous about trying an invasive procedure, but the consultation put me at ease. The recovery was faster than I expected, and the team checked in on me daily. Highly recommend for anyone looking for serious results.",
      author: "Mark K.",
      role: "Liposuction Client",
      initials: "MK",
      type: "text",
    },
    {
      id: 3,
      beforeImage: jawlineBefore,
      afterImage: jawlineAfter,
      title: "Jawline Definition",
      description: "Result of Deoxycholic Acid Injection series.",
      duration: "8 Weeks",
      type: "image",
    },
    {
      id: 4,
      beforeImage: abdomenBefore,
      afterImage: abdomenAfter,
      title: "Abdominal Toning",
      description:
        "Result of combined EME Muscle Tone & Fat Dissolving injections.",
      duration: "12 Weeks",
      type: "image",
    },
    {
      id: 5,
      rating: 5,
      title: '"The boost I needed."',
      text: "The IV Vitamin drips are my weekly reset. I feel more energetic and my skin is glowing. It's become an essential part of my wellness routine alongside my gym sessions.",
      author: "Amanda L.",
      role: "Wellness Member",
      initials: "AL",
      type: "text",
    },
    {
      id: 6,
      rating: 5,
      title: '"Life changing experience."',
      text: "After my bariatric surgery, I had a lot of loose skin that made me self-conscious. The body lift procedure at MINUS gave me the silhouette I've always dreamed of. Dr. Evans is a true artist.",
      author: "Sophia T.",
      role: "Surgical Patient",
      initials: "ST",
      type: "text",
    },
  ];

  const renderStars = (rating) => {
    return (
      <div className={styles.stars}>
        {[...Array(rating)].map((_, i) => (
          <Star key={i} className={styles.star} fill="currentColor" />
        ))}
      </div>
    );
  };

  const renderTextTestimonial = (testimonial) => (
    <div className={styles.testimonialCard}>
      {renderStars(testimonial.rating)}
      <h3 className={styles.testimonialTitle}>{testimonial.title}</h3>
      <p className={styles.testimonialText}>{testimonial.text}</p>
      <div className={styles.author}>
        <div className={styles.authorInitials}>{testimonial.initials}</div>
        <div className={styles.authorInfo}>
          <div className={styles.authorName}>{testimonial.author}</div>
          <div className={styles.authorRole}>{testimonial.role}</div>
        </div>
      </div>
    </div>
  );

  const renderImageTestimonial = (testimonial) => (
    <div className={styles.imageCard}>
      <div className={styles.imageContainer}>
        <div className={styles.beforeAfterWrapper}>
          <div className={styles.imageBox}>
            <span className={styles.imageLabel}>BEFORE</span>
            <img
              src={testimonial.beforeImage}
              alt="Before"
              className={styles.testimonialImage}
            />
          </div>
          <div className={styles.imageBox}>
            <span className={styles.imageLabelAfter}>AFTER</span>
            <img
              src={testimonial.afterImage}
              alt="After"
              className={styles.testimonialImage}
            />
          </div>
        </div>
      </div>
      <div className={styles.imageCardContent}>
        {testimonial.rating && (
          <div className={styles.starsSmall}>
            {[...Array(testimonial.rating)].map((_, i) => (
              <Star key={i} className={styles.starSmall} fill="currentColor" />
            ))}
          </div>
        )}
        <h3 className={styles.imageCardTitle}>{testimonial.title}</h3>
        {testimonial.duration && (
          <span className={styles.duration}>{testimonial.duration}</span>
        )}
        <p className={styles.imageCardDescription}>{testimonial.description}</p>
      </div>
    </div>
  );

  return (
    <div className={styles.testimonialsSection}>
      <div className={styles.grid}>
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className={styles.gridItem}>
            {testimonial.type === "text"
              ? renderTextTestimonial(testimonial)
              : renderImageTestimonial(testimonial)}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClientTestimonials;