import { useState } from "react";
import "./App.css";
import Sidebar from "./components/Sidebar";
import About from "./components/About";
import Resume from "./components/Resume";
import Projects from "./components/Projects";
import rik from "./images/rik.jpg";

// metadata
import { SOCIALS, INTERESTS } from "./metadata";

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

  return (
    <main>
      <Sidebar
        image={rik}
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

        {activePage === "about" && <About interests={INTERESTS} />}
        {activePage === "resume" && <Resume />}
        {activePage === "projects" && <Projects />}
      </div>
    </main>
  );
}

export default App;
