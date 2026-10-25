"use client";
import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { projects } from "@/data/portfolioData";
import { mono, serif } from "@/data/theme";
import { X, ExternalLink } from "lucide-react";

const defaultSpring = {
  type: "spring",
  visualDuration: 0.6,
  bounce: 0.25,
};

const cardConfigs = [
  {
    y: -20,
    rotate: -15,
    zIndex: 2,
    className: "bg-[#A4592F] text-white [&_h2]:text-white [&_p]:text-white/80", // Clay
  },
  {
    y: 20,
    rotate: 8,
    zIndex: 3,
    className: "bg-[#FAF7F0] text-[#2A271E] [&_h2]:text-[#2A271E] [&_p]:text-[#5B5643] border border-[rgba(42,39,30,0.12)]", // Paper/Parchment
  },
  {
    y: -60,
    rotate: -5,
    zIndex: 4,
    className: "bg-[#566047] text-white [&_h2]:text-white [&_p]:text-white/80", // Moss
  },
  {
    y: 20,
    rotate: 12,
    zIndex: 5,
    className: "bg-[#A98436] text-white [&_h2]:text-white [&_p]:text-white/80", // Gold
  },
  {
    y: 20,
    rotate: -5,
    zIndex: 6,
    className: "bg-[#2A271E] text-white [&_h2]:text-white [&_p]:text-white/80", // Ink
  },
];

export const controls = {
  spring: defaultSpring,
  activeScale: [1.15, 1, 1.6, 0.01],
  cardSpacing: [180, 40, 320, 5],
};

export const Cards = ({
  spring = defaultSpring,
  activeScale = 1.15,
  cardSpacing = 180,
} = {}) => {
  const cards = projects.map((project, index) => {
    const config = cardConfigs[index % cardConfigs.length];
    return {
      title: project.title,
      description: project.desc,
      image: project.image,
      github: project.github,
      live: project.live,
      tags: project.tags,
      className: config.className,
      config: {
        y: config.y,
        rotate: config.rotate,
        zIndex: index + 2,
      },
    };
  });

  const [active, setActive] = useState(null);
  const [spacing, setSpacing] = useState(cardSpacing);
  const [isMobile, setIsMobile] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setActive(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      const w = window.innerWidth;
      setIsMobile(w < 768);
      if (w >= 1024) {
        setSpacing(Math.round(cardSpacing * 0.78));
      } else if (w >= 600) {
        setSpacing(Math.round(cardSpacing * 0.52));
      } else {
        setSpacing(Math.round(cardSpacing * 0.26));
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [cardSpacing]);

  const middle = (cards.length - 1) / 2;

  const isAnyCardActive = () => {
    return !!active?.title;
  };

  const isCurrentActive = (card) => {
    return active?.title === card.title;
  };

  return (
    <>
      <style>{`
        .card-custom-scroll {
          scrollbar-width: thin;
          scrollbar-color: rgba(255,255,255,0.3) transparent;
          -webkit-overflow-scrolling: touch;
        }
        .card-custom-scroll::-webkit-scrollbar {
          width: 4px;
        }
        .card-custom-scroll::-webkit-scrollbar-track {
          background: transparent;
        }
        .card-custom-scroll::-webkit-scrollbar-thumb {
          background: rgba(255,255,255,0.35);
          border-radius: 4px;
        }
        .card-custom-scroll-light {
          scrollbar-width: thin;
          scrollbar-color: rgba(42,39,30,0.25) transparent;
          -webkit-overflow-scrolling: touch;
        }
        .card-custom-scroll-light::-webkit-scrollbar-thumb {
          background: rgba(42,39,30,0.25);
          border-radius: 4px;
        }
      `}</style>

      <div className="relative flex h-full w-full items-center justify-center pt-6 sm:pt-10 pb-4" style={{ minHeight: "460px" }}>
        <motion.div
          ref={ref}
          onClick={() => setActive(null)}
          className="relative mx-auto flex h-[460px] sm:h-[490px] lg:h-[520px] w-full max-w-6xl items-center justify-center [--height:360px] [--width:240px] sm:[--height:400px] sm:[--width:270px] lg:[--height:440px] lg:[--width:320px]"
        >
          {cards.map((card, index) => {
            const cardsCount = cards.length;
            const finalSpacing = cardsCount > 5 ? (spacing * 4) / (cardsCount - 1) : spacing;
            const offsetX = (index - middle) * finalSpacing;
            const isLightCard = card.className.includes("bg-[#FAF7F0]");
            const btnTextColor = isLightCard ? "#2A271E" : "#FAF7F0";
            const btnBgColor = isLightCard ? "rgba(42, 39, 30, 0.08)" : "rgba(255, 255, 255, 0.18)";
            const btnBorder = isLightCard ? "1px solid rgba(42, 39, 30, 0.18)" : "1px solid rgba(255, 255, 255, 0.22)";
            const activeCard = isCurrentActive(card);
            const anyActive = isAnyCardActive();

            // Mobile active card sizing
            const cardWidth = activeCard && isMobile ? "min(90vw, 340px)" : "var(--width)";
            const cardHeight = activeCard && isMobile ? "430px" : "var(--height)";

            return (
              <motion.div key={card.title}>
                <motion.div
                  initial={{
                    x: 0,
                    scale: 0,
                  }}
                  onClick={(e) => {
                    e.stopPropagation();
                    setActive(card);
                  }}
                  animate={{
                    y: activeCard
                      ? 0
                      : anyActive
                        ? (isMobile ? 130 : card.config.y * 0.35)
                        : card.config.y,
                    x: activeCard
                      ? (isMobile ? 0 : "-38%")
                      : anyActive
                        ? (isMobile ? offsetX * 0.2 : `calc(var(--width) * 0.96 + ${offsetX * 0.35}px)`)
                        : offsetX,
                    rotate: activeCard
                      ? 0
                      : anyActive
                        ? 0.15 * card.config.rotate
                        : card.config.rotate,
                    scale: activeCard
                      ? (isMobile ? 1 : activeScale)
                      : anyActive
                        ? (isMobile ? 0.72 : 0.65)
                        : 1,
                    opacity: activeCard
                      ? 1
                      : anyActive
                        ? (isMobile ? 0.18 : 0.55)
                        : 1,
                  }}
                  whileHover={{
                    scale: activeCard
                      ? (isMobile ? 1 : activeScale)
                      : anyActive
                        ? (isMobile ? 0.72 : 0.65)
                        : 1.04,
                  }}
                  transition={spring}
                  style={{
                    width: cardWidth,
                    height: cardHeight,
                    marginLeft: activeCard && isMobile ? "calc(min(90vw, 340px) / -2)" : "calc(var(--width) / -2)",
                    marginTop: activeCard && isMobile ? "-215px" : "calc(var(--height) / -2)",
                    zIndex: activeCard ? 60 : card.config.zIndex,
                  }}
                  className={cn(
                    "absolute top-1/2 left-1/2 flex cursor-pointer flex-col items-start justify-start overflow-hidden rounded-2xl p-3 sm:p-4 shadow-xl transition-shadow duration-300 gap-2 sm:gap-2.5",
                    card.className
                  )}
                >
                  {/* Close button for active card */}
                  {activeCard && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setActive(null);
                      }}
                      aria-label="Close card details"
                      style={{
                        position: "absolute",
                        top: 10,
                        right: 10,
                        width: 28,
                        height: 28,
                        borderRadius: "50%",
                        background: isLightCard ? "rgba(42,39,30,0.85)" : "rgba(255,255,255,0.9)",
                        color: isLightCard ? "#FAF7F0" : "#2A271E",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        border: "none",
                        cursor: "pointer",
                        zIndex: 20,
                        boxShadow: "0 2px 10px rgba(0,0,0,0.3)",
                      }}
                      title="Close"
                    >
                      <X size={15} strokeWidth={2.5} />
                    </button>
                  )}

                  {/* Project Image Header */}
                  <div className="h-24 sm:h-28 lg:h-32 w-full rounded-xl overflow-hidden bg-neutral-900/10 relative border border-black/5 flex-shrink-0">
                    <img src={card.image} alt={card.title} className="h-full w-full object-cover" />
                  </div>

                  {/* Project Content Container with Scrollable Area */}
                  <div
                    className={cn(
                      "w-full flex-1 min-h-0 flex flex-col",
                      activeCard && (isLightCard ? "card-custom-scroll-light overflow-y-auto pr-1" : "card-custom-scroll overflow-y-auto pr-1")
                    )}
                    onWheel={(e) => activeCard && e.stopPropagation()}
                    onTouchMove={(e) => activeCard && e.stopPropagation()}
                  >
                    <h2
                      style={{ ...serif }}
                      className="font-bold text-left text-base sm:text-lg leading-snug py-0.5 flex-shrink-0"
                    >
                      {card.title}
                    </h2>

                    <AnimatePresence mode="popLayout">
                      {activeCard && (
                        <motion.div
                          initial={{ opacity: 0, y: 12 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 12 }}
                          transition={spring}
                          className="mt-1.5 w-full flex-1 flex flex-col"
                        >
                          {/* Project Tech Tags */}
                          <div className="flex flex-wrap gap-1 mb-2.5 flex-shrink-0">
                            {card.tags?.slice(0, 6).map((tag) => (
                              <span
                                key={tag}
                                style={{
                                  borderColor: isLightCard ? "rgba(42,39,30,0.15)" : "rgba(255,255,255,0.2)",
                                  background: isLightCard ? "rgba(42,39,30,0.04)" : "rgba(255,255,255,0.08)",
                                  color: btnTextColor,
                                  fontSize: "9px",
                                  ...mono,
                                }}
                                className="px-1.5 py-0.5 rounded border text-[9px] uppercase tracking-wider font-semibold"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>

                          {/* Project Description (Fully readable & scrollable) */}
                          <p
                            style={{ ...mono }}
                            className="text-left text-[11.5px] opacity-95 leading-relaxed mb-3"
                          >
                            {card.description}
                          </p>

                          {/* Action Links (GitHub Repo & Live Demo) */}
                          <div className="flex flex-wrap items-center gap-2 pt-2 pb-1 mt-auto flex-shrink-0 border-t border-white/10">
                            {card.github ? (
                              <a
                                href={card.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={(e) => e.stopPropagation()}
                                style={{
                                  color: btnTextColor,
                                  background: btnBgColor,
                                  border: btnBorder,
                                  ...mono,
                                }}
                                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[10px] font-semibold tracking-wider uppercase transition-all duration-200 hover:scale-102 hover:opacity-90 shadow-sm"
                              >
                                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                                </svg>
                                GitHub Repo ↗
                              </a>
                            ) : (
                              <span
                                style={{
                                  color: btnTextColor,
                                  background: btnBgColor,
                                  border: btnBorder,
                                  opacity: 0.5,
                                  ...mono,
                                }}
                                className="px-2.5 py-1 rounded-lg text-[10px] font-semibold tracking-wider uppercase"
                              >
                                Code Private
                              </span>
                            )}

                            {card.live ? (
                              <a
                                href={card.live}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={(e) => e.stopPropagation()}
                                style={{
                                  color: isLightCard ? "#FAF7F0" : "#2A271E",
                                  background: isLightCard ? "#2A271E" : "#FAF7F0",
                                  border: isLightCard ? "1px solid #2A271E" : "1px solid #FAF7F0",
                                  ...mono,
                                }}
                                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[10px] font-semibold tracking-wider uppercase transition-all duration-200 hover:scale-102 hover:opacity-90 shadow-sm"
                              >
                                <ExternalLink size={12} strokeWidth={2.5} />
                                Live Demo ↗
                              </a>
                            ) : (
                              <span
                                style={{
                                  color: btnTextColor,
                                  background: btnBgColor,
                                  border: btnBorder,
                                  opacity: 0.5,
                                  ...mono,
                                }}
                                className="px-2.5 py-1 rounded-lg text-[10px] font-semibold tracking-wider uppercase"
                              >
                                In Progress
                              </span>
                            )}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </>
  );
};

export default Cards;
