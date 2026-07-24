import "./styles/About.css";
import { profile } from "../data/profile";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <h3 className="title">About Me</h3>
        <p className="para">
          I’m {profile.name}, a {profile.headline} based in {profile.location}. I
          build forecasting models and data pipelines that hold up in production—and
          turn messy, real-world data into{" "}
          <span>decisions teams can trust</span>.
        </p>
      </div>
    </div>
  );
};

export default About;
