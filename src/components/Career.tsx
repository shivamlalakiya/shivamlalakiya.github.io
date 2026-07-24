import "./styles/Career.css";
import { experiences } from "../data/experience";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          {experiences.map((exp) => (
            <div className="career-info-box" key={exp.key}>
              <div className="career-info-in">
                <div className="career-role">
                  <h4>{exp.leftTitle}</h4>
                  <h5>{exp.leftSubtitle}</h5>
                  {exp.details ? (
                    <div style={{ opacity: 0.75, fontSize: 14, fontWeight: 300 }}>
                      {exp.details}
                    </div>
                  ) : null}
                </div>
                <h3>{exp.rightTitle}</h3>
              </div>
              <p>
                {exp.bullets.map((b, i) => (
                  <span key={i}>
                    • {b}
                    <br />
                  </span>
                ))}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Career;
