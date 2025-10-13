import React from 'react';
import Button from '../atoms/Button';
import { useNavigate } from 'react-router-dom';
import '../../styles/global.css'
import Container from 'react-bootstrap/Container';

function Volver(){
    
    const Link = useNavigate();

    const handleClick = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setTimeout(() => {
      Link('/'); 
        }, 2000);
    };

      

    return(
        <Container>
            <Button href="/" className='redondear' onClick={handleClick}>
                ↑
            </Button>
        </Container>
    )
        
}
export default Volver;