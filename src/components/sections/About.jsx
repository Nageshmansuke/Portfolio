import React from "react";
import SectionHead from "../ui/SectionHead";
import Reveal from "../ui/Reveal";
import { c, mono, serif } from "../../data/theme";

export default function About() {
  return (
    <section id="about" style={{ padding: "100px 0" }}>
      <div style={{ maxWidth: 1080, margin: "0 auto", padding: "0 32px" }}>
        <SectionHead index="01" title="About" em="me" />
        <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: 64, position: "relative", zIndex: 10 }} className="kk-grid-collapse">
          {/* Left Column: Elegant Typography */}
          <Reveal style={{ display: "flex", flexDirection: "column", gap: 32, justifyContent: "center" }}>
            <p style={{ margin: 0, fontSize: 24, lineHeight: 1.5, color: c.ink, fontWeight: 500, letterSpacing: "-0.01em" }}>
              I'm a <span style={{ color: c.mossDeep, fontStyle: "italic", ...serif }}>Computer Science & Engineering</span> student specializing in full-stack web development, responsive React interfaces, REST APIs, and AI-enabled applications.
            </p>
            <p style={{ margin: 0, fontSize: 17, lineHeight: 1.7, color: c.inkSoft }}>
              During my internship at <strong>Bit Solve</strong>, I contributed directly to the official institutional web system for <strong>SGGSIE&T</strong>, developing responsive React.js modules, integrating Node.js and MongoDB RESTful APIs, resolving production issues, and earning a Certificate of Appreciation for architecting and deploying the system.
            </p>
            <p style={{ margin: 0, fontSize: 17, lineHeight: 1.7, color: c.inkSoft }}>
              I treat strong algorithmic foundations as the bedrock of engineering, having solved over <strong>300 problems</strong> on LeetCode. Today, I combine that discipline with event-driven architectures using Socket.IO and WebRTC, machine learning prediction models with scikit-learn, and practical AI integrations with Google Gemini and RAG workflows.
            </p>
          </Reveal>

          {/* Right Column: Premium Bento Grid */}
          <Reveal delay={0.1} style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, alignContent: "center" }}>

            {/* Bento 1: Large Problem Solving Card */}
            <div style={{ gridColumn: "1 / -1", background: "rgba(255,255,255,0.4)", backdropFilter: "blur(12px)", border: `1px solid ${c.line}`, borderRadius: 24, padding: 32, position: "relative", overflow: "hidden" }}>
              <div style={{ position: "relative", zIndex: 2 }}>
                <span style={{ ...mono, fontSize: 11, textTransform: "uppercase", letterSpacing: 1.5, color: c.mossDeep, fontWeight: 600 }}>Problem Solving</span>
                <h4 style={{ ...serif, fontSize: 48, fontWeight: 600, color: c.ink, margin: "8px 0 4px 0", letterSpacing: "-0.02em" }}>300+</h4>

                <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: 16, flexWrap: "wrap", marginTop: 4 }}>
                  <p style={{ color: c.inkSoft, fontSize: 14, margin: 0, maxWidth: 240 }}>Problems solved across Data Structures & Algorithms on LeetCode.</p>

                  <a
                    href="https://leetcode.com/u/NageshMansuke/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      background: c.ink,
                      color: c.paper,
                      padding: "10px 20px",
                      borderRadius: 30,
                      textDecoration: "none",
                      fontSize: 13,
                      fontWeight: 500,
                      display: "flex",
                      alignItems: "center",
                      gap: 8,
                      boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
                      transition: "all 0.2s ease"
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.background = "#000"; }}
                    onMouseLeave={(e) => { e.currentTarget.style.transform = "none"; e.currentTarget.style.background = c.ink; }}
                  >
                    View LeetCode
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
              {/* Decorative accent */}
              <div style={{ position: "absolute", right: -15, bottom: -35, fontSize: 110, opacity: 0.04, ...serif, fontWeight: 800, userSelect: "none", pointerEvents: "none" }}>DSA</div>
            </div>

            {/* Bento 2: Academic */}
            <div style={{ background: "rgba(255,255,255,0.4)", backdropFilter: "blur(12px)", border: `1px solid ${c.line}`, borderRadius: 24, padding: 24, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
              <div>
                <span style={{ ...mono, fontSize: 10, textTransform: "uppercase", letterSpacing: 1.5, color: c.gold, fontWeight: 600 }}>Education</span>
                <h4 style={{ fontSize: 20, fontWeight: 600, color: c.ink, margin: "12px 0 4px 0", letterSpacing: "-0.01em" }}>B.Tech in CSE</h4>
                <p style={{ color: c.inkSoft, fontSize: 13, margin: 0, lineHeight: 1.5 }}>2023 – 2027 <br />SGGSIE&T, Nanded</p>
              </div>
            </div>

            {/* Bento 3: Focus */}
            <div style={{ background: "rgba(255,255,255,0.4)", backdropFilter: "blur(12px)", border: `1px solid ${c.line}`, borderRadius: 24, padding: 24, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
              <div>
                <span style={{ ...mono, fontSize: 10, textTransform: "uppercase", letterSpacing: 1.5, color: c.clay, fontWeight: 600 }}>Core Focus</span>
                <h4 style={{ fontSize: 20, fontWeight: 600, color: c.ink, margin: "12px 0 4px 0", letterSpacing: "-0.01em" }}>Real-Time & AI</h4>
                <p style={{ color: c.inkSoft, fontSize: 13, margin: 0, lineHeight: 1.5 }}>Building event-driven backends, autonomous CI/CD agents, and Gemini RAG workflows.</p>
              </div>
            </div>

          </Reveal>
        </div>
      </div>

      {/* Dynamic pulse CSS for dashboard widgets */}
      <style>{`
        @keyframes kk-pulse {
          0% { transform: scale(1); box-shadow: 0 0 0 0 rgba(42,39,30,0.2); }
          70% { transform: scale(1.08); box-shadow: 0 0 0 8px rgba(42,39,30,0); }
          100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(42,39,30,0); }
        }
      `}</style>
    </section>
  );
}
