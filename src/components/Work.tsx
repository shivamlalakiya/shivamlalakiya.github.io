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
      "Built an NLP model to predict duplicate question pairs with ~90% accuracy on 400K question pairs.",
      "Performed EDA + preprocessing and fine-tuned Word2Vec/LSTM hyperparameters via extensive experiments.",
      "Deployed a scalable web app using AWS Elastic Beanstalk + Docker and improved interpretability with SHAP/LIME.",
    ],
  },
  {
    title: "Stock Sentiment + Time Series Analysis",
    category: "NLP · Time Series",
    tools: "Naive Bayes, LSTM, Tiingo API, Streamlit",
    image: reactLogo,
    link: "https://github.com/shivamlalakiya/stock-time-series-and-sentiment-analysis",
    highlights: [
      "Fetched recent WSJ data and historical prices from Tiingo API and persisted to CSV.",
      "Built sentiment classifier (Naive Bayes) and an LSTM model to predict trends/future prices (90%+ accuracy).",
      "Shipped an interactive Streamlit UI to explore insights for listed stocks.",
    ],
  },
  {
    title: "Kafka → Snowflake Data Pipeline",
    category: "Data Engineering",
    tools: "Apache Kafka, MySQL, Snowflake, Validation/Testing, CI/CD",
    image: reactLogo,
    link: "https://github.com/shivamlalakiya",
    highlights: [
      "Optimized MySQL-to-Snowflake transfer using Kafka, cutting transfer time by 50% and increasing throughput by 30%.",
      "Tuned Snowflake sink connector to improve transformation/validation speed by 40% and reduce processing errors by 20%.",
      "Designed validation/testing frameworks, reducing processing errors by 60% and improving accuracy to 99.5%+.",
    ],
  },
  {
    title: "Flight Booking Website",
    category: "Full Stack",
    tools: "React, Node.js, MongoDB, REST APIs, Docker, CI/CD",
    image: reactLogo,
    link: "https://github.com/shivamlalakiya/Flight-booking.com",
    highlights: [
      "Built a flight booking app consuming live SkyScanner API data with React + Node controllers and MongoDB persistence.",
      "Implemented User/Admin/Airline modules with REST APIs and CRUD for flights, users, airlines, and deals.",
      "Deployed frontend to Netlify and backend to Heroku; dockerized for repeatable environments and CI/CD.",
    ],
  },
  {
    title: "Analytics & Visualization (R)",
    category: "Analytics · Visualization",
    tools: "R, Tableau, Text Mining, Clustering, Probabilistic Analysis",
    image: reactLogo,
    link: "https://github.com/shivamlalakiya/Data_Analysis",
    highlights: [
      "Performed clustering, probabilistic analysis, and text mining across university rankings, crimes in India, and e-commerce datasets.",
      "Identified key drivers behind top-100 university ranking changes and correlations between discounts, sales, and profit.",
      "Built Tableau dashboards and interactive deep-dives for internet penetration and global happiness analysis.",
    ],
  },
  {
    title: "Hyperspectral Image Classification",
    category: "Computer Vision · Deep Learning",
    tools: "CNNs, GANs, PCA / k-PCA",
    image: reactLogo,
    link: "https://github.com/shivamlalakiya/Hyperspectral_image_classification",
    highlights: [
      "Implemented hyperspectral image classification using CNNs/GANs and dimensionality reduction with PCA and k-PCA.",
      "Reduced time/space complexity by ~50% via projection to lower-dimensional spaces using kernel methods.",
      "Compared PCA-CNN vs baseline CNN and achieved ~30% lower training time and complexity.",
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
