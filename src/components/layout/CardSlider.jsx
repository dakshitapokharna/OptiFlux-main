
import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import "../../styles/CardSlider.css";

const icons = [
  // Replace these with the actual SVG components or JSX snippets you have.
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 200"><path d="M208 80c0-26.5..."/></svg>`,
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 200"><path d="M38.8 5.1C28.4..."/></svg>`,
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 200"><path d="M308.5 135.3a22..."/></svg>`,
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 200"><path d="M176 24a24 24..."/></svg>`,
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 200"><path d="M418.4 157.9A80..."/></svg>`,
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 200"><path d="M418.4 157.9A80..."/></svg>`,
];

const CardSlider = () => {
  const [currentCard, setCurrentCard] = useState(2);
  const cardsRef = useRef([]);

  useEffect(() => {
    moveCards();
  }, [currentCard]);

  const moveCards = (dur = 0) => {
    const dir = 1; // direction logic can be extended
    gsap
      .timeline({
        defaults: {
          duration: dur,
          ease: "power3",
          stagger: { each: -0.03 * dir },
        },
      })
      .to(
        cardsRef.current,
        {
          x: -270 * currentCard,
          y: (i) => (i === currentCard ? 0 : 15),
          height: (i) => (i === currentCard ? 270 : 240),
          ease: "elastic.out(0.4)",
        },
        0
      )
      .to(
        cardsRef.current,
        {
          cursor: (i) => (i === currentCard ? "default" : "pointer"),
          boxShadow: (i) =>
            i === currentCard ? "0 6px 11px #00000030" : "0 0px 0px #00000030",
          border: (i) =>
            i === currentCard ? "2px solid #26a" : "0px solid #fff",
          background: (i) =>
            i === currentCard
              ? "radial-gradient(100% 100% at top, #fff 0%, #fff 99%)"
              : "radial-gradient(100% 100% at top, #fff 20%, #eee 175%)",
          ease: "expo",
        },
        0
      );
  };

  const handleCardClick = (i) => {
    setCurrentCard(i);
  };

  return (
    <div className="cards-wrapper">
      <div className="cards">
        {icons.map((icon, i) => (
          <button
            key={i}
            ref={(el) => (cardsRef.current[i] = el)}
            className={`card card${i + 1}`}
            onClick={() => handleCardClick(i)}
            dangerouslySetInnerHTML={{
              __html: `
              <div class='icon'>${icon}</div>
              <h2>${
                [
                  "Advaced Mathematical Expertise",
                  "Focused Specialization",
                  "Cutting-Edge Technology",
                  "Collaborative Approach",
                  "Proven Track Record",
                  "End-to-End Implementation",
                ][i]
              }</h2>
              <h4>${
                [
                  "Our team includes PhDs in operations research, applied mathematics, and computer science with extensive experience in advanced optimization techniques.",
                  "Ipsum",
                  "Dolor",
                  "Sit Amet",
                  "Consectetur",
                  "Adipiscing",
                ][i]
              }</h4>
            `,
            }}
          />
        ))}
      </div>
      <button
        className="arrow-btn arrow-btn-prev"
        onClick={() => setCurrentCard(Math.max(0, currentCard - 1))}
      >
        <svg viewBox="0 0 256 512">
          <path d="M31.7 239l136-136c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9L127.9 256l96.4 96.4c9.4 9.4 9.4 24.6 0 33.9L201.7 409c-9.4 9.4-24.6 9.4-33.9 0l-136-136c-9.5-9.4-9.5-24.6-.1-34z" />
        </svg>
      </button>
      <button
        className="arrow-btn arrow-btn-next"
        onClick={() => setCurrentCard(Math.min(5, currentCard + 1))}
      >
        <svg viewBox="0 0 256 512">
          <path d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z" />
        </svg>
      </button>
    </div>
  );
};

export default CardSlider;
