import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";
import { socialLinks } from "../data/social";
import { education } from "../data/education";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3 className="section-eyebrow">
          <span className="section-index">05</span> Contact
        </h3>
        <h2 className="contact-title">Let's talk</h2>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Connect</h4>
            <p>
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noreferrer"
                data-cursor="disable"
              >
                <strong>LinkedIn</strong> — shivam-lalakiya
              </a>
            </p>
            <p>
              <a href={`mailto:${socialLinks.email}`} data-cursor="disable">
                <strong>Email</strong> — {socialLinks.email}
              </a>
            </p>
            <p>
              <a
                href={socialLinks.resume}
                target="_blank"
                rel="noreferrer"
                data-cursor="disable"
              >
                <strong>Resume</strong> — PDF
              </a>
            </p>
            <h4>Education</h4>
            {education.map((e) => (
              <p key={e.degree}>
                <strong>{e.degree}</strong> ({e.meta}), {e.school}
              </p>
            ))}
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              GitHub <MdArrowOutward />
            </a>
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              LinkedIn <MdArrowOutward />
            </a>
            <a
              href={socialLinks.scholar}
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              Google Scholar <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span>Shivam Lalakiya</span>
            </h2>
            <h5>
              <MdCopyright /> {new Date().getFullYear()}
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
