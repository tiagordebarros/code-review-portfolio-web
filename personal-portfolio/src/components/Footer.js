import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";

import logo from "../assets/img/logo.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import navIcon4 from "../assets/img/nav-icon4.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/tiagoribeirodebarros/"><img src={navIcon1} alt="Perfil Social do LinkedIn" /></a>
              <a href="https://instagram.com/codereview0"><img src={navIcon3} alt="Perfil Social do Instagram" /></a>
              <a href="mailto:tiagordebarros@gmail.com"><img src={navIcon4} alt="Ícone do Gmail" /></a>
            </div>
            <p>Parceiros de Negócio © 2023.<br></br>Todos os direitos reservados.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
