// ============================================================
// PORTFOLIO CONFIG — Edit this file to customize everything!
// ============================================================

export const portfolio = {
  // ----------------------------------------------------------
  // Personal Info
  // ----------------------------------------------------------
  name: "Zakaria Aherrach",
  initials: "ZA",
  role: "English",
  location: "Agadir, MA",
  bio: "I am Zakaria, an English Studies graduate with a passion for teaching, language, and creativity. I enjoy creating engaging learning experiences and helping students build confidence in English. This portfolio reflects my journey as a teacher, showcasing my experiences, teaching practice, and achievements. Feel free to explore my work and learn more about me.",
  shortBio: "Full Stack Developer based in San Francisco, building clean and performant web experiences.",
  avatar: "/avatar.jpg", // Place your photo in /public/avatar.jpg
  available: false, // Set to false to hide "Available for work" badge

  // ----------------------------------------------------------
  // Contact & Social
  // ----------------------------------------------------------
  email: "aherrach@gmail.com",
  github: "https://github.com/zakaria0761",
  linkedin: "https://linkedin.com/in/zakaria-aherach",

  // ----------------------------------------------------------
  // Skills
  // ----------------------------------------------------------
  skills: [
    "Empathy, dedication, and excellent adaptability.",
    "Problem-solving ability and learning capacity",
    "Ability to motivate students.",
    "Creative teaching techniques.",
  ],

  // Tech stack logos shown in the animated strip (name + icon key)
  techStack: [
    { name: "English — Native level" },
    { name: "Arabic — Native" },
    { name: "Japanese — Beginner" },
    { name: "Microsoft Word" },
    { name: "Microsoft Excel" },
    { name: "Microsoft PowerPoint" },
    { name: "Photoshop" },
    { name: "Frontend Development: next.js, React, TypeScript, Tailwind CSS" },
    { name: "Python" },
    { name: "JavaScript" },
    { name: "HTML/CSS" },
  ],

  // ----------------------------------------------------------
  // Projects
  // ----------------------------------------------------------
  projects: [
    {
      id: 1,
      title: "SaaS Dashboard",
      description:
        "A full-featured analytics dashboard for SaaS products with real-time charts, user management, and billing integration. Built with Next.js and Stripe.",
      image: "/images/onlineELT1.png",
      github: "https://github.com/alexjohnson/saas-dashboard",
      live: "/portfolio/observaation",
      category: "My Teaching Philosophy",
      featured: true,
    },
    {
      id: 2,
      title: "Reflections on Lessons Taught",
      description:
        "A cross-platform mobile task manager with drag-and-drop boards, real-time sync, and team collaboration features built with React Native.",
      image: "/images/onlineElt1.png",
      tech: ["React Native", "Expo", "Firebase", "TypeScript"],
      github: "https://github.com/alexjohnson/task-manager",
      live: "/portfolio/Reflections",
      category: "Reflections on Lessons Taught",
      featured: true,
    },
    {
      id: 3,
      title: "TPs Observation Grid",
      description:
        "During my observation of my peers in the TESOL program, I had the opportunity to observe different classes at varying proficiency levels. This experience allowed me to gain insight into different teaching styles, classroom management strategies, and interaction techniques used by trainee teachers. It also helped me reflect on effective instructional practices and identify areas that contribute to successful lesson delivery and student engagement.",
      image: "/images/Peer Observation - Benessalah Mouna_image.jpg",
      tech: ["React", "TypeScript", "Storybook", "Radix UI", "CSS"],
      github: "https://github.com/alexjohnson/design-system",
      live: "/portfolio/observaation",
      category: "TPs Observation Grid",
      featured: false,
    },
    {
      id: 4,
      title: "AI Chat Interface",
      description:
        "A sleek chat interface for interacting with large language models, featuring streaming responses, conversation history, and markdown rendering.",
      image: "/portfolio/ai-chat.jpg",
      tech: ["Next.js", "OpenAI API", "Tailwind CSS", "TypeScript"],
      github: "https://github.com/alexjohnson/ai-chat",
      live: "https://ai-chat-demo.vercel.app",
      category: "Open Source",
      featured: false,
    },
    {
      id: 5,
      title: "Portfolio UI Kit",
      description:
        "A free Figma UI kit for developer portfolios with 20+ templates, reusable components, and dark/light mode designs.",
      image: "/portfolio/ui-kit.jpg",
      tech: ["Figma", "UI Design", "Design Tokens"],
      github: "https://github.com/alexjohnson/portfolio-ui-kit",
      live: "https://figma.com/community/file/example",
      category: "Open Source",
      featured: false,
    },
  ],

  // ----------------------------------------------------------
  // Experience
  // ----------------------------------------------------------
  experience: [
    {
      company: "Private Institution ARRAED",
      role: "English Teaching Intern (Primary Level)",
      period: "1/12/2023 — 29/06/2024",
      location: "Agadir, Morocco",
      description: [
        "Assisted in teaching English to primary school students.",
        "Developed engaging lesson plans and educational materials.",
        "Facilitated classroom activities to enhance students' learning experience.",
        "Assessed students' progress and provided feedback to improve their language skills.",
      ],
    },
    {
      company: "LingoAce",
      role: "Online English Teacher",
      period: "March 2026 — Present",
      location: "Remote",
      description:[
        "Conduct online English lessons for young learners in a virtual classroom environment.",
        "Teach speaking, reading, vocabulary, and grammar using interactive activities.",
        "Adapt lessons to students’ levels and learning needs.",
        "Maintain student engagement through games, discussions, and multimedia tools.",
        "Provide regular feedback to students and parents on progress and areas for improvement.",
      ],
    },
  ],

  // ----------------------------------------------------------
  // Education
  // ----------------------------------------------------------
  education: [
    {
      institution: "Ibn Zohr University, Agadir",
      degree: "Bachelor's Degree in English Studies – Linguistics",
      period: "2021 — 2024",
      description:
        "Focus: Linguistics, Phonetics/Phonology, Applied Linguistics, Educational Psychology, Syntax, Semantics &Pragmatics, Translation & Interpretation",
    },
    {
      institution: "Ibn Zohr University, Agadir",
      degree: "Associate Degree in English Studies – Linguistics",
      period: "2019 — 2021",
      description:
        "Focus: Reading & Writing Skills, Grammar Foundations, Business Communication, Oral & Spoken English"
    }
  ],

  // ----------------------------------------------------------
  // Project filter categories
  // ----------------------------------------------------------
  categories: ["All", "My Teaching Philosophy", "TPs Observation Grid", "Reflections on Lessons Taught & TP Report(s)", "Open Source"],
} as const;

export type Project = typeof portfolio.projects[number];
export type Experience = typeof portfolio.experience[number];
export type Education = typeof portfolio.education[number];
