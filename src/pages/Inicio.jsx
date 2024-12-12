import React from 'react';
import { Button } from 'reactstrap';
import Carousel2 from '../components/Carousel2';
import { CardGroup, Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText } from 'reactstrap';

function Inicio() {
  return (
    <div className="text-center home-page">
      <div className="welcome-section my-5">
        <h1 className="welcome-title">Bienvenido a Tienda Deportiva JoseSports</h1>
        <p className="welcome-text">Encuentra los mejores productos para tus deportes favoritos.</p>
        <Carousel2 />
      </div>
      
      <div className="featured-products mt-4">
        <h2 className="text-center">Productos Destacados</h2>
        <CardGroup>
          <Card>
            <CardImg
              alt="Polera de Argentina 3 estrellas"
              src="https://fairplaybo.vtexassets.com/arquivos/ids/221170/ib3595.jpg?v=638222007548600000"
              top
              width="100%"
            />
            <CardBody>
              <CardTitle tag="h5">Polera Argentina 3 estrellas</CardTitle>
              <CardSubtitle className="mb-2 text-muted" tag="h6">
                "Que mira bobo que miras"
              </CardSubtitle>
              <CardText>Representa a tu selección con esta polera.</CardText>
              <Button>Comprar</Button>
            </CardBody>
          </Card>
          <Card>
            <CardImg
              alt="Raqueta de tenis"
              src="https://th.bing.com/th/id/OIP.jmEJjIjFAnJedm5iHgjk3AHaHa?rs=1&pid=ImgDetMain"
              top
              width="100%"
            />
            <CardBody>
              <CardTitle tag="h5">Raqueta de tenis</CardTitle>
              <CardSubtitle className="mb-2 text-muted" tag="h6">
                Raqueta profesional
              </CardSubtitle>
              <CardText>Perfecta para tus partidos.</CardText>
              <Button>Comprar</Button>
            </CardBody>
          </Card>
          <Card>
            <CardImg
              alt="Zapatillas running"
              src="https://sparta.cl/media/catalog/product/z/a/zapatillas-running-hombre-new-balance-gel-nimbus-25-celeste-exterior.png?quality=80&bg-color=255,255,255&fit=bounds&height=550&width=600&canvas=600:550"
              top
              width="100%"
            />
            <CardBody>
              <CardTitle tag="h5">Zapatillas Running</CardTitle>
              <CardSubtitle className="mb-2 text-muted" tag="h6">
                Marca reconocida
              </CardSubtitle>
              <CardText>Amortiguación y comodidad para tus carreras.</CardText>
              <Button>Comprar</Button>
            </CardBody>
          </Card>
          <Card>
            <CardImg
              alt="Balón de fútbol"
              src="https://s03.s3c.es/imag/_v0/1200x655/8/4/c/balon-futbol-sensor-dreamstime.jpg"
              top
              width="100%"
            />
            <CardBody>
              <CardTitle tag="h5">Balón de Fútbol</CardTitle>
              <CardSubtitle className="mb-2 text-muted" tag="h6">
                Costuras reforzadas
              </CardSubtitle>
              <CardText>Ideal para partidos y entrenamientos.</CardText>
              <Button>Comprar</Button>
            </CardBody>
          </Card>
          <Card>
            <CardImg
              alt="Bicicleta de montaña"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsc9l6SDxf7k6yYIZCn3AD0LcNsNaFWeawjA&s"
              top
              width="100%"
            />
            <CardBody>
              <CardTitle tag="h5">Bicicleta de Montaña</CardTitle>
              <CardSubtitle className="mb-2 text-muted" tag="h6">
                Suspensión de alta calidad
              </CardSubtitle>
              <CardText>Perfecta para tus aventuras off-road.</CardText>
              <Button>Comprar</Button>
            </CardBody>
          </Card>
          <Card>
            <CardImg
              alt="Guantes de boxeo"
              src="https://m.media-amazon.com/images/I/81j4hikzszL._AC_SL1500_.jpg"
              top
              width="100%"
            />
            <CardBody>
              <CardTitle tag="h5">Guantes de Boxeo</CardTitle>
              <CardSubtitle className="mb-2 text-muted" tag="h6">
                Protección premium
              </CardSubtitle>
              <CardText>Guantes resistentes para entrenamiento y competencia.</CardText>
              <Button>Comprar</Button>
            </CardBody>
          </Card>
          <Card>
            <CardImg
              alt="Gorra deportiva"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu2lFngZEzSgY_8f4N9jkdmKXDobBU57fTzg&s"
              top
              width="100%"
            />
            <CardBody>
              <CardTitle tag="h5">Gorra Deportiva</CardTitle>
              <CardSubtitle className="mb-2 text-muted" tag="h6">
                Diseño ajustable
              </CardSubtitle>
              <CardText>Protección y estilo para tus actividades al aire libre.</CardText>
              <Button>Comprar</Button>
            </CardBody>
          </Card>
          <Card>
            <CardImg
              alt="Balon de Basquetball"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl8r1f5-n-Mjxma8hsDpl_uyAm_SpnPW2i7Q&s"
              top
              width="100%"
            />
            <CardBody>
              <CardTitle tag="h5">Balon de Basquetball</CardTitle>
              <CardSubtitle className="mb-2 text-muted" tag="h6">
                Balon profesional
              </CardSubtitle>
              <CardText>Hecho de goma resistente y durable.</CardText>
              <Button>Comprar</Button>
            </CardBody>
          </Card>
        </CardGroup>
      </div>
    </div>
  );
}

export default Inicio;
