export const siteConfig = {
  name: "Brad Ramnarinesingh",
  tagline: "Software development, machine learning, and frontend engineering.",
  location: "Toronto, ON",
  email: "bradramnarinesingh@gmail.com",
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
  subtitle: string;
  description: string;
  tech: string[];
  link: string;
  accentFrom: string;
  accentTo: string;
};

export const projects: Project[] = [
  {
    id: "01",
    title: "Fake News Detection AI",
    subtitle: "Deep learning text classifier",
    description:
      "Built a classification model using TensorFlow and NLP to identify fake vs. legitimate news articles. Applied TF-IDF vectorization, text cleaning, and evaluated with precision, recall, and F1-score across both classes.",
    tech: ["TensorFlow", "NLP / TF-IDF", "Python"],
    link: "https://github.com/Bradramnarinesingh/fake-news-detector",
    accentFrom: "rgba(99, 102, 241, 0.35)",
    accentTo: "rgba(99, 102, 241, 0.0)",
  },
  {
    id: "02",
    title: "ML House Price Prediction",
    subtitle: "Gradient Boosting regression",
    description:
      "Developed a price prediction model using Scikit-Learn's Gradient Boosting Regressor with data cleaning and feature engineering in Pandas. Visualized historical trends and outputs with Matplotlib for analysis and presentation.",
    tech: ["Scikit-Learn", "Pandas", "Matplotlib", "Python"],
    link: "https://github.com/Bradramnarinesingh/House-Prices-Prediction",
    accentFrom: "rgba(16, 185, 129, 0.3)",
    accentTo: "rgba(16, 185, 129, 0.0)",
  },
  {
    id: "03",
    title: "Portfolio Website",
    subtitle: "Responsive personal site",
    description:
      "Designed and built a responsive portfolio to showcase projects and technical work. Improved usability through frontend design, interactive elements, layout refinement, and responsive behavior across devices.",
    tech: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    link: "https://github.com/Bradramnarinesingh/Portfolio-Website",
    accentFrom: "rgba(245, 158, 11, 0.28)",
    accentTo: "rgba(245, 158, 11, 0.0)",
  },
];

export const skills = {
  Languages: ["Python", "Java", "JavaScript", "HTML / CSS"],
  "Web / Technical": ["React", "Next.js", "Frontend Development", "Responsive Design", "Shopify", "WordPress", "Shopify POS"],
  "Tools / Libraries": ["Git", "VS Code", "PyCharm", "Vercel", "TensorFlow", "Scikit-Learn", "Pandas", "Matplotlib", "NLP / TF-IDF"],
};

export const experience = [
  {
    company: "King & Heartlake / Tav Schembri Real Estate",
    role: "IT & E-Commerce Specialist",
    period: "Jan 2025 – Present",
    location: "Caledon, ON",
    bullets: [
      "Built and edited Shopify storefront sections to improve layout, product presentation, and site usability.",
      "Cleaned, organized, and matched large SKU and barcode datasets from supplier data to inventory templates.",
      "Set up and configured Shopify POS hardware and software including terminals, iPads, scanners, and printers.",
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
      "Helped customers by answering product questions and recommending suitable hardware solutions.",
      "Supported daily operations through merchandising, restocking, inventory handling, and team collaboration.",
    ],
  },
];

export const education = {
  school: "University of Toronto",
  degree: "HBSc — Major in Computer Science; Minors in Mathematics & Geospatial Data Science",
  period: "2021 – Present",
  location: "Toronto, ON",
  courses: [
    "Data Structures & Algorithms",
    "Software Engineering",
    "Probability & Statistics",
    "Spatial Data Analysis",
  ],
};
