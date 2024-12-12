import React from 'react';
import { Card, CardBody, CardTitle, CardText, Button } from 'reactstrap';

function Services() {
  return (
    <div className="services-container">
      <Card
        body
        className="my-2"
      >
        <CardBody>
          <CardTitle tag="h5">
            Entrenamiento Personalizado
          </CardTitle>
          <CardText>
            Contamos con entrenadores certificados para mejorar tu rendimiento deportivo.
          </CardText>
          <Button className="card-button">
            Más Información
          </Button>
        </CardBody>
      </Card>
      
      <Card
        body
        className="text-center"
      >
        <CardBody>
          <CardTitle tag="h5">
            Reparación de Equipos
          </CardTitle>
          <CardText>
            Reparamos tus artículos deportivos para que siempre estén en óptimas condiciones.
          </CardText>
          <Button className="card-button">
            Más Información
          </Button>
        </CardBody>
      </Card>
      
      <Card
        body
        className="text-end my-2"
      >
        <CardBody>
          <CardTitle tag="h5">
            Asesoramiento Deportivo
          </CardTitle>
          <CardText>
            Te ayudamos a elegir el equipo ideal según tus necesidades y deporte favorito.
          </CardText>
          <Button className="card-button">
            Más Información
          </Button>
        </CardBody>
      </Card>
    </div>
  );
}

export default Services;
