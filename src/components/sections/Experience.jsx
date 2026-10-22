import React, { useState } from "react";
import SectionHead from "../ui/SectionHead";
import Reveal from "../ui/Reveal";
import ChipRow from "../ui/ChipRow";
import { c, mono, serif } from "../../data/theme";
import { Award, Briefcase, Calendar, X, GraduationCap } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Experience() {
  const [showCertificate, setShowCertificate] = useState(false);

  return (
    <section id="experience" style={{ padding: "100px 0", position: "relative" }}>
      {/* Background container: zIndex 2 puts it above root background but behind the cursor (3) */}
      <div style={{ position: "absolute", inset: 0, background: c.bgDeep, zIndex: 2, pointerEvents: "none", backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)" }} />
      {/* Main content div: zIndex 10 puts it above the cursor (3) */}
      <div style={{ position: "relative", zIndex: 10, maxWidth: 1080, margin: "0 auto", padding: "0 32px" }}>
        <SectionHead index="02" title="Career" em="road" />

        <div style={{ position: "relative", marginTop: 60, paddingBottom: 40 }}>
          {/* The Vertical Road Track */}
          <div
            style={{
              position: "absolute",
              left: 70, // Centers on the 140px left column
              top: 0,
              bottom: 0,
              width: 24,
              background: "#32372A", // Asphalt dark color
              transform: "translateX(-50%)",
              borderRadius: 12,
              border: `2px solid ${c.lineStrong}`,
              boxShadow: "inset 0 0 10px rgba(0,0,0,0.5)",
              overflow: "hidden",
              zIndex: 1
            }}
            className="kk-road-track"
          >
            {/* Dotted/Dashed Road Line */}
            <div style={{
              width: 0,
              height: "100%",
              borderLeft: "2px dashed #E3B448", // Gold/Yellow road dash
              margin: "0 auto",
              opacity: 0.95
            }} />
          </div>

          {/* Timeline Milestones */}
          <div style={{ display: "flex", flexDirection: "column", gap: 60, position: "relative" }}>

            {/* Milestone 1: Solutions Touch Web Development Intern */}
            <div style={{ display: "grid", gridTemplateColumns: "140px 1fr", gap: 48, position: "relative" }} className="kk-milestone-row">
              
              {/* Left Column: Icon and Date */}
              <div style={{ position: "relative", zIndex: 2, display: "flex", flexDirection: "column", alignItems: "center", paddingTop: 20 }} className="kk-milestone-left">
                {/* Milestone Dot/Icon */}
                <div style={{
                  width: 48,
                  height: 48,
                  borderRadius: "50%",
                  background: c.mossDeep,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: c.paper,
                  zIndex: 2,
                  boxShadow: `0 0 0 10px ${c.bgDeep}`
                }} className="kk-milestone-dot">
                  <Briefcase size={20} strokeWidth={2} />
                </div>
                
                {/* Date under the icon */}
                <div style={{ 
                  textAlign: "center", 
                  marginTop: 24,
                  background: c.paper,
                  padding: "8px 16px",
                  borderRadius: 20,
                  boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
                  border: `1px solid ${c.line}`,
                  position: "relative",
                  zIndex: 5
                }} className="kk-milestone-date">
                  <div style={{ ...mono, fontSize: 11, color: c.clay, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: 2 }}>Jun 2026</div>
                  <div style={{ ...serif, fontSize: 15, color: c.ink, fontWeight: 600 }}>Aug 2026</div>
                </div>
              </div>

              {/* Card Container */}
              <div className="kk-milestone-card-container">
                <Reveal>
                  <div style={{
                    background: c.paper,
                    border: `1px solid ${c.line}`,
                    borderRadius: 16,
                    padding: 28,
                    boxShadow: "0 8px 30px rgba(42,39,30,0.06)",
                    position: "relative"
                  }}>
                    {/* Role Tag */}
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 10 }}>
                      <span style={{
                        background: c.mossDeep,
                        color: c.paper,
                        fontSize: 10,
                        fontWeight: 600,
                        letterSpacing: 1.5,
                        ...mono,
                        padding: "4px 8px",
                        borderRadius: 4,
                        textTransform: "uppercase"
                      }}>
                        Internship
                      </span>
                      <div style={{ display: "flex", alignItems: "center", gap: 6, ...mono, fontSize: 12, color: c.inkFaint }}>
                        <Calendar size={13} />
                        12 June 2026 - 12 August 2026
                      </div>
                    </div>

                    <h3 style={{ ...serif, fontSize: 22, fontWeight: 600, marginTop: 14, color: c.ink }}>
                      Web Development Intern
                    </h3>
                    <div style={{ color: c.clay, fontWeight: 600, marginTop: 4, fontSize: 14, ...mono }}>
                      Bit Solve | Official SGGSIE&T College Website
                    </div>

                    <p style={{ color: c.inkSoft, fontSize: 14.5, lineHeight: 1.6, marginTop: 14, marginBottom: 18 }}>
                      Contributed to the development, optimization, and feature enhancements of the official SGGSIE&T institutional website alongside the Bit Solve engineering team.
                    </p>

                    <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 20 }}>
                      {[
                        "Contributed to the development and maintenance of the official SGGSIE&T website as part of the development team.",
                        "Developed responsive React.js modules and integrated frontend features with Node.js, Express.js, REST APIs, and MongoDB.",
                        "Implemented website features, investigated production issues, and supported UI/UX improvements using Git, GitHub, and Postman."
                      ].map((item, idx) => (
                        <div key={idx} style={{ display: "flex", gap: 8, fontSize: 13.5, color: c.inkSoft, lineHeight: 1.4 }}>
                          <span style={{ color: c.clay }}>▸</span>
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>

                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
                      <ChipRow items={["React.js", "Node.js", "Express.js", "MongoDB", "REST APIs", "Git", "GitHub", "Postman"]} bg="rgba(164,89,47,0.08)" fg={c.clay} />

                      <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
                        {/* Live Demo Link */}
                        <a
                          href="https://www.sggs.ac.in/"
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            background: c.mossDeep,
                            color: c.paper,
                            border: "none",
                            borderRadius: 6,
                            padding: "8px 14px",
                            fontSize: 12,
                            ...mono,
                            textDecoration: "none",
                            display: "inline-flex",
                            alignItems: "center",
                            gap: 6,
                            boxShadow: "0 2px 6px rgba(86,96,71,0.3)",
                            transition: "background 0.2s"
                          }}
                          onMouseEnter={(e) => e.currentTarget.style.background = c.ink}
                          onMouseLeave={(e) => e.currentTarget.style.background = c.mossDeep}
                        >
                          Live Demo →
                        </a>

                        {/* View Certificate Button */}
                        <button
                          onClick={() => setShowCertificate(true)}
                          style={{
                            background: c.gold,
                            color: c.paper,
                            border: "none",
                            borderRadius: 6,
                            padding: "8px 14px",
                            fontSize: 12,
                            ...mono,
                            cursor: "pointer",
                            display: "inline-flex",
                            alignItems: "center",
                            gap: 6,
                            boxShadow: "0 2px 6px rgba(169,132,54,0.3)",
                            transition: "background 0.2s"
                          }}
                          onMouseEnter={(e) => e.currentTarget.style.background = "#92712D"}
                          onMouseLeave={(e) => e.currentTarget.style.background = c.gold}
                        >
                          <Award size={14} /> Certificate
                        </button>
                      </div>
                    </div>
                  </div>
                </Reveal>
              </div>
            </div>

            {/* Milestone 2: Achievements & Campus Leadership */}
            <div style={{ display: "grid", gridTemplateColumns: "140px 1fr", gap: 48, position: "relative" }} className="kk-milestone-row">
              
              {/* Left Column: Icon and Date */}
              <div style={{ position: "relative", zIndex: 2, display: "flex", flexDirection: "column", alignItems: "center", paddingTop: 20 }} className="kk-milestone-left">
                {/* Milestone Dot/Icon */}
                <div style={{
                  width: 48,
                  height: 48,
                  borderRadius: "50%",
                  background: c.clay,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: c.paper,
                  zIndex: 2,
                  boxShadow: `0 0 0 10px ${c.bgDeep}`
                }} className="kk-milestone-dot">
                  <GraduationCap size={22} strokeWidth={2} />
                </div>
                
                {/* Date under the icon */}
                <div style={{ 
                  textAlign: "center", 
                  marginTop: 24,
                  background: c.paper,
                  padding: "8px 16px",
                  borderRadius: 20,
                  boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
                  border: `1px solid ${c.line}`,
                  position: "relative",
                  zIndex: 5
                }} className="kk-milestone-date">
                  <div style={{ ...mono, fontSize: 11, color: c.clay, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: 2 }}>2023</div>
                  <div style={{ ...serif, fontSize: 15, color: c.ink, fontWeight: 600 }}>2027</div>
                </div>
              </div>

              {/* Card Container */}
              <div className="kk-milestone-card-container">
                <Reveal>
                  <div style={{
                    background: c.paper,
                    border: `1px solid ${c.line}`,
                    borderRadius: 16,
                    padding: 28,
                    boxShadow: "0 8px 30px rgba(42,39,30,0.06)",
                    position: "relative"
                  }}>
                    {/* Role Tag */}
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 10 }}>
                      <span style={{
                        background: c.moss,
                        color: c.paper,
                        fontSize: 10,
                        fontWeight: 600,
                        letterSpacing: 1.5,
                        ...mono,
                        padding: "4px 8px",
                        borderRadius: 4,
                        textTransform: "uppercase"
                      }}>
                        Achievements & Leadership
                      </span>
                      <div style={{ display: "flex", alignItems: "center", gap: 6, ...mono, fontSize: 12, color: c.inkFaint }}>
                        <Calendar size={13} />
                        2023 - 2027
                      </div>
                    </div>

                    <h3 style={{ ...serif, fontSize: 22, fontWeight: 600, marginTop: 14, color: c.ink }}>
                      Institutional Web Architecture & Campus Leadership
                    </h3>
                    <div style={{ color: c.clay, fontWeight: 600, marginTop: 4, fontSize: 14, ...mono }}>
                      Shri Guru Gobind Singhji Institute of Engineering & Technology (SGGSIE&T)
                    </div>

                    <p style={{ color: c.inkSoft, fontSize: 14.5, lineHeight: 1.6, marginTop: 14, marginBottom: 18 }}>
                      Recognized for engineering contributions, state-level hackathon excellence, competitive programming milestones, and cross-functional leadership.
                    </p>

                    <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 20 }}>
                      {[
                        "Certificate of Appreciation (SGGS Institute): Awarded for architecting and deploying the official college web system.",
                        "Competitive Programming: Solved 300+ Data Structures and Algorithms problems on LeetCode.",
                        "Hackathon: Selected among the Top 10 teams at HackFusion 2.0, a state-level hackathon.",
                        "Joint Coordinator: Served as Joint Coordinator of UTSAV, coordinating event planning and team collaboration."
                      ].map((item, idx) => (
                        <div key={idx} style={{ display: "flex", gap: 8, fontSize: 13.5, color: c.inkSoft, lineHeight: 1.4 }}>
                          <span style={{ color: c.moss }}>▸</span>
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>

                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
                      <ChipRow items={["College Web System", "LeetCode 300+", "HackFusion 2.0 Top 10", "UTSAV Coordinator", "Team Leadership"]} bg="rgba(86,96,71,0.08)" fg={c.mossDeep} />
                    </div>
                  </div>
                </Reveal>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Official Certificate of Appreciation Modal */}
      <AnimatePresence>
        {showCertificate && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: "fixed",
              inset: 0,
              background: "rgba(42,39,30,0.65)",
              backdropFilter: "blur(6px)",
              zIndex: 1000,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: 20
            }}
            onClick={() => setShowCertificate(false)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 350 }}
              style={{
                background: "#FAF7F0",
                width: "100%",
                maxWidth: 820,
                borderRadius: 16,
                boxShadow: "0 24px 60px rgba(0,0,0,0.4)",
                position: "relative",
                cursor: "default",
                overflow: "hidden",
                border: `2px solid ${c.lineStrong}`
              }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header Bar */}
              <div style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "12px 20px",
                background: c.paper,
                borderBottom: `1px solid ${c.line}`
              }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <Award size={18} color={c.gold} />
                  <span style={{ ...mono, fontSize: 12, fontWeight: 600, color: c.ink, textTransform: "uppercase", letterSpacing: 1 }}>
                    Certificate of Appreciation — SGGSIE&T
                  </span>
                </div>
                <button
                  onClick={() => setShowCertificate(false)}
                  style={{
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    color: c.inkSoft,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: 4
                  }}
                >
                  <X size={20} />
                </button>
              </div>

              {/* High-Resolution Certificate Image */}
              <div style={{ padding: 16, background: "#FAF7F0", display: "flex", justifyContent: "center" }}>
                <img
                  src="/sggs_certificate.jpg"
                  alt="Certificate of Appreciation - Nagesh Shirishrao Mansuke"
                  style={{
                    width: "100%",
                    maxHeight: "75vh",
                    objectFit: "contain",
                    borderRadius: 8,
                    boxShadow: "0 4px 20px rgba(0,0,0,0.1)"
                  }}
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CSS adjustments for mobile styling of the road timeline */}
      <style>{`
        @media (max-width: 800px) {
          .kk-road-track {
            left: 40px !important;
          }
          .kk-milestone-row {
            grid-template-columns: 80px 1fr !important;
            gap: 16px !important;
          }
          .kk-milestone-left {
            padding-top: 10px !important;
          }
          .kk-milestone-dot {
            width: 36px !important;
            height: 36px !important;
            box-shadow: 0 0 0 6px #FAF7F0 !important;
          }
          .kk-milestone-dot svg {
            width: 16px !important;
            height: 16px !important;
          }
          .kk-milestone-date {
            margin-top: 16px !important;
          }
          .kk-milestone-date > div:first-child {
            font-size: 9px !important;
          }
          .kk-milestone-date > div:last-child {
            font-size: 14px !important;
          }
          .kk-milestone-card-container {
            width: 100% !important;
          }
        }
      `}</style>
    </section>
  );
}
