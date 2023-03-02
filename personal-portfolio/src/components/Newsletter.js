import { useState, useEffect } from "react";
import { Form, Button, Col, Row, Alert } from "react-bootstrap";

export function Newsletter({ status, message, onValidated }) {
  const [email, setEmail] = useState('');

  useEffect(() => {
    if (status === 'success')
      clearFields();
  }, [status]);

  const handleSubmit = (e) => {
    e.preventDefault();
    email &&
      email.indexOf("@") > -1 &&
      onValidated({
        EMAIL: email
      });
  };

  const clearFields = () => {
    setEmail('');
  };

  return (
    <Col lg={12}>
      <div className="newsletter-bx wow slideInUp">
        <Row>
          <Col lg={6} md={6} xl={5}>
            <h3>Assine nossa Newsletter.<br></br>Não enviamos spam.</h3>
            {status === 'sending' && <Alert>Enviando...</Alert>}
            {status === 'error' && <Alert variant="danger">{message}</Alert>}
            {status === 'success' && <Alert variant="success">{message}</Alert>}
          </Col>
          <Col md={6} xl={7}>
            <Form onSubmit={handleSubmit}>
              <Row className="new-email-bx">
                <Col sm={8}>
                <Form.Control value={email} type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Endereço de e-mail" />
                </Col>
                <Col sm={4}>
                <Button type="submit">Assinar</Button>
                </Col>
              </Row>
            </Form>
          </Col>
        </Row>
      </div>
    </Col>
  );
}
