import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Noticia from '../data/Noticia';
import NoticiasCard from '../components/organisms/NoticiasCard'; 
import '../styles/Noticia.css'

function Noticias() {
  return (
    <section className='fondoNoticia'>
      <h1>Noticias</h1>
      <hr className="linea-separadora" />
      <Row className="justify-content-center">
        {Noticia.map((relleno) => (
          <Col key={relleno.id} md={4}>
            <NoticiasCard noticia={relleno} />
          </Col>
        ))}
      </Row>
    </section>
  );
}

export default Noticias;