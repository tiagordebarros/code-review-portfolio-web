import { useState } from "react";
import { Form, Button, Col, Row, Alert } from "react-bootstrap";
import Reaptcha from 'reaptcha';
import axios from "axios";

export function Newsletter() {
  const [email, setEmail] = useState('');
  const [sending, setSending] = useState(false);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [message, setMessage] = useState('');
  const [captcha, setCaptcha] = useState(null);

  const onVerify = (recaptchaResponse) => console.log(recaptchaResponse);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);
      axios.post("http://localhost:5000/subscribe/", { email: email })
      .then((response) => {
        setSending(false);
        setSuccess(true);
        setMessage(response.statusText);
        setTimeout(() => {
          setSuccess(false);
        }, 5000);
        return response.data;
      })
      .catch((error) => {
        setSending(false);
        setError(true);
        setMessage(error.message);
        console.log(error.message);
        setTimeout(() => {
          setError(false);
        }, 5000);
        throw new Error(error.message);
      });
  };

  return (
    <Col lg={12}>
      <div className="newsletter-bx wow slideInUp">
        <Row>
          <Col lg={6} md={6} xl={5}>
            <h3>Assine nossa Newsletter.<br></br>Não enviamos spam.</h3>
            { sending && <Alert>Enviando...</Alert>}
            { error && <Alert variant="danger">{message}</Alert> }
            { success && <Alert variant="success">{message}</Alert>}
          </Col>
          <Col md={6} xl={7}>
            <Form onSubmit={handleSubmit}>
              <Row className="new-email-bx">
                <Col sm={8}>
                <Form.Control value={email} type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Endereço de e-mail" />
                </Col>
                <Col sm={4}>
                <Reaptcha
                  ref={ (e) => setCaptcha(e) }
                  sitekey="6Lc3zbskAAAAABxWOyiQ1HoWGdmi3zDvQmtJ0uXk"
                  onVerify={onVerify}
                  size="invisible"
                />
                <Button onClick={ () => captcha.execute() } type="submit">Assinar</Button>
                </Col>
              </Row>
            </Form>
          </Col>
        </Row>
      </div>
    </Col>
  );
}
