import { Col } from "react-bootstrap";
import { Link45deg, Github } from "react-bootstrap-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faBootstrap,
  faNodeJs,
  faWordpress,
} from "@fortawesome/free-brands-svg-icons";

export function ProjectCard({ title, description, imgUrl }) {
  const url = "https://brasilorante.com/";
  return (
      <Col size={12} sm={6} md={4}>
        <div className="proj-imgbx">
          <img src={imgUrl} alt={title} />
          <div className="proj-txtx">
            <h4>{title}</h4>
            {/* <span>{description}</span> */}
            <div>
              <button onClick={ () => window.location.assign(url) }>
                <Link45deg size={40} />
              </button>
              <button onClick={ () => window.location.assign(url) }>
                <Github size={30} />
              </button>
            </div>
            <div>
              <FontAwesomeIcon icon={faReact} />
              <FontAwesomeIcon icon={faBootstrap} />
              <FontAwesomeIcon icon={faNodeJs} />
              <FontAwesomeIcon icon={faWordpress} />
            </div>
          </div>
        </div>
      </Col>
  );
}
