import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function setHeroScroll() {
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (!reduce && window.innerWidth > 1024) {
    gsap
      .timeline({
        defaults: { ease: "power3.out" },
        scrollTrigger: {
          trigger: ".landing-section",
          start: "top top",
          end: "bottom top",
          scrub: true,
          invalidateOnRefresh: true,
        },
      })
      .to(".landing-container", { opacity: 0, y: "18%", duration: 1 }, 0)
      .to(".landing-photo-wrap", { y: "-6%", scale: 1.04, duration: 1 }, 0);
  }

  // Reveal the About statement as it scrolls into view.
  gsap.fromTo(
    ".about-me",
    { opacity: 0, y: reduce ? 0 : 60 },
    {
      opacity: 1,
      y: 0,
      duration: reduce ? 0.3 : 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".about-section",
        start: "top 78%",
        once: true,
      },
    }
  );
}

export function setAllTimeline() {
  const careerTimeline = gsap.timeline({
    defaults: { ease: "power3.out" },
    scrollTrigger: {
      trigger: ".career-section",
      start: "top 30%",
      end: "100% center",
      scrub: true,
      invalidateOnRefresh: true,
    },
  });
  careerTimeline
    .fromTo(
      ".career-timeline",
      { maxHeight: "10%" },
      { maxHeight: "100%", duration: 0.5 },
      0
    )

    .fromTo(
      ".career-timeline",
      { opacity: 0 },
      { opacity: 1, duration: 0.1 },
      0
    )
    .fromTo(
      ".career-info-box",
      { opacity: 0 },
      { opacity: 1, stagger: 0.1, duration: 0.5 },
      0
    )
    .fromTo(
      ".career-dot",
      { animationIterationCount: "infinite" },
      {
        animationIterationCount: "1",
        delay: 0.3,
        duration: 0.1,
      },
      0
    );
}
