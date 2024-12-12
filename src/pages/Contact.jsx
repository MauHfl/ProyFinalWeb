import React from 'react';
import { Container, Form, Row, Col, FormGroup, Label, Input, Button } from 'reactstrap';

function Contact() {
  return (
    <Container className="mt-5">
      <h1>Contacto</h1>
      <p>Si tienes preguntas sobre nuestros artículos deportivos, envíanos un mensaje y te responderemos lo antes posible.</p>
      <Form>
        <Row>
          <Col md={6}>
            <FormGroup>
              <Label for="name">Nombre</Label>
              <Input
                id="name"
                name="name"
                placeholder="Ingresa tu nombre"
                type="text"
              />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="email">Correo Electrónico</Label>
              <Input
                id="email"
                name="email"
                placeholder="Ingresa tu correo"
                type="email"
              />
            </FormGroup>
          </Col>
        </Row>
        <FormGroup>
          <Label for="address">Dirección</Label>
          <Input
            id="address"
            name="address"
            placeholder="1234 Calle Principal"
            type="text"
          />
        </FormGroup>
        <FormGroup>
          <Label for="message">Mensaje</Label>
          <Input
            id="message"
            name="message"
            placeholder="Cuéntanos sobre tus consultas o solicitudes"
            type="textarea"
            rows="5"
          />
        </FormGroup>
        <FormGroup check>
          <Input
            id="newsletter"
            name="newsletter"
            type="checkbox"
          />
          <Label
            check
            for="newsletter"
          >
            Deseo recibir información sobre promociones y nuevos productos
          </Label>
        </FormGroup>
        <Button color="primary" className="mt-3">Enviar</Button>
      </Form>
    </Container>
  );
}

export default Contact;

