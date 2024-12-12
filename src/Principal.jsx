import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink, Container } from 'reactstrap';
import Inicio from './pages/Inicio';
import Productos from './pages/Productos';
import Contact from './pages/Contact';
import Services from './pages/Services';
import Comentarios from './pages/Comentarios';
import Footer from './components/Footer';
import './Estilos.css';  
import Nosotros from './pages/Nosotros';


function Principal() {
  return (
    <Router>
      <Navbar color="green" dark expand="md">
      <div className="titulo">
        <h1 className="tit">JoseSports</h1>
      </div>
        <Container>

          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink tag={Link} to="/">Inicio</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/productos">Productos</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/nosotros">Nosotros</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/contact">Contacto</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/services">Servicios</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/comentarios">Comentarios</NavLink>
            </NavItem>
          </Nav>
        </Container>
      </Navbar>

      <Container className="mt-4">
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/productos" element={<Productos />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="/comentarios" element={<Comentarios />} />
        </Routes>
      </Container>

      <Footer />
    </Router>
  );
}

export default Principal;

