import React from 'react';
import {Row, Col } from 'react-bootstrap';
import producto from '../data/Proyecto';
import ProductCard from '../components/organisms/ProductCard';
import '../styles/Proyecto.css';

function Proyecto() {
  return (
    <section className="fondo" >
      <h1>Proyectos</h1>
      <Row>
        {producto.map((proyecto) => (
          <Col key={proyecto.id} md={4}>
            <ProductCard producto={proyecto} />
          </Col>
        ))}
      </Row>
    </section>
  );
}

export default Proyecto;