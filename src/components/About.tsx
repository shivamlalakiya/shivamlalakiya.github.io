import "./styles/About.css";
import { profile } from "../data/profile";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <h3 className="title">About Me</h3>
        <p className="para">
          I’m {profile.name}—a {profile.headline} based in {profile.location}. I build
          data-driven intelligence and production-grade software, contribute to open
          source, and write work like{" "}
          <span style={{ whiteSpace: "nowrap" }}>
            “Data-Driven Fundraising Intelligence”
          </span>
          .
        </p>
      </div>
    </div>
  );
};

export default About;
