export type PublicationType = "Conference" | "Journal" | "Preprint" | "Book";

export type PublicationItem = {
  title: string;
  authors: string;
  venue: string;
  year: number;
  type: PublicationType;
  description: string;
  link?: string;
};

export const publications: PublicationItem[] = [
  {
    title:
      "AI for Advancement: Predictive Donor Analytics and Fundraising Intelligence at Scale",
    authors: "S. Lalakiya",
    venue: "IEEE Intl. Conf. on Computing, Engineering and Design",
    year: 2025,
    type: "Conference",
    description:
      "Predictive analytics for donor behavior and fundraising performance at scale.",
    link: "https://ieeexplore.ieee.org/abstract/document/11325064",
  },
  {
    title:
      "Enterprise AI Agents: Secure, Scalable, and Autonomous Intelligence for the Modern Workforce",
    authors: "S. K. Venugopal, S. Lalakiya, R. Bharathan, P. Raja",
    venue: "IEEE Intl. Conf. on Computing, Engineering and Design",
    year: 2025,
    type: "Conference",
    description:
      "A framework for secure, autonomous AI agents in enterprise workflows.",
    link: "https://ieeexplore.ieee.org/document/11324763",
  },
  {
    title: "AI-Driven Observability for Real-Time Incident Management",
    authors: "P. Verma, S. Lalakiya, R. Bharathan",
    venue: "Intl. Conf. on Recent Trends in Electrical",
    year: 2025,
    type: "Conference",
    description:
      "AI-driven observability tooling for real-time incident detection and response.",
    link: "https://ieeexplore.ieee.org/document/11448853",
  },
  {
    title:
      "Smart Segmentation in Medical Fundraising Using Clustering and Donor Lifecycle Models (HMMs)",
    authors: "S. Lalakiya",
    venue: "Intl. Journal of Research and Analytical Reviews",
    year: 2025,
    type: "Journal",
    description:
      "Donor segmentation for medical fundraising using clustering and Hidden Markov Models.",
    link:
      "https://www.researchgate.net/publication/396470366_Smart_Segmentation_in_Medical_Fundraising_Using_Clustering_and_Donor_Lifecycle_Models_HMMs",
  },
  {
    title:
      "Hybrid LSTM-ARIMA Modeling for Accurate Financial Forecasting in Nonprofit Fundraising",
    authors: "S. Lalakiya",
    venue: "Intl. Journal of Science and Research Archive",
    year: 2025,
    type: "Journal",
    description: "A hybrid LSTM-ARIMA model for nonprofit financial forecasting.",
    link:
      "https://www.researchgate.net/publication/395818697_Hybrid_LSTM-ARIMA_modeling_for_accurate_financial_forecasting_in_nonprofit_fundraising",
  },
  {
    title:
      "Data-Driven Fundraising Intelligence: From Donor Scoring to Campaign Optimization",
    authors: "S. Lalakiya",
    venue: "Google Books",
    year: 2025,
    type: "Book",
    description:
      "End-to-end donor scoring and campaign optimization for fundraising teams.",
    link:
      "https://www.researchgate.net/publication/399863093_Data-Driven_Fundraising_Intelligence_From_Donor_Scoring_to_Campaign_Optimization",
  },
  {
    title:
      "Affinity and Wealth Score Prediction Using Multi-Task Learning in Donor Analytics",
    authors: "S. Lalakiya",
    venue: "Working paper",
    year: 2025,
    type: "Preprint",
    description:
      "Multi-task learning for affinity and wealth-score prediction in donor analytics.",
  },
];
