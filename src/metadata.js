/**
 * Contains metadata that is referenced by App.js and its child components for rendering dynamic components
 */

import design from "./images/icon-design.svg";
import webdev from "./images/icon-dev.svg";
import mobapp from "./images/icon-app.svg";

import seashell from "./images/seashell.jpg";
import explore from "./images/explore.jpg";
import pocket from "./images/pocket.jpg";
import tryston from "./images/tryston.jpg";
import rik from "./images/rik-icon.jpg";
import cpp from "./images/c++.jpg";
import c from "./images/c.jpg";
import java from "./images/java.jpg";
import metallicity from "./images/metallicity.jpg";
import python from "./images/python.jpg";
import stk from "./images/stk.jpg";
import schrute from "./images/schrute.jpg";
import betting from "./images/betting-bot.jpg";

/**
 * Array of Social objects.
 *
 * Interface:
 *  - link (anchor tag hyperlink)
 *  - logo (name of the ion-icon logo)
 */
const SOCIALS = [
  {
    link: "https://www.linkedin.com/in/rik-ghosh-939334205/",
    logo: "linkedin",
  },
  {
    link: "https://gitlab.com/RikGhosh487",
    logo: "gitlab",
  },
  {
    link: "https://github.com/RikGhosh487",
    logo: "github",
  },
];

/**
 * Array of Interest objects
 *
 * Interface:
 *  - img (name of image for interest card)
 *  - alt (alternative text for image)
 *  - title (interest title)
 *  - text (description for interest)
 */
const INTERESTS = [
  {
    img: design,
    alt: "A design icon showing a pencil, a 45-degree set square, and a curled paper. This icon is used to convey interest in software and systems engineering and design",
    title: "Software and Systems Design",
    text: "Designing functional and user-friendly software and systems tools with emphasis on HCI",
  },
  {
    img: webdev,
    alt: "A webpage icon showing a web page displaying curly braces and a forwards slash. This icon is being used to convey interest in web development",
    title: "Web Development",
    text: "Designing high-quality web pages with both vanilla and framework based design",
  },
  {
    img: mobapp,
    alt: "A mobile phone outline icon. This icon is being used to convey interest in mobile app design and development",
    title: "Mobile Apps",
    text: "Professional development of iOS and Android compatible applications",
  },
];

/**
 * Array of Education objects
 *
 * Interface:
 *  - title (degree title)
 *  - uni (university)
 *  - time (duration of degree)
 *  - done (diploma received)
 *  - text (degree description)
 *
 * Note:
 * - New items must be entered sorted by time
 */
const EDUCATION = [
  {
    title: "M.S. in Computer Science",
    uni: "The University of Texas at Austin",
    time: "August 2023 — May 2025",
    done: false,
    texts: [
      "I am currently pursuing an Integrated Masters in Computer Science at UT Austin with an emphasis on Application and Systems design and programming. I will receive my bachelors and my masters together at the end of Spring 2025.",
    ],
  },
  {
    title: "B.S. in Mathematics",
    uni: "The University of Texas at Austin",
    time: "August 2021 — May 2024",
    done: false,
    texts: [
      "I have finished all my course work for a B.S. in Mathematics with a specialization in Statistics and Applied Mathematics in Fall 2023. I expect to receive my diploma in May 2024.",
    ],
  },
  {
    title: "B.S. in Computer Science",
    uni: "The University of Texas at Austin",
    time: "August 2020 — May 2024",
    done: false,
    texts: [
      "I was accepted into the competitve Computer Science program at UT Austin in Fall 2023. I have finished my undergraduate coursework as part of the Integrated Masters sequence in Spring 2023",
    ],
  },
];

/**
 * Array of Experience objects
 *
 * Interface:
 *  - title (position title)
 *  - emp (employer)
 *  - time (duration)
 *  - texts (array of description texts)
 */
const EXPERIENCE = [
  {
    title: "Research Assistant and Research Mentor",
    emp: "Freshman Research Initiative @ CNS",
    time: "January 2021 — Present",
    texts: [
      "I lead a team of 3 peer research mentors in assisting over 40 students each semester in the research program to design, refine, and finalize their research.",
      "I worked on a designing a machine learning model to process photometric data from astrophyics databases into spectroscopic measurements.",
    ],
  },
];

/**
 * Array of Publication objects
 *
 * Interface:
 *  - title (publication title)
 *  - href (link to article)
 *  - article (name of journal article)
 *  - time (time of publication)
 *  - texts (array of description texts)
 */
const PUBLICATIONS = [
  {
    title:
      "Approximating Stellar Metallicity Using Photometric Machine Learning",
    href: "https://iopscience.iop.org/article/10.3847/2515-5172/ac5f4e",
    article: "Research Notes of AAS, Volume 6, Number 3, Article 57",
    time: "March 2022",
    texts: [
      "I was the primary researcher for finding alternatives to spectroscopic data measurements. We used a random forest regressor that takes SDSS photometric color indices as input to produce stellar metallicity as output. The model achieved an RMSE similar to observations that can be made by studying low resolution spectra. This model subverts the problem of limited spectra, allowing metallicity measurements to be applied to several orders of magnitude more stars than previously possible.",
    ],
  },
];

/**
 * Array of Language objects
 *
 * Interface:
 *  - name (language name)
 *  - val (progress bar value)
 *  - level (level of proficiency)
 */
const LANGUAGES = [
  {
    name: "JavaScript",
    val: 80,
    level: "Advanced",
  },
  {
    name: "HTML",
    val: 90,
    level: "Advanced",
  },
  {
    name: "CSS",
    val: 80,
    level: "Advanced",
  },
  {
    name: "Java",
    val: 80,
    level: "Advanced",
  },
  {
    name: "Python",
    val: 90,
    level: "Advanced",
  },
  {
    name: "C++",
    val: 60,
    level: "Proficient",
  },
  {
    name: "C",
    val: 70,
    level: "Proficient",
  },
  {
    name: "TypeScript",
    val: 65,
    level: "Proficient",
  },
];

/**
 * Array of Skill objects
 *
 * Interface:
 *  - name (name of skill)
 *  - texts [OPTIONAL] (array of description texts)
 */
const SKILLS = [
  {
    name: "Software Development",
    texts: [
      "Experience with Software Development methodologies, tools, and frameworks: AGILE, CI/CD, React, Git, etc",
    ],
  },
  {
    name: "Data Migration, Deployment, and APIs",
    texts: [
      "Developing RESTful APIs, working with web frameworks, processing and coalescing large JSONs",
    ],
  },
  {
    name: "Database Management",
    texts: [
      "Experience with relational and non-relational databases and querying: SQL, PostgreSQL, MongoDB, SQLite",
    ],
  },
  {
    name: "Operating Systems",
    texts: ["Experience with Linux and Windows OS along with shell scripting"],
  },
  {
    name: "Networking",
    texts: ["Experience with Network stack, custom NFS and TCP implemetations"],
  },
  {
    name: "Communication",
  },
  {
    name: "Time Management",
  },
  {
    name: "Teamwork and Collaboration",
  },
  {
    name: "Creativity",
  },
  {
    name: "Problem Solving and Analytical Thinking",
  },
  {
    name: "Adaptability and Resourcefulness",
  },
  {
    name: "Leadership and Conflict Management",
  },
];

/**
 * Array of Project objects
 *
 * Interface:
 *  - name (name of the project)
 *  - desc (description of the project)
 *  - type (project type)
 *  - small_info (small info for recents section)
 *  - info (larger info for projects page)
 *  - date (project start date)
 *  - img (image source for project)
 *  - alt (alternative text for image)
 *  - team [OPTIONAL] (array of Member objects)
 *  - links [OPTIONAL] (array of links to important pages)
 *
 * Member Interface:
 *  - name (name of team member)
 *  - link [OPTIONAL] (link to their page)
 *
 */
const PROJECTS = [
  {
    name: "SeaShell",
    desc: "Keyboard Drivers and Shell for Custom OS Implementation",
    type: "Systems",
    small_info:
      "A shell written in C, implemented on top of a custom libc for a 32-bit custom Linux-like OS virtualized by QEMU. I worked on implementing the PS/2 Keyboard drivers and the Ext2 File system.",
    info: "",
    date: "December 2021",
    img: seashell,
    alt: "A pink clam shell against a blue background. This is the name of the project and is supposed to be a play on the word C shell",
    team: [
      {
        name: "Rodrigo Brandao",
        link: "https://github.com/Reego",
      },
      {
        name: "Thuy Nguyen",
        link: "https://github.com/nhaithuy",
      },
      {
        name: "Adhan Razzaque",
        link: "https://github.com/adhan-razzaque",
      },
      {
        name: "Himanshu Reddy",
        link: "https://github.com/himanshur-dev",
      },
      {
        name: "Nathaniel Nemenzo",
        link: "https://github.com/Nathaniel-Nemenzo",
      },
      {
        name: "Rithik Batchu",
        link: "https://www.linkedin.com/in/rithik-batchu-4b5217206/",
      },
      {
        name: "Shreyas Satewar",
        link: "https://github.com/ShreyasSatewar",
      },
    ],
  },
  {
    name: "Explore & Give More",
    desc: "City Guide with RESTful API",
    type: "Web Development",
    small_info:
      "A city guide website with its own RESTful API implemented using React TypeScript (frontend) and Flask Python (backend). I was the project leader and the phase leader for the first phase.",
    info: "",
    date: "October 2022",
    img: explore,
    alt: "A city skyline and a moon against a dark blue background. This is the icon for the website for this project",
    team: [
      {
        name: "Katherine Eisen",
        link: "https://gitlab.com/katherine-eisen",
      },
      {
        name: "Daimu Iwata",
        link: "https://gitlab.com/dimeonvin",
      },
      {
        name: "Mariana Medina",
        link: "https://gitlab.com/marianamedina",
      },
      {
        name: "Jarrod Brown",
        link: "https://gitlab.com/jarrod-brown",
      },
    ],
    links: [
      "https://gitlab.com/RikGhosh487/exploreandgivemore",
      "https://documenter.getpostman.com/view/14067869/2s83Ycg2LW",
    ],
  },
  {
    name: "PocketCloset",
    desc: "Outfit Planner with suggestions based on Events and Weather",
    type: "Applications",
    small_info:
      "An outfit planner written in React JavaScript that lets the user digitize their closet and plan outfits for events with weather suggestions. I worked on the event calendar and integrating planned outfits with events.",
    info: "",
    date: "March 2023",
    img: pocket,
    alt: "A denim jeans with a heart on the back pocket hung up on a red hangar against a light blue background. This is the logo for the application",
    team: [
      {
        name: "Malithy Wimalasooriya",
        link: "https://github.com/malithyw",
      },
      {
        name: "Lauren Warhola",
        link: "https://github.com/lwarhola",
      },
      {
        name: "Rahul Yadav",
        link: "https://github.com/rahuly0426",
      },
    ],
    links: [
      "https://malithyw.github.io/pocketcloset/",
      "https://github.com/malithyw/pocketcloset",
    ],
  },
  {
    name: "Tryston's Website",
    desc: "Personal Website for a friend",
    type: "Web Development",
    small_info:
      "A personal website for showcasing projects and games developed by Tryston Minsquero. I worked on the frontend JS and CSS, along with the boilerplate for ExpressJS",
    info: "",
    date: "November 2022",
    img: tryston,
    alt: "A minimalist figure sketch of Tryston Minsquero wearing a black shirt against a white background. This is the logo for Tryston's website",
    team: [
      {
        name: "Tryston Minsquero",
        link: "https://github.com/TrystonMinsquero",
      },
    ],
    links: [
      "https://trystonminsquero.com",
      "https://github.com/TrystonMinsquero/Portfolio-Website",
    ],
  },
  {
    name: "Rik's Website",
    desc: "Personal Website for hosting project summaries and resume",
    type: "Web Development",
    small_info:
      "A personal website for showcasing university and personal projects along with a digitized resume, written in React JavaScript.",
    info: "",
    date: "December 2023",
    img: rik,
    alt: "A monogram showing R and G in black against a yellow background. These are the initials of Rik Ghosh and also the logo for this website",
    links: [
      "rikghosh487.github.io/Portfolio",
      "https://github.com/RikGhosh487/Portfolio",
    ],
  },
  {
    name: "C++ Thread Pool",
    desc: "Custom Thread Pool implementation using C++20 Joinable Threads",
    type: "Systems",
    small_info:
      "A custom thread pool written in C++ using C++20 Joinable threads and compared against popular C++ thread pools for performance using a series of benchmarks. I worked on the thread pool implementation and a few benchmarks.",
    info: "",
    date: "October 2023",
    img: cpp,
    alt: "The C++ poster logo against a black background. This project uses C++",
    team: [
      {
        name: "Altanali Nagji",
        link: "https://github.com/Altanali",
      },
    ],
    links: ["https://github.com/Altanali/Advanced-OS-Final-Project"],
  },
  {
    name: "ELF Loader and Pager",
    desc: "User-Level ELF Loader with support for dynamic paging",
    type: "Systems",
    small_info:
      "A user-level ELF loader in C and ASM that parses the ELF binary and loads the loadable segments into appropriate memory locations before jumping to the starting instruction.",
    info: "",
    date: "October 2023",
    img: c,
    alt: "The C poster logo against a black background. This project uses C",
  },
  {
    name: "Custom ICMP, ARP, and RIP",
    desc: "Implementation on ICMP, ARP and RIP for supporting ping and trace route operations in custom Network stack",
    type: "Networks",
    small_info:
      "A custom implementation of ICMP, ARP, and RIP in Java for communicating between two nodes over a simulated Virtual Network.",
    info: "",
    date: "October 2022",
    img: java,
    alt: "The Java poster logo against a black background. This project uses Java",
  },
  {
    name: "Metallicity Approximator",
    desc: "Random Forest Regressor to approximate stellar metallicity using only photometric inputs",
    type: "Applications",
    small_info:
      "A Random Forest Regressor in Python which approximates Stellar Metallicity with an RMSE of 0.024 using Photometric color indices from SDSS. My work in this field got published in the Research Notes of AAS.",
    info: "",
    date: "March 2022",
    img: metallicity,
    alt: "A globular cluster showing a spherical distribution of stars with varying brightness and color.",
    team: [
      {
        name: "Soham Saha",
        link: "https://github.com/S-saha548",
      },
    ],
    links: ["https://github.com/RikGhosh487/Metallicity-Approximator"],
  },
  {
    name: "Color Filter Converter",
    desc: "Multilayer Perceptrons to convert color filters from SDSS to GAIA and vice versa",
    type: "Applications",
    small_info:
      "Two MLPs in Python for converting from SDSS color filters to GAIA color filters and vice versa. This utility tool is used by students at Geometry of Space Research group at UT Austin",
    info: "",
    date: "June 2022",
    img: python,
    alt: "The Python poster logo against a black background. This project uses Python",
    links: ["https://github.com/RikGhosh487/MLP-Filters"],
  },
  {
    name: "SuperTuxKart Guidance System",
    desc: "Deep Neural Network to process frames from SuperTuxKart and a controller to guide the kart to stay on the track",
    type: "Machine Learning",
    small_info:
      "A PyTorch DNN for finding the center of a track in image frames from SuperTuxKart, and a custom controller that moves the kart towards the center of the track to autonomously drive the kart.",
    info: "",
    date: "April 2022",
    img: stk,
    alt: "Bold initials S T K for SuperTuxKart against a white background",
  },
  {
    name: "Simple REPL",
    desc: "REPL that evaluates expressions and stores variables for computation",
    type: "Systems",
    small_info:
      "A C REPL that uses Abstract Syntax Trees to parse and then evaluate simple expressions and assignments.",
    info: "",
    date: "February 2021",
    img: c,
    alt: "The C poster logo against a black background. This project uses C",
  },
  {
    name: "Custom malloc and free",
    desc: "Malloc and free for a custom heap that support coalescing and fragmentation controls",
    type: "Systems",
    small_info:
      "A C malloc and umalloc (free) implementation for partitioning and growing the heap. The implementation support coalescing, and trying different fragmentation strategies for greater customizability of the heap usage.",
    info: "",
    date: "March 2021",
    img: c,
    alt: "The C poster logo against a black background. This project uses C",
  },
  {
    name: "Dwightbot",
    desc: "Discord moderation and trivia bot inspired by Dwight Schrute from The Office",
    type: "Applications",
    small_info:
      "A discord bot written in JavaScript that performs simple moderation and utility tasks in a server. There are fun The Office themed functions that embody the personality of Dwight K. Schrute from The Office.",
    info: "",
    date: "February 2021",
    img: schrute,
    alt: "Silhouette images of Dwight Schrute from The Office on a White Claw inspired logo saying Dwight Claw Beet Seltzer",
    links: ["https://github.com/RikGhosh487/Discord-Dwightbot"],
  },
  {
    name: "Bettingbot",
    desc: 'Discord bot that offers Twitch-inspired polls where users "bet" with virtual currency',
    type: "Applications",
    small_info:
      "A discord bot written in JavaScript that allows users in the server to create a Twitch-like poll and then other users can spend their virtual currency to bet on a certain poll outcome.",
    info: "",
    date: "September 2021",
    img: betting,
    alt: "A logo showing the text Esports bets in white against a black background. This is the logo for the Discord bot.",
    links: [""],
  },
];

export {
  SOCIALS,
  INTERESTS,
  EDUCATION,
  EXPERIENCE,
  PUBLICATIONS,
  LANGUAGES,
  SKILLS,
  PROJECTS,
};
