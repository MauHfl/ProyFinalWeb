import React from 'react';
import { Container, Row, Col } from 'reactstrap';

function Nosotros() {
  return (
    <Container className="about-container py-5">
      <Row>
        <Col sm="12" md="4" className="mb-4">
          <img
            src="https://www.datasur.com/wordpress/wp-content/uploads/elementor/thumbs/importaciones-deportivas-datasur-qggoyjwnrlxvxnuatqny4fnrgqvk51a1foucrodyio.png"
            alt="Artículos deportivos"
            className="img-fluid rounded shadow"
          />
        </Col>

        <Col sm="12" md="8">
          <h1>Nosotros</h1>
          <p>
            Bienvenidos a nuestra tienda de artículos deportivos, donde nos dedicamos a ofrecer los mejores productos para tu rendimiento deportivo. Con más de 10 años de experiencia en el mercado, nos hemos establecido como líderes en la venta de equipos deportivos de alta calidad.
          </p>
          <p>
            Nuestra misión es brindarte un servicio excepcional, ofreciéndote productos que se adapten a tus necesidades y te ayuden a alcanzar tus metas. Desde entrenadores certificados hasta reparaciones de equipos, estamos aquí para apoyarte en cada paso de tu viaje deportivo.
          </p>
          <p>
            Además de nuestra tienda física, ofrecemos una plataforma en línea para que puedas realizar tus compras de manera cómoda y rápida, con envíos a todo el país. Nuestro equipo de expertos está siempre disponible para asesorarte y garantizar que encuentres todo lo que necesitas para tu deporte favorito.
          </p>
          <p>
            ¡Gracias por elegirnos! Esperamos poder acompañarte en tu camino hacia el éxito deportivo.
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default Nosotros;
