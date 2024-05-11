import { circleBlue, appleAppMockup, artMockup, dohle } from '../assets/images'

import {
  azure,
  csharp,
  css,
  docker,
  doehle,
  git,
  github,
  html,
  javascript,
  jira,
  linkedin,
  net,
  nodejs,
  postman,
  react,
  realpage,
  redux,
  sass,
  
  schneider,
  
  sql,
  
  tailwindcss,
  typescript,
} from '../assets/icons'

export const skills = [
  {
    id: 'html',
    imageUrl: html,
    name: 'HTML',
    type: 'Frontend',
  },
  {
    id: 'css',
    imageUrl: css,
    name: 'CSS',
    type: 'Frontend',
  },
  {
    id: 'javascript',
    imageUrl: javascript,
    name: 'JavaScript',
    type: 'Frontend',
  },
  {
    id: 'git',
    imageUrl: git,
    name: 'Git',
    type: 'Version Control',
  },
   {
    id: 'jira',
    imageUrl: jira,
    name: 'jira',
    type: 'Version Control',
  },
  {
    id: 'github',
    imageUrl: github,
    name: 'GitHub',
    type: 'Version Control',
  },
  {
    id: 'nodejs',
    imageUrl: nodejs,
    name: 'Node.js',
    type: 'Backend',
  },
  {
    id: 'csharp',
    imageUrl: csharp,
    name: 'csharp',
    type: 'Frontend',
  },
   {
    id: 'net',
    imageUrl: net,
    name: 'net',
    type: 'Frontend',
  },
  {
    id: 'azure',
    imageUrl: azure,
    name: 'azure',
    type: 'Frontend',
  },
   {
    id: 'postman',
    imageUrl: postman,
    name: 'postman',
    type: 'Frontend',
  },
   {
    id: 'docker',
    imageUrl: docker,
    name: 'docker',
    type: 'Frontend',
  },
   {
    id: 'sql',
    imageUrl: sql,
    name: 'sql',
    type: 'Frontend',
  },
]

export const experiences = [
  {
    title: 'Back End Developer',
    company_name: 'Doehle Shipment Management',
    icon: doehle,
    iconBg: '#accbe1',
    date: 'May 2021 - Current',
    points: [
      'Developing C# .NET Core programs using REST API, Azure Active Directory authentication, Docker deployment, GitLab CI/CD, Postman for API requests, Azure deployments, SendGrid integration, Entity Framework Code First approach, XUnit Integration Tests, MsSQL database, and Scrum Agile Methodology, having contributed to projects such as the Seafarer Application Website Version 2 and NAVIDO 2.0 ERP System, encompassing functionalities ranging from bug fixes to new module development and integration.',
    ],
  },
  {
    title: 'Developer Analyst',
    company_name: 'Real Page',
    icon: realpage,
    iconBg: '#accbe1',
    date: 'Apr 2019 - May 2021',
    points: [
      'Proficient in enhancing user experience and developing dynamic functionalities for a leasing website, utilizing XML, Java, and JavaScript, while creating a smart, dynamic product for Real Estate, ensuring smooth processes and utilizing GitHub for repository management, along with addressing database issues and maintaining ISO format process documents.',
    ],
  },
  {
    title: 'Web Developer Intern',
    company_name: 'Schneider Electric',
    icon: schneider,
    iconBg: '#accbe1',
    date: 'Dec 2018 - Mar 2019',
    points: [
      'Collaborating with the team to enhance user interfaces, integrate REST APIs, apply C# and OOP principles, utilize Git for version control, and ensure seamless interaction with SQL databases.'
    ],
  },
]

export const socialLinks = [
  {
    name: 'Linkedin',
    iconUrl: linkedin,
    link: 'https://www.linkedin.com/in/jannah-gilleine-ortiz/',
  },
]

export const projects = [
  {
    thumbnail: dohle,
    name: 'Dohle ShipManagement',
    description:
      'The web application serves as a platform for applicants interested in maritime careers, providing them with a seamless experience to apply for various positions within the company. It integrates Angular for the frontend development, C# with .NET for the backend, Azure for cloud services, and Docker for containerization, ensuring scalability, flexibility, and ease of deployment',
    link: 'https://www.doehle-mnl.com/',
  },
]
