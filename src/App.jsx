import { Routes, Route } from 'react-router-dom';
import NavBar from './components/organisms/Navbar';
import Home from './pages/Home';
import Proyectos from './pages/Proyecto';
import ProyectoDetalles from './pages/ProyectoDetalles';
import Volver from './components/molecules/BotonVolver';
import Contacto from './pages/Contacto'
import Noticias from './pages/Noticias'

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Proyectos" element={<Proyectos />} />
        <Route path="/ProyectoDetalles/:id" element={<ProyectoDetalles />} />
        <Route path="/Noticias" element={<Noticias/>} />
        <Route path="/Contacto" element={<Contacto/>} />
        
      </Routes>
      <Volver/>
    </>
  );
}

export default App;