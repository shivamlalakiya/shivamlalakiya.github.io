import { useState, useCallback } from "react";
import "./styles/Work.css";
import WorkImage from "./WorkImage";
import { MdArrowBack, MdArrowForward } from "react-icons/md";
import reactLogo from "../assets/react.svg";

const projects = [
  {
    title: "Quora Question Pairs — Duplicate Detection",
    category: "NLP · Deep Learning",
    tools: "Word2Vec, LSTM, SHAP/LIME, AWS Elastic Beanstalk, Docker",
    image: reactLogo,
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
    image: reactLogo,
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
    image: reactLogo,
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
    image: reactLogo,
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
    image: reactLogo,
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
    image: reactLogo,
    link: "https://github.com/shivamlalakiya/Hyperspectral_image_classification",
    highlights: [
      "Built hyperspectral classifiers with CNNs/GANs and PCA/k-PCA for dimensionality reduction.",
      "Reduced time/space complexity by ~50% using kernel projections.",
      "Achieved ~30% lower training time vs baseline CNNs with PCA-CNN variants.",
    ],
  },
];

const Work = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToSlide = useCallback(
    (index: number) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setCurrentIndex(index);
      setTimeout(() => setIsAnimating(false), 500);
    },
    [isAnimating]
  );

  const goToPrev = useCallback(() => {
    const newIndex =
      currentIndex === 0 ? projects.length - 1 : currentIndex - 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  const goToNext = useCallback(() => {
    const newIndex =
      currentIndex === projects.length - 1 ? 0 : currentIndex + 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>

        <div className="carousel-wrapper">
          {/* Navigation Arrows */}
          <button
            className="carousel-arrow carousel-arrow-left"
            onClick={goToPrev}
            aria-label="Previous project"
            data-cursor="disable"
          >
            <MdArrowBack />
          </button>
          <button
            className="carousel-arrow carousel-arrow-right"
            onClick={goToNext}
            aria-label="Next project"
            data-cursor="disable"
          >
            <MdArrowForward />
          </button>

          {/* Slides */}
          <div className="carousel-track-container">
            <div
              className="carousel-track"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {projects.map((project, index) => (
                <div className="carousel-slide" key={index}>
                  <div className="carousel-content">
                    <div className="carousel-info">
                      <div className="carousel-number">
                        <h3>0{index + 1}</h3>
                      </div>
                      <div className="carousel-details">
                        <h4>{project.title}</h4>
                        <p className="carousel-category">
                          {project.category}
                        </p>
                        <div className="carousel-tools">
                          <span className="tools-label">Tools & Features</span>
                          <p>{project.tools}</p>
                        </div>
                        {"highlights" in project && project.highlights?.length ? (
                          <div className="carousel-tools">
                            <span className="tools-label">Highlights</span>
                            <p>
                              {project.highlights.map((h, i) => (
                                <span key={i}>
                                  • {h}
                                  <br />
                                </span>
                              ))}
                            </p>
                          </div>
                        ) : null}
                      </div>
                    </div>
                    <div className="carousel-image-wrapper">
                      <WorkImage
                        image={project.image}
                        alt={project.title}
                        link={project.link}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dot Indicators */}
          <div className="carousel-dots">
            {projects.map((_, index) => (
              <button
                key={index}
                className={`carousel-dot ${index === currentIndex ? "carousel-dot-active" : ""
                  }`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to project ${index + 1}`}
                data-cursor="disable"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
