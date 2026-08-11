import "./styles/About.css";
import { profile } from "../data/profile";
import { experiences } from "../data/experience";
import { education } from "../data/education";

const TOOLKIT = [
  "Python",
  "PyTorch",
  "TensorFlow",
  "Pandas",
  "scikit-learn",
  "Airflow",
  "Snowflake",
  "AWS",
  "Docker",
  "SQL",
  "React",
  "TypeScript",
];

const companyOf = (exp: (typeof experiences)[number]) =>
  (exp.details ?? exp.leftSubtitle).split(" · ")[0];

const [current, previous] = experiences;

const About = () => {
  return (
    <div className="about-section section-container" id="about">
      <h3 className="section-eyebrow">
        <span className="section-index">01</span> About
      </h3>

      <div className="section-hero">
        <h2 className="section-headline">
          Building with a <span className="about-accent">forecaster's</span>{" "}
          patience and an <span className="about-accent">engineer's</span>{" "}
          follow-through.
        </h2>
        <p className="section-subhead">
          I like problems where the data is messy and the stakes are real —
          production pipelines that don't buckle under load, and forecasts
          stakeholders can actually plan around.
        </p>
      </div>

      <div className="about-grid">
        <div className="about-card about-card-bio">
          <h4 className="card-eyebrow">The short version</h4>
          <p>
            I'm {profile.name}, a {profile.headline} based in{" "}
            {profile.location}. I build forecasting models and data pipelines
            that hold up in production — turning messy, real-world data into{" "}
            <span className="about-accent">decisions teams can trust</span>.
          </p>
          <p>
            Along the way: research stints at IIT Madras and DA-IICT, and
            production ML work spanning genomics, pathology imaging, and
            financial forecasting.
          </p>
        </div>

        <div className="about-card">
          <h4 className="card-eyebrow">Now</h4>
          <div className="about-role">
            <h5>{current.leftTitle}</h5>
            <span className="about-accent">{companyOf(current)}</span>
            <small>{current.rightTitle}</small>
          </div>
          <div className="about-role">
            <h5>{previous.leftTitle} (prev.)</h5>
            <span className="about-accent">{companyOf(previous)}</span>
            <small>{previous.rightTitle}</small>
          </div>
        </div>

        <div className="about-card">
          <h4 className="card-eyebrow">Education</h4>
          {education.map((e) => (
            <div className="about-role" key={e.degree}>
              <h5>{e.degree}</h5>
              <span className="about-accent">{e.school.split(", ")[0]}</span>
              <small>{e.meta}</small>
            </div>
          ))}
        </div>

        <div className="about-card about-card-toolkit">
          <h4 className="card-eyebrow">Daily toolkit</h4>
          <div className="tool-tags">
            {TOOLKIT.map((tool) => (
              <span className="tool-tag" key={tool}>
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
