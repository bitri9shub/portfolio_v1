import type { IconType } from "react-icons";
import { FaLinkedin, FaGithub, FaFileAlt } from "react-icons/fa";

//  Navigation 

export interface NavLink {
    href: string;
    label: string;
}

export const navLinks: NavLink[] = [
    { href: "#about", label: "About" },
    { href: "#experience", label: "Experience" },
    { href: "#education", label: "Education" },
    { href: "#projects", label: "Projects" },
    { href: "#connect", label: "Connect" },
    // { href: "#contact", label: "Contact" },
];

//  About 

export const aboutTexts: string[] = [
    "Third-year engineering student at ENSAM Casablanca, focused on backend development and DevOps. Learning Docker, Kubernetes, and CI/CD through hands-on labs - currently deepening infrastructure fundamentals.",
    "I like understanding systems from the ground up, not just using them. That means building from scratch, breaking things, and working through why - rather than stopping once something runs.",
];

//  Experience 

export interface Experience {
    period: string;
    company: string;
    description: string;
}

export const experiences: Experience[] = [
    {
        period: "June 2026 - 1 Month",
        company: "Valtic",
        description: "Data Engineering - Assistance with ETL design, UNSPSC categorization, AI integration with ollama, Python developement mainly with Pandas.",
    },
];

//  Education 

export interface Education {
    period: string;
    description: string;
}

export const education: Education[] = [
    {
        period: "2022-2028",
        description: "Engineering Degree - Artificial Intelligence & Computer Science @ Ensam Casablanca",
    },
];

//  Projects 

export interface Project {
    name: string;
    year: string;
    description: string;
    url: string;
}

export const projects: Project[] = [
    {
        name: "WORKSPACE PLANNER",
        year: "2026",
        description: "A follow up system to take, structure notes and schedule your life.",
        url: "https://github.com/bitri9shub/empirebuild",
    },
    {
        name: "PORTFOLIO",
        year: "2026",
        description: "A single-page site built to hold a resume, background, and a way to get in touch.",
        url: "https://github.com/bitri9shub/portfolio_v1",
    }
];

//  Social Links 

export interface SocialLink {
    platform: string;
    url: string;
    icon: IconType;
}

export const socialLinks: SocialLink[] = [
    {
        platform: "LinkedIn",
        url: "https://www.linkedin.com/in/ahmed-lamghari-ba62453b1/",
        icon: FaLinkedin,
    },
    {
        platform: "Github",
        url: "https://github.com/bitri9shub",
        icon: FaGithub,
    },
    {
        platform: "Resume",
        url: "https://drive.google.com/drive/folders/1TTwBgdVSI4kZhH8wDTm_0M6fHyv0dcoB",
        icon: FaFileAlt,
    },
];
