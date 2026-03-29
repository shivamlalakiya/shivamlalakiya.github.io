import { PropsWithChildren } from "react";
import "./styles/Landing.css";
import { profile } from "../data/profile";

const Landing = ({ children }: PropsWithChildren) => {
  const [firstName, ...rest] = profile.name.split(" ");
  const lastName = rest.join(" ");
  return (
    <>
      <div className="landing-section" id="landingDiv">
        <div className="landing-container">
          <div className="landing-intro">
            <h2>Hello! I'm</h2>
            <h1>
              {firstName.toUpperCase()}
              <br />
              <span>{lastName.toUpperCase()}</span>
            </h1>
          </div>
          <div className="landing-info">
            <h3>Software Developer &amp;</h3>
            <h2 className="landing-info-h2">
              <div className="landing-h2-1">Open-Source</div>
              <div className="landing-h2-2">Author</div>
            </h2>
            <h2>
              <div className="landing-h2-info">Author</div>
              <div className="landing-h2-info-1">Open-Source</div>
            </h2>
          </div>
        </div>
        {children}
      </div>
    </>
  );
};

export default Landing;
