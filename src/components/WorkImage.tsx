import { MdArrowOutward } from "react-icons/md";
import { FaGithub } from "react-icons/fa6";

interface Props {
  alt?: string;
  link?: string;
  category?: string;
  active?: boolean;
}

const WorkImage = (props: Props) => {
  return (
    <a
      className="work-card"
      href={props.link}
      target="_blank"
      rel="noreferrer"
      data-cursor="disable"
      aria-label={`${props.alt ?? "Project"} — view on GitHub`}
      tabIndex={props.active ? 0 : -1}
    >
      <span className="work-card-eyebrow">{props.category}</span>
      <FaGithub className="work-card-glyph" aria-hidden="true" />
      <span className="work-card-cta">
        View project <MdArrowOutward aria-hidden="true" />
      </span>
    </a>
  );
};

export default WorkImage;
