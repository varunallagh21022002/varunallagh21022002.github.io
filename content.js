/*
 * EDITABLE CONTENT
 * Keep claims, dates, links, and project status accurate. script.js enhances
 * the semantic HTML fallback with filters and expandable data-driven details.
 */
window.portfolioData = {
  intro: "I build collaborative software and study language systems — moving between product questions, engineering constraints, and careful AI/NLP research.",
  aboutPrimary: "I’m Varun Allagh, an M.Tech by Research student in Computer Science and Engineering at Delhi Technological University. Before that, I completed a B.Tech in CSE with an AI/ML minor at Bhagwan Parshuram Institute of Technology, GGSIPU.",
  aboutSecondary: "My work balances software engineering with research. I like making systems people can use, then asking what the system is assuming, how it can be evaluated, and where the evidence stops.",
  researchIntro: "I study AI and NLP papers and explore their methods through small, documented experiments. Each notebook distinguishes measured results, simplifications, and work still in progress from the original authors’ findings.",
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
      details: "INTERCOODE brings together shared coding, communication, and interview practice. This project is based on the MIT-licensed CodePulse project by DakshL1; attribution and local setup are in the source repository. The linked static preview is an interface demonstration only, with no collaboration, authentication, or code execution connected.",
      tags: ["React", "Node.js", "WebRTC", "Socket.IO"],
      diagram: "intercoode",
      diagramLabel: "share → reason → review",
      link: "https://github.com/varunallagh21022002/intercoode-portfolio-source",
      demoLink: "https://varunallagh21022002.github.io/intercoode-portfolio-source/"
    },
    {
      title: "filleshareica",
      status: "Implemented local product",
      category: "file-sharing",
      summary: "A private file-transfer and chat workspace for moving files between phones and computers through approved sessions.",
      details: "The local implementation supports two-device or group sessions, QR or invitation joining, participant approval, multiple file transfer in either direction, session chat, encrypted WebRTC data channels, and browser save/download flows. The hosted website remains unchanged until deployed separately.",
      tags: ["WebRTC", "File transfer", "Session chat"],
      diagram: "filleshareica",
      diagramLabel: "approve → transfer → save",
      link: "https://github.com/varunallagh21022002/filleshareica-source-snapshot"
    },
    {
      title: "InternetSp33d",
      status: "Implemented desktop beta",
      category: "browser-extension",
      summary: "A Chrome extension beta for local focus, protection, data-saver controls, and measurement workflows.",
      details: "The extension runs its controls and history locally. Its documentation explicitly says it cannot increase ISP capacity, bond networks, or control other apps; no store release or public product link is claimed here.",
      tags: ["Chrome extension", "Local controls", "Diagnostics"],
      diagram: "internetsp33d",
      diagramLabel: "focus → protect → measure",
      link: "https://github.com/varunallagh21022002/internetsp33d-extension"
    }
  ],
  papersRead: [
    {
      title: "PowerMLP: An Efficient Version of KAN",
      status: "AI paper read",
      category: "paper-read",
      filters: ["ai"],
      summary: "An AAAI 2025 paper exploring a computationally efficient alternative to spline-based KANs.",
      details: "Qiu and colleagues introduce PowerMLP and evaluate it against other architectures. The paper's results belong to its authors; a small-scale adaptation appears under Papers Implemented.",
      tags: ["AI", "AAAI 2025", "Neural networks"],
      citation: "Ruichen Qiu et al. 2025. Proceedings of AAAI 39(19), pp. 20069–20076.",
      diagram: "paper",
      link: "https://doi.org/10.1609/aaai.v39i19.34210"
    },
    {
      title: "Fine-Tuning Medium-Scale LLMs for Joint Intent Classification and Slot Filling: A Data-Efficient and Cost-Effective Solution for SMEs",
      status: "Paper read",
      category: "paper-read",
      filters: ["nlp", "intent"],
      summary: "A COLING Industry Track paper on LoRA adaptation of Llama-3-8B-Instruct for joint intent classification and slot filling.",
      details: "Aguirre et al. study English and Spanish MASSIVE under data scarcity. The published findings motivate careful adaptation work, but the paper’s methods and results are not presented as Varun’s implementation.",
      tags: ["COLING 2025", "LoRA", "MASSIVE"],
      citation: "Maia Aguirre, Ariane Méndez, Arantza del Pozo, María Inés Torres, and Manuel Torralbo. 2025. COLING Industry Track, pp. 251–262.",
      diagram: "paper",
      link: "https://aclanthology.org/2025.coling-industry.21/"
    },
    {
      title: "From Noise to Clarity: Filtering Real and LLM-Generated Samples for Enhanced Intent Detection",
      status: "Paper read",
      category: "paper-read",
      filters: ["nlp", "augmentation"],
      summary: "An EMNLP Findings paper on filtering real and synthetic samples before intent detection.",
      details: "Huang et al. use topic modeling, distribution checks, and classifier signals to assess sample quality. Their published Banking-77 results are background from the paper, not project results.",
      tags: ["EMNLP 2025", "Sample filtering", "Banking-77"],
      citation: "Junbao Huang, Weizhen Li, Peijie Huang, and Yuhong Xu. 2025. Findings of EMNLP, pp. 21736–21746.",
      diagram: "filter",
      link: "https://aclanthology.org/2025.findings-emnlp.1186/"
    },
    {
      title: "On Collaborating Small and Large Models For Few-shot Intent Detection",
      status: "Paper read",
      category: "paper-read",
      filters: ["nlp", "intent"],
      summary: "An EMNLP Findings paper on combining a smaller classifier with an LLM for uncertain intent cases.",
      details: "Chen and Wang study offline augmentation and online reasoning with semantic trimming. The paper’s published BANKING77 numbers are not attributed to Varun.",
      tags: ["EMNLP 2025", "Few-shot", "Model collaboration"],
      citation: "Peng Chen and Bang Wang. 2025. Findings of EMNLP, pp. 13937–13953.",
      diagram: "intent",
      link: "https://aclanthology.org/2025.findings-emnlp.749/"
    },
    {
      title: "How DDAIR you? Disambiguated Data Augmentation for Intent Recognition",
      status: "Paper read",
      category: "paper-read",
      filters: ["nlp", "augmentation"],
      summary: "An EACL 2026 short paper on detecting ambiguous LLM-generated intent examples and regenerating them.",
      details: "Castillo-López, Lombard, Semmar, and de Chalendar use sentence embeddings to compare generated examples against target and competing intents. No reproduction is claimed.",
      tags: ["EACL 2026", "Data augmentation", "Disambiguation"],
      citation: "Galo Castillo-López, Alexis Lombard, Nasredine Semmar, and Gaël de Chalendar. 2026. EACL, Volume 2: Short Papers, pp. 274–286.",
      diagram: "disambiguate",
      link: "https://aclanthology.org/2026.eacl-short.20/"
    },
    {
      title: "Novel utterance data augmentation for intent classification using large language models",
      status: "Paper read",
      category: "paper-read",
      filters: ["nlp", "augmentation"],
      summary: "A Springer paper proposing LLM paraphrases followed by domain-specific word-embedding synonym replacement.",
      details: "Madrueño et al. report the authors’ financial-trading experiments. This page separates that published work from Varun’s executed adaptation, which appears under Papers Implemented.",
      tags: ["Springer 2025", "LLM augmentation", "Word embeddings"],
      citation: "Madrueño et al., Neural Computing and Applications 37, 26711–26736 (2025).",
      diagram: "paper",
      link: "https://doi.org/10.1007/s00521-025-11642-3"
    }
  ],
  papersWritten: [],
  papersImplemented: [
    {
      title: "PowerMLP: a small-scale adaptation",
      status: "Executed adaptation · AI",
      category: "paper-implemented",
      summary: "A small NumPy experiment using the paper’s PowerMLP layer formula on synthetic regression data.",
      details: "This experiment compares a small adaptation with a ReLU MLP. It is not the authors’ full architecture or benchmark; its saved results are from this run only.",
      tags: ["AI", "PowerMLP", "Synthetic regression"],
      citation: "Original paper: Qiu et al., AAAI 2025.",
      diagram: "paper",
      link: "https://doi.org/10.1609/aaai.v39i19.34210",
      evidenceLink: "https://github.com/varunallagh21022002/ai-ml-paper-evidence/tree/main/powermlp-aaai-2025"
    },
    {
      title: "Executed adaptation of Madrueño et al.",
      status: "Adaptation executed · mixed evidence",
      category: "paper-implemented",
      summary: "An executed adaptation using Qwen2.5 0.5B Instruct, Reuters Word2Vec, MiniLM, and TF-IDF on the authors’ public evaluation workbooks.",
      details: "This is an executed adaptation, not an exact reproduction, and does not claim the authors’ results. It uses Qwen2.5 0.5B Instruct, Reuters Word2Vec, MiniLM, and TF-IDF with different data sources. General MiniLM average precision was 0.736 original, 0.758 LLM-only, 0.733 Word2Vec-only, and 0.750 combined; General + financial was 0.713, 0.713, 0.692, and 0.696. The mixed evidence does not reproduce the paper’s stronger financial-domain improvement.",
      tags: ["Executed notebook", "Average precision", "Mixed evidence"],
      citation: "Original paper: Madrueño et al., Neural Computing and Applications 37, 26711–26736 (2025).",
      diagram: "paper",
      link: "https://doi.org/10.1007/s00521-025-11642-3",
      evidenceLink: "https://github.com/varunallagh21022002/ai-ml-paper-evidence/tree/main/paper-5-novel-utterance"
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
    { name: "AI / NLP", items: "NLP · intent classification · text preprocessing · language-model evaluation" }
  ],
  education: [
    { period: "2026 — May 2028 expected", degree: "M.Tech by Research — Computer Science & Engineering", school: "Delhi Technological University", note: "Current research-led postgraduate study." },
    { period: "2021 — 2025", degree: "B.Tech — Computer Science & Engineering, AI/ML minor", school: "Bhagwan Parshuram Institute of Technology, GGSIPU", note: "CGPA 9.11 / 10." }
  ]
};
