import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../../styles/global.css';
import { Link } from 'react-router-dom';
import perfil from'../../assets/Img/Perfil.webp';
import { useNavigate } from 'react-router-dom';
import React from 'react';


function NavBar() {

  return (
    <Navbar className='Navbar-Margen'>
      <Container className="d-flex flex-column">
        <div className='Navbar-Superior'>
          <div>
            <Navbar.Brand as={Link} to="/">
              <img className='Perfil' src={perfil} alt="Perfil"/>
              <span  className='Navbar-Texto'> Mi portafolío </span>
            </Navbar.Brand>
          </div>

          <div>
            
          </div>
        </div>
      </Container>

      <Container className="d-flex justify-content-center">
        <div className='Navbar-Inferior'>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          
          <Nav className="w-100 justify-content-evenly">
            <Nav.Link as={Link} to="/">Inicio</Nav.Link>
            <NavDropdown title="Proyectos" id="basic-nav-dropdown" align="end">
              <NavDropdown.Item  as={Link} to="/ProyectoDetalles/1">
                RageMusic
              </NavDropdown.Item>

              <NavDropdown.Divider style={{ backgroundColor: 'rgb(255, 255, 255)' }} />

              <NavDropdown.Item as={Link} to="/ProyectoDetalles/2">
                Monitoreo de Cultivo
              </NavDropdown.Item>

              <NavDropdown.Divider style={{ backgroundColor: 'rgb(255, 255, 255)' }} />

              <NavDropdown.Item as={Link} to="/ProyectoDetalles/3">
                Calculadora
              </NavDropdown.Item>
            </NavDropdown>

            <Nav.Link as={Link} to="/Contacto">Contacto</Nav.Link>
            <Nav.Link as={Link} to="/Noticias">Noticias</Nav.Link>
          </Nav>
        </div>
      </Container>

    </Navbar>
  );
}

export default NavBar;