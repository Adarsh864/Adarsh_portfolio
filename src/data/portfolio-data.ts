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
        url: 'https://www.linkedin.com/in/adarshshetty7/',
        icon: Linkedin,
      },
      {
        name: 'GitHub',
        url: 'https://github.com/Adarsh864',
        icon: Github,
      },
      {
        name: 'Email',
        url: 'https://mail.google.com/mail/?view=cm&fs=1&to=shettyadarsh321@gmail.com',
        icon: Mail,
      },
      {
        name: 'Phone',
        url: 'tel:+919740765393',
        icon: Phone,
      },
    ],
  },
  professionalSummary: `A highly motivated and detail-oriented final-year Computer Science student with a strong foundation in full-stack development and a keen interest in tackling complex challenges. I am actively seeking an entry-level software engineer position where I can leverage my skills to contribute to a dynamic team. Passionate about building innovative and user-centric applications, I have cultivated hands-on experience with modern technologies like React, Node.js, and Python, while also exploring emerging fields such as blockchain and artificial intelligence. My goal is to apply my comprehensive academic knowledge, diverse project experience, and robust problem-solving abilities to develop impactful software solutions and grow as a professional in the tech industry.`,
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
