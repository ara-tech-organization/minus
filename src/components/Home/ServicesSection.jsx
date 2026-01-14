import React from "react";
import styles from "./ServicesSection.module.css";
import BodyLiftImage from "@/assets/Body-lift.png";
import LiposuctionImage from "@/assets/Liposuction.png";
import InjectionImage from "@/assets/Injection.png";
import { ArrowRightIcon } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      id: 1,
      image: BodyLiftImage,
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M12 2L2 7l10 5 10-5-10-5z" />
          <path d="M2 17l10 5 10-5" />
          <path d="M2 12l10 5 10-5" />
        </svg>
      ),
      title: "Body Lift Surgery",
      description:
        "Improve the shape and tone of your underlying tissue that supports skin and fat.",
    },
    {
      id: 2,
      image: LiposuctionImage,
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <rect x="3" y="3" width="7" height="7" />
          <rect x="14" y="3" width="7" height="7" />
          <rect x="14" y="14" width="7" height="7" />
          <rect x="3" y="14" width="7" height="7" />
        </svg>
      ),
      title: "Liposuction",
      description:
        "Precision contouring for stubborn areas that don't respond to diet and exercise.",
    },
    {
      id: 3,
      image: InjectionImage,
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <rect x="9" y="2" width="6" height="20" rx="1" />
          <circle cx="12" cy="12" r="3" />
          <path d="M12 2v4M12 18v4" />
        </svg>
      ),
      title: "Injection Lipolysis",
      description:
        "Non-surgical chemical fat reduction treatments for a more defined silhouette.",
    },
    {
      id: 4,
      image: InjectionImage,
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <rect x="9" y="2" width="6" height="20" rx="1" />
          <circle cx="12" cy="12" r="3" />
          <path d="M12 2v4M12 18v4" />
        </svg>
      ),
      title: "Injection Lipolysis",
      description:
        "Non-surgical chemical fat reduction treatments for a more defined silhouette.",
    },
  ];

  return (
    <section className={styles.servicessection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Our Signature Services</h2>
          <p className={styles.subtitle}>
            Expertly delivered clinical treatments designed for targeted results
            and long-term wellness.
          </p>
        </div>

        <div className={styles.servicesgrid}>
          {services.map((service, index) => (
            <div
              key={service.id}
              className={styles.servicecard}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={styles.imagewrapper}>
                <img
                  src={service.image}
                  alt={service.title}
                  className={styles.serviceimage}
                />
              </div>

              <div className={styles.cardcontent}>
                <div className={styles.iconwrapper}>{service.icon}</div>

                <h3 className={styles.servicetitle}>{service.title}</h3>

                <p className={styles.servicedescription}>
                  {service.description}
                </p>

                <a href="#" className={styles.learnmore}>
                  Learn more
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    className={styles.arrow}
                  >
                    <path
                      d="M6 4L10 8L6 12"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
        {/* VIEW MORE BUTTON */}
        <div className={styles.viewMoreWrapper}>
          <a href="/minus/#testimonial" className={styles.viewMoreBtn}>
            View More Services
            <svg
              className={styles.viewMoreArrow}
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M6 4L10 8L6 12"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
