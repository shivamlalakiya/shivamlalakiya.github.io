import { useEffect } from "react";
import "./styles/Landing.css";
import { profile } from "../data/profile";
import { setHeroScroll, setAllTimeline } from "./utils/GsapScroll";

// Background-removed cutout (transparent WebP) generated from the headshot.
const HERO_PHOTO = "/images/profile.webp";

const Landing = () => {
  const [firstName, ...rest] = profile.name.split(" ");
  const lastName = rest.join(" ");

  useEffect(() => {
    // No loader anymore: reveal the page on mount and wire up scroll.
    const raf = requestAnimationFrame(() => {
      import("./utils/initialFX")
        .then((m) => m.initialFX())
        .catch(() => {
          // Safety: never leave the page hidden or scroll-locked.
          document.body.style.overflowY = "auto";
          document
            .getElementsByTagName("main")[0]
            ?.classList.add("main-active");
        });
      setHeroScroll();
      setAllTimeline();
    });
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <div className="landing-section" id="landingDiv">
      <div className="landing-container">
        <div className="landing-grid">
          <div className="landing-text">
            <h2 className="landing-eyebrow">Hello! I'm</h2>
            <h1 className="landing-name">
              {firstName.toUpperCase()}
              <br />
              <span>{lastName.toUpperCase()}</span>
            </h1>
            <h3 className="landing-role">
              Data Scientist <span>·</span> Software Developer
            </h3>

            <div className="landing-stats">
              <div className="landing-stat">
                <span className="landing-stat-value">5+</span>
                <span className="landing-stat-label">Years building ML systems</span>
              </div>
              <div className="landing-stat">
                <span className="landing-stat-value">7</span>
                <span className="landing-stat-label">Peer-reviewed publications</span>
              </div>
              <div className="landing-stat">
                <span className="landing-stat-value">11</span>
                <span className="landing-stat-label">Merged PRs in open source</span>
              </div>
            </div>
          </div>

          <div className="landing-photo-wrap">
            <div className="landing-photo-glow"></div>
            <img
              className="landing-photo"
              src={HERO_PHOTO}
              alt={profile.name}
              width={1103}
              height={1379}
              fetchPriority="high"
              decoding="async"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
