import React from "react";
import SectionHead from "../ui/SectionHead";
import Reveal from "../ui/Reveal";
import { c, mono, serif } from "../../data/theme";
import { Mail, Phone, MapPin, FileDown } from "lucide-react";
import { FaGithub as Github, FaLinkedin as Linkedin } from "react-icons/fa";
import { SiLeetcode as LeetCode } from "react-icons/si";

export default function Contact() {
  return (
    <section id="contact" style={{ padding: "100px 0", background: c.bgDeep, backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)" }}>
      <div style={{ maxWidth: 1080, margin: "0 auto", padding: "0 32px" }}>
        <SectionHead index="07" title="Let's" em="talk" />
        <Reveal style={{ marginTop: 24 }}>
          <p style={{ ...serif, fontStyle: "italic", fontWeight: 400, fontSize: "clamp(32px, 5vw, 60px)", maxWidth: 700, lineHeight: 1.1, color: c.ink }}>
            Building something with full-stack systems, real-time architectures, or AI? Let's connect.
          </p>

          <div style={{ display: "flex", alignItems: "center", gap: 16, marginTop: 16, flexWrap: "wrap", ...mono, fontSize: 13, color: c.clay }}>
            <span style={{ display: "inline-flex", alignItems: "center", gap: 6 }}>
              <MapPin size={15} color={c.mossDeep} /> Nanded, Maharashtra, India
            </span>
            <span style={{ opacity: 0.5 }}>•</span>
            <span style={{ display: "inline-flex", alignItems: "center", gap: 6 }}>
              <Phone size={15} color={c.mossDeep} /> +91-9657432340
            </span>
          </div>

          <p style={{ color: c.inkSoft, fontSize: 16, marginTop: 18, maxWidth: 540, lineHeight: 1.7 }}>
            Open to Full-Stack Developer, Software Engineering, and AI-enabled systems roles, internships, and collaborative opportunities.
          </p>

          <div style={{ display: "flex", gap: 14, flexWrap: "wrap", marginTop: 36 }}>
            <a href="mailto:mansukenagesh@gmail.com" style={{ ...mono, textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 8, fontSize: 13, padding: "12px 22px", background: c.mossDeep, border: `1px solid ${c.mossDeep}`, color: c.paper, borderRadius: 6, transition: "all 0.2s" }} onMouseEnter={(e) => e.currentTarget.style.background = c.ink} onMouseLeave={(e) => e.currentTarget.style.background = c.mossDeep}>
              <Mail size={14} /> Email me
            </a>
            <a href="/Nagesh_Mansuke_Resume.pdf" download="Nagesh_Mansuke_Resume.pdf" className="kk-btn-dark" style={{ ...mono, textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 8, fontSize: 13, padding: "12px 22px", border: `1px solid ${c.mossDeep}`, color: c.mossDeep, borderRadius: 6, transition: "all 0.2s", background: "rgba(86,96,71,0.06)" }}>
              <FileDown size={14} /> Resume PDF
            </a>
            <a href="tel:+919657432340" className="kk-btn-dark" style={{ ...mono, textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 8, fontSize: 13, padding: "12px 22px", border: `1px solid ${c.ink}`, color: c.ink, borderRadius: 6, transition: "all 0.2s" }}>
              <Phone size={14} /> Call / WhatsApp
            </a>
            <a href="https://github.com/nageshmansuke" target="_blank" rel="noopener noreferrer" className="kk-btn-dark" style={{ ...mono, textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 8, fontSize: 13, padding: "12px 22px", border: `1px solid ${c.ink}`, color: c.ink, borderRadius: 6, transition: "all 0.2s" }}>
              <Github size={14} /> GitHub
            </a>
            <a href="https://www.linkedin.com/in/nagesh-mansuke/" target="_blank" rel="noopener noreferrer" className="kk-btn-dark" style={{ ...mono, textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 8, fontSize: 13, padding: "12px 22px", border: `1px solid ${c.ink}`, color: c.ink, borderRadius: 6, transition: "all 0.2s" }}>
              <Linkedin size={14} /> LinkedIn
            </a>
            <a href="https://leetcode.com/u/NageshMansuke/" target="_blank" rel="noopener noreferrer" className="kk-btn-dark" style={{ ...mono, textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 8, fontSize: 13, padding: "12px 22px", border: `1px solid ${c.ink}`, color: c.ink, borderRadius: 6, transition: "all 0.2s" }}>
              <LeetCode size={14} /> LeetCode
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
