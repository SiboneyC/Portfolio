import PropTypes from "prop-types";

function About({ interests, recents }) {
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

      {Array.isArray(interests) && interests.length && (
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

      {Array.isArray(recents) && recents.length && (
        <section className="recents">
          <h3 className="h3 recents-title">Recent Projects</h3>
          <ul className="recents-list has-scrollbar">
            {recents.map((rec, idx) => (
              <li
                className="recents-item"
                key={rec.toString() + idx.toString()}
              >
                <div className="content-card">
                  <figure className="recents-avatar-box">
                    <img src={rec["img"]} alt={rec["alt"]} width={60} />
                  </figure>

                  <h4 className="h4 recents-item-title">{rec["name"]}</h4>

                  <div className="recents-text">
                    <p>{rec["small_info"]}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </section>
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
