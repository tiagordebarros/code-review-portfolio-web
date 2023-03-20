import { Col } from "react-bootstrap";
import { Link45deg, Github } from "react-bootstrap-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CgFigma } from "react-icons/cg";

export function ProjectCard({
  title,
  _description,
  imgUrl,
  siteUrl,
  githubUrl,
  figmaUrl,
  stacks,
}) {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt={title} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <div>
            <button onClick={() => window.open(siteUrl, "_blank")}>
              {siteUrl && <Link45deg size={40} />}
            </button>
            <button onClick={() => window.open(githubUrl, "_blank")}>
              {githubUrl && <Github size={30} />}
            </button>
            <button onClick={() => window.open(figmaUrl, "_blank")}>
              {figmaUrl && <CgFigma fontSize={30} />}
            </button>
          </div>
          <div>
            <span>Tecnologias</span>
            <br />
            {stacks.map((stack, index) => (
              <FontAwesomeIcon icon={stack} key={index} />
            ))}
          </div>
        </div>
      </div>
    </Col>
  );
}
