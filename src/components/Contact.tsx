import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

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
                href="https://www.linkedin.com/in/shivam-lalakiya/"
                target="_blank"
                rel="noreferrer"
                data-cursor="disable"
              >
                LinkedIn — shivam-lalakiya
              </a>
            </p>
            <p>
              <a href="mailto:shivamlalakiya151299@gmail.com" data-cursor="disable">
                Email — shivamlalakiya151299@gmail.com
              </a>
            </p>
            <p>
              <a
                href="/Shivam_Lalakiya_resume.pdf"
                target="_blank"
                rel="noreferrer"
                data-cursor="disable"
              >
                Resume — PDF
              </a>
            </p>
            <h4>Education</h4>
            <p>
              M.S. Data Analytics Engineering (GPA 3.8/4.0), Northeastern University
            </p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a
              href="https://github.com/shivamlalakiya"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              GitHub <MdArrowOutward />
            </a>
            <a
              href="https://www.linkedin.com/in/shivam-lalakiya/"
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
