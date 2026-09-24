import { SplitText } from "gsap/SplitText";
import gsap from "gsap";
import { smoother } from "../Navbar";

export function initialFX() {
  document.body.style.overflowY = "auto";
  smoother.paused(false);
  document.getElementsByTagName("main")[0].classList.add("main-active");
  const bg =
    getComputedStyle(document.documentElement)
      .getPropertyValue("--bg-deep")
      .trim() || "#edf0ee";
  gsap.to("body", {
    backgroundColor: bg,
    duration: 0.5,
    delay: 1,
    // Drop the inline style once settled so a later theme toggle (which
    // changes --bg-deep) still takes effect via the CSS rule underneath.
    clearProps: "backgroundColor",
  });

  // Character reveal on the eyebrow + name.
  const heroText = new SplitText([".landing-eyebrow", ".landing-name"], {
    type: "chars,lines",
    linesClass: "split-line",
  });
  gsap.fromTo(
    heroText.chars,
    { opacity: 0, y: 80, filter: "blur(5px)" },
    {
      opacity: 1,
      duration: 1.2,
      filter: "blur(0px)",
      ease: "power3.out",
      y: 0,
      stagger: 0.02,
      delay: 0.3,
    }
  );

  // Role line + portrait fade up together.
  gsap.fromTo(
    [".landing-role", ".landing-photo-wrap"],
    { opacity: 0, y: 40 },
    {
      opacity: 1,
      y: 0,
      duration: 1.2,
      ease: "power3.out",
      stagger: 0.12,
      delay: 0.5,
    }
  );

  gsap.fromTo(
    [".header", ".icons-section", ".nav-fade"],
    { opacity: 0 },
    {
      opacity: 1,
      duration: 1.2,
      ease: "power3.out",
      delay: 0.1,
    }
  );
}
