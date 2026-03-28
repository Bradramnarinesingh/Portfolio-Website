export const siteConfig = {
  name: "Brad Ramnarinesingh",
  tagline: "Building at the intersection of machine learning and clean interfaces.",
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
      "Deep learning model that classifies news articles as real or fake using TensorFlow and NLP. Built a custom text preprocessing pipeline with TF-IDF vectorization and evaluated with precision, recall, and F1-score.",
    tech: ["TensorFlow", "NLP / TF-IDF", "Python", "Scikit-Learn"],
    link: "https://github.com/Bradramnarinesingh/fake-news-detector",
    accent: "rgba(99, 102, 241, 0.18)",
  },
  {
    id: "02",
    title: "ML House Price Prediction",
    description:
      "Gradient Boosting regression model achieving a Mean Absolute Error of $33,429. Includes feature engineering with Pandas, price trend normalization, and Matplotlib visualizations for market insights.",
    tech: ["Scikit-Learn", "Gradient Boosting", "Pandas", "Matplotlib"],
    link: "https://github.com/Bradramnarinesingh/House-Prices-Prediction",
    accent: "rgba(16, 185, 129, 0.15)",
  },
  {
    id: "03",
    title: "Portfolio Website",
    description:
      "Responsive personal portfolio built with HTML, CSS, and JavaScript. Implemented intersection observer–driven animations, a custom cursor, and a Vanta fog background with Three.js.",
    tech: ["HTML/CSS", "JavaScript", "Three.js", "Vanta.js"],
    link: "https://github.com/Bradramnarinesingh/Portfolio-Website",
    accent: "rgba(245, 158, 11, 0.12)",
  },
];

export const skills = {
  Languages: ["Python", "Java", "JavaScript", "TypeScript", "HTML / CSS"],
  Frameworks: ["TensorFlow", "Scikit-Learn", "Pandas", "Matplotlib", "Flask", "React", "Next.js"],
  Tools: ["Git", "VS Code", "PyCharm", "Vercel", "NLP / TF-IDF", "WordPress"],
};

export const experience = [
  {
    company: "Peel Hardware and Supply",
    role: "Sales Associate",
    period: "May 2023 – Present",
    location: "Caledon, ON",
    bullets: [
      "Streamlined inventory organization processes, improving stock management efficiency.",
      "Delivered customer service by resolving product queries and offering tailored recommendations.",
      "Collaborated with the team to maintain a well-organized, high-standard sales floor.",
    ],
  },
];

export const education = {
  school: "University of Toronto",
  degree: "HBSc Computer Science, Mathematics & Statistics",
  period: "2021 – Present",
  location: "Toronto, ON",
  courses: [
    "Data Structures & Algorithms",
    "Software Engineering",
    "Probability & Statistics",
    "Statistical Inference",
    "Linear Algebra",
  ],
};
