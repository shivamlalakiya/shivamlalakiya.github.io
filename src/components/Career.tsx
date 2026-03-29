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
        "Directed multiple projects supporting the Grateful Patient Program within the medical advancement team, leveraging data to enhance fundraising strategies.",
        "Orchestrated a proactive data quality monitoring pipeline using Apache Airflow with weekly digest alerts, driving a 40% reduction in account duplications and a 20% decrease in overall data errors.",
        "Architected a multi-model forecasting suite (ARIMA, LSTM, Prophet) integrating macroeconomic indicators, achieving 90%+ accuracy in predicting cash flow for strategic financial planning.",
        "Designed and deployed an engagement scoring system across events, digital interactions, and volunteering data to improve prospect prioritization and boost outreach effectiveness by 25%.",
        "Engineered a scalable ETL automation framework generating 50+ monthly reports, reducing a 4-hour manual process to under 5 minutes with trusted, error-free reporting for senior leadership.",
        "Unlocked a new fundraising pipeline by segmenting a dormant CRM database of 750,000 leads and creating a targeted acquisition strategy for direct marketing campaigns.",
        "Led the data model transition to the Windfall platform by reverse-engineering gift capacity metrics and implementing a new segmentation framework for major gift strategies.",
        "Aggregated data from clinicaltrials.gov, NIH grants, and Elsevier to map medical faculty and identify 50+ high-impact physicians with strong research involvement.",
      ],
    },
    {
      key: "invicro",
      leftTitle: "Associate Data Manager",
      leftSubtitle: "Invicro · Full-time · Needham, Massachusetts (On-site)",
      rightTitle: "Sep 2023–Feb 2024",
      details: "",
      bullets: [
        "Developed an automated Apache Airflow pipeline for transferring pathological images, reducing data processing time by 20% and improving on-time delivery for research studies.",
        "Engineered and deployed computer vision models, improving pathological image analysis and biomarker identification by 10%.",
        "Established data quality control procedures, validation protocols, and auditing frameworks to improve precision and reporting reliability.",
        "Collaborated with lab scientists to standardize slide and file naming, eliminating errors by 17%.",
      ],
    },
    {
      key: "ring",
      leftTitle: "Data Scientist",
      leftSubtitle: "Ring Therapeutics · Full-time · Boston, Massachusetts (On-site)",
      rightTitle: "May 2022–Dec 2022",
      details: "",
      bullets: [
        "Researched and evaluated CV algorithms; selected YOLOv5 and Faster R-CNN for detection and implemented a custom multi-object tracking approach.",
        "Designed, validated, and deployed ML models and tools to analyze biological sequence data and support vector design initiatives.",
        "Built NLP-based models on gene/protein sequences to predict tropism and identify tissue-specific motifs using positional encodings.",
        "Developed Graph Neural Networks to extract essential features from whole genome sequencing data for improved tropism modeling (TensorFlow + CUDA/HPC).",
        "Built ETL containers and Airflow DAGs to transform and load experimental data into FASTA format, removing manual server loading steps.",
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
        "Built an LSTM/RNN-based time-series caching policy achieving 90% success rate in predicting user preferences for distributed caching.",
        "Preprocessed and filtered a custom 12GB dataset using Pandas to support robust deep learning model training.",
        "Benchmarked performance and delivered a 130% improvement in hit rates over LIFO/LRU/LFU policies.",
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
