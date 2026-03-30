export const siteConfig = {
  name: "Brad Ramnarinesingh",
  tagline: "Computer Science student building clean, useful software and web experiences.",
  location: "Toronto, ON",
  links: {
    github: "https://github.com/Bradramnarinesingh",
    linkedin: "https://www.linkedin.com/in/brad-ramnarinesingh/",
    twitter: "https://x.com/b_ramnarine",
    resume: "/files/brad_ramnarinesingh_resume.pdf",
  },
} as const;

export type Project = {
  id: string;
  title: string;
  description: string;
  tech: string[];
  link: string;
  accent: string;
};

export const projects: Project[] = [
  {
    id: "01",
    title: "Fake News Detection AI",
    description:
      "Built a text classification model to identify fake and legitimate news articles using TensorFlow and NLP preprocessing techniques. Applied TF-IDF vectorization, text cleaning, and evaluation with precision, recall, and F1-score.",
    tech: ["TensorFlow", "NLP", "TF-IDF", "Python"],
    link: "https://github.com/Bradramnarinesingh/fake-news-detector",
    accent: "rgba(99, 102, 241, 0.18)",
  },
  {
    id: "02",
    title: "ML House Price Prediction",
    description:
      "Developed a house price prediction model using Gradient Boosting Regressor with data cleaning and feature engineering. Visualized historical trends and outputs to support interpretation and analysis.",
    tech: ["Scikit-Learn", "Python", "Pandas", "Matplotlib"],
    link: "https://github.com/Bradramnarinesingh/House-Prices-Prediction",
    accent: "rgba(16, 185, 129, 0.15)",
  },
  {
    id: "03",
    title: "Portfolio Website",
    description:
      "Created a responsive portfolio website to showcase projects, technical skills, and personal work. Improved usability with frontend design, interaction details, and responsive behavior across devices.",
    tech: ["HTML/CSS", "JavaScript", "React"],
    link: "https://github.com/Bradramnarinesingh/Portfolio-Website",
    accent: "rgba(245, 158, 11, 0.12)",
  },
];

export const skills = {
  Languages: ["Python", "Java", "JavaScript", "HTML / CSS"],
  "Web / Technical": ["React", "Frontend Development", "Responsive Design", "Shopify", "WordPress", "Shopify POS"],
  "Tools / Libraries": ["Git", "VS Code", "PyCharm", "Vercel", "TensorFlow", "Scikit-Learn", "Pandas", "Matplotlib", "NLP / TF-IDF"],
};

export const experience = [
  {
    company: "King & Heartlake / Tav Schembri Real Estate",
    role: "IT & E-Commerce Specialist",
    period: "Jan 2025 – Present",
    location: "Caledon, ON",
    bullets: [
      "Built and edited Shopify storefront sections to improve layout, product presentation, and overall site usability.",
      "Cleaned and organized large SKU and barcode datasets, matching supplier product data to inventory templates.",
      "Set up Shopify POS hardware and software, including POS Go terminals, iPads, scanners, and receipt printers.",
      "Created troubleshooting guides and provided day-to-day IT support for devices, retail systems, and web tasks.",
    ],
  },
  {
    company: "Peel Hardware and Supply",
    role: "Sales Associate",
    period: "May 2023 – Jan 2025",
    location: "Caledon, ON",
    bullets: [
      "Improved inventory organization and stock accessibility across the sales floor and storage areas.",
      "Helped customers by answering product questions and recommending suitable hardware and supply solutions.",
      "Supported daily operations through merchandising, restocking, inventory handling, and team collaboration.",
    ],
  },
];

export const education = {
  school: "University of Toronto",
  degree: "Honours Bachelor of Science, Major in Computer Science; Minors in Mathematics and Geospatial Data Science",
  period: "2021 – Present",
  location: "Toronto, ON",
  courses: [
    "Programming",
    "Data Structures & Algorithms",
    "Software Engineering",
    "Probability & Statistics",
    "Spatial Data Analysis",
  ],
};
