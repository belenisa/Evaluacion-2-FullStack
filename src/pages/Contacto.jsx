import React, { useState } from 'react';
import '../styles/Contacto.css';

import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { Button, Alert } from 'react-bootstrap';

function Contacto() {
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [mostrarAlerta, setMostrarAlerta] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (nombre.trim() === '') {
      setMostrarAlerta(true);
    } else {
      setMostrarAlerta(false);
      console.log('Formulario enviado con nombre:', nombre);
      // Aquí podrías agregar lógica para enviar el formulario
    }
  };

  return (
    <section className='fondoContacto'>
      <hr />
      <h1>Contacto</h1>
      <Form onSubmit={handleSubmit}>
        <InputGroup className="mb-3">
          <InputGroup.Text id="basic-addon1">Nombre</InputGroup.Text>
          <Form.Control
            placeholder="Nombre"
            aria-label="Nobre"
            aria-describedby="basic-addon1"
            className="form-control"
            id="name"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
          />
        </InputGroup>

        
        <InputGroup className="mb-3">
          <Form.Control
            placeholder="Usuario"
            aria-label="Correo"
            aria-describedby="basic-addon2"
            className="form-control"
            id="correo"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
            required
          />
          <InputGroup.Text id="basic-addon2">@gmail.com</InputGroup.Text>
        </InputGroup>


        <h4>Mensaje</h4>
        <InputGroup style={{ height: '8rem' }}>
          <Form.Control
            placeholder="Mesaje"
            aria-label="Mesaje"
            aria-describedby="basic-addon2"
            className="form-control"
            id="mensaje"
            value={mensaje}
            onChange={(e) => setMensaje(e.target.value)}
            required
          />
        </InputGroup>

        <Button type="submit" className="btn btn-primary" variant="primary">
          Enviar
        </Button>

        {mostrarAlerta && (
          <Alert variant="warning" className="mt-2">
            El campo "Nombre" no puede estar vacío.
          </Alert>
        )}


      </Form>
    </section>
  );
}

export default Contacto;