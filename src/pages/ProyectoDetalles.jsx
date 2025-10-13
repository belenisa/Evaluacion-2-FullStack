import React from 'react';
import { Container, Card } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import producto from '../data/Proyecto.js';
import Image from '../components/atoms/Image.jsx';
import Text from '../components/atoms/Text.jsx';
import { height, width } from '@fortawesome/free-brands-svg-icons/fa11ty';
import { useNavigate } from 'react-router-dom';

function ProyectoDetalles() {
  const { id } = useParams();
  const product = producto.find((p) => p.id === parseInt(id));

  if (!product) {
    return (
      <Container className="my-5">
        <h1>Producto no encontrado</h1>
      </Container>
    );
  }

  return (
    <Container className="my-5">
      <Card style={{backgroundColor: 'rgb(2, 0, 52)'}}>
        <Image src={product.image} alt={product.name} className="card-img-top" style={{height: '20rem', width: '100%', objectFit: 'contain'}}/>
        <Card.Body style={{color: 'rgb(255, 255, 255)'}} >
          <Text variant="h2">{product.name}</Text>
          <Text variant="p">{product.description}</Text>
          <Text variant="h5">
            <a style={{cursor:'pointer'}} onClick={()=> window.open(product.enlace, '_blank')}>
            {product.enlace}
            </a>
          </Text>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default ProyectoDetalles;