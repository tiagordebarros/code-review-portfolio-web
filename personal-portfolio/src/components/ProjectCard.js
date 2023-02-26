import { Col } from "react-bootstrap";
import { Link45deg, Github, Wordpress } from "react-bootstrap-icons";

export function ProjectCard({ title, description, imgUrl }) {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt={title} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <div>
            <Link45deg size={40} />
            <Github size={30} />
          </div>
          <div>
            <Wordpress size={20} />
          </div>
        </div>
      </div>
    </Col>
  );
}
