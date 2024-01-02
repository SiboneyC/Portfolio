import { useState } from "react";
import "./App.css";

// components
import Sidebar from "./components/Sidebar";
import About from "./components/About";
import Resume from "./components/Resume";
import Projects from "./components/Projects";

// image(s)
import Rik from "./images/rik.jpg";

// metadata
import {
  SOCIALS,
  INTERESTS,
  EDUCATION,
  EXPERIENCE,
  PUBLICATIONS,
  LANGUAGES,
  SKILLS,
  PROJECTS,
} from "./metadata";

function App() {
  // React hooks for state
  const [activePage, setActivePage] = useState("about");

  const stateMatch = (name) => {
    if (typeof name !== "string") {
      return false;
    }
    return name.toLowerCase() === activePage;
  };

  const toggleActivePage = (pageName) => {
    setActivePage(pageName);
  };

  const pickRecents = (arr, slice = arr.length, filterField = undefined) => {
    if (!Array.isArray(arr)) {
      console.error("Incompatible argument type");
      return undefined;
    }

    if (arr.length === 0) {
      console.error("Empty array");
      return undefined;
    }

    if (filterField !== undefined) {
      arr = arr.filter((a) => a.hasOwnProperty(filterField));
    }

    return arr
      .sort((a, b) => {
        let dateA = Date.parse(a["date"]);
        let dateB = Date.parse(b["date"]);
        return dateA - dateB;
      })
      .reverse()
      .slice(0, slice);
  };

  return (
    <main>
      <Sidebar
        image={Rik}
        alt="Image of Rik Ghosh (RG) against a white background, wearing a blue shirt"
        socials={SOCIALS}
      />
      <div className="main-content">
        <nav className="navbar">
          <ul className="navbar-list">
            <li className="navbar-item">
              <button
                className={`navbar-link ${stateMatch("About") ? "active" : ""}`}
                onClick={() => toggleActivePage("about")}
              >
                About
              </button>
            </li>

            <li className="navbar-item">
              <button
                className={`navbar-link ${
                  stateMatch("Resume") ? "active" : ""
                }`}
                onClick={() => toggleActivePage("resume")}
              >
                Resume
              </button>
            </li>

            <li className="navbar-item">
              <button
                className={`navbar-link ${
                  stateMatch("Projects") ? "active" : ""
                }`}
                onClick={() => toggleActivePage("projects")}
              >
                Projects
              </button>
            </li>
          </ul>
        </nav>

        {activePage === "about" && (
          <About
            interests={INTERESTS}
            recents={pickRecents(PROJECTS, 4, "links")} // show recent projects with links
          />
        )}
        {activePage === "resume" && (
          <Resume
            education={EDUCATION}
            experience={EXPERIENCE}
            publication={PUBLICATIONS}
            language={LANGUAGES}
            skill={SKILLS}
          />
        )}
        {activePage === "projects" && (
          <Projects projects={pickRecents(PROJECTS)} />
        )}
      </div>
    </main>
  );
}

export default App;
