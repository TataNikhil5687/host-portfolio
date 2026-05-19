export interface Certification {
  name: string;
  issuer: string;
  focus: string;
  year?: string;
}

export interface SkillGroup {
  title: string;
  items: string[];
}

export interface Project {
  title: string;
  description: string;
  stack: string[];
  impact: string;
  githubRepo: string;
}

export interface TimelineItem {
  title: string;
  organization: string;
  period: string;
  description: string;
  highlights: string[];
}

export interface ContactInfo {
  email: string;
  location: string;
  linkedin: string;
  github: string;
  githubHandle: string;
}

export interface ProfileData {
  fullName: string;
  role: string;
  tagline: string;
  summary: string;
  education: {
    degree: string;
    institution: string;
    expectedGraduation: string;
    cgpa: string;
  };
  certifications: {
    core: Certification[];
    additional: Certification[];
  };
  skillGroups: SkillGroup[];
  projects: Project[];
  timeline: TimelineItem[];
  contact: ContactInfo;
}

export const portfolioData: ProfileData = {
  fullName: "Tata Nikhil Dharma Sai",
  role: "Enterprise Application Developer & Full-Stack Engineer",
  tagline: "Building workflow-first enterprise platforms with ServiceNow and modern web stacks.",
  summary:
    "I design and deliver scalable digital solutions across enterprise workflow automation and full-stack web engineering. My focus spans ServiceNow platform development, ITSM-aligned automation, and high-performance React/Node applications with clean architecture.",
  education: {
    degree: "B.Tech in Electronics & Communication Engineering",
    institution: "Ramachandra College of Engineering",
    expectedGraduation: "2026",
    cgpa: "7.75/10.0"
  },
  certifications: {
    core: [
      {
        name: "ServiceNow Certified System Administrator (CSA)",
        issuer: "ServiceNow",
        focus: "Platform administration, ITSM workflows, configuration management"
      },
      {
        name: "ServiceNow Certified Application Developer (CAD)",
        issuer: "ServiceNow",
        focus: "Scoped app development, scripting, integrations, app lifecycle"
      }
    ],
    additional: [
      {
        name: "Cyber Security with Kali Linux",
        issuer: "APSSDC",
        focus: "Security fundamentals, reconnaissance, practical Linux security tooling"
      }
    ]
  },
  skillGroups: [
    {
      title: "Enterprise Platforms (ServiceNow)",
      items: [
        "Service Portal Development",
        "Widget Customization",
        "GlideAPI Scripting",
        "Business Rules",
        "Client Scripts",
        "Flow Designer",
        "IntegrationHub",
        "ITSM Core"
      ]
    },
    {
      title: "Frontend",
      items: ["React.js", "Next.js", "TypeScript", "JavaScript (ES6+)", "Tailwind CSS"]
    },
    {
      title: "Backend & Databases",
      items: ["Node.js", "Express.js", "MongoDB", "REST APIs"]
    },
    {
      title: "Languages & Core Tools",
      items: ["Python", "Java", "C", "Git", "GitHub"]
    }
  ],
  projects: [
    {
      title: "Recipe Database Web Application",
      description:
        "Full-stack web platform for managing large-scale recipe datasets using React, Node.js, and MongoDB with optimized CRUD workflows.",
      stack: ["React.js", "Node.js", "Express.js", "MongoDB", "REST APIs"],
      impact:
        "Handled 500+ structured recipe entries with custom search and filtering logic, improving retrieval performance and usability.",
      githubRepo: "TataNikhil5687/Recipe-Database-Web-Application"
    },
    {
      title: "Real-Time Radar Detection System",
      description:
        "Embedded + software pipeline integrating Arduino and ultrasonic sensors with Python processing for continuous live monitoring.",
      stack: ["Arduino", "Ultrasonic Sensors", "Python", "Data Visualization"],
      impact:
        "Processed real-time streams and exposed live metrics in custom dashboards for rapid interpretation of detection events.",
      githubRepo: "TataNikhil5687/Radar-Detection-System"
    },
    {
      title: "Embedded Systems Data Logger / Python Keylogger",
      description:
        "Python-based structured data collection project with strong input validation and secure log processing practices.",
      stack: ["Python", "Structured Logging", "Validation Pipelines"],
      impact:
        "Implemented controlled data ingestion and validation protocols to improve reliability for downstream analytics.",
      githubRepo: "TataNikhil5687/project-keylogger"
    }
  ],
  timeline: [
    {
      title: "B.Tech in ECE",
      organization: "Ramachandra College of Engineering",
      period: "2022 – 2026 (Expected)",
      description:
        "Pursuing undergraduate engineering with parallel focus on software systems, enterprise automation, and practical development.",
      highlights: ["Current CGPA: 7.75/10.0", "Strong cross-domain project exposure"]
    },
    {
      title: "ServiceNow Certification Milestone",
      organization: "ServiceNow",
      period: "2025 – 2026",
      description:
        "Earned both CSA and CAD credentials, demonstrating competency from platform administration to app development.",
      highlights: ["CSA Certified", "CAD Certified"]
    },
    {
      title: "Cybersecurity & Data Analysis Internship Track",
      organization: "APSSDC / Academic Industry Training",
      period: "2024 – 2025",
      description:
        "Built foundational security and analysis capabilities through practical Linux-based cybersecurity exercises.",
      highlights: [
        "Cyber Security with Kali Linux Certification",
        "Hands-on security workflow experience"
      ]
    }
  ],
  contact: {
    email: "tata.nikhildharmasai@gmail.com",
    location: "Eluru, Andhra Pradesh, India",
    linkedin: "https://linkedin.com",
    github: "https://github.com/TataNikhil5687",
    githubHandle: "TataNikhil5687"
  }
};
