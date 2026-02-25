import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./Header.module.css";
import logo from "@/assets/logo.png";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

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
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Treatments", href: "/treatments" },
    { label: "Testimonials", href: "/testimonial" },
    { label: "Specialists", href: "/specialists" },
  ];

  const isActive = (href) => {
    if (href === "/") return location.pathname === "/" || location.pathname === "/home";
    if (href === "/treatments") {
      return location.pathname === href || location.pathname.startsWith("/treatment/");
    }
    return location.pathname === href;
  };

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ""}`}>
      <div className={styles.container}>
        <Link to="/" className={styles.logo}>
          <img src={logo} alt="Studio Logo" className={styles.logoImage} />
        </Link>

        {/* Desktop Navigation */}
        <nav className={styles.nav}>
          <ul className={styles.navList}>
            {navItems.map((item, index) => (
              <li key={index} className={styles.navItem}>
                <Link
                  to={item.href}
                  className={`${styles.navLink} ${
                    isActive(item.href) ? styles.active : ""
                  }`}
                >
                  {item.label}
                  <span className={styles.navUnderline}></span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* CTA Button */}
        <button
          className={styles.ctaButton}
          onClick={() => (window.location.href = "/book")}
        >
          <span>Book an Appointment</span>
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
                <Link
                  to={item.href}
                  className={`${styles.mobileNavLink} ${
                    isActive(item.href) ? styles.activeMobile : ""
                  }`}
                  onClick={toggleMenu}
                >
                  <span className={styles.mobileNavNumber}>0{index + 1}</span>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <button
            className={styles.mobileCtaButton}
            onClick={() => {
              setIsMenuOpen(false);
              window.location.href = "/book";
            }}
          >
            Book an Appointment
          </button>
        </nav>
      </div>
    </header>
  );
};
export default Header;
