import PropTypes from "prop-types";
import { Fragment, useState } from "react";

function About({ interests, recents }) {
  const [modalActive, setModalActive] = useState(false);
  const [modalInfo, setModalInfo] = useState(undefined);

  return (
    <article className="about active">
      <header>
        <h2 className="h2 article-title">About Me</h2>
      </header>

      <section className="about-text">
        <p>
          Hi I'm Rik! This is my personal website where you can find some of the
          projects I've worked on along with my resume. I'm a student in the
          College of Natural Sciences at UT Austin pursuing an integrated
          masters in Computer Science with specialization in applications and
          systems development. I also have a degree in Mathematics with an
          emphasis in statistics and applications.
        </p>

        <p>
          I am currently looking for full-time positions for software
          development, data analysis, data science, or systems programming that
          allow me to continue learning and developing as a computer scientist
          alongside a team of some of the best professionals in the field in
          order to gain more practical experiences and industrial exposure.
        </p>

        <p>Feel free to contact me via my email!</p>
      </section>

      {Array.isArray(interests) && interests.length !== 0 && (
        <section className="service">
          <h3 className="h3 service-title">Fields of Interest</h3>
          <ul className="service-list">
            {interests.map((int, idx) => (
              <li
                className="service-item"
                key={int.toString() + idx.toString()}
              >
                <div className="service-icon-box">
                  <img src={int["img"]} alt={int["alt"]} width={40} />
                </div>

                <div className="service-content-box">
                  <h4 className="h4 service-item-title">{int["title"]}</h4>

                  <p className="service-item-text">{int["text"]}</p>
                </div>
              </li>
            ))}
          </ul>
        </section>
      )}

      {Array.isArray(recents) && recents.length !== 0 && (
        <Fragment>
          <section className="recents">
            <h3 className="h3 recents-title">Recent Projects</h3>
            <ul className="recents-list has-scrollbar">
              {recents.map((rec, idx) => (
                <li
                  className="recents-item"
                  key={rec.toString() + idx.toString()}
                >
                  <button
                    className="content-card"
                    onClick={() => {
                      setModalActive(true);
                      setModalInfo(rec);
                    }}
                  >
                    <figure className="recents-avatar-box">
                      <img src={rec["img"]} alt={rec["alt"]} width={60} />
                    </figure>
                    <h4 className="h4 recents-item-title">{rec["name"]}</h4>
                    <div className="recents-text">
                      <p>{rec["small_info"]}</p>
                    </div>
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
                    <time dateTime={modalInfo["date"]}>
                      {modalInfo["date"]}
                    </time>

                    <div className="data-model-text">
                      <p className="data-desc">{modalInfo["desc"]}</p>
                      <p>{modalInfo["small_info"]}</p>
                      <p className="read-more">
                        To read more about this project, visit the Projects
                        page!
                      </p>
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

About.propTypes = {
  interests: PropTypes.array,
  recents: PropTypes.array,
};

About.defaultProps = {
  interests: [],
  recents: [],
};

export default About;
