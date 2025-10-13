import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../../styles/global.css';
import perfil from'../../assets/Img/Perfil.webp';
import { useNavigate } from 'react-router-dom';
import React from 'react';


function NavBar() {

  return (
    <Navbar className='Navbar-Margen'>
      <Container className="d-flex flex-column">
        <div className='Navbar-Superior'>
          <div>
            <Navbar.Brand href="/">
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
            <Nav.Link href="/">Inicio</Nav.Link>
            <NavDropdown title="Proyectos" id="basic-nav-dropdown" align="end">
              <NavDropdown.Item  href="/ProyectoDetalles/1">
                RageMusic
              </NavDropdown.Item>

              <NavDropdown.Divider style={{ backgroundColor: 'rgb(255, 255, 255)' }} />

              <NavDropdown.Item href="/ProyectoDetalles/2">
                Monitoreo de Cultivo
              </NavDropdown.Item>

              <NavDropdown.Divider style={{ backgroundColor: 'rgb(255, 255, 255)' }} />

              <NavDropdown.Item href="/ProyectoDetalles/3">
                Calculadora
              </NavDropdown.Item>
            </NavDropdown>

            <Nav.Link href="/Contacto">Contacto</Nav.Link>
            <Nav.Link href="/Noticias">Noticias</Nav.Link>
          </Nav>
        </div>
      </Container>

    </Navbar>
  );
}

export default NavBar;