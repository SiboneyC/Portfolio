import PropTypes from "prop-types";

function Projects({ projects }) {
  return (
    <article className="about active">
      <header>
        <h2 className="h2 article-title">Projects</h2>
      </header>
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
