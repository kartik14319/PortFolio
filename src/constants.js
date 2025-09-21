// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';

import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';

import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';

import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';

import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';

import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';


// Project Section Logo's
import AIRBNB from './assets/AIRBNB.jpg';
import ApanVideoColl from './assets/coll.jpg'; 
import deepseek from './assets/deepseek.jpg';
import ChatGPT from './assets/ChatGPT.jpg';
import chatting from './assets/chatting.jpg';





export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Redux', logo: reduxLogo },
      { name: 'Next JS', logo: nextjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Material UI', logo: materialuiLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [

      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
  
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'JavaScript', logo: javascriptLogo },

    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
 
    ],
  },
];

 
  
  export const projects = [
    {
      id: 0,
      title: "ChatGPT Clone ",
      description:
      "Developed a ChatGPT Clone web application that enables real-time AI-driven conversations Built with React for the frontend and Node.js/Express for the backend, integrated with OpenAI API. Designed a clean, responsive UI for seamless user experience. Focused on performance, API handling, and smooth interaction flow.",
      image: ChatGPT,
      tags: ["HTML", "CSS", "JavaScript", "React", "using API"],
      github: "https://github.com/kartik14319/ChatGPT_Clone",
      
    },
    {
      id: 1,
      title: "DeepSeek clone",
      description:
        " Built a DeepSeek Clone that replicates AI-driven search and response capabilities.Implemented using React for the frontend and Node.js/Express for the backend.Integrated with APIs to handle intelligent query processing and deliver accurate results.Designed an intuitive, responsive interface for smooth user interaction.",
      image: deepseek,
      tags: ["React ", "Node.js", "MongoDB", "Express", "HTML", "CSS", "JavaScript"],
      github: "https://github.com/kartik14319/DeepSeek_Clone",
     
    },
    {
      id: 2,
      title: "Chatting App",
      description:
      "Developed a real-time Chatting App to enable seamless messaging between users. Built with React for the frontend and Node.js/Express with Socket.io for real-time communication. Implemented user authentication and chat history storage for a smooth experience. Designed a responsive and user-friendly interface for desktop and mobile devices.  ",
      image: chatting,
      tags: ["React JS", "SocketIO", "HTML", "CSS", "JavaScript","MongoDB"],
      github: "https://github.com/kartik14319/ChattingApp",
      
    },
    {
      id: 3,
      title: "AIRBNB WebSite",
      description:
      "Built an Airbnb Clone website to showcase property listings and bookings. Developed using React for the frontend and Node.js/Express for the backend. Implemented features like search, filtering, user authentication, and booking system. Designed a responsive and intuitive interface for seamless user experience across devices.  ",
      image: AIRBNB,
      tags: ["React JS", "Node.js", "HTML","css","JS", "Validation","mongoDB"],
      github: "https://github.com/kartik14319/AIRBNB",
      
    },
    
    {
      id: 4,
      title: "Apna VideoColl Website",
      description:
      "Developed a video collaboration platform similar to Apna Video Coll. Built using React for the frontend and Node.js/Express for the backend. Implemented real-time video streaming and chat features for seamless collaboration. Designed a responsive and interactive interface for enhanced user experience.",
      image: ApanVideoColl,
      tags: ["HTML", "CSS", "JavaScript", "Socket","MongoDB","React","Node JS"],
      github: "https://github.com/kartik14319/ApnaVideo_Coll",
     
    },
    
  ];  