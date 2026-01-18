// index.js
export const servicesData = [
  {
    title: "Full-Stack Web Development",
    description:
      "I build modern web applications using React.js, Next.js, TypeScript, and the MERN stack. My focus is on writing clean code and delivering functional, user-friendly web experiences.",
    items: [
      {
        title: "Backend Development",
        description: "(Node.js, Express.js, REST APIs, Authentication)",
      },
      {
        title: "Frontend Development",
        description: "(React.js, Next.js, TypeScript, Responsive UI)",
      },
      {
        title: "Database Integration",
        description: "(MongoDB, Data Modeling, CRUD Operations)",
      },
    ],
  },
  {
    title: "Frontend Engineering",
    description:
      "I create responsive and accessible user interfaces with a strong focus on usability and modern design practices.",
    items: [
      {
        title: "React.js & Next.js",
        description: "(App Router, SSR, Client & Server Components)",
      },
      {
        title: "Styling & Layout",
        description: "(GSAP, Tailwind CSS, Responsive Design)",
      },
      {
        title: "State Management",
        description: "(Redux Toolkit, Client-side State)",
      },
    ],
  },
  {
    title: "Backend & Integrations",
    description:
      "I work with backend systems and third-party services to support real-world application functionality.",
    items: [
      {
        title: "Authentication",
        description: "(JWT, NextAuth, Secure Login Flow)",
      },
      {
        title: "Payments & APIs",
        description: "(Stripe Integration, External APIs)",
      },
      {
        title: "Monitoring",
        description: "(Sentry Error Tracking)",
      },
    ],
  },
  {
    title: "Deployment & Hosting",
    description:
      "I deploy and manage web applications using modern hosting platforms, ensuring smooth builds and reliable access for users.",
    items: [
      {
        title: "Frontend Deployment",
        description: "(Vercel, Netlify, Cloudflare Pages)",
      },
      {
        title: "Environment Configuration",
        description: "(Environment Variables, Build Setup)",
      },
      {
        title: "SEO Basics",
        description: "(Next.js Metadata, SSR)",
      },
    ],
  },
];

export const projects = [
  {
    id: 1,
    name: "Founder Flow",
    description:
      "A full-stack startup ecosystem built with Next.js and TypeScript, featuring server components, authentication, and real-time content management using a headless CMS.",
    href: "https://founder-flow-red.vercel.app/",
    image: "/assets/projects/founder-flow.jpg",
    bgImage: "/assets/backgrounds/blanket.jpg",
    frameworks: [
      { id: 1, name: "Next.js" },
      { id: 2, name: "TypeScript" },
      { id: 3, name: "Sanity CMS" },
      { id: 4, name: "Tailwind CSS" },
      { id: 5, name: "NextAuth" },
      { id: 6, name: "Sentry" },
    ],
  },
  {
    id: 2,
    name: "Grocery Store Application",
    description:
      "A full-stack MERN e-commerce application with user authentication, admin management, and secure online payments.",
    href: "https://grocerystore12.netlify.app/",
    image: "/assets/projects/grocery-store.jpg",
    bgImage: "/assets/backgrounds/curtains.jpg",
    frameworks: [
      { id: 1, name: "React.js" },
      { id: 2, name: "Node.js" },
      { id: 3, name: "Express.js" },
      { id: 4, name: "MongoDB" },
      { id: 5, name: "Stripe" },
      { id: 6, name: "JWT" },
    ],
  },
  {
    id: 3,
    name: "CryptoSphere",
    description:
      "A real-time cryptocurrency information platform providing market data, rankings, and statistics using external APIs.",
    href: "https://cryptosphere12.netlify.app/",
    image: "/assets/projects/crypto-sphere.jpg",
    bgImage: "/assets/backgrounds/map.jpg",
    frameworks: [
      { id: 1, name: "React.js" },
      { id: 2, name: "Redux Toolkit" },
      { id: 3, name: "Ant Design" },
      { id: 4, name: "REST APIs" },
    ],
  },
];

export const socials = [
  { name: "LinkedIn", href: "https://www.linkedin.com/in/vipanshu-vashisht-545763239/" },
  { name: "GitHub", href: "https://github.com/VipanshuVashisht" },
];

export const workExperience = [
  {
    id: 1,
    company: "Cywarden Global Services Pvt. Ltd.",
    location: "Mohali, Punjab",
    positions: [
      {
        title: "Jr. Full Stack Developer",
        period: "Nov 2025 – Present",
        achievements: [
          "Architected high-performance applications using Next.js 14 and TypeScript, leveraging Server Components and SSR to optimize SEO while building scalable RESTful APIs for the MERN stack.",
          "Integrated Sentry for real-time observability and automated error tracking to ensure high application uptime.",
          "Optimized Node.js middleware and MongoDB schemas to handle high-concurrency data processing efficiently.",
          "Directed Agile workflows and Git code reviews to maintain modular folder structures and DRY principles.",
        ],
      },
      {
        title: "Jr. Full Stack Developer Intern",
        period: "Apr 2025 – Oct 2025",
        achievements: [],
      },
    ],
  },
  {
    id: 2,
    company: "Next24tech Technology and Services",
    location: "Nagpur, Maharashtra",
    positions: [
      {
        title: "Full Stack Developer Intern",
        period: "June 2024 - Jul 2024",
        achievements: [
          "Architected and developed responsive full-stack MERN applications, implementing modular React.js component structures and optimized state management for seamless user experiences.",
          "Engineered secure JWT-based authentication systems to manage user sessions and protect sensitive data.",
          "Accelerated data retrieval speeds by implementing Mongoose indexing and optimized aggregation pipelines.",
          "Streamlined production releases using Git version control and participated in Agile sprint cycles.",
        ],
      },
    ],
  },
];