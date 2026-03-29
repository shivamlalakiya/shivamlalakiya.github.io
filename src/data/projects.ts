export type ProjectItem = {
  title: string;
  category: string;
  tools: string;
  image: string;
  link: string;
  highlights?: string[];
};

// Images are supplied by the rendering component (kept as string to avoid coupling data -> assets).
export const projects: Omit<ProjectItem, "image">[] = [
  {
    title: "Data-Driven Fundraising Intelligence",
    category: "Author · Applied Analytics",
    tools: "Data strategy, experimentation, forecasting, decision intelligence",
    link: "https://github.com/shivamlalakiya",
    highlights: [
      "Authored work focused on turning fundraising data into measurable, decision-ready intelligence.",
      "Emphasis on reproducible analysis, stakeholder-ready narratives, and scalable measurement.",
    ],
  },
  {
    title: "Open Source Contributions (PyMC Marketing + GitHub)",
    category: "Open Source",
    tools: "Python, testing, debugging, maintainability, collaboration",
    link: "https://github.com/shivamlalakiya",
    highlights: [
      "Active code contributions to the pymc-marketing Python library.",
      "Track record of resolving complex issues across public repositories via high-quality PRs.",
    ],
  },
  {
    title: "Quora Question Pairs — Duplicate Detection",
    category: "NLP · Deep Learning",
    tools: "Word2Vec, LSTM, SHAP/LIME, AWS Elastic Beanstalk, Docker",
    link: "https://github.com/shivamlalakiya/Duplicate_Questions_Quora",
    highlights: [
      "Trained Word2Vec + LSTM model to detect duplicate questions (~90% accuracy on 400K pairs).",
      "Ran EDA, preprocessing, and hyperparameter tuning to improve generalization.",
      "Deployed via AWS Elastic Beanstalk + Docker; added SHAP/LIME for interpretability.",
    ],
  },
  {
    title: "Stock Sentiment + Time Series Analysis",
    category: "NLP · Time Series",
    tools: "Naive Bayes, LSTM, Tiingo API, Streamlit",
    link: "https://github.com/shivamlalakiya/stock-time-series-and-sentiment-analysis",
    highlights: [
      "Ingested WSJ + Tiingo price history and built a clean modeling dataset.",
      "Built sentiment (Naive Bayes) + price forecasting (LSTM) with 90%+ accuracy.",
      "Shipped a Streamlit app for interactive exploration.",
    ],
  },
  {
    title: "Kafka → Snowflake Data Pipeline",
    category: "Data Engineering",
    tools: "Apache Kafka, MySQL, Snowflake, Validation/Testing, CI/CD",
    link: "https://github.com/shivamlalakiya",
    highlights: [
      "Cut MySQL → Snowflake transfer time by 50% using Kafka; improved throughput by 30%.",
      "Optimized sink connector; improved transform/validation speed by 40% and reduced errors by 20%.",
      "Added validation/testing; reduced pipeline errors by 60% and improved accuracy to 99.5%+.",
    ],
  },
  {
    title: "Flight Booking Website",
    category: "Full Stack",
    tools: "React, Node.js, MongoDB, REST APIs, Docker, CI/CD",
    link: "https://github.com/shivamlalakiya/Flight-booking.com",
    highlights: [
      "Built a flight booking app with live SkyScanner data (React + Node + MongoDB).",
      "Shipped User/Admin/Airline modules with REST APIs and CRUD workflows.",
      "Deployed to Netlify/Heroku and dockerized for repeatable CI/CD.",
    ],
  },
  {
    title: "Analytics & Visualization (R)",
    category: "Analytics · Visualization",
    tools: "R, Tableau, Text Mining, Clustering, Probabilistic Analysis",
    link: "https://github.com/shivamlalakiya/Data_Analysis",
    highlights: [
      "Applied clustering, probabilistic analysis, and text mining across multiple real-world datasets.",
      "Identified drivers for ranking changes and sales/profit behavior across seasons.",
      "Built Tableau dashboards + interactive deep dives for stakeholders.",
    ],
  },
  {
    title: "Hyperspectral Image Classification",
    category: "Computer Vision · Deep Learning",
    tools: "CNNs, GANs, PCA / k-PCA",
    link: "https://github.com/shivamlalakiya/Hyperspectral_image_classification",
    highlights: [
      "Built hyperspectral classifiers with CNNs/GANs and PCA/k-PCA for dimensionality reduction.",
      "Reduced time/space complexity by ~50% using kernel projections.",
      "Achieved ~30% lower training time vs baseline CNNs with PCA-CNN variants.",
    ],
  },
];

