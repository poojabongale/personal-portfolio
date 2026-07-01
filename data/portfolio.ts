export interface Project {
  id: number;
  title: string;
  description: string;
  techStack: string[];
  githubLink: string;
}

export interface SkillCategory {
  category: string;
  items: string[];
}

export const portfolioData = {
  name: "Ana",
  role: "Data Science Professional",
  tagline: "Building multi-agent AI workflows, scalable data pipelines, and interactive analytics interfaces.",
  bio: "Data scientist focused on machine learning engineering, statistical modeling, and developing agentic architectures that convert complex datasets into production-ready business solutions.",
  
  projects: [
    {
      id: 1,
      title: "Multi-Agent AutoML System",
      description: "An automated machine learning framework designed to run data preprocessing, optimal model selection, and verification workflows autonomously.",
      techStack: ["Python", "Scikit-Learn", "Pandas", "Agentic Frameworks"],
      githubLink: "#"
    },
    {
      id: 2,
      title: "Natural Language to SQL Agent",
      description: "An end-to-end data utility engineered using Microsoft Fabric to convert conversational natural language queries into accurate, executed SQL operations.",
      techStack: ["Python", "SQL", "Semantic Kernel", "Microsoft Fabric"],
      githubLink: "#"
    },
    {
      id: 3,
      title: "Regional Hardware Propensity Model",
      description: "A statistical data system executing owner segmentation and machine learning predictive mapping to target upgrade trajectories for hardware ecosystems.",
      techStack: ["SQL", "Python", "Clustering", "Predictive Modeling"],
      githubLink: "#"
    },
    {
      id: 4,
      title: "Personal Finance Dashboard",
      description: "An interactive business analytics platform built to visualize transactional asset volumes, budget limits, and monthly spending categories.",
      techStack: ["Power BI", "DAX", "Data Engineering", "Excel Analytics"],
      githubLink: "#"
    }
  ] as Project[],

  skills: [
    {
      category: "Data Science & ML",
      items: ["Statistical Modeling", "Decision Trees", "Dimensionality Reduction", "Clustering Algorithms", "Hypothesis Testing"]
    },
    {
      category: "Data Engineering & Analytics",
      items: ["SQL / T-SQL", "Microsoft Fabric", "Pandas", "Matplotlib / Seaborn", "Advanced Excel"]
    },
    {
      category: "Core Languages",
      items: ["Python", "SQL", "TypeScript", "JavaScript"]
    }
  ] as SkillCategory[]
};