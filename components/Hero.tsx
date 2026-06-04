"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const PHRASES = ["Data Analyst", "IoT Developer", "Power BI Expert", "Python Developer"];

export default function Hero() {
  const [typedText, setTypedText] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    const currentPhrase = PHRASES[phraseIndex];

    const type = () => {
      if (!isDeleting) {
        setTypedText(currentPhrase.substring(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);

        if (charIndex + 1 === currentPhrase.length) {
          // Pause before deleting
          timer = setTimeout(() => setIsDeleting(true), 1400);
          return;
        }
      } else {
        setTypedText(currentPhrase.substring(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);

        if (charIndex - 1 === 0) {
          setIsDeleting(false);
          setPhraseIndex((prev) => (prev + 1) % PHRASES.length);
          // Pause before typing next phrase
          timer = setTimeout(() => {}, 400);
          return;
        }
      }

      timer = setTimeout(type, isDeleting ? 50 : 90);
    };

    // Initial delay for typing animation start
    if (typedText === "" && charIndex === 0 && !isDeleting) {
      timer = setTimeout(type, 1200);
    } else {
      timer = setTimeout(type, isDeleting ? 50 : 90);
    }

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, phraseIndex, typedText]);

  return (
    <header className="hero" id="home">
      <div className="hero-bg">
        <div className="hero-blob b1" />
        <div className="hero-blob b2" />
      </div>
      <div className="hero-inner">
        <div className="hero-left">
          <div className="hero-badge">
            <div className="hero-badge-dot" />
            Available for opportunities
          </div>
          <h1 className="hero-title">
            <span className="line">
              <span className="word">Abhijeet</span>
            </span>
            <span className="line">
              <span className="word accent-word">Khomane</span>
            </span>
          </h1>
          <div className="hero-type">
            <span className="typed">{typedText}</span>
          </div>
          <p className="hero-desc">
            B.Tech student specializing in Data Analytics and Business Intelligence,
            with hands-on experience in Power BI, Python, SQL, and Microsoft Azure.
            Transforming complex datasets into clear, actionable insights.
          </p>
          <div className="hero-actions">
            <a href="#contact" className="btn btn-dark">
              <i className="fas fa-paper-plane" /> Get In Touch
            </a>
            <a href="#projects" className="btn btn-outline">
              <i className="fas fa-eye" /> View Work
            </a>
          </div>
          
          {/* MOBILE ONLY STATS */}
          <div className="hero-stats-mobile">
            <div className="hero-stat-pill">
              <div className="stat-num">9.48</div>
              <div className="stat-label">T.E. CGPA</div>
            </div>
            <div className="hero-stat-pill">
              <div className="stat-num">3+</div>
              <div className="stat-label">Projects Built</div>
            </div>
          </div>
        </div>

        <div className="hero-img-wrap">
          <div className="hero-img-ring" />
          <Image
            src="/Myimage.jpg"
            alt="Abhijeet Khomane"
            width={300}
            height={300}
            className="hero-img"
            priority
          />
          {/* DESKTOP ONLY FLOATING STATS */}
          <div className="hero-stats s1">
            <div className="stat-num">9.48</div>
            <div className="stat-label">T.E. CGPA</div>
          </div>
          <div className="hero-stats s2">
            <div className="stat-num">3+</div>
            <div className="stat-label">Projects Built</div>
          </div>
        </div>
      </div>
    </header>
  );
}
