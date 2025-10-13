import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Home from '../../pages/Home';
import '@testing-library/jest-dom';

jest.mock('../../assets/Img/Perfil.webp', () => 'mocked-image.webp');

describe('Home Page', () => {
  it('renderiza el título de la página de inicio', () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );
    const title = screen.getByText('Belén');
    expect(title).toBeInTheDocument();
  });

  it('renderiza el párrafo de bienvenida', () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );
    const paragraph = screen.getByText((text) =>
      text.includes('Estudiante en Analista en Programación del') &&
      text.includes('DUOC UC')
    );
    expect(paragraph).toBeInTheDocument();
  });

  it('renderiza el contenedor de Bootstrap', () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );
    const container = screen.getByRole('img', { name: /perfil/i }).closest('section');
    expect(container).toHaveClass('container-fluid');
    expect(container).toHaveClass('fondoHome');
  });
});