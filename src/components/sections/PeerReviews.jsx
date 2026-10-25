import React from "react";
import SectionHead from "../ui/SectionHead";
import { AnimatedTestimonials } from "../ui/animated-testimonials";

export default function PeerReviews() {
  const highlights = [
    {
      quote:
        "Architected HYDRA CI/CD autonomous self-healing developer agent with AST parsing and QuakeGuard AI seismic risk platform combining ML prediction with ChromaDB RAG pipelines.",
      name: "AI & Autonomous Systems",
      designation: "Flagship Key Projects",
      src: "/project_images/hydra_agent.jpg",
    },
    {
      quote:
        "Contributed to the development and maintenance of the official SGGSIE&T website at Bit Solve, developing responsive React.js modules and integrating MongoDB REST APIs.",
      name: "Bit Solve",
      designation: "Web Development Intern",
      src: "/sggs_certificate.jpg",
    },
    {
      quote:
        "Consistently solved 260+ challenges spanning Data Structures and Algorithms on LeetCode with focused practice on optimal time and space complexity.",
      name: "260+ Problems Solved",
      designation: "LeetCode Practice",
      src: "/leetcode_profile.png",
    },
    {
      quote:
        "Selected among the Top 10 teams at HackFusion 2.0, a state-level hackathon, for developing and presenting high-impact software solutions under competitive time constraints.",
      name: "Top 10 Finalist",
      designation: "HackFusion 2.0 Hackathon",
      src: "/hackfusion_certificate.png",
    },
    {
      quote:
        "Served as Joint Coordinator for the annual college cultural fest UTSAV, coordinating cross-functional team execution, schedules, and event planning.",
      name: "Campus Leadership",
      designation: "Joint Coordinator — UTSAV Fest",
      src: "/utsav_fest.png",
    },
  ];

  return (
    <section id="peer-reviews" style={{ padding: "100px 0", position: "relative" }}>
      {/* Translucent background with backdrop blur so mouse animations show behind */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(214, 205, 178, 0.42)",
          backdropFilter: "blur(18px)",
          WebkitBackdropFilter: "blur(18px)",
          zIndex: 0,
          pointerEvents: "none",
        }}
      />

      <div style={{ position: "relative", zIndex: 5, maxWidth: 1080, margin: "0 auto", padding: "0 32px", width: "100%" }}>
        <SectionHead index="06" title="Engineering" em="highlights" />

        <div style={{ marginTop: 40 }}>
          <AnimatedTestimonials testimonials={highlights} autoplay={true} />
        </div>
      </div>
    </section>
  );
}
