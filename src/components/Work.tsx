import "./styles/Work.css";
import { projects } from "../data/projects";

const Work = () => {
  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <div className="section-mark"><span>Work</span></div>
        <div className="section-hero">
          <h2 className="section-headline">
            Selected projects.
          </h2>
          <p className="section-subhead">
            {projects.length} projects spanning NLP, time series, data engineering, and
            full-stack builds — the range behind the résumé bullets.
          </p>
        </div>

        <div className="work-grid">
          {projects.map((project) => (
            <article className="work-item" key={project.title}>
              <p className="work-category">{project.category}</p>
              <h4>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  data-cursor="disable"
                >
                  {project.title}
                </a>
              </h4>
              {project.highlights?.length ? (
                <ul className="work-highlights">
                  {project.highlights.map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>
              ) : null}
              <div className="tool-tags">
                {project.tools.split(",").map((tool) => (
                  <span className="tool-tag" key={tool}>
                    {tool.trim()}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
