import React, { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight, X, ZoomIn } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "../../lib/utils";
import { c, mono, serif } from "../../data/theme";

export const AnimatedTestimonials = ({
  testimonials,
  autoplay = false,
}) => {
  const [active, setActive] = useState(0);
  const [isHeld, setIsHeld] = useState(false);
  const [preview, setPreview] = useState(null);

  const handleNext = () => {
    setActive((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const isActive = (index) => {
    return index === active;
  };

  useEffect(() => {
    if (autoplay && !isHeld && !preview) {
      const interval = setInterval(handleNext, 5000);
      return () => clearInterval(interval);
    }
  }, [autoplay, isHeld, preview, testimonials.length]);

  const getRotation = (index) => {
    const rotations = [-6, 5, -3, 7, -5];
    return rotations[index % rotations.length];
  };

  return (
    <>
      <div
        onMouseDown={() => setIsHeld(true)}
        onMouseUp={() => setIsHeld(false)}
        onMouseLeave={() => setIsHeld(false)}
        onTouchStart={() => setIsHeld(true)}
        onTouchEnd={() => setIsHeld(false)}
        style={{ position: "relative", zIndex: 10 }}
        className="mx-auto max-w-sm px-4 py-8 font-sans antialiased md:max-w-4xl md:px-8 lg:px-12 select-none"
      >
        <div className="relative grid grid-cols-1 gap-12 md:gap-20 md:grid-cols-2">
          <div>
            <div className="relative h-80 w-full" style={{ minHeight: "320px" }}>
              <AnimatePresence>
                {testimonials.map((testimonial, index) => {
                  const rot = getRotation(index);
                  const activeCard = isActive(index);
                  return (
                    <motion.div
                      key={testimonial.src}
                      initial={{
                        opacity: 0,
                        scale: 0.9,
                        z: -100,
                        rotate: rot,
                      }}
                      animate={{
                        opacity: activeCard ? 1 : 0.7,
                        scale: activeCard ? 1 : 0.95,
                        z: activeCard ? 0 : -100,
                        rotate: activeCard ? 0 : rot,
                        zIndex: activeCard
                          ? 40
                          : testimonials.length + 2 - index,
                        y: activeCard ? [0, -80, 0] : 0,
                      }}
                      exit={{
                        opacity: 0,
                        scale: 0.9,
                        z: 100,
                        rotate: rot,
                      }}
                      transition={{
                        duration: 0.4,
                        ease: "easeInOut",
                      }}
                      className="absolute inset-0 origin-bottom"
                      onClick={() => activeCard && setPreview(testimonial)}
                    >
                      <div className="relative h-full w-full rounded-3xl overflow-hidden bg-[#FAF7F0] p-2 shadow-lg border border-[rgba(42,39,30,0.12)] group cursor-pointer">
                        <img
                          src={testimonial.src}
                          alt={testimonial.name}
                          width={500}
                          height={500}
                          draggable={false}
                          className="h-full w-full rounded-2xl object-contain object-center transition-transform duration-300 group-hover:scale-102"
                        />
                        {activeCard && (
                          <div className="absolute bottom-4 right-4 bg-black/70 text-white rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1.5 text-xs px-3 pointer-events-none">
                            <ZoomIn size={13} />
                            <span style={{ ...mono, fontSize: "10px" }}>Click to View</span>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>
          </div>
          <div className="flex flex-col justify-between py-4">
            <motion.div
              key={active}
              initial={{
                y: 20,
                opacity: 0,
              }}
              animate={{
                y: 0,
                opacity: 1,
              }}
              exit={{
                y: -20,
                opacity: 0,
              }}
              transition={{
                duration: 0.2,
                ease: "easeInOut",
              }}
            >
              <h3 style={{ ...serif, color: c.ink }} className="text-2xl font-bold">
                {testimonials[active].name}
              </h3>
              <p style={{ ...mono, color: c.inkSoft }} className="text-xs uppercase tracking-wider mt-1">
                {testimonials[active].designation}
              </p>

              <p style={{ ...serif, color: c.inkSoft, fontStyle: "italic", lineHeight: 1.6 }} className="mt-8 text-lg md:text-xl">
                "{testimonials[active].quote}"
              </p>
            </motion.div>
            <div className="flex gap-4 pt-12 md:pt-0">
              <button
                onClick={handlePrev}
                style={{
                  background: c.paper,
                  border: `1px solid ${c.line}`,
                  color: c.ink
                }}
                className="group/button flex h-9 w-9 items-center justify-center rounded-full transition-colors hover:opacity-85"
                aria-label="Previous Highlight"
              >
                <ArrowLeft className="h-4 w-4 text-black transition-transform duration-300 group-hover/button:-translate-x-0.5" />
              </button>
              <button
                onClick={handleNext}
                style={{
                  background: c.paper,
                  border: `1px solid ${c.line}`,
                  color: c.ink
                }}
                className="group/button flex h-9 w-9 items-center justify-center rounded-full transition-colors hover:opacity-85"
                aria-label="Next Highlight"
              >
                <ArrowRight className="h-4 w-4 text-black transition-transform duration-300 group-hover/button:translate-x-0.5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Modal for Highlight Image Preview */}
      <AnimatePresence>
        {preview && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: "fixed",
              inset: 0,
              background: "rgba(42,39,30,0.72)",
              backdropFilter: "blur(8px)",
              zIndex: 1000,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: 20,
            }}
            onClick={() => setPreview(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 350 }}
              style={{
                background: "#FAF7F0",
                width: "100%",
                maxWidth: 860,
                borderRadius: 16,
                boxShadow: "0 24px 60px rgba(0,0,0,0.4)",
                position: "relative",
                cursor: "default",
                overflow: "hidden",
                border: `2px solid ${c.lineStrong}`,
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "12px 20px",
                  background: c.paper,
                  borderBottom: `1px solid ${c.line}`,
                }}
              >
                <div>
                  <h4 style={{ ...serif, fontSize: 18, fontWeight: 700, color: c.ink, margin: 0 }}>
                    {preview.name}
                  </h4>
                  <span style={{ ...mono, fontSize: 11, color: c.clay, textTransform: "uppercase", letterSpacing: 1 }}>
                    {preview.designation}
                  </span>
                </div>
                <button
                  onClick={() => setPreview(null)}
                  style={{
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    color: c.inkSoft,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: 4,
                  }}
                  aria-label="Close Preview"
                >
                  <X size={22} />
                </button>
              </div>

              <div style={{ padding: 16, background: "#FAF7F0", display: "flex", justifyContent: "center" }}>
                <img
                  src={preview.src}
                  alt={preview.name}
                  style={{
                    width: "100%",
                    maxHeight: "75vh",
                    objectFit: "contain",
                    borderRadius: 8,
                    boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
                  }}
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
