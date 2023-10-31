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
  username: "Alec Ngo",
  title: "Hi all, I'm Alec",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 having an experience of building Web and Open-Source applications with GoLang / React / .Net / AWS and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1UkOmu6eNjYsZiPEjKGvUqFqJB7CI7nMb/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/alecngo",
  linkedin: "https://www.linkedin.com/in/alecngo/",
  gmail: "alecngo.coding@gmail.com",
  instagram: "https://www.instagram.com/alecngo/",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡  Programming Languages: Python, Go, Java, JavaScript, C#, C++, SQL, HTML/CSS"
    ),
    emoji("⚡ Frameworks: React, .NET, Bootstrap, Numpy, Pandas, Sklearn, Tensorflow, Matplotlib, Seaborn"),
    emoji(
      "⚡ Technologies: Linux/Unix, APIs, Git/GitHub, Agile/Scrum Methodology, CI/CD"
    ),
    emoji(
      "⚡ Cloud Services: AWS EC2, AWS Systems Manager, AWS CloudWatch, AWS S3, Azure"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "go",
      fontAwesomeClassname: "fab fa-golang" 
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "c-sharp",
      fontAwesomeClassname: "fab fa-cuttlefish"  
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: ".NET",
      fontAwesomeClassname: "fab fa-dotnet"
    },
    {
      skillName: "tensorflow",
      fontAwesomeClassname: "fas fa-brain"  // Note: Using a generic "brain" icon to represent ML/TensorFlow.
    },
    {
      skillName: "pandas",
      fontAwesomeClassname: "fas fa-paw"  // Note: This is just a playful representation using a "paw" for "pandas". Might need a custom icon.
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "linux",
      fontAwesomeClassname: "fab fa-linux"
    },
    {
      skillName: "git",
      fontAwesomeClassname: "fab fa-git"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Berea College",
      logo: require("./assets/images/bereaLogo.png"),  // You'll need to change the path to the actual Berea College logo.
      subHeader: "Bachelor of Science in Computer Science",
      duration: "January 2021 - May 2024",
      desc: "Recipient of a full-ride scholarship worth $230,000.",
      descBullets: [
        "Recognized as an Epsilon Pi Tau scholar.",
        "Achieved Dean's List honors every semester."
      ]
    },    
    {
      schoolName: "CodePath",
      logo: require("./assets/images/codepathLogo.png"),  // You'll need to change the path to the actual CodePath logo.
      subHeader: "Software Engineering Course",
      duration: "May 2022 - Aug 2022",  // Replace with the actual dates.
      desc: "Participated in an intensive software engineering course, gaining hands-on experience in various aspects of development.",
      descBullets: [
        "Deepened understanding of software development practices and methodologies.",
        "Collaborated on real-world projects, further enhancing practical skills."
      ]
    }    
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer Intern",
      company: "Amazon Web Services (AWS)",
      companylogo: require("./assets/images/awsLogo.png"),
      date: "May 2023 – August 2023",
      desc: "Implemented a scalable AWS SSM Agent metrics system in Golang, boosting troubleshooting efficiency. Additionally, streamlined the AWS SSM Agent setup, reducing configuration steps by 90%."
    },    
    {
      role: "Data Analyst",
      company: "Berea College, Office of Sustainability",
      companylogo: require("./assets/images/bereaLogo.png"), // Update the path to Berea College's logo
      date: "August 2022 – May 2023",
      desc: "Utilized Python, Jupyter Notebook, and GPT API to enhance Greenhouse Gas Inventory data accuracy and constructed an interactive sustainability dashboard using Power BI."
    },
    {
      role: "Research Assistant",
      company: "Berea College", // Or specify the department or lab if needed
      companylogo: require("./assets/images/bereaLogo.png"), // Update the path to Berea College's logo or the specific department/lab logo
      date: "May 2022 – Aug 2022", // Fill in the appropriate start and end dates
      desc: "Developed Python packages to generate 40k+ time series datasets on Network Simulation, enhancing research velocity through integrated data tools such as Jupyter and Pandas. Employed statistical tests including A/B and Granger Causality."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "MY PLAYGROUND TO ENJOY MY FREETIME WITH FRIENDS",
  projects: [
    {
      image: require("./assets/images/pawsibleHopeLogo.png"), // Update the path to PawsibleHope's logo
      projectName: "Pawsible Hope - A gift to my dear rescue Stella",
      projectDesc: "A web application designed to help customers discover nearby rescue pets by entering their zip code, providing robust filtering options to find the perfect match.",
      footerLink: [
        {
          name: "Visit GitHub",
          url: "https://github.com/alecngo/rescue-dev-frontend" // Update this with the actual URL if different
        }
        // you can add extra buttons here if needed.
      ]
    },
    {
      image: require("./assets/images/intelliDriveLogo.png"), // Update the path to the IntelliDrive Drowsiness Detector's logo
      projectName: "IntelliDrive Drowsiness Detector",
      projectDesc: "A hardware-integrated ML system that leverages CNNs and OpenCV, utilizing a camera, Arduino circuitry, LED, and speaker for real-time drowsiness detection and immediate alerts to ensure driver safety.",
      footerLink: [
        {
          name: "Visit GitHub",
          url: "https://github.com/alecngo/intellidrive-drowsiness-detector" // Update this with the actual URL if different
        }
        // you can add extra buttons here if needed.
      ]
    }    
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements 🏆 "),
  subtitle:
    "Achievements, Publications, and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Published Researcher",
      subtitle: "Co-authored research paper titled 'Binary Opinion Dynamics With Mesophilic Agents' presented at the 2023 Annual Modeling and Simulation Conference (ANNSIM).",
      image: require("./assets/images/annsimLogo.png"), // Replace with the ANNSIM or relevant logo or a representation of your research
      imageAlt: "ANNSIM Logo", // Update this if you're using a different logo
      footerLink: [
        {
          name: "Research Paper",
          url: "https://www.computer.org/csdl/proceedings-article/annsim/2023/10155395/1OidsBTrv4k" // Replace this with the link to your publication, if available online
        },
        {
          name: "ANNSIM Conference",
          url: "https://annsimconference.org" // Replace with the actual URL of the conference, if different
        },
        {
          name: "Tapia Conference Presentation",
          url: "https://drive.google.com/file/d/1RPXig-C-t1zG4KmJkKLRNazezz5kEB4I/view?usp=sharing" // Replace with the actual URL of the conference, if different
        },      ]
    }],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+1 (859) 302-4296",
  email_address: "alecngo.coding@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
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
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
