import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  const quicklinks = [
    { label: "Home", href: "#" },
    { label: "About", href: "#" },
    { label: "Treatments", href: "#" },
    { label: "Supplements", href: "#" },
    { label: "Contact", href: "#" },
    { label: "Blogs", href: "#" },
    { label: "Web Story", href: "#" },
  ];

  const services = [
    { label: "CryoSculpt", href: "#" },
    { label: "AI Robotic Sonic Slim", href: "#" },
    { label: "Laser-Assisted Liposuction", href: "#" },
    { label: "Injection Lipolysis", href: "#" },
    { label: "Body Lift Surgery", href: "#" },
    { label: "Bariatric Surgery", href: "#" },
  ];

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.columns}>
          {/* Brand Column */}
          <div className={styles.brandColumn}>
            <div className={styles.logo}>
              <img
                src="/assets/logo.webp"
                alt="Minus"
                className={styles.logoImage}
              />
            </div>
            <p className={styles.brandDescription}>
              Minus is a cutting-edge slimming and body contouring brand that
              redefines the way people achieve their desired body shape.
            </p>
            <div className={styles.socialLinks}>
              <a href="#" className={styles.socialIcon} aria-label="Instagram">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a href="#" className={styles.socialIcon} aria-label="Facebook">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a href="#" className={styles.socialIcon} aria-label="YouTube">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quicklinks Column */}
          <div className={styles.linksColumn}>
            <h3 className={styles.columnTitle}>Quicklinks</h3>
            <ul className={styles.linksList}>
              {quicklinks.map((link, index) => (
                <li key={index} className={styles.linkItem}>
                  <a href={link.href} className={styles.link}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Best Services Column */}
          <div className={styles.linksColumn}>
            <h3 className={styles.columnTitle}>Best Services</h3>
            <ul className={styles.linksList}>
              {services.map((service, index) => (
                <li key={index} className={styles.linkItem}>
                  <a href={service.href} className={styles.link}>
                    {service.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div className={styles.contactColumn}>
            <h3 className={styles.columnTitle}>Contact</h3>
            <address className={styles.address}>
              <p className={styles.addressText}>
                Amarphara Ground Floor, New No 51, Old No 19, A Block, Uthmar
                Gandhi Salai, Nungambakkam, Chennai, Tamil Nadu- 600 034
              </p>
              <p className={styles.addressText}>
                Landmark: Before TAJ Coromandel
              </p>
              <a href="#" className={styles.directionsLink}>
                View Directions
              </a>
            </address>
            <div className={styles.contactInfo}>
              <a href="tel:+919410434567" className={styles.contactLink}>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                +91 94104 34567
              </a>
              <a
                href="mailto:info@minusclinic.com"
                className={styles.contactLink}
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                info@minusclinic.com
              </a>
            </div>
          </div>
        </div>

        <div className={styles.copyright}>
          <p>Copyright © 2026 — All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};



export default Footer;
