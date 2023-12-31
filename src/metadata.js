/**
 * Contains metadata that is referenced by App.js and its child components for rendering dynamic components
 */

import design from "./images/icon-design.svg";
import webdev from "./images/icon-dev.svg";
import mobapp from "./images/icon-app.svg";

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
 *  - texts (description)
 */
const PUBLICATION = [
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
const LANGUAGE = [
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
    val: 55,
    level: "Proficient",
  },
];

const SKILL = [
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

export {
  SOCIALS,
  INTERESTS,
  EDUCATION,
  EXPERIENCE,
  PUBLICATION,
  LANGUAGE,
  SKILL,
};
