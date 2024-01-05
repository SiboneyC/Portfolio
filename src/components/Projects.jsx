import { Fragment, useState, useEffect } from "react";
import PropTypes from "prop-types";

function Projects({ projects }) {
  const [modalActive, setModalActive] = useState(false);
  const [modalInfo, setModalInfo] = useState(undefined);
  const [projectsActive, setProjectsActive] = useState(projects);
  const [category, setCategory] = useState("");
  const [dropDownActive, setDropDownActive] = useState(false);

  // update views for filtered projects
  useEffect(() => {
    const updateCategory = () => {
      if (category === "All") {
        setProjectsActive(projects);
      } else {
        setProjectsActive(projects.filter((item) => item["type"] === category));
      }
    };

    if (category !== "") {
      updateCategory();
    }
  }, [category, projects]);

  const getCategories = (projs) => {
    let categorySet = new Set();
    for (let project of projs) {
      categorySet.add(project["type"]);
    }

    let categoryArray = [...categorySet];
    categoryArray.unshift("All");
    return categoryArray;
  };

  const processLinks = (link) => {
    if (link.includes("github.io")) {
      return (
        <div className="modal-links">
          <ion-icon name="globe-outline"></ion-icon>
          <p>Website</p>
        </div>
      );
    }

    if (link.includes("github")) {
      return (
        <div className="modal-links">
          <ion-icon name="logo-github"></ion-icon>
          <p>GitHub</p>
        </div>
      );
    }

    if (link.includes("gitlab")) {
      return (
        <div className="modal-links">
          <ion-icon name="logo-gitlab"></ion-icon>
          <p>GitLab</p>
        </div>
      );
    }

    if (link.includes("postman")) {
      return (
        <div className="modal-links">
          <ion-icon name="document-outline"></ion-icon>
          <p>Postman Documentation</p>
        </div>
      );
    }

    return (
      <div className="modal-links">
        <ion-icon name="globe-outline"></ion-icon>
        <p>Website</p>
      </div>
    );
  };

  return (
    <article className="about active">
      <header>
        <h2 className="h2 article-title">Projects</h2>
      </header>
      {Array.isArray(projects) && projects.length !== 0 && (
        <Fragment>
          <section className="projects">
            <div className="filter-select-box">
              <button
                className={`filter-select ${dropDownActive ? "active" : ""}`}
                onClick={() => setDropDownActive(!dropDownActive)}
              >
                <div className="select-value">
                  {category === "" ? "Select Category" : category}
                </div>
                <div className="select-icon">
                  <ion-icon name="chevron-down"></ion-icon>
                </div>
              </button>
              <ul className="select-list">
                {getCategories(projects).map((item, idx) => (
                  <li
                    className="select-item"
                    key={item.toString() + idx.toLocaleString()}
                  >
                    <button
                      onClick={() => {
                        setCategory(item);
                        setDropDownActive(false);
                      }}
                    >
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <ul className="project-list">
              {projectsActive.map((pro, idx) => (
                <li
                  className="project-item active"
                  key={pro.toString() + idx.toString()}
                >
                  <button
                    onClick={() => {
                      setModalActive(true);
                      setModalInfo(pro);
                    }}
                  >
                    <figure className="project-img">
                      <div className="project-item-icon-box">
                        <ion-icon name="eye-outline"></ion-icon>
                      </div>
                      <img src={pro["img"]} alt={pro["alt"]} loading="lazy" />
                    </figure>
                    <h3 className="project-title">{pro["name"]}</h3>
                    <p className="project-category">{pro["type"]}</p>
                  </button>
                </li>
              ))}
            </ul>
          </section>
          <div className={`modal-container ${modalActive ? "active" : ""}`}>
            <div className="overlay"></div>
            <div className="projects-modal">
              <button
                className="modal-close-btn"
                onClick={() => {
                  setModalActive(false);
                  setModalInfo(undefined);
                }}
              >
                <ion-icon name="close-outline"></ion-icon>
              </button>
              {modalInfo !== undefined && (
                <Fragment>
                  <div className="modal-img-wrapper">
                    <figure className="modal-avatar-box">
                      <img src={modalInfo["img"]} alt={modalInfo["alt"]} />
                    </figure>
                  </div>
                  <div className="modal-content">
                    <h4 className="h3 modal-title">{modalInfo["name"]}</h4>
                    <p>{modalInfo["type"]}</p>
                    <time dateTime={modalInfo["date"]}>
                      {modalInfo["date"]}
                    </time>
                    {modalInfo["team"] !== undefined && (
                      <Fragment>
                        <h5 className="h5">Team Members</h5>
                        <ul className="teams-list">
                          {modalInfo["team"].map((mem, i) => (
                            <li
                              key={mem.toString() + i.toString()}
                              className="teams-item"
                            >
                              <a
                                href={mem["link"]}
                                target="_blank"
                                rel="noreferrer"
                              >
                                <p>{mem["name"]}</p>
                              </a>
                            </li>
                          ))}
                        </ul>
                      </Fragment>
                    )}
                    {modalInfo["links"] !== undefined && (
                      <Fragment>
                        <h4 className="h5">Links</h4>
                        <ul className="links-list">
                          {modalInfo["links"].map((link, i) => (
                            <li key={i.toString() + link.toString()}>
                              <a
                                href={link}
                                target="_blank"
                                rel="noreferrer"
                                className="h4"
                              >
                                {processLinks(link)}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </Fragment>
                    )}
                    <div className="data-model-text">
                      <p className="data-desc">{modalInfo["desc"]}</p>
                      {modalInfo["info"].map((info, i) => (
                        <Fragment key={info.toString() + i.toString()}>
                          <h4 className="h5">{info["title"]}</h4>
                          {info["text"] !== undefined && (
                            <p className="info-txt">{info["text"]}</p>
                          )}
                          {info["contributions"] !== undefined && (
                            <ul className="contribution-list">
                              {info["contributions"].map((con, j) => (
                                <li
                                  className="contribution-item"
                                  key={con.toString() + j.toString()}
                                >
                                  <p>{con}</p>
                                </li>
                              ))}
                            </ul>
                          )}
                        </Fragment>
                      ))}
                    </div>
                  </div>
                </Fragment>
              )}
            </div>
          </div>
        </Fragment>
      )}
    </article>
  );
}

Projects.propTypes = {
  projects: PropTypes.array,
};

Projects.defaultProps = {
  projects: [],
};

export default Projects;
