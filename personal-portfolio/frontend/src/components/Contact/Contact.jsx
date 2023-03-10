import "animate.css";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import TrackVisibility from "react-on-screen";
import Reaptcha from "reaptcha";
import { Alert, Form, Button, InputGroup } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faSignature,
  faEnvelope,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

import "./Contact.css";
import contactImg from "../../assets/img/contact-img.svg";

export function Contact() {
  const form = useRef();
  const [buttonText, setButtonText] = useState("Enviar");
  const [result, setResult] = useState(false);
  const [error, setError] = useState(false);
  const [captcha, setCaptcha] = useState(null);
  const [validated, setValidated] = useState(false);

  const onVerify = (recaptchaResponse) => console.log(recaptchaResponse);

  const sendEmail = (e) => {
    e.preventDefault();
    setButtonText("Enviando...");
    emailjs
      .sendForm(
        "service_tfs5n89",
        "template_dnb3yjh",
        form.current,
        "sq1WyKkddrDs7AcKd"
      )
      .then(
        (result) => {
          console.log(result.text);
          setResult(true);
        },
        (error) => {
          console.log(error.text);
          setError(true);
        }
      );
    setButtonText("Enviar");
    form.current.reset();
    setValidated(false);
  };

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
      return setValidated(true);
    }
    return sendEmail(event);
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <img
                  className={
                    isVisible ? "animate__animated animate__zoomIn" : ""
                  }
                  src={contactImg}
                  alt="Contact Us"
                />
              )}
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Vamos conversar?</h2>
                  <Form
                    noValidate
                    validated={validated}
                    ref={form}
                    onSubmit={handleSubmit}
                  >
                    <Row>
                      <Col size={12} sm={6} className="px-1">
                        <InputGroup hasValidation>
                          <InputGroup.Text id="inputGroupPrepend">
                            <FontAwesomeIcon icon={faUser} />
                          </InputGroup.Text>
                          <Form.Control
                            type="text"
                            name="username"
                            placeholder="Nome"
                            aria-describedby="inputGroupPrepend"
                            required
                          />
                          <Form.Control.Feedback type="invalid">
                            Por favor, informe o seu nome.
                          </Form.Control.Feedback>
                        </InputGroup>
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <InputGroup hasValidation>
                          <InputGroup.Text id="inputGroupPrepend">
                            <FontAwesomeIcon icon={faSignature} />
                          </InputGroup.Text>
                          <Form.Control
                            type="text"
                            name="lastname"
                            placeholder="Sobrenome"
                            aria-describedby="inputGroupPrepend"
                          />
                        </InputGroup>
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <InputGroup hasValidation>
                          <InputGroup.Text id="inputGroupPrepend">
                            <FontAwesomeIcon icon={faEnvelope} />
                          </InputGroup.Text>
                          <Form.Control
                            type="email"
                            name="email"
                            placeholder="E-mail"
                            aria-describedby="inputGroupPrepend"
                            required
                          />
                          <Form.Control.Feedback type="invalid">
                            Por favor, informe o seu e-mail.
                          </Form.Control.Feedback>
                        </InputGroup>
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <InputGroup hasValidation>
                          <InputGroup.Text id="inputGroupPrepend">
                            <FontAwesomeIcon icon={faPhone} />
                          </InputGroup.Text>
                          <Form.Control
                            type="tel"
                            name="telephone"
                            placeholder="Telefone"
                            aria-describedby="inputGroupPrepend"
                          />
                        </InputGroup>
                      </Col>
                      <Col size={12} className="px-1">
                        <Form.Control
                          as="textarea"
                          rows="6"
                          name="message"
                          placeholder="Mensagem"
                          required
                        />
                        <Reaptcha
                          ref={(e) => setCaptcha(e)}
                          sitekey="6Lc3zbskAAAAABxWOyiQ1HoWGdmi3zDvQmtJ0uXk"
                          onVerify={onVerify}
                          size="invisible"
                        />
                        <Button
                          onClick={() => captcha.execute()}
                          type="submit"
                          value="Send"
                        >
                          <span>{buttonText}</span>
                        </Button>
                      </Col>
                    </Row>
                  </Form>
                  <br></br>
                  {result && (
                    <Alert
                      variant="success"
                      onClose={() => setResult(false)}
                      dismissible
                    >
                      <Alert.Heading>Sucesso!</Alert.Heading>
                      <p>Mensagem enviada com sucesso!</p>
                    </Alert>
                  )}
                  {error && (
                    <Alert
                      variant="danger"
                      onClose={() => setError(false)}
                      dismissible
                    >
                      <Alert.Heading>Erro!</Alert.Heading>
                      <p>Ocorreu um erro inesperado!</p>
                    </Alert>
                  )}
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
