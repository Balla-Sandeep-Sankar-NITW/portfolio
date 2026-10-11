
const SITE = {
  /* ---------- Identity ---------- */
  name: "Sandeep Sankar",
  fullName: "Balla Sandeep Sankar",
  logoLetter: "S",
  pageTitle: "Sandeep Sankar — AI/ML & Full-Stack Developer",

  photo: "images/Me.png",

  nav: [
    { label: "Home", page: "home" },
    { label: "Projects", page: "projects" },
    { label: "Experience", page: "experience" },
    { label: "About", page: "about" },
  ],
  ctaLabel: "Let's Talk", // top-right button (opens the contact page)

  /* Links (also used on the contact page and in the hero) */
  email: "ballasandeepsankar@gmail.com",
  github: "https://github.com/Balla-Sandeep-Sankar-NITW",
  linkedin: "https://www.linkedin.com/in/balla-sandeep-sankar",
  resume: "SandeepSankarResume.pdf", // file must sit next to index.html

  /* ---------- Home ---------- */
  home: {
    greeting: "Hi, I'm",
    headline: "Building *intelligent systems*\nfor a better tomorrow.",
    intro:
      "A B.Tech Computer Science and Engineering (AI & Data Science) student at NIT Warangal, passionate about machine learning, full-stack development and solving real-world problems through technology.",
    primaryButton: "View My Work",
    secondaryButton: "Download Resume",
    // the handwritten note next to your photo (one line each)
    note: ["AI/ML,", "Full-Stack", "Problem Solving"],
  },

  /* ---------- Projects page ---------- */
  projectsPage: {
    eyebrow: "PROJECTS",
    title: "Projects that turn *ideas* into *impact.*",
    subtitle:
      "A showcase of selected projects I've built, combining AI, engineering and problem solving.",
    viewAllLabel: "View all projects",
    viewAllLink: "https://github.com/Balla-Sandeep-Sankar-NITW?tab=repositories",
  },

  projects: [

        /* ───────────── API NEXUS ───────────── */
    {
      id: "api-nexus",
      title: "API Nexus",
      short:
        "Collaborative platform that turns OpenAPI specs into dependency graphs and shows what a breaking change will affect.",
      summary:
        "A collaborative API dependency mapping and impact analysis platform. Import OpenAPI specs, get interactive dependency graphs, work on them with your team, and simulate breaking changes before they reach production.",
      tags: ["FastAPI", "React", "PostgreSQL", "OpenAPI"],
      image: "images/apinexus01.png",
      imageLight: "images/themed/apinexus01-light.webp",
      imageDark: "images/themed/apinexus01-dark.webp",
      preview: "chat", // only used if image is empty
      links: {
        demo: "https://apinexus.vercel.app/",
        code: "https://github.com/Balla-Sandeep-Sankar-NITW/API_Nexus", // replace with the API Nexus repo URL
        report: "",
      },
      tabs: [
        {
          name: "Overview",
          heading: "Overview",
          text:
            "API Nexus tackles the microservice dependency black box. When an API architecture grows complex, it is hard to know what a breaking change will affect. By parsing OpenAPI specifications, API Nexus builds visual dependency trees, lets teams collaborate in real time, and shows exactly what will break before a deployment.",
          listTitle: "Key Features",
          list: [
            "JWT authentication with email verification, password reset and roles (Leader, Member, Viewer)",
            "OpenAPI (Swagger) parsing with version history and diff tracking",
            "Real-time collaboration with comments, @mentions and suggested changes",
            "Freeze & Impact Analysis to highlight downstream dependencies",
            "What-If simulation for removing, migrating or taking down endpoints",
            "Architectural insights and system health audits",
            "Export as JSON, CSV, SVG, PNG or PDF impact reports",
            "Audit log and notifications",
          ],
        },
        {
          name: "How It Works",
          heading: "How it works",
          text:
            "A specification goes in, a graph of services and endpoints comes out, and the team works on that graph together.",
          listTitle: "Flow",
          list: [
            "Import an OpenAPI spec, which is validated and parsed",
            "The spec is converted into a dependency graph of nodes and edges",
            "Teammates add, edit or delete nodes and edges and discuss them inline",
            "Freezing a node highlights every downstream dependency it affects",
            "What-If simulation models removal, migration or downtime before any change is made",
          ],
        },
        {
          name: "Tech Stack",
          heading: "Tech stack",
          text: "A React and Vite frontend, a FastAPI backend and PostgreSQL, deployed across Vercel and Render ",
          listTitle: "Tools & Technologies",
          list: [
            "React 18, Vite, Tailwind CSS, Radix UI",
            "React Flow / Cytoscape.js for the graph",
            "React Query and Zustand for state",
            "FastAPI (Python 3.10+), SQLAlchemy / SQLModel",
            "JWT, Passlib (Bcrypt), OpenAPI Spec Validator",
            "PostgreSQL, Vercel, Render ",
          ],
        },
        {
          name: "Challenges",
          heading: "Challenges",
          text: "The hard parts were turning specs into something people can reason about, and letting a team work on it safely.",
          listTitle: "What I had to solve",
          list: [
            "Turning OpenAPI specs into a clear graph of dependencies",
            "Tracing impact across many levels of downstream services",
            "Handling roles and permissions for different team members",
            "Keeping an interactive graph usable as it grows",
          ],
        },
        {
          name: "Future Improvements",
          heading: "Future improvements",
          text: "Ideas I want to explore next.",
          listTitle: "Next steps",
          list: [
            "Import specs directly from a Git repository",
            "Run impact checks automatically in CI before a deploy",
            "Slack or email alerts for risky changes",
          ],
        },
      ],
    },

    {
      id: "vaultmind",
      title: "VaultMind",
      short:
        "Enterprise AI knowledge base: a RAG-based document API with role-based access control and citations.",
      summary:
        "A RAG-based document intelligence API with role-based access control and a citation engine, so teams get answers from their own documents with the sources attached.",
      tags: ["RAG", "FastAPI", "Pinecone", "PostgreSQL"],
      image: "images/vaultmind01.png",
      imageLight: "images/themed/vaultmind01-light.webp",
      imageDark: "images/themed/vaultmind01-dark.webp",
      preview: "chat",
      links: {
        demo: "https://vaultmind-green.vercel.app/",
        code: "https://github.com/Balla-Sandeep-Sankar-NITW/Enterprices-KB",
        report: "",
      },
      tabs: [
        {
          name: "Overview",
          heading: "Overview",
          text:
            "VaultMind is a production-grade REST API for asking questions about company documents. It protects access with JWT authentication and department-based RBAC, and answers every question with citations.",
          listTitle: "Key Features",
          list: [
            "JWT authentication with bcrypt password hashing",
            "Department-based role-based access control (RBAC)",
            "RAG pipeline built on Pinecone",
            "Citation-backed responses",
            "Improved multi-turn retrieval accuracy",
          ],
        },
        {
          name: "How It Works",
          heading: "How it works",
          text:
            "Documents are embedded and stored in a vector database. At question time, access rules decide which documents may be searched.",
          listTitle: "Flow",
          list: [
            "Documents are embedded with Voyage AI and stored in Pinecone",
            "A user signs in and receives a JWT",
            "Retrieval is limited to what the user's department may see",
            "The answer is generated with citations to its sources",
          ],
        },
        {
          name: "Model & Results",
          heading: "Retrieval & results",
          text:
            "The retrieval pipeline was tuned for follow-up questions, where the right context depends on the earlier conversation.",
          listTitle: "Highlights",
          list: [
            "Better retrieval accuracy in multi-turn conversations",
            "Every answer links back to its source documents",
            "Access control is enforced before retrieval, not after",
          ],
        },
        {
          name: "Tech Stack",
          heading: "Tech stack",
          text: "A Python backend with a relational database and a vector database.",
          listTitle: "Tools & Technologies",
          list: [
            "Python",
            "FastAPI",
            "Pydantic",
            "PostgreSQL",
            "SQLAlchemy",
            "JWT",
            "bcrypt",
            "Pinecone",
            "SMTP",
            "Voyage AI",
          ],
        },
        {
          name: "Challenges",
          heading: "Challenges",
          text: "Security and answer quality had to work together.",
          listTitle: "What I had to solve",
          list: [
            "Keeping documents private between departments",
            "Retrieving the right context across multiple turns",
            "Making citations accurate and easy to verify",
          ],
        },
        {
          name: "Future Improvements",
          heading: "Future improvements",
          text: "Ideas I want to explore next.",
          listTitle: "Next steps",
          list: [
            "Semantic Level Chunking",
            "Explore Re-ranking Methods",
            "Usage analytics for administrators",
          ],
        },
      ],
    },

    {
      id: "expense-tracker",
      title: "Expense Tracker",
      short:
        "Full-stack expense tracker with a FastAPI backend, Neon PostgreSQL, Docker and a React dashboard with charts.",
      summary:
        "A full-stack app for tracking expenses and seeing where the money goes. A FastAPI REST API backed by PostgreSQL on Neon, containerized with Docker, with a React dashboard on top.",
      tags: ["FastAPI", "PostgreSQL", "Docker", "React"],
      image: "images/expencetracker01.png",
      imageLight: "images/themed/expencetracker01-light.webp",
      imageDark: "images/themed/expencetracker01-dark.webp",
      preview: "chart",
      links: {
        demo: "",
        code: "https://github.com/Balla-Sandeep-Sankar-NITW/ExpenseTracker",
        report: "",
      },
      tabs: [
        {
          name: "Overview",
          heading: "Overview",
          text:
            "Expense Tracker started as hands-on practice with a backend stack I hadn't combined before: FastAPI, PostgreSQL and Docker, with a separate React frontend. The domain is small on purpose, so the focus stays on routing, validation, database access, containerization and CORS.",
          listTitle: "Key Features",
          list: [
            "Create, list, update and delete expenses",
            "Filter expenses by year, month, day or category",
            "Analytics endpoints for spend by month, day and category",
            "React dashboard with a table, pie chart, bar chart and line chart",
            "Auto-generated API docs with Swagger UI and ReDoc",
            "Dockerized backend and frontend with Docker Compose",
          ],
        },
        {
          name: "How It Works",
          heading: "How it works",
          text:
            "The React app talks to the FastAPI backend over HTTP. The backend reads and writes a managed PostgreSQL database hosted on Neon.",
          listTitle: "Flow",
          list: [
            "The React dashboard sends requests to the REST API under /api/v1",
            "FastAPI validates requests with Pydantic schemas",
            "SQLAlchemy models read and write expenses in Neon PostgreSQL",
            "Analytics endpoints group spend by month, day and category",
            "The charts in the dashboard are drawn from those pre-aggregated results",
          ],
        },
        {
          name: "Model & Results",
          heading: "API & dashboard",
          text:
            "There is no ML model here. The core of the project is the API design and the dashboard built on it.",
          listTitle: "Highlights",
          list: [
            "Separate routers for expenses and analytics",
            "Aggregate queries (group by month, day, category) shaped for charts",
            "Pie chart of spend by category",
            "Bar chart of spend by month",
            "Line chart of spend by day for the current month",
          ],
        },
        {
          name: "Tech Stack",
          heading: "Tech stack",
          text: "A Python backend, a serverless Postgres database and a Vite-based React frontend.",
          listTitle: "Tools & Technologies",
          list: [
            "FastAPI, Python, Uvicorn",
            "PostgreSQL on Neon (serverless)",
            "SQLAlchemy and Pydantic",
            "React, Vite and Recharts",
            "Docker and Docker Compose",
            "OpenAPI / Swagger UI",
          ],
        },
        {
          name: "Challenges",
          heading: "Challenges",
          text: "Most of the learning came from connecting the pieces so they worked together.",
          listTitle: "What I had to solve",
          list: [
            "Connecting FastAPI to a managed Postgres instance instead of a local one",
            "Writing aggregate queries and shaping the responses for charts",
            "Setting up CORS and environment-based config between frontend and backend",
            "Running several containers together with Docker Compose",
          ],
        },
        {
          name: "Future Improvements",
          heading: "Future improvements",
          text: "Ideas I want to explore next.",
          listTitle: "Next steps",
          list: [
            "User accounts so each person sees only their own expenses",
            "Monthly budgets with overspending alerts",
            "An agent that summarizes cash outflows and suggests ways to reduce them",
          ],
        },
      ],
    },

    /* ───────────── PROJECT 3 ───────────── */
    {
      id: "iqi-gwo-vision",
      title: "IQI-GWO Vision",
      short:
        "Quantum-inspired Grey Wolf Optimization for feature selection that cut features by 66% while improving accuracy.",
      summary:
        "A metaheuristic feature selection framework built on an Improved Quantum-Inspired Grey Wolf Optimizer, tested on three image classification datasets.",
      tags: ["ML", "Optimization", "Scikit-learn"],
      image: "",
      preview: "chart",
      links: {
        demo: "",
        code: "https://github.com/Balla-Sandeep-Sankar-NITW/IQI-GWO-Feature-Selection-for-Image-Classification",
        report: "",
      },
      tabs: [
        {
          name: "Overview",
          heading: "Overview",
          text:
            "IQI-GWO Vision selects the most useful image features with an improved quantum-inspired version of the Grey Wolf Optimizer. A Random Forest then classifies the images using only those features.",
          listTitle: "Key Features",
          list: [
            "Improved Quantum-Inspired Grey Wolf Optimization (IQI-GWO)",
            "Feature dimensionality reduced by 27–66%",
            "Random Forest classification on the selected features",
            "Evaluated on three benchmark datasets",
          ],
        },
        {
          name: "How It Works",
          heading: "How it works",
          text:
            "The optimizer searches for a small set of features that still classifies well, then the classifier is trained on that set.",
          listTitle: "Pipeline",
          list: [
            "Extract features from the images",
            "IQI-GWO searches for the best feature subset",
            "Train a Random Forest on the selected features",
            "Compare against using all features",
          ],
        },
        {
          name: "Model & Results",
          heading: "Model & results",
          text:
            "Applying IQI-GWO improved accuracy across all three datasets while substantially reducing feature dimensionality.",
          listTitle: "Results by Dataset",
          list: [
            "LC25000: Baseline 96.3% → 99.70 ± 0.09% accuracy (Features reduced to 172 / 512)",
            "Plant-type-Dataset: Baseline 72.45% → 97.63 ± 0.02% accuracy (Features reduced to 255 / 512)",
            "IIITDMJ_Smoke: Baseline 89.23% → 96.25 ± 0.04% accuracy (Features reduced to 372 / 512)",
          ],
        },
        {
          name: "Tech Stack",
          heading: "Tech stack",
          text: "A classic machine learning toolchain in Python.",
          listTitle: "Tools & Technologies",
          list: [
            "Python",
            "Scikit-learn",
            "Random Forest",
            "Metaheuristic optimization (Grey Wolf Optimizer)",
            "Quantum-inspired algorithms",
            "Image processing",
          ],
        },
        {
          name: "Challenges",
          heading: "Challenges",
          text: "Balancing a smaller feature set against accuracy.",
          listTitle: "What I had to solve",
          list: [
            "Avoiding premature convergence in the optimizer",
            "Keeping results consistent across very different datasets",
            "Measuring the trade-off between feature count and accuracy",
          ],
        },
        {
          name: "Future Improvements",
          heading: "Future improvements",
          text: "Ideas I want to explore next.",
          listTitle: "Next steps",
          list: [
            "Try the method with deep learning features",
            "Test on larger image datasets",
            "Compare against other metaheuristic optimizers",
          ],
        },
      ],
    },

    {
      id: "freshsense-ai",
      title: "FreshSense AI",
      short:
        "Computer vision pipeline that detects fruits in real time and estimates their freshness and remaining shelf life.",
      summary:
        "An agentic computer vision pipeline that detects fruits, estimates how fresh each one is, tracks shelf life and recommends recipes — helping reduce food waste.",
      tags: ["Computer Vision", "YOLOv8", "TensorFlow", "OpenCV"],
      image: "images/freshsence01.png",
      imageLight: "images/themed/freshsence01-light.webp",
      imageDark: "images/themed/freshsence01-dark.webp",
      preview: "vision",
      links: {
        demo: "", 
        code: "https://github.com/Balla-Sandeep-Sankar-NITW/FreshSense-AI",
        report: "",
      },
      tabs: [
        {
          name: "Overview",
          heading: "Overview",
          text:
            "FreshSense AI uses YOLOv8x for fruit detection and an EfficientNet-B0 model for freshness estimation. It tracks shelf life with automated spoilage alerts and suggests recipes, so food gets used before it goes to waste.",
          listTitle: "Key Features",
          list: [
            "Real-time fruit detection using YOLOv8x",
            "Freshness regression with EfficientNet-B0",
            "Shelf-life tracking",
            "Automated spoilage alerts",
            "Recipe recommendations to reduce food waste",
          ],
        },
        {
          name: "How It Works",
          heading: "How it works",
          text:
            "Every image goes through two models in sequence. The results then feed the shelf-life tracker, which decides when to alert and what to cook.",
          listTitle: "Pipeline",
          list: [
            "Detect and locate each fruit with YOLOv8x",
            "Crop every detection and score its freshness with EfficientNet-B0",
            "Convert the freshness score into a shelf-life estimate",
            "Raise spoilage alerts and recommend recipes",
          ],
        },
        {
          name: "Model & Results",
          heading: "Model & results",
          text:
            "Detection and freshness estimation are handled by separate models, so each one can be improved without touching the other.",
          listTitle: "Highlights",
          list: [
            "YOLOv8x locates the fruit in the frame",
            "EfficientNet-B0 predicts freshness as a continuous score, not just a label",
            "Shelf-life tracking turns scores into days remaining",
          ],
        },
        {
          name: "Tech Stack",
          heading: "Tech stack",
          text: "Built in Python with a deep learning and computer vision toolchain.",
          listTitle: "Tools & Technologies",
          list: ["Python", "YOLOv8x", "EfficientNet-B0", "TensorFlow", "OpenCV", "NumPy"],
        },
        {
          name: "Challenges",
          heading: "Challenges",
          text:
            "The hardest part was connecting two models into one reliable pipeline that gives useful answers, not just raw predictions.",
          listTitle: "What I had to solve",
          list: [
            "Turning a freshness score into a believable shelf-life estimate",
            "Keeping detection fast enough for real-time use",
            "Handling different fruits, lighting and camera angles",
          ],
        },
        {
          name: "Future Improvements",
          heading: "Future improvements",
          text: "Ideas I want to explore next.",
          listTitle: "Next steps",
          list: [
            "Support more fruits and vegetables",
            "A mobile-friendly interface for scanning at home",
            "Recipe suggestions based on what is already in the kitchen",
          ],
        },
      ],
    },
    { 
      id: "legal-language-compiler",
      title: "Legal Language Compiler AI Agent",
      short:
        "An AI Agent that acts like a compiler for legal text, converting complex legalese into clear, privacy-safe, and risk-aware insights.",
      summary:
        "A privacy-first hackathon project that parses legal documents at runtime, breaks down clauses semantically, highlights hidden financial and compliance risks, and delivers multi-lingual audio summaries without storing user data.",
      tags: [
        "AI Agents",
        "Legal Tech",
        "Semantic Reasoning",
        "Privacy-First",
        "Accessibility",
        "NLP"
      ],
      image: "images/legalrisk01.png",
      imageLight: "images/themed/legalrisk01-light.webp",
      imageDark: "images/themed/legalrisk01-dark.webp",
      preview: "legal-compiler",
      links: {
        demo: "",
        code: "https://github.com/Balla-Sandeep-Sankar-NITW/LEGAL-AI-RAG-PLATFORM",
        report: "",
      },
      tabs: [
        {
          name: "Overview",
          heading: "Overview",
          text:
            "Built during a hackathon, this AI agent functions like a compiler for formal legal language. It converts dense legalese into clear, actionable insights—helping users understand legal commitments without requiring a law degree.",
          listTitle: "Key Features",
          list: [
            "Runtime semantic understanding and clause breaking",
            "Identification of financial, compliance, privacy, and fairness risks",
            "Detection of one-sided clauses and hidden obligations",
            "Privacy-first architecture with zero data retention",
            "Multi-lingual explanations with audio output for accessibility",
          ],
        },
        {
          name: "How It Works",
          heading: "How it works",
          text:
            "The system reads uploaded documents, decomposes them into clauses, and performs on-the-fly semantic reasoning to determine liability, affected parties, and potential risks.",
          listTitle: "Pipeline",
          list: [
            "Read uploaded document into runtime memory",
            "Decompose text into structured, meaningful clauses",
            "Perform semantic reasoning on clause impact, scope, and risks",
            "Generate plain-language summaries and audio insights",
            "Immediately discard the document with zero data persistence",
          ],
        },
        {
          name: "Privacy & Accessibility",
          heading: "Privacy & accessibility",
          text:
            "Designed from the ground up to protect user privacy while making legal information universally accessible.",
          listTitle: "Core Principles",
          list: [
            "No data retention: Files are analyzed at runtime and discarded instantly",
            "No dataset training: Model does not train on or store uploaded content",
            "Local language explanations for enhanced comprehension",
            "Audio output in any language for hands-free and visual accessibility",
          ],
        },
        {
          name: "Risk Detection",
          heading: "What the agent identifies",
          text:
            "Rather than just generating summaries, the agent reasons about hidden liabilities and unfair terms embedded within contracts.",
          listTitle: "Analysis Focus",
          list: [
            "Financial, legal, compliance, and privacy risks",
            "One-sided, unfair, or ambiguous clauses",
            "Hidden conditions and critical user obligations",
          ],
        },
        {
          name: "Key Takeaways",
          heading: "Key takeaways",
          text:
            "Key learnings from building an autonomous agent in a fast-paced hackathon setting.",
          listTitle: "What I Learned",
          list: [
            "Semantic reasoning + responsible design creates high utility without compromising privacy",
            "Proper problem framing beats over-engineering complex architectures",
            "AI agents are powerful tools for solving real-world accessibility and domain-knowledge gaps",
          ],
        },
        {
          name: "Future Improvements",
          heading: "Future improvements",
          text: "Next steps for extending the compiler's analytical scope.",
          listTitle: "Next steps",
          list: [
            "Custom risk profiles tailored to individuals vs. small business owners",
            "Interactive clause negotiation and redlining suggestions",
            "Expanded local language dialect support for synthesized speech",
          ],
        },
      ],
    }
  ],

  /* ---------- Experience page ---------- */
  experience: {
    eyebrow: "EXPERIENCE",
    title: "Experience & Learning Timeline.",
    subtitle: "A journey of continuous learning, building and growing.",
    quote: "A bruise is a lesson, and every lesson makes us better.",
    quoteAuthor: "Arya Stark",
    // date | title | subtitle | tags (shown on the right) | project (optional id)
    items: [
      {
        date: "2022",
        title: "Class X (Secondary School )",
        subtitle: "Board of Secondary Education, Andhra Pradesh · 97.33%",
      },
      {
        date: "2024",
        title: "Class XII (Intermediate Education)",
        subtitle: "Board of Intermediate Education, Andhra Pradesh · 97.7%",
      },
      {
        date: "2024",
        title: "Competitive Engineering Examinations",
        subtitle: "JEE Mains 99.74%ile · JEE Advanced AIR 6137 \n· AP-EAPCET Rank 312",
      },
      {
        date: "2024 – Present",
        title: "B.Tech in CSE (AI & Data Science)",
        subtitle: "NIT Warangal · CGPA 9.00/10",
      },
      
      {
        date: "May – Jun 2027",
        title: "SDE Intern",
        subtitle: "Salesforce (World's #1 CRM)",
        tags: "Software Engineering ",
      },
      {
        date: "Ongoing",
        title: "Competitive Programming on LeetCode",
        subtitle: "620+ problems solved · Peak contest rating 1717 · Global rank 2654 of 40,636 in Weekly Contest 496",
        tags: "Data Structures & Algorithms, C++",
      },
    ]

  },

  /* ---------- About page ---------- */
  about: {
    eyebrow: "ABOUT ME",
    title: "The engineer behind the *projects.*",
    text:
      "I'm Sandeep Sankar, a B.Tech student at NIT Warangal in Computer Science and Engineering (AI & Data Science). I enjoy working at the intersection of machine learning, computer vision and full-stack development. I'm passionate about building useful, real-world applications and continuously learning new technologies.",
    button: "Download Resume",
    // icon: education | location | interests | currently | open
    facts: [
      { icon: "education", label: "Education", value: "B.Tech in CSE (AI & Data Science)\nNIT Warangal" },
      { icon: "location", label: "Location", value: "Vizianagaram, Andhra Pradesh" },
      { icon: "interests", label: "Interests", value: "Generative AI, Computer Vision, AI Agents, Full-Stack ML Apps" },
      { icon: "currently", label: "Currently", value: "Computer Networks, and practising DSA" },
      { icon: "open", label: "Open to", value: "Internships and collaboration" },
    ],
  },

  /* ---------- Contact page ---------- */
  contact: {
    eyebrow: "GET IN TOUCH",
    title: "Let's build something amazing *together.*",
    text: "I'm always open to discussing new opportunities, interesting projects, or just talking about technology.",
    cards: [
      { icon: "mail", title: "ballasandeepsankar@gmail.com", sub: "Drop me an email anytime", href: "mailto:ballasandeepsankar@gmail.com" },
      { icon: "linkedin", title: "linkedin.com/in/balla-sandeep-sankar", sub: "Let's connect", href: "https://www.linkedin.com/in/balla-sandeep-sankar" },
      { icon: "github", title: "github.com/Balla-Sandeep-Sankar-NITW", sub: "Check out my work", href: "https://github.com/Balla-Sandeep-Sankar-NITW" },
    ],
  },

  /* ---------- Footer ---------- */
  footer: {
    text: "Built with HTML, CSS and JavaScript.",
    links: [
      { label: "Home", page: "home" },
      { label: "Projects", page: "projects" },
      { label: "About", page: "about" },
      { label: "Contact", page: "contact" },
    ],
  },
};
