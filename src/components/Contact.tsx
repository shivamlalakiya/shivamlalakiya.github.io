import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";
import { socialLinks } from "../data/social";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
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
                LinkedIn — shivam-lalakiya
              </a>
            </p>
            <p>
              <a href={`mailto:${socialLinks.email}`} data-cursor="disable">
                Email — {socialLinks.email}
              </a>
            </p>
            <p>
              <a
                href={socialLinks.resume}
                target="_blank"
                rel="noreferrer"
                data-cursor="disable"
              >
                Resume — PDF
              </a>
            </p>
            <h4>Education</h4>
            <p>
              M.S. Data Analytics Engineering (GPA 3.8/4.0), Northeastern University, Boston, MA
            </p>
            <p>B.Tech. Electronics and Communication Engineering (CGPA 8.5/10), SVNIT Surat, Gujarat, India</p>
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
          </div>
          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span>Shivam Lalakiya</span>
            </h2>
            <h5>
              <MdCopyright /> 2026
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
