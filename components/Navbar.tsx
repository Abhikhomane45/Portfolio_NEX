"use client";

import { useEffect, useState, useRef } from "react";

const NAV_ITEMS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const progressBarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      // 1. Scroll Progress Bar
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0;
      if (progressBarRef.current) {
        progressBarRef.current.style.width = `${progress}%`;
      }

      // 2. Scrolled state for navigation styling
      setIsScrolled(window.scrollY > 60);

      // 3. Active Nav Section Spy
      const sections = document.querySelectorAll("section[id], header");
      let currentSection = "";
      
      sections.forEach((sec) => {
        const sectionTop = (sec as HTMLElement).offsetTop;
        // Check if the scroll position is within this section
        if (window.scrollY >= sectionTop - 150) {
          currentSection = sec.id ? `#${sec.id}` : "";
        }
      });
      
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    // Trigger once on mount to set initial states
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* SCROLL PROGRESS */}
      <div ref={progressBarRef} className="progress-bar" id="progressBar" />

      {/* MOBILE NAV OVERLAY */}
      <div className={`nav-overlay ${isMenuOpen ? "open" : ""}`} id="navOverlay">
        <button
          className="overlay-close"
          id="overlayClose"
          onClick={() => setIsMenuOpen(false)}
          aria-label="Close menu"
        >
          <i className="fas fa-times" />
        </button>
        {NAV_ITEMS.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="nav-ol-link"
            onClick={() => setIsMenuOpen(false)}
          >
            {item.label}
          </a>
        ))}
      </div>

      {/* DESKTOP NAV */}
      <nav id="navbar" className={isScrolled ? "scrolled" : ""}>
        <div className="nav-inner">
          <a href="#" className="logo">
            AK<span>.</span>
          </a>
          <ul className="nav-links">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className={activeSection === item.href ? "active" : ""}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <button
            className="nav-toggle"
            id="navToggle"
            onClick={() => setIsMenuOpen(true)}
            aria-label="Open menu"
          >
            <i className="fas fa-bars" />
          </button>
        </div>
      </nav>
    </>
  );
}
