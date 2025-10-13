import React from 'react';
import { Card } from 'react-bootstrap';
import Button from '../atoms/Button';
import CardBody from '../molecules/CardBody';

function NoticiasCard({ noticia }) {

  if (!noticia) {
    return <p style={{ color: 'red' }}>Noticia no disponible</p>;
  }


  return (
    <Card className="m-2 w-100" style={{backgroundColor:'rgb(116, 127, 248)', color:'white', border: 'solid rgb(125, 215, 251) 3px' }}>
      <Card.Body>
        <CardBody
          title={noticia.title}
          description={noticia.description}
        />
      </Card.Body>
    </Card>
  );
}

export default NoticiasCard;
