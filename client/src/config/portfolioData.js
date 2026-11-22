export const personalInfo = {
  fullName: "ALOK KUMAR VISHWAS",
  displayName: "Alok Kumar Vishwas",
  title: "Computer Science Engineering Student",
  status: "2nd Year Undergraduate",
  institution: "GL Bajaj Institute of Technology & Management",
  location: "Greater Noida, Uttar Pradesh, India",
  email: "alokvishwas786@gmail.com",
  githubUsername: "alok0204",
  githubUrl: "https://github.com/alok0204",
  linkedinUrl: "https://www.linkedin.com/in/alok-kumar-vishwas-628b663a1/",
  profileImage: "/images/profile.webp",
  profileImageFallback: "/images/profile.jpg",
  heroSubtitle: "Computer Science Engineering Student",
  heroSupportingText: "Learning, building, and exploring software development through programming and practical projects.",
  shortBio: "I am a second-year Computer Science and Engineering student at GL Bajaj Institute of Technology & Management, focusing on core programming, algorithms, and practical software engineering.",
  fullBio: `I'm Alok Kumar Vishwas, a second-year Computer Science and Engineering student at GL Bajaj Institute of Technology & Management, Greater Noida.

I have a strong interest in programming, software development, and understanding how technology can solve everyday problems.

I have experience learning and working with C, C++, HTML, CSS, Node.js, Git, and GitHub. I'm continuously developing my technical knowledge through practical projects and experimentation.

My goal is to strengthen my problem-solving abilities, gain practical software development experience, and grow into a skilled software engineer.`
};

export const confirmedSkills = [
  {
    category: "Programming",
    description: "Core algorithmic thinking and systems programming",
    items: [
      {
        name: "C",
        description: "Foundational procedural programming, memory management & pointer manipulation",
        badge: "Core Language",
        icon: "Terminal",
        color: "from-blue-500 to-indigo-600"
      },
      {
        name: "C++",
        description: "Object-oriented programming, data structures, and algorithmic problem solving",
        badge: "Systems & OOP",
        icon: "Cpu",
        color: "from-cyan-500 to-blue-600"
      }
    ]
  },
  {
    category: "Web Development",
    description: "Building structured, responsive, and functional web interfaces",
    items: [
      {
        name: "HTML",
        description: "Semantic page structure, accessibility standards, and SEO markup",
        badge: "Structure",
        icon: "Code",
        color: "from-orange-500 to-red-600"
      },
      {
        name: "CSS",
        description: "Responsive styling, modern flexbox & grid layouts, and visual design",
        badge: "Styling",
        icon: "Palette",
        color: "from-sky-400 to-blue-500"
      },
      {
        name: "Node.js",
        description: "Backend JavaScript runtime environment for server-side logic and REST APIs",
        badge: "Runtime",
        icon: "Server",
        color: "from-emerald-500 to-green-600"
      }
    ]
  },
  {
    category: "Developer Tools",
    description: "Version control workflows and collaboration essentials",
    items: [
      {
        name: "Git",
        description: "Local version control, branching, committing, and code history management",
        badge: "VCS",
        icon: "GitBranch",
        color: "from-orange-600 to-amber-600"
      },
      {
        name: "GitHub",
        description: "Remote code hosting, pull requests, repository tracking, and collaboration",
        badge: "Collaboration",
        icon: "Github",
        color: "from-slate-400 to-slate-200"
      }
    ]
  }
];

export const initialProjects = [
  {
    id: "campus-connect",
    title: "Campus Connect",
    slug: "campus-connect",
    description: "A student-focused project named Campus Connect.",
    longDescription: "A student-focused platform designed to streamline campus communication and student connectivity. Explored frontend interfaces and interactive application structures to facilitate student interaction.",
    technologies: ["JavaScript", "HTML", "CSS"],
    verifiedGithubUrl: "https://github.com/alok0204/CampusConnect",
    githubUrl: "https://github.com/alok0204/CampusConnect",
    liveUrl: null,
    isVerifiedRepo: true,
    statusNote: "Public GitHub repository verified",
    featured: true,
    isPlaceholder: false
  },
  {
    id: "habit-tracker",
    title: "Habit Tracker",
    slug: "habit-tracker",
    description: "A personal project focused on tracking activities and building consistent habits.",
    longDescription: "A personal utility application aimed at assisting users with tracking daily routines, habit adherence, and personal consistency. Project details and repository link are editable placeholders pending public release.",
    technologies: ["Planning / In Progress"],
    verifiedGithubUrl: null,
    githubUrl: null,
    liveUrl: null,
    isVerifiedRepo: false,
    statusNote: "Editable details — Repository pending upload",
    featured: true,
    isPlaceholder: true
  }
];

export const educationData = [
  {
    degree: "Bachelor of Technology (B.Tech)",
    field: "Computer Science and Engineering (CSE)",
    institution: "GL Bajaj Institute of Technology & Management",
    location: "Greater Noida, Uttar Pradesh, India",
    status: "2nd Year Undergraduate",
    highlight: "Currently focusing on Data Structures, Algorithms, Object-Oriented Programming, and Web Technologies.",
    current: true
  }
];

export const navigationLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
];
