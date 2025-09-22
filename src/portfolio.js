/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Luv",
  title: "Hi all, I'm Luv",
  subTitle: emoji(
    "A passionate MERN Stack Developer 🚀 having an experience of building Web applications with JavaScript / Reactjs / Nodejs and some other cool libraries and frameworks."
  ),
  // resumeLink:  , // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Luv1881",
  linkedin: "https://www.linkedin.com/in/luv-gupta-9b1324250/",
  gmail: "luvg1881@gmail.com",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I Do",
  subTitle:
    "FULL STACK DEVELOPER WITH CLOUD & AI EXPERTISE, BUILDING SCALABLE SOLUTIONS",
  skills: [
    emoji(
      "⚡ Skilled in Java, Python, C++, and JavaScript with frameworks like NextJS, Flask, Node.js, and React."
    ),
    emoji(
      "⚡ Experienced in Firebase and AWS (EC2, S3, Lambda, CloudWatch) for secure, scalable cloud deployments."
    ),
    emoji(
      "⚡ Expertise in building intelligent applications with BERT, NLTK, and Scikit-learn, boosting accuracy and automation."
    ),
    emoji(
      "⚡ Strong in designing resilient architectures and APIs, improving system reliability and reducing downtime risk."
    ),
    emoji(
      "⚡ Passionate about crafting user-friendly, responsive interfaces and delivering measurable business impact."
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    // {
    //   skillName: "C++",
    //   fontAwesomeClassname: "icon-cplusplus"
    // },
    // {
    //   skillName: "C",
    //   fontAwesomeClassname: "fab fa-solid fa-c"
    // },
    // {
    //   skillName: "swift",
    //   fontAwesomeClassname: "fab fa-swift"
    // },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "MongoDB",
      fontAwesomeClassname: "fa fa-leaf"
    },
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "VIT University",
      logo: require("./assets/images/vellore-institute-of-technology-vit-logo.png"),
      subHeader: "Bachelor of Technology in Computer Science",
      duration: "September 2022-May 2026",
      desc: "CGPA : 9.03"
      // descBullets: [
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      // ]
    },
    {
      schoolName: "DAV Public School",
      logo: require("./assets/images/LOGO.png"),
      subHeader: "11th & 12th",
      duration: "April 2022 - February 2022",
      desc: "Percentage: 87%"
      // descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    },
    {
      schoolName: "Amity International School",
      logo: require("./assets/images/amity-international-school-logo-1.png"),
      subHeader: "Nursery - Grade 10",
      duration: "April 2008 - March 2020",
      desc: "Percentage: 96.5%"
      // descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend (NextJS/React/UI)",
      progressPercentage: "85%" // PillBox: NextJS frontend; strong UI focus
    },
    {
      Stack: "Backend (Node.js/Flask/APIs)",
      progressPercentage: "80%" // Backend for PillBox & FAQ-ChatBot with Flask/Node
    },
    {
      Stack: "Cloud & DevOps (AWS/Firebase)",
      progressPercentage: "78%" // AWS EC2/S3/Lambda/CloudWatch + Firebase auth/RTDB
    },
    {
      Stack: "AI/ML (BERT, NLTK, scikit-learn)",
      progressPercentage: "70%" // FAQ-ChatBot: BERT, TF-IDF, NLTK; model integration
    },
    {
      Stack: "Systems & Networking (HA/Proxmox/HAProxy)",
      progressPercentage: "65%" // Datawise: HA design, dual-ISP failover, ZFS repl.
    },
    {
      Stack: "Programming (Java • Python • C++ • JS)",
      progressPercentage: "85%" // Core languages used across projects/internships
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Intern",
      company: "DataWise",
      companylogo: require("./assets/images/datawise.png"),
      date: "May 2025 – July 2025",
      desc: "Worked on building high availability network architecture at DataWise",
      descBullets: [
        "Designed and proposed a high-availability, fault-tolerant network architecture, reducing downtime risk by 40%.",
        "Researched and evaluated 10+ enterprise-grade routers, firewalls, and redundancy protocols to identify scalable, cost-effective solutions.",
        "Delivered a production-ready architecture integrating HAProxy, Proxmox clusters, ZFS replication, and dual-ISP failover.",

        "Enhanced infrastructure performance, security, and reliability for future production deployment."
      ]
    },
    {
      role: "AWS System Operations Intern",
      company: "Tech Mahindra",
      companylogo: require("./assets/images/techmahindra.png"),
      date: "May 2024-July 2024",
      desc: "Worked as an AWS System Operations Intern at Tech Mahindra.",
      descBullets: [
        "Optimized AWS resources (EC2, S3, Lambda), improving performance and reducing costs by 15%.",

        "Automated 10+ cloud operations using AWS CLI, reducing manual workload and deployment time by 30%.",

        "Built and maintained CloudWatch dashboards and alerts across services, cutting incident response time.",
        "Improved system monitoring and diagnostics with proactive alerts and automated remediation."
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  // showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  // display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  // subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/logo-white.png"),
      projectName: "PillBox",
      projectDesc:
        "Built PillBox, a medication delivery system for the elderly, boosting accessibility by 30% with a NextJS frontend and Firebase-powered real-time data, authentication, and cloud storage.",
      footerLink: [
        {
          name: "Visit Github",
          url: "https://github.com/RayGL1TCH/PillBox"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/faqchatbot1.png"),
      projectName: "FAQ Chatbot",
      projectDesc:
        "Intelligent FAQ system using BERT, TF-IDF, and NLTK, improving answer accuracy by 40% with sentiment analysis, contextual matching, and automated user interaction.",
      footerLink: [
        {
          name: "Visit Github",
          url: "https://github.com/Luv1881/FAQ-ChatBot"
        }
        //  you can add extra buttons here.
      ]
    }
    // {
    //   image: require("./assets/images/nextuLogo.webp"),
    //   projectName: "Nextu",
    //   projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    //   footerLink: [
    //     {
    //       name: "Visit Website",
    //       url: "http://nextu.se/"
    //     }
    //   ]
    // }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  // title: emoji("Achievements And Certifications 🏆 "),
  // subtitle:
  //   "ASome Certifications that I have received",
  // achievementsCards: [
  //   {
  //     title: "The Complete 2023 Web Development Bootcamp",
  //     subtitle:
  //     "I successfully completed The Complete 2023 Web Development Bootcamp by Angela Yu, which equipped me with essential web development skills and knowledge for a promising career in the field.",
  //     image: require("./assets/images/Udemy_logo.svg.png"),
  //     imageAlt: "Google Code-In Logo",
  //     footerLink: [
  //       {
  //         name: "Certification",
  //         url: "https://www.udemy.com/certificate/UC-29415bd1-adc0-434b-b9b3-b6b620755f89/"
  //       },
  //       // {
  //       //   name: "Award Letter",
  //       //   url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
  //       // },
  //       // {
  //       //   name: "Google Code-in Blog",
  //       //   url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
  //       // }
  //     ]
  //   },
  //   {
  //     title: "Hackbattle Hackathon",
  //     subtitle:
  //       "Developed PillBox for Hackbattle Hackathon",
  //     image: require("./assets/images/logo-white.png"),
  //     imageAlt: "Pillbox",
  //     footerLink: [
  //       // {
  //       //   name: "Certification",
  //       //   url: "https://www.udemy.com/certificate/UC-29415bd1-adc0-434b-b9b3-b6b620755f89/"
  //       // },
  //       {
  //         name: "Participation Certificate",
  //         url: "https://drive.google.com/file/d/1h7V-ZoUkYGmjuw8rke-BMXOrLaXuuZQp/view?usp=sharing"
  //       },
  //       // {
  //       //   name: "Google Code-in Blog",
  //       //   url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
  //       // }
  //     ]
  //   },
  //   // {
  //   //   title: "PWA Web App Developer",
  //   //   subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
  //   //   image: require("./assets/images/pwaLogo.webp"),
  //   //   imageAlt: "PWA Logo",
  //   //   footerLink: [
  //   //     {name: "Certification", url: ""},
  //   //     {
  //   //       name: "Final Project",
  //   //       url: "https://pakistan-olx-1.firebaseapp.com/"
  //   //     }
  //   //   ]
  //   // }
  // ],
  // display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  // title: "Blogs",
  // subtitle:
  //   "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  // displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  // blogs: [
  //   {
  //     url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
  //     title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
  //     description:
  //       "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
  //   },
  //   {
  //     url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
  //     title: "Why REACT is The Best?",
  //     description:
  //       "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
  //   }
  // ],
  // display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  // title: "TALKS",
  // subtitle: emoji(
  //   "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  // ),
  // talks: [
  //   {
  //     title: "Build Actions For Google Assistant",
  //     subtitle: "Codelab at GDG DevFest Karachi 2019",
  //     slides_url: "https://bit.ly/saadpasta-slides",
  //     event_url: "https://www.facebook.com/events/2339906106275053/"
  //   }
  // ],
  // display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  // title: emoji("Podcast 🎙️"),
  // subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",
  // // Please Provide with Your Podcast embeded Link
  // podcast: [
  //   "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  // ],
  // display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  // number: "+92-0000000000",
  email_address: "luvg1881@gmail.com"
};

// Twitter Section

const twitterDetails = {
  // userName: "twitter", //Replace "twitter" with your twitter username without @
  // display: true // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  // Internships,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
