import "./styles/Career.css";
import wustlLogo from "../assets/wustl.svg";

const Career = () => {
  const experiences = [
    {
      key: "wustl",
      leftTitle: "Data Analyst",
      leftSubtitle: "Grateful Patient Program — University Advancement",
      rightTitle: "Feb 2024–Present",
      details:
        "Washington University in St. Louis · Full-time · St Louis, Missouri (On-site)",
      logo: wustlLogo,
      bullets: [
        "Forecasting: built ARIMA/LSTM/Prophet suite with 90%+ cash-flow accuracy by integrating macroeconomic data for board-level planning.",
        "Automation: generated 50+ monthly reports; cut a 4-hour manual workflow to under 5 minutes via scalable ETL.",
        "Data quality: Airflow monitoring + weekly digest reduced duplicate accounts by 40% and overall errors by 20%.",
        "Scoring: shipped an engagement model across events/digital/volunteering data; improved outreach efficiency by 25%.",
        "Growth analytics: segmented a dormant 750K-lead CRM to unlock a new acquisition pipeline for direct marketing.",
      ],
    },
    {
      key: "invicro",
      leftTitle: "Associate Data Manager",
      leftSubtitle: "Invicro · Full-time · Needham, Massachusetts (On-site)",
      rightTitle: "Sep 2023–Feb 2024",
      details: "",
      bullets: [
        "Built Airflow pipeline for pathology image transfer; reduced processing time by 20% and improved on-time delivery.",
        "Deployed CV models for pathology analysis; improved biomarker identification by 10%.",
        "Streamlined transformation workflows (dbt) to improve consistency and reduce downstream reporting errors.",
        "Standardized slide/file naming with lab teams; reduced errors by 17%.",
      ],
    },
    {
      key: "ring",
      leftTitle: "Data Scientist",
      leftSubtitle: "Ring Therapeutics · Full-time · Boston, Massachusetts (On-site)",
      rightTitle: "May 2022–Dec 2022",
      details: "",
      bullets: [
        "Built sequence ML (positional encoding, GNNs) to predict tropism and guide vector design; shipped models and tooling to stakeholders.",
        "Evaluated CV detection/tracking approaches (YOLOv5, Faster R-CNN) and implemented a production-ready pipeline.",
        "Automated ETL with Docker + Airflow DAGs to remove manual data loading and formatting steps.",
      ],
    },
    {
      key: "neu-ca",
      leftTitle: "Course Assistant",
      leftSubtitle:
        "Northeastern University · Part-time · Boston, Massachusetts (On-site)",
      rightTitle: "Jan 2022–May 2022",
      details: "",
      bullets: [
        "Collaborated with Prof. Milad Siami to design assignments and homework for Introduction to Distributed Intelligence.",
        "Guided 50 students through coursework and held office hours to support learning outcomes.",
      ],
    },
    {
      key: "iitm-ra",
      leftTitle: "Research Assistant",
      leftSubtitle: "Indian Institute of Technology, Madras · Full-time (Hybrid)",
      rightTitle: "Jan 2020–Jan 2021",
      details: "",
      bullets: [
        "Built an LSTM-based caching policy; improved hit rates by 130% vs LRU/LFU via time-series request forecasting.",
        "Processed 100GB+ of user data and achieved a 90% forecasting success rate for preference prediction.",
      ],
    },
    {
      key: "sensegrass",
      leftTitle: "Data Science Intern",
      leftSubtitle: "Sensegrass · Internship · Bengaluru (Remote)",
      rightTitle: "Jul 2019–Dec 2019",
      details: "",
      bullets: [
        "Developed ML models for crop yield prediction and disease identification using satellite imagery and vegetation indices.",
        "Achieved ~90% accuracy and enabled real-time monitoring/control for irrigation and other farm processes.",
      ],
    },
    {
      key: "nitsurat-ra",
      leftTitle: "Research Assistant",
      leftSubtitle:
        "National Institute of Technology Surat · Full-time · Surat, Gujarat (On-site)",
      rightTitle: "Jul 2018–Dec 2018",
      details: "",
      bullets: [
        "Built a multimodal biometric system (iris, face, speech, fingerprints) using CNNs; achieved 85% precision across datasets.",
        "Improved model accuracy by 10% via hyperparameter tuning; deployed to cloud for real-time authentication with strong F1/precision.",
      ],
    },
    {
      key: "daiict",
      leftTitle: "Research Assistant",
      leftSubtitle:
        "DA-IICT · Internship · Gandhinagar, Gujarat (On-site)",
      rightTitle: "Apr 2018–Jul 2018",
      details: "",
      bullets: [
        "Implemented a KL-divergence SVM for speech spoofing detection, improving accuracy from 70% to 85%.",
        "Extracted MFCC features from ~2GB speech data and optimized SVM hyperparameters via grid search.",
      ],
    },
  ];

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
