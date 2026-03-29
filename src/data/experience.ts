export type ExperienceItem = {
  key: string;
  leftTitle: string;
  leftSubtitle: string;
  rightTitle: string;
  details?: string;
  logo?: string;
  bullets: string[];
};

// NOTE: logos are optional; components can render without them.
export const experiences: ExperienceItem[] = [
  {
    key: "open-source-pymc-marketing",
    leftTitle: "Open-Source Contributor",
    leftSubtitle: "PyMC Marketing (pymc-marketing) · OSS",
    rightTitle: "Ongoing",
    details: "Active contributor · Public GitHub",
    bullets: [
      "Contribute production-quality code and improvements to the pymc-marketing Python library.",
      "Resolve complex issues across public repositories—triaging, debugging, and shipping maintainable fixes.",
      "Write clear PR descriptions and collaborate with maintainers to land changes safely.",
    ],
  },
  {
    key: "wustl",
    leftTitle: "Data Analyst",
    leftSubtitle: "Grateful Patient Program — University Advancement",
    rightTitle: "Feb 2024–Present",
    details:
      "Washington University in St. Louis · Full-time · St. Louis, Missouri (On-site)",
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
    bullets: [
      "Collaborated with Prof. Milad Siami to design assignments and homework for Introduction to Distributed Intelligence.",
      "Guided 50 students through coursework and held office hours to support learning outcomes.",
    ],
  },
  {
    key: "academic-service-editorial-peer-review",
    leftTitle: "Peer Reviewer & Editorial Board",
    leftSubtitle: "Academic & Professional Service",
    rightTitle: "Active",
    bullets: [
      "Peer reviewer: IEEE, IJRMEET, JQST.",
      "Editorial board member: GSEACT 2026.",
    ],
  },
  {
    key: "iitm-ra",
    leftTitle: "Research Assistant",
    leftSubtitle: "Indian Institute of Technology, Madras · Full-time (Hybrid)",
    rightTitle: "Jan 2020–Jan 2021",
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
    bullets: [
      "Built a multimodal biometric system (iris, face, speech, fingerprints) using CNNs; achieved 85% precision across datasets.",
      "Improved model accuracy by 10% via hyperparameter tuning; deployed to cloud for real-time authentication with strong F1/precision.",
    ],
  },
  {
    key: "daiict",
    leftTitle: "Research Assistant",
    leftSubtitle: "DA-IICT · Internship · Gandhinagar, Gujarat (On-site)",
    rightTitle: "Apr 2018–Jul 2018",
    bullets: [
      "Implemented a KL-divergence SVM for speech spoofing detection, improving accuracy from 70% to 85%.",
      "Extracted MFCC features from ~2GB speech data and optimized SVM hyperparameters via grid search.",
    ],
  },
];

