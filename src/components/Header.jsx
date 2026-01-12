import React, { useState, useEffect } from "react";
import styles from "./Header.module.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { label: "Work", href: "#work" },
    { label: "Services", href: "#services" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ""}`}>
      <div className={styles.container}>
        <a href="#home" className={styles.logo}>
          <img
            src="/src/assets/logo.webp"
            alt="Studio Logo"
            className={styles.logoImage}
          />
        </a>

        {/* Desktop Navigation */}
        <nav className={styles.nav}>
          <ul className={styles.navList}>
            {navItems.map((item, index) => (
              <li key={index} className={styles.navItem}>
                <a href={item.href} className={styles.navLink}>
                  {item.label}
                  <span className={styles.navUnderline}></span>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* CTA Button */}
        <button className={styles.ctaButton}>
          <span>Get Started</span>
          <svg
            className={styles.ctaArrow}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </button>

        {/* Hamburger Menu */}
        <button
          className={`${styles.hamburger} ${
            isMenuOpen ? styles.hamburgerActive : ""
          }`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span className={styles.hamburgerLine}></span>
          <span className={styles.hamburgerLine}></span>
          <span className={styles.hamburgerLine}></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${styles.mobileMenu} ${
          isMenuOpen ? styles.mobileMenuOpen : ""
        }`}
      >
        <nav className={styles.mobileNav}>
          <ul className={styles.mobileNavList}>
            {navItems.map((item, index) => (
              <li
                key={index}
                className={styles.mobileNavItem}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <a
                  href={item.href}
                  className={styles.mobileNavLink}
                  onClick={toggleMenu}
                >
                  <span className={styles.mobileNavNumber}>0{index + 1}</span>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <button className={styles.mobileCtaButton} onClick={toggleMenu}>
            Get Started
          </button>
        </nav>
      </div>
    </header>
  );
};
export default Header;