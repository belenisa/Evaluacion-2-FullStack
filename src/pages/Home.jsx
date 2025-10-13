import React from 'react';
import '../styles/Home.css';
import '../styles/Proyecto.css'
import '../styles/Contacto.css'
import perfil from'../assets/Img/Perfil.webp';
import Proyecto from './Proyecto';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faGithub } from '@fortawesome/free-brands-svg-icons';
import Noticias from './Noticias';
import Contacto from './Contacto';


function Home() {
  return (
    <>
      <section id="intro" class="container-fluid fondoHome">
        <img className='Perfil-Home' src={perfil} alt="Perfil"/>
        <h1>Belén</h1>
        <p>Estudiante dn Analista en Programacion del {' '}
          <span onClick={()=> window.open('https://www.duoc.cl/')} style={{cursor:'pointer'}}>
            DUOC UC
          </span> 
        </p>
        <p>https://github.com/belenisa</p>
        <p>Bienvenido a mi portafolio personal donde comparto mis proyectos</p>
      
        <p class="social-icons">
          <a href="https://web.facebook.com/belen.alarcon.529236/">
            <FontAwesomeIcon icon={faFacebookF}/>
          </a>
          <a href="https://github.com/belenisa/Miportafolio" class="fab fa-github">
              <FontAwesomeIcon icon={faGithub}/>
          </a>
        </p>
      </section>

      <section> 
          <Proyecto/>
      </section>

      <section>
        <Noticias/>
      </section>

      <section>
        <Contacto/>
      </section>


    </>
  );
}
export default Home;