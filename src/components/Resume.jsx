import PropTypes from "prop-types";

function Resume({ education, experience, publication }) {
  return (
    <article className="resume active">
      <header>
        <h2 className="h2 article-title">Resume</h2>
      </header>

      {Array.isArray(education) && education.length && (
        <section className="timeline">
          <div className="title-wrapper">
            <div className="icon-box">
              <ion-icon name="book-outline" aria-hidden="true"></ion-icon>
            </div>
            <h3 className="h3">Education</h3>
          </div>

          <ol className="timeline-list">
            {education.map((edu, idx) => (
              <li
                className="timeline-item"
                key={edu.toString() + idx.toString()}
              >
                <h4 className="h4 timeline-item-title">{edu["title"]}</h4>
                <h5 className="h5">{edu["uni"]}</h5>
                <span>
                  {edu["time"]} <em>{!edu["done"] ? "(Expected)" : ""}</em>
                </span>
                {edu["texts"].map((txt, i) => (
                  <p
                    className="timeline-text"
                    key={txt.toString() + i.toString()}
                  >
                    {txt}
                  </p>
                ))}
              </li>
            ))}
          </ol>
        </section>
      )}

      {Array.isArray(experience) && experience.length && (
        <section className="timeline">
          <div className="title-wrapper">
            <div className="icon-box">
              <ion-icon name="briefcase-outline" aria-hidden="true"></ion-icon>
            </div>
            <h3 className="h3">Experience</h3>
          </div>

          <ol className="timeline-list">
            {experience.map((exp, idx) => (
              <li
                className="timeline-item"
                key={exp.toString() + idx.toString()}
              >
                <h4 className="h4 timeline-item-title">{exp["title"]}</h4>
                <h5 className="h5">{exp["emp"]}</h5>
                <span>{exp["time"]}</span>
                {exp["texts"].map((txt, i) => (
                  <p
                    className="timeline-text"
                    key={txt.toString() + i.toString()}
                  >
                    {txt}
                  </p>
                ))}
              </li>
            ))}
          </ol>
        </section>
      )}

      {Array.isArray(publication) && publication.length && (
        <section className="timeline">
          <div className="title-wrapper">
            <div className="icon-box">
              <ion-icon name="newspaper-outline" aria-hidden="true"></ion-icon>
            </div>
            <h3 className="h3">Publications</h3>
          </div>

          <ol className="timeline-list">
            {publication.map((pub, idx) => (
              <li
                className="timeline-item"
                key={pub.toString() + idx.toString()}
              >
                <h4 className="h4 timeline-item-title">{pub["title"]}</h4>
                <h5 className="h5">
                  <a
                    href={pub["href"]}
                    target="_blank"
                    rel="noreferrer"
                    className="publication-link"
                  >
                    {pub["article"]}
                  </a>
                </h5>
                <span>{pub["time"]}</span>
                {pub["texts"].map((txt, i) => (
                  <p
                    className="timeline-text"
                    key={txt.toString() + i.toString()}
                  >
                    {txt}
                  </p>
                ))}
              </li>
            ))}
          </ol>
        </section>
      )}
    </article>
  );
}

Resume.propTypes = {
  education: PropTypes.array,
  experience: PropTypes.array,
  publication: PropTypes.array,
};

Resume.defaultProps = {
  education: [],
  experience: [],
  publication: [],
};

export default Resume;
