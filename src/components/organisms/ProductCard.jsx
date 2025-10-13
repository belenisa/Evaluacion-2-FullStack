import React from 'react';
import { Card } from 'react-bootstrap';
import Image from '../atoms/Image';
import Button from '../atoms/Button';
import CardBody from '../molecules/CardBody';
import { useNavigate } from 'react-router-dom';


function ProductCard({ producto }) {
  const navigate = useNavigate();
  
  if (!producto) {
    return <p style={{ color: 'red' }}>Producto no disponible</p>;
  }


  return (
    <Card style={{ width: '25rem', backgroundColor:'rgb(2, 0, 52)', color:'white', border:' solid rgb(125, 215, 251) 3px' }} className="m-2"> 
      <Image src={producto.image} alt={producto.name} className="card-img-top" style={{height: '15rem', width: '100%', objectFit: 'contain'}} />
      <Card.Body>
        <CardBody
          title={producto.name}
          description={producto.description}
          enlace={producto.enlace}
        />
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop:'1.5rem' }}>
          <Button variant="primary" onClick={() => navigate(`/ProyectoDetalles/${producto.id}`)}>
            Ver detalles
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;