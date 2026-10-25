export const projects = [
  {
    featured: true,
    index: "00",
    tag: "FEATURED AUTONOMOUS AGENT",
    badge: "AI & CI/CD",
    title: "HYDRA CI/CD Agent — Autonomous Self-Healing Developer Agent",
    desc: "A multi-agent autonomous developer system designed to triage failed builds and tests, analyze stack traces and Git history, and generate targeted code patches. Features JS/TS and Python AST parsing to inspect code structures, isolated test execution in Docker or subprocess fallback, real-time streaming pipeline logs via SSE, Git diff review, and automated PR summaries.",
    extra: "Multi-agent triage workflow; JS/TS & Python AST inspection; isolated test execution via Docker; streaming pipeline logs with SSE; Git diff patch generation; Prisma & PostgreSQL persistence.",
    tags: ["Next.js", "React", "TypeScript", "Python", "Google Gemini", "Docker", "Prisma", "PostgreSQL", "SQLite", "SSE"],
    live: "https://github.com/Nageshmansuke/Agents-Everywhere",
    github: "https://github.com/Nageshmansuke/Agents-Everywhere",
    image: "/project_images/hydra_agent.jpg",
    stats: [
      { value: "Multi-Agent", label: "Triage & Patch Gen" },
      { value: "AST Parsing", label: "JS/TS & Python AST" },
      { value: "Self-Healing", label: "Docker Sandboxing" }
    ]
  },
  {
    featured: true,
    index: "01",
    tag: "FEATURED PRODUCTION SYSTEM",
    badge: "AI & Real-Time",
    title: "EduHive — AI-Powered Collaborative Learning Platform",
    desc: "A full-stack collaborative learning platform concept combining courses, notes, polls, collaborative classrooms, and AI-assisted study support. Features JWT authentication and role-based workflows (RBAC) across student, teacher, and admin experiences, integrated with Gemini-powered study assistance, Socket.IO real-time events, WebRTC live audio/video rooms, and MongoDB REST APIs.",
    extra: "Role-Based Access Control (RBAC) across student, teacher, and admin workflows; real-time classrooms powered by Socket.IO and WebRTC; Google Gemini API study assistance; modular REST APIs with MongoDB models.",
    tags: ["React.js", "Node.js", "Express.js", "MongoDB", "Socket.IO", "WebRTC", "JWT", "Google Gemini API", "Tailwind CSS"],
    live: "https://eduhive-gilt.vercel.app/",
    github: "https://github.com/Nageshmansuke/EduHive",
    image: "/project_images/ezy.webp",
    stats: [
      { value: "RBAC", label: "Role-Based Access" },
      { value: "Real-Time", label: "Socket.IO & WebRTC" },
      { value: "Gemini", label: "AI Study Assistance" }
    ]
  },
  {
    featured: false,
    index: "02",
    badge: "AI & ML Risk Platform",
    title: "QuakeGuard AI — Seismic Risk Assessment Platform",
    desc: "A building seismic-risk assessment platform using structural inputs such as material, foundation type, floor system, building age, and plinth area. Features a dual-model ML prediction workflow with Decision Tree and Logistic Regression to estimate damage severity and risk probability, paired with a LangChain RAG pipeline referencing IS 4326 and IS 13828 with ChromaDB retrieval and Gemini-generated guidance.",
    tags: ["Python", "Flask", "scikit-learn", "pandas", "NumPy", "LangChain", "ChromaDB", "Gemini", "MySQL", "SQLite", "Docker"],
    github: "https://github.com/Nageshmansuke/QuakeGuard-AI",
    live: "https://github.com/Nageshmansuke/QuakeGuard-AI",
    image: "/project_images/quakeguard_ai.jpg",
    stats: [
      { value: "Dual ML", label: "Decision Tree & LogReg" },
      { value: "RAG", label: "ChromaDB + Gemini" },
      { value: "IS Codes", label: "IS 4326 & IS 13828" }
    ]
  },
  {
    featured: false,
    index: "03",
    badge: "Production Web Internship",
    title: "Official SGGSIE&T Institutional Web System",
    desc: "Production web modules developed and maintained for the official website of Shri Guru Gobind Singhji Institute of Engineering and Technology during my internship at Bit Solve. Developed responsive React.js interfaces integrated with Node.js, Express.js, and MongoDB RESTful APIs. Awarded Certificate of Appreciation for architecting and deploying the system.",
    tags: ["React.js", "Node.js", "Express.js", "MongoDB", "REST APIs", "Tailwind CSS", "Git", "Postman"],
    github: "https://github.com/Nageshmansuke",
    live: "https://www.sggs.ac.in/",
    image: "/project_images/solar_crm.png",
    stats: [
      { value: "Bit Solve", label: "Web Dev Intern" },
      { value: "Deployed", label: "Official College Web" },
      { value: "Appreciation", label: "Awarded Certificate" }
    ]
  },
  {
    featured: false,
    index: "04",
    badge: "Event-Driven System",
    title: "TALK-ORBIT — Real-Time Chat Application",
    desc: "A full-stack messaging platform engineered for one-to-one and group conversations with live message delivery. Built with Socket.IO event-driven architecture, persistent MongoDB chat history, JWT authentication, and a responsive interface synchronized across users and devices.",
    tags: ["React.js", "Node.js", "Express.js", "MongoDB", "Socket.IO", "JWT", "Tailwind CSS"],
    github: "https://github.com/Nageshmansuke/TALK-ORBIT",
    live: "https://talk-orbit-qaki.vercel.app/",
    image: "/project_images/video_meet.webp",
    stats: [
      { value: "Live", label: "Socket.IO Sync" },
      { value: "Persistent", label: "MongoDB Chat History" },
      { value: "Secure", label: "JWT Authentication" }
    ]
  }
];

export const skillGroups = [
  {
    label: "Languages",
    items: [
      { name: "Java", icon: "/icons/Java-Light.svg" },
      { name: "JavaScript", icon: "/icons/JavaScript.svg" },
      { name: "TypeScript", icon: "/icons/TypeScript.svg" },
      { name: "Python", icon: "/icons/Python-Light.svg" },
      { name: "C", icon: "/icons/C.svg" },
      { name: "C++", icon: "/icons/CPP.svg" }
    ]
  },
  {
    label: "Frontend",
    items: [
      { name: "React", icon: "/icons/React-Light.svg" },
      { name: "Next.js", icon: "/icons/NextJS-Light.svg" },
      { name: "Tailwind CSS", icon: "/icons/TailwindCSS-Light.svg" },
      { name: "HTML5", icon: "/icons/HTML.svg" },
      { name: "CSS3", icon: "/icons/CSS.svg" }
    ]
  },
  {
    label: "Backend",
    items: [
      { name: "Node.js", icon: "/icons/NodeJS-Light.svg" },
      { name: "Express.js", icon: "/icons/ExpressJS-Light.svg" },
      { name: "Flask", icon: "/icons/Flask-Light.svg" },
      { name: "REST APIs", icon: "/icons/Postman.svg" }
    ]
  },
  {
    label: "Databases",
    items: [
      { name: "MongoDB", icon: "/icons/MongoDB.svg" },
      { name: "PostgreSQL", icon: "/icons/PostgreSQL-Light.svg" },
      { name: "MySQL", icon: "/icons/MySQL-Light.svg" },
      { name: "SQLite", icon: "/icons/SQLite.svg" }
    ]
  },
  {
    label: "AI & ML",
    items: [
      { name: "scikit-learn", icon: "/icons/SciKitLearn-Light.svg" },
      { name: "Gemini AI", icon: "/icons/Gemini-Light.svg" },
      { name: "LangChain & RAG", icon: "/icons/Python-Light.svg" },
      { name: "ChromaDB", icon: "/icons/CS.svg" }
    ]
  },
  {
    label: "DevOps & Tools",
    items: [
      { name: "Docker", icon: "/icons/Docker.svg" },
      { name: "Git", icon: "/icons/Git.svg" },
      { name: "GitHub", icon: "/icons/Github-Light.svg" },
      { name: "GitHub Actions", icon: "/icons/GithubActions-Light.svg" },
      { name: "Postman", icon: "/icons/Postman.svg" },
      { name: "Vercel", icon: "/icons/Vercel-Light.svg" }
    ]
  }
];
