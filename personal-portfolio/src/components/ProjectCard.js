import { Col } from "react-bootstrap";
import { Link45deg, Github } from "react-bootstrap-icons";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faReact,
//   faBootstrap,
//   faNodeJs,
//   faWordpress,
// } from "@fortawesome/free-brands-svg-icons";

export function ProjectCard({ title, description, imgUrl, siteUrl, stacks }) {
  console.log(stacks);
  const url = "https://brasilorante.com/";
  return (
    <Col size={12} sm={6} md={4}>
        {/* { console.log(siteUrl) } */}
        <div className="proj-imgbx">
          <img src={imgUrl} alt={title} />
          <div className="proj-txtx">
            <h4>{title}</h4>
            {/* <span>{description}</span> */}
            <div>
              {/* <button onClick={ siteUrl ? () => window.location.assign(siteUrl) : () => window.location.assign("http://localhost:3000/#project") }> */}
              <button onClick={ () => window.location.assign(siteUrl) }>
                { (siteUrl !== undefined && siteUrl !== "") && <Link45deg size={40} /> }
              </button>
              <button onClick={ () => window.location.assign(url) }>
                <Github size={30} />
              </button>
            </div>
            <div>
            <span>Tecnologias</span>
            <br></br>
            {/* { stacks.map((stack, index) => {
              if(!stack) {
                console.log('Erro');
              }
              return <FontAwesomeIcon icon={stack} key={index} />
              // console.log(stack)
              // (stack !== undefined && stack !== "") && <FontAwesomeIcon icon={stack} key={index} />
            }) } */}
              {/* <FontAwesomeIcon icon={faReact} />
              <FontAwesomeIcon icon={faBootstrap} />
              <FontAwesomeIcon icon={faNodeJs} />
              <FontAwesomeIcon icon={faWordpress} /> */}
              {/* { stacks.map((stack, index) => (stack !== undefined && stack !== "") && <FontAwesomeIcon key={index} icon={stack} />) } */}
            </div>
          </div>
        </div>
      </Col>
  );
}
