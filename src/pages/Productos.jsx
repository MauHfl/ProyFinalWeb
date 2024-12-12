import React from 'react';
import { Card, CardImg, CardBody, CardTitle, CardText, Button, Row, Col, Container } from 'reactstrap';

const products = [
  {
    id: 1,
    name: 'Polera de Argentina con 3 estrellas',
    description: 'Representa a tu seleccón con esta polera.',
    image: 'https://fairplaybo.vtexassets.com/arquivos/ids/221170/ib3595.jpg?v=638222007548600000',
  },
  {
    id: 2,
    name: 'Raqueta de Tenis',
    description: 'Perfecta para jugadores de todos los niveles.',
    image: 'https://th.bing.com/th/id/OIP.jmEJjIjFAnJedm5iHgjk3AHaHa?rs=1&pid=ImgDetMain',
  },
  {
    id: 3,
    name: 'Balón Brazuca',
    description: 'Balón oficial del Mundial de Fútbol 2014.',
    image: 'https://http2.mlstatic.com/balon-de-futbol-brazuca-official-match-ball-nuevo-D_NQ_NP_672780-MLM27984193920_082018-F.jpg',
  },
  {
    id: 4,
    name: 'Aletas de Natación',
    description: 'Aumenta tu rendimiento en el agua.',
    image: 'https://dojiw2m9tvv09.cloudfront.net/17331/product/X_aletas-natacion-pp-hydro-foto-014509.jpg?51&time=1733577622',
  },
  {
    id: 5,
    name: 'Guantes de Boxeo',
    description: 'Protección y confort para tus entrenamientos de boxeo.',
    image: 'https://m.media-amazon.com/images/I/81j4hikzszL._AC_SL1500_.jpg',
  },
  {
    id: 6,
    name: 'Bicicleta de Montaña',
    description: 'Diseñada para aventuras todoterreno.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsc9l6SDxf7k6yYIZCn3AD0LcNsNaFWeawjA&s',
  },
  {
    id: 7,
    name: 'Tabla de Surf',
    description: 'Ideal para principiantes y expertos en el surf.',
    image: 'https://rusty.com.ar/cdn/shop/products/THEKEG_1.jpg?v=1673380339',
  },
  {
    id: 8,
    name: 'Mancuernas Ajustables',
    description: 'Personaliza tu rutina de entrenamiento con estas mancuernas.',
    image: 'https://m.media-amazon.com/images/I/61jau6tusOL._AC_UF894,1000_QL80_.jpg',
  },
];

function Productos() {
  return (
    <Container className="my-5">
      <h1 className="text-center mb-4">Productos Deportivos</h1>
      <Row>
        {products.map((product) => (
          <Col sm="12" md="6" lg="3" key={product.id} className="mb-4">
            <Card className="shadow-sm border-0 rounded">
              <CardImg top width="100%" src={product.image} alt={product.name} />
              <CardBody>
                <CardTitle tag="h5" className="text-center">{product.name}</CardTitle>
                <CardText className="text-muted">{product.description}</CardText>
                <div className="text-center">
                  <Button color="success" size="sm">Comprar</Button>
                </div>
              </CardBody>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Productos;
