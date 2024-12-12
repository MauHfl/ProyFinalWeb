// src/components/CarouselComponent.jsx
import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from 'reactstrap';

// Lista de imágenes para el carrusel
const items = [
  {
    src: 'https://fairplaybo.vtexassets.com/arquivos/ids/221170/ib3595.jpg?v=638222007548600000',
    key: 1,
  },
  {
    src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl8r1f5-n-Mjxma8hsDpl_uyAm_SpnPW2i7Q&s', 
    key: 2,
  },
  {
    src: 'https://sparta.cl/media/catalog/product/z/a/zapatillas-running-hombre-new-balance-gel-nimbus-25-celeste-exterior.png?quality=80&bg-color=255,255,255&fit=bounds&height=550&width=600&canvas=600:550', 
    key: 3,
  },
  {
    src: 'https://dojiw2m9tvv09.cloudfront.net/17331/product/X_aletas-natacion-pp-hydro-foto-014509.jpg?51&time=1733577622',  
    key: 4,
  },
  {
    src: 'https://www.admetricks.com/hubfs/ropa-deportiva.png',
    key: 5,
  },
  {
    src: 'https://m.media-amazon.com/images/I/51NhX5fdSEL.jpg',
    key: 6,
  },
];

function Carousel2() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  // Manejadores de la navegación del carrusel
  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  // Generar los slides del carrusel
  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} alt={item.altText} className="carousel-image" />
        <CarouselCaption
          captionText={item.caption}
          captionHeader={item.caption}
        />
      </CarouselItem>
    );
  });

  return (
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
    >
      <CarouselIndicators
        items={items}
        activeIndex={activeIndex}
        onClickHandler={goToIndex}
      />
      {slides}
      <CarouselControl
        direction="prev"
        directionText="Previous"
        onClickHandler={previous}
      />
      <CarouselControl
        direction="next"
        directionText="Next"
        onClickHandler={next}
      />
    </Carousel>
  );
}

export default Carousel2;
