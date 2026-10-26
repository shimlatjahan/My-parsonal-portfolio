
// ======================================
// PERSONAL INFORMATION
// ======================================

export const personalInfo = {
  name: "Shimlat Jahan Sonia",
  title: "Aspiring Frontend Developer",
  university: "University of Barishal",
  department: "Public Administration",
  location: "Barishal, Bangladesh",

  // Profile Photo
  profileImage: "/Sonia2.jpeg",

  // Resume
  resume: "/resume.pdf",

  // Contact
  email: "shimlatjahansonia@gmail.com",
  phone: "01319132184",
  whatsapp: "",

  // Social Media
  github: "https://github.com/shimlatjahan",
  linkedin: "",
  facebook: "",
  twitter: "",

  // Hobby
  hobbies: "Exploring New Technologies",
};


// ======================================
// SKILLS
// ======================================

export const skillGroups = [
  {
    title: "Frontend Development",
    description: "Technologies I use and continue to explore.",
    skills: [
      { name: "HTML5", icon: "H5" },
      { name: "CSS3", icon: "C3" },
      { name: "JavaScript", icon: "JS" },
      { name: "TypeScript", icon: "TS" },
      { name: "React", icon: "⚛" },
      { name: "Next.js", icon: "N" },
      { name: "Tailwind CSS", icon: "TW" },
    ],
  },

  {
    title: "Backend & Database",
    description: "Backend technologies and databases.",
    skills: [
      { name: "MongoDB", icon: "DB" },
      { name: "REST API", icon: "API" },
    ],
  },

  {
    title: "Development Tools",
    description: "Tools for my development workflow.",
    skills: [
      { name: "Git", icon: "G" },
      { name: "GitHub", icon: "GH" },
      { name: "VS Code", icon: "</>" },
    ],
  },
];


// ======================================
// PROJECT TYPE
// ======================================

export type Project = {
  slug: string;
  title: string;
  category: string;
  status: string;
  description: string;
  overview: string;
  image: string;
  technologies: string[];
  liveUrl: string;
  githubUrl: string;
  challenges: string[];
  improvements: string[];
};


// ======================================
// PROJECTS
// ======================================

export const projects: Project[] = [
  // ====================================
  // PROJECT 1 - DEV STACK BUILDER
  // ====================================

  {
    slug: "dev-stack-builder",

    title: "Dev Stack Builder",

    category: "React Application",

    status: "Live Project",

    description:
      "An interactive web application that helps users explore web development technologies and build their own personalized technology stack.",

    overview:
      "Dev Stack Builder is a responsive web application developed using React and TypeScript. It allows users to explore different web development technologies, view their information, and create a personalized technology stack. Users can add and remove technologies from their selected stack. The application uses React state management and JSON data to deliver an interactive experience.",

    // Screenshot: public/projects/dev-stack-builder.png
    image: "/projects/dev-stack-builder.png",

    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "DaisyUI",
      "React Toastify",
      "Vite",
    ],

    liveUrl:
      "https://elaborate-fenglisu-aa15c6.netlify.app/",

    githubUrl:
      "https://github.com/shimlatjahan/reacts-5th-assignment",

    challenges: [
      "Managing selected technologies using React state.",
      "Loading and displaying technology information from JSON data.",
      "Handling technology selection and removal dynamically.",
      "Maintaining responsive layouts across different devices.",
    ],

    improvements: [
      "Add local storage to save selected technology stacks.",
      "Introduce technology search and filtering.",
      "Allow users to share their selected stacks.",
      "Enhance animations and user interactions.",
    ],
  },


  // ====================================
  // PROJECT 2 - FITLOG
  // ====================================

  {
    slug: "fitlog-workout-library",

    title: "FitLog – Workout Library",

    category: "Next.js Application",

    status: "Live Project",

    description:
      "A modern fitness application where users can explore workouts, view exercise details, create daily workout plans, and save exercises for later.",

    overview:
      "FitLog is a modern workout library and fitness planning application developed using Next.js, React, TypeScript, and Tailwind CSS. Users can browse different exercises, explore detailed workout information, and organize their daily workout plans. The application includes workout sorting, saved exercises, completion tracking, and interactive toast notifications. Its dark and responsive interface provides an engaging fitness experience.",

    // Screenshot: public/projects/fitlog.png
    image: "/projects/fitlog.png",

    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "REST API",
      "React Icons",
      "React Toastify",
    ],

    liveUrl:
      "https://my-6th-assingnments-projects.vercel.app/",

    githubUrl:
      "https://github.com/shimlatjahan/my-6th-assignments-projects",

    challenges: [
      "Fetching and displaying workout data from a REST API.",
      "Managing daily workout plans and saved exercises.",
      "Implementing workout sorting and navigation.",
      "Handling completion status and interactive notifications.",
      "Creating responsive workout cards and detailed pages.",
    ],

    improvements: [
      "Introduce user authentication.",
      "Add personalized workout recommendations.",
      "Implement workout progress tracking.",
      "Add weekly fitness statistics and charts.",
      "Improve accessibility and performance.",
    ],
  },


  // ====================================
  // PROJECT 3 - BAZARDOR
  // ====================================

  {
    slug: "bazardor",

    title: "BazarDor – Grocery Price Tracker",

    category: "Full Stack Web Application",

    status: "Live Project",

    description:
      "A Bengali-first grocery price tracking platform that helps users explore daily market prices, compare essential products, and monitor price changes.",

    overview:
      "BazarDor is a Bengali-first grocery price information platform developed using Next.js, React, TypeScript, and Tailwind CSS. The application helps users explore everyday grocery prices, browse products by category, and compare market prices. It includes price increase and decrease indicators, product sorting, protected product details, and user authentication using Better Auth. The project also uses MongoDB for authentication-related data storage and integrates a REST API for product information.",

    // Screenshot: public/projects/bazardor.png
    image: "/projects/bazardor.png",

    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "MongoDB",
      "Better Auth",
      "HeroUI",
      "REST API",
    ],

    liveUrl:
      "https://my-7th-assignment-bs3j.vercel.app/",

    githubUrl:
      "https://github.com/shimlatjahan/my-7th-assignment",

    challenges: [
      "Handling Bengali numerical values during price sorting.",
      "Integrating authentication and protected product routes.",
      "Displaying market-specific prices and product categories.",
      "Working with API data and responsive product layouts.",
      "Managing loading states and user feedback.",
    ],

    improvements: [
      "Introduce historical grocery price charts.",
      "Add price alerts for selected products.",
      "Expand market-wise price comparison features.",
      "Improve search and filtering capabilities.",
      "Add personalized grocery shopping lists.",
    ],
  },
];


// ======================================
// FIND PROJECT BY SLUG
// ======================================

export function getProject(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
