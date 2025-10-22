import type { LucideIcon } from 'lucide-react';
import { Github, Linkedin, Mail, Phone, FileText, Globe } from 'lucide-react';

export const portfolioData = {
  name: 'Adarsh Shetty',
  contact: {
    email: 'shettyadarsh321@gmail.com',
    phone: '+91-9740765393',
    socials: [
      {
        name: 'LinkedIn',
        url: 'https://linkedin.com/in/adarsh-shetty',
        icon: Linkedin,
      },
      {
        name: 'GitHub',
        url: 'https://github.com/Adarsh864',
        icon: Github,
      },
      {
        name: 'Portfolio',
        url: '#', // The current site is the portfolio
        icon: Globe,
      },
      {
        name: 'Email',
        url: 'mailto:shettyadarsh321@gmail.com',
        icon: Mail,
      },
      {
        name: 'Phone',
        url: 'tel:+919740765393',
        icon: Phone,
      },
    ],
  },
  professionalSummary: `A Final-year Computer Science student seeking an entry-level software engineer position. Eager to apply my academic knowledge and problem-solving skills to contribute to a professional development team.`,
  education: [
    {
      institution: 'Vivekananda College of Engineering and Technology',
      degree: 'Bachelor of Engineering in Computer Science and Engineering',
      duration: '2022 - 2026',
      location: 'Puttur, Karnataka',
      result: 'CGPA: 8.4',
    },
    {
      institution: 'Indraprastha Pre-University College',
      degree: 'PCMC',
      duration: '2020 - 2022',
      location: 'Uppinangady, Karnataka',
      result: 'Percentage: 88.1%',
    },
    {
      institution: 'Wisdom English Medium High School',
      degree: 'SSLC',
      duration: '2020',
      location: 'Budoli, Karnataka',
      result: 'Percentage: 84%',
    },
  ],
  projects: [
    {
      title: 'Blockchain Based NFT Marketplace',
      description: 'Developed a full-stack, decentralized NFT marketplace on the Ethereum blockchain using the MERN stack and Solidity. Authored, tested, and deployed secure ERC-721 smart contracts. Engineered a React frontend with Ethers.js and integrated Pinata (IPFS) on the Node.js backend.',
      technologies: ['React', 'Solidity', 'Hardhat', 'Pinata', 'Node.js', 'MongoDB', 'Ethers.js'],
      image: 'project-nft-marketplace',
    },
    {
      title: 'Online Doctor Appointment Booking System',
      description: 'Developed a full-stack doctor appointment system using the MERN stack. Engineered the complete payment workflow by integrating the Razorpay API. Built RESTful API endpoints and ensured secure user authentication using JWT.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express.js', 'Razorpay API', 'JWT'],
      image: 'project-doctor-appointment',
    },
    {
      title: 'LeetCode AI Hint Generator',
      description: 'Developed a full-stack application by engineering a Python (FastAPI) backend and a JavaScript-based Chrome Extension frontend. Integrated the Google Gemini API to generate real-time, AI-powered hints and solution strategies based on dynamic problem data. Engineered the Chrome Extension to use content scripts to scrape problem titles and descriptions directly from the LeetCode DOM.',
      technologies: ['Python', 'FastAPI', 'JavaScript', 'Gemini API', 'Chrome Extension'],
      image: 'project-leetcode-ai',
    },
  ],
  skills: {
    'Languages': ['Java', 'C', 'Javascript', 'C++', 'Python', 'Solidity'],
    'Frontend Development': ['React', 'HTML', 'CSS', 'Chrome Extensions'],
    'Backend Development': ['Node.js', 'Express.js', 'FastAPI'],
    'Databases': ['MySQL', 'MongoDB'],
    'Cloud & Services': ['Google Cloud Platform (GCP)', 'Firebase', 'Pinata'],
    'Developer Tools': ['Git', 'GitHub', 'Hardhat'],
  },
};

export type PortfolioData = typeof portfolioData;
