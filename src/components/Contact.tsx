import { MdCopyright } from "react-icons/md";
import "./styles/Contact.css";
import { socialLinks } from "../data/social";
import { education } from "../data/education";

const links = [
  { label: "LinkedIn", href: socialLinks.linkedin },
  { label: "GitHub", href: socialLinks.github },
  { label: "Google Scholar", href: socialLinks.scholar },
  { label: "Resume (PDF)", href: socialLinks.resume },
];

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <div className="section-mark"><span>Contact</span></div>
        <h2 className="contact-title">Let's talk</h2>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Connect</h4>
            <a
              href={`mailto:${socialLinks.email}`}
              data-cursor="disable"
              className="contact-social contact-email"
            >
              {socialLinks.email}
            </a>
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                target="_blank"
                rel="noreferrer"
                data-cursor="disable"
                className="contact-social"
              >
                {l.label}
              </a>
            ))}
          </div>
          <div className="contact-box">
            <h4>Education</h4>
            {education.map((e) => (
              <p key={e.degree}>
                <strong>{e.degree}</strong>
                <br />
                {e.school} ({e.meta})
              </p>
            ))}
          </div>
        </div>
        <footer className="contact-credit">
          <span>
            Designed and developed by <span>Shivam Lalakiya</span>
          </span>
          <span>
            <MdCopyright /> {new Date().getFullYear()}
          </span>
        </footer>
      </div>
    </div>
  );
};

export default Contact;
