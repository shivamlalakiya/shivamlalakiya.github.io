import { useEffect, useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HoverLinks from "./HoverLinks";
import { gsap } from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { TbMoon, TbSun } from "react-icons/tb";
import "./styles/Navbar.css";

gsap.registerPlugin(ScrollSmoother, ScrollTrigger);
export let smoother: ScrollSmoother;

const Navbar = () => {
  const [isDark, setIsDark] = useState(
    () => document.documentElement.getAttribute("data-theme") === "dark"
  );

  const toggleTheme = () => {
    const next = !isDark;
    setIsDark(next);
    if (next) {
      document.documentElement.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.removeAttribute("data-theme");
      localStorage.setItem("theme", "light");
    }
  };

  useEffect(() => {
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    smoother = ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: reduce ? 0 : 1.7,
      speed: reduce ? 1 : 1.7,
      effects: !reduce,
      autoResize: true,
      ignoreMobileResize: true,
    });

    smoother.scrollTop(0);
    smoother.paused(true);

    let links = document.querySelectorAll(".header ul a");
    links.forEach((elem) => {
      let element = elem as HTMLAnchorElement;
      element.addEventListener("click", (e) => {
        if (window.innerWidth > 1024) {
          e.preventDefault();
          let elem = e.currentTarget as HTMLAnchorElement;
          let section = elem.getAttribute("data-href");
          smoother.scrollTo(section, true, "top top");
        }
      });
    });
    window.addEventListener("resize", () => {
      ScrollSmoother.refresh(true);
    });
  }, []);
  return (
    <>
      <div className="header">
        <nav aria-label="Primary">
          <ul>
            <li>
              <a data-href="#about" href="#about">
                <HoverLinks text="About" />
              </a>
            </li>
            <li>
              <a data-href="#career" href="#career">
                <HoverLinks text="Career" />
              </a>
            </li>
            <li>
              <a data-href="#work" href="#work">
                <HoverLinks text="Work" />
              </a>
            </li>
            <li>
              <a data-href="#research" href="#research">
                <HoverLinks text="Research" />
              </a>
            </li>
            <li>
              <a data-href="#contact" href="#contact">
                <HoverLinks text="Contact" />
              </a>
            </li>
            <li>
              <button
                type="button"
                className="theme-toggle"
                onClick={toggleTheme}
                aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
                aria-pressed={isDark}
                data-cursor="disable"
              >
                {isDark ? <TbSun /> : <TbMoon />}
              </button>
            </li>
          </ul>
        </nav>
      </div>

      <div className="nav-fade"></div>
    </>
  );
};

export default Navbar;
