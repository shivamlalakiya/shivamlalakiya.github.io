import "./styles/Career.css";
import wustlLogo from "../assets/wustl.svg";
import { experiences } from "../data/experience";

const Career = () => {
  const mergedExperiences = experiences.map((exp) =>
    exp.key === "wustl" ? { ...exp, logo: wustlLogo } : exp
  );

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
          {mergedExperiences.map((exp) => (
            <div className="career-info-box" key={exp.key}>
              <div className="career-info-in">
                <div className="career-role">
                  {exp.logo && (
                    <img
                      src={exp.logo}
                      alt={`${exp.leftSubtitle} logo`}
                      style={{
                        width: 34,
                        height: 34,
                        borderRadius: 8,
                        display: "block",
                        marginBottom: 10,
                      }}
                    />
                  )}
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
