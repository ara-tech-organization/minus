import React from 'react';
import styles from './ExpertTeam.module.css';
import Maariya from "../../assets/Maariya Siam.png";
import Hemakshi from "../../assets/Hemakshi Mourya.png";
import Nikilesh from "../../assets/Dr. Nikilesh Krishna.png";
import Prema from "../../assets/Prema Kanniah.png";

const ExpertTeam = () => {
  const teamMembers = [
    {
      id: 1,
      name: 'Ms. Maariya Siam',
      title: 'WELLNESS NUTRITIONIST',
      description: 'Specializes in personalized dietary plans that optimize metabolic health and support sustainable...',
     image: Maariya,
      delay: '0s'
    },
    {
      id: 2,
      name: 'Ms. Hemakshi Mourya',
      title: 'MEDICAL DERMATOLOGIST',
      description: 'Expert in non-invasive aesthetic treatments, focusing on skin rejuvenation and advanced...',
      image: Hemakshi,
      delay: '0.1s'
    },
    {
      id: 3,
      name: 'Dr. Nikilesh Krishna',
      title: 'BARIATRIC & METABOLIC SURGEON',
      description: 'Focused on minimally invasive surgical techniques for weight loss and correcting metabolic...',
      image: Nikilesh,
      delay: '0.2s'
    },
    {
      id: 4,
      name: 'Dr. Prema Kanniah',
      title: 'COSMETIC SURGEON',
      description: 'Renowned for her artistic approach to surgical body contouring and restorative...',
      image:  Prema,
      delay: '0.3s'
    }
  ];

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.title}>Our Expert Team</h2>
        <p className={styles.subtitle}>
          Meet the dedicated professionals committed to your wellness and aesthetic goals.
        </p>
      </div>

      <div className={styles.teamGrid}>
        {teamMembers.map((member) => (
          <div 
            key={member.id} 
            className={styles.card}
            style={{ animationDelay: member.delay }}
          >
            <div className={styles.imageWrapper}>
              <img 
                src={member.image} 
                alt={member.name}
                className={styles.image}
              />
            </div>
            <div className={styles.cardContent}>
              <h3 className={styles.memberName}>{member.name}</h3>
              <p className={styles.memberTitle}>{member.title}</p>
              <p className={styles.memberDescription}>{member.description}</p>
              <button className={styles.viewProfileBtn}>View Profile</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExpertTeam;