import React, { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import styles from "./StickyTabs.module.css";

const tabs = [
  { id: "non-invasive", label: "NON-INVASIVE" },
  { id: "minimally-invasive", label: "MINIMALLY INVASIVE" },
  { id: "surgical", label: "SURGICAL PROCEDURES" },
  { id: "compare", label: "COMPARE" },
];

const StickyTabs = () => {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState(() => {
    const hash = location.hash.substring(1);
    return hash || "non-invasive";
  });
  const [isFixed, setIsFixed] = useState(false);
  const tabsRef = useRef(null);
  const [tabsOffsetTop, setTabsOffsetTop] = useState(0);

  useEffect(() => {
    if (location.hash) {
      const hash = location.hash.substring(1);
      setActiveTab(hash);
    }
  }, [location]);

  useEffect(() => {
    // Calculate the offset position of tabs
    const calculateOffset = () => {
      if (tabsRef.current) {
        const offset = tabsRef.current.offsetTop;
        setTabsOffsetTop(offset);
      }
    };

    // Initial calculation
    setTimeout(calculateOffset, 100);
    window.addEventListener("resize", calculateOffset);

    return () => window.removeEventListener("resize", calculateOffset);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset;

      // Tabs should become fixed when scroll passes their initial position minus header height
      if (tabsOffsetTop > 0) {
        setIsFixed(scrollY >= tabsOffsetTop - 70);
      }

      // Update active tab based on sections
      const sections = tabs
        .map((tab) => ({
          id: tab.id,
          element: document.getElementById(tab.id),
        }))
        .filter((section) => section.element);

      if (sections.length === 0) return;

      const threshold = 200;
      let currentSection = null;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        const rect = section.element.getBoundingClientRect();

        if (rect.top <= threshold) {
          currentSection = section.id;
          break;
        }
      }

      if (currentSection) {
        setActiveTab(currentSection);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [tabsOffsetTop]);

  return (
    <>
      {isFixed && <div style={{ height: '70px' }} />}
      <div ref={tabsRef} className={`${styles.tabsContainer} ${isFixed ? styles.fixed : ""}`}>
        <div className={styles.tabs}>
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`${styles.tab} ${
                activeTab === tab.id ? styles.tabActive : ""
              }`}
              onClick={() => {
                setActiveTab(tab.id);
                document
                  .getElementById(tab.id)
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default StickyTabs;
