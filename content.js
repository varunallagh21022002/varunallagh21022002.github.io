/*
 * EDITABLE CONTENT
 * Keep claims, dates, links, and project status accurate. script.js enhances
 * the semantic HTML fallback with filters and expandable data-driven details.
 */
window.portfolioData = {
  intro: "I build collaborative software and study language systems — moving between product questions, engineering constraints, and careful AI/NLP research.",
  aboutPrimary: "I’m Varun Allagh, an M.Tech by Research student in Computer Science and Engineering at Delhi Technological University. Before that, I completed a B.Tech in CSE with an AI/ML minor at Bhagwan Parshuram Institute of Technology, GGSIPU.",
  aboutSecondary: "My work balances software engineering with research. I like making systems people can use, then asking what the system is assuming, how it can be evaluated, and where the evidence stops.",
  researchIntro: "The research side of my work is intentionally honest about stage and evidence: some directions are ongoing, and one paper implementation has only reached verified data loading so far.",
  skillsIntro: "A working toolkit across product engineering, real-time collaboration, data, and language understanding.",
  contactIntro: "I’m open to conversations about software engineering, AI/NLP research, technical collaboration, and thoughtful opportunities.",
  links: {
    email: "mailto:varunallagh21022002@gmail.com",
    github: "https://github.com/varunallagh21022002",
    linkedin: "https://www.linkedin.com/in/v21000/"
  },
  engineeringProjects: [
    {
      title: "INTERCOODE",
      status: "Engineering project",
      category: "collaboration",
      summary: "A collaborative technical interview platform for practicing problem-solving together, not just submitting answers.",
      details: "INTERCOODE brings together shared coding, communication, and interview practice. The stated stack includes React, Node.js, WebRTC, Socket.IO, Judge0, and MediaPipe.",
      tags: ["React", "Node.js", "WebRTC", "Socket.IO"],
      diagram: "intercoode",
      link: ""
    }
  ],
  researchProjects: [
    {
      title: "Research-paper recommendation",
      status: "Research direction",
      category: "graph-methods",
      summary: "Exploring graph methods for navigating relationships between papers, concepts, and scholarly signals.",
      details: "The direction includes GCNs, Spektral, autoencoders, centrality, and VoteRank. It is presented as research work in progress; no results or completed implementation are claimed here.",
      tags: ["GCN / Spektral", "Autoencoders", "Centrality", "VoteRank"],
      diagram: "graph",
      citation: "",
      link: ""
    },
    {
      title: "English SNIPS intent classification",
      status: "Ongoing",
      category: "intent-classification",
      summary: "An ongoing study of intent classification with the English SNIPS dataset.",
      details: "The work is focused on data, categories, preprocessing, and careful evaluation. Results are not claimed here.",
      tags: ["NLP", "Intent classification", "SNIPS"],
      diagram: "intent",
      citation: "",
      link: ""
    },
    {
      title: "Hinglish NLP preprocessing",
      status: "Ongoing",
      category: "code-mixed-language",
      summary: "Exploring preprocessing questions for Hinglish and other code-mixed language inputs.",
      details: "This is ongoing work. No specific Hinglish dataset, benchmark, or result is claimed without verification.",
      tags: ["Hinglish", "Code-mixed language", "Preprocessing"],
      diagram: "hinglish",
      citation: "",
      link: ""
    },
    {
      title: "Novel Utterance Data Augmentation for Intent Classification Using Large Language Models",
      status: "Paper study · implementation partial",
      category: "paper-study",
      summary: "Studying the paper and its implementation path; data loading has been verified, but end-to-end augmentation and evaluation have not been executed.",
      details: "This entry describes a study of the paper, not the authors’ results as Varun’s. Current evidence covers verified data loading only. There is no claim of a completed reproduction or reproduced metric.",
      tags: ["Paper study", "Data loading verified", "Evaluation pending"],
      diagram: "paper",
      citation: "Madrueño et al., Neural Computing and Applications 37, 26711–26736 (2025)",
      link: "https://doi.org/10.1007/s00521-025-11642-3"
    }
  ],
  experience: [
    { period: "May — Jul 2024", role: "Web Developer Intern", organization: "Celebal", note: "Worked with React and REST APIs." },
    { period: "May — Aug 2024", role: "Contributor", organization: "GirlScript Summer of Code", note: "Contributed in an open-source program." },
    { period: "Sep — Oct 2023", role: "DSA Intern", organization: "GeeksforGeeks", note: "Worked on data structures and algorithms." },
    { period: "Sep 2022 — Apr 2024", role: "Technical Team Member & Mentor", organization: "NameSpace", note: "Supported technical work and peer learning." }
  ],
  skills: [
    { name: "Languages", items: "C++ · Python · SQL · JavaScript" },
    { name: "Web & real-time", items: "React · Node.js · Socket.IO · WebRTC · REST APIs" },
    { name: "Systems & tools", items: "Git · Docker · Judge0 · MediaPipe" },
    { name: "AI / NLP", items: "NLP · GNN / GCN · Spektral · Autoencoders · Centrality · VoteRank" }
  ],
  education: [
    { period: "2026 — May 2028 expected", degree: "M.Tech by Research — Computer Science & Engineering", school: "Delhi Technological University", note: "Current research-led postgraduate study." },
    { period: "2021 — 2025", degree: "B.Tech — Computer Science & Engineering, AI/ML minor", school: "Bhagwan Parshuram Institute of Technology, GGSIPU", note: "CGPA 9.11 / 10." }
  ]
};
