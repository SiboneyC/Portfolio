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

export { SOCIALS, INTERESTS };
