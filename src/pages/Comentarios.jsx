import React from 'react';
import { Container, Row, Col, Card, CardBody, CardTitle, CardText } from 'reactstrap';

function Comentarios() {
  const testimonials = [
    {
      name: 'Lucía Fernández',
      feedback: 'Los productos son de gran calidad, y el servicio ha superado mis expectativas. ¡Totalmente recomendados!',
    },
    {
      name: 'Andrés Torres',
      feedback: 'Tuve una experiencia fantástica. La atención fue excepcional y me ayudaron con todo lo que necesitaba.',
    },
    {
      name: 'Claudia Morales',
      feedback: 'Los entrenamientos que ofrecen son muy completos y me han ayudado a mejorar mi rendimiento en poco tiempo.',
    },
    {
      name: 'Roberto Díaz',
      feedback: 'Excelente relación calidad-precio. Los envíos llegaron a tiempo y sin problemas.',
    },
    {
      name: 'Isabel Castro',
      feedback: 'Me encantó la atención al cliente. Son muy amables y se aseguran de que todo esté perfecto.',
    },
  ];

  return (
    <Container className="mt-5">
      <h1 className="text-center mb-4">Comentarios</h1>
      <Row>
        {testimonials.map((testimonial, index) => (
          <Col md={4} sm={6} xs={12} key={index} className="mb-4">
            <Card style={{ width: '100%' }}>
              <CardBody>
                <CardTitle tag="h5" className="text-primary">{testimonial.name}</CardTitle>
                <CardText>"{testimonial.feedback}"</CardText>
              </CardBody>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Comentarios;
