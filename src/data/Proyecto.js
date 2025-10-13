import RageMusicImg  from '../assets/Img/RageMusic.webp'
import Imagen from '../assets/Img/Imagen1.webp'
import Calculadora from '../assets/Img/Calculadora.webp'
import App from '../App.jsx'

const producto = [
  {
    id: 1,
    name: 'Proyecto RageMusic',
    description: 'Creacion de una pagina web para RageMusic, con el fin de que puedan realizar ventas webs. Se utilizo Visual Studio para su desarrollo, ademas de las pruebas Jasmine y Karma ',
    enlace: 'https://belenisa.github.io/RageMusic/',
    image: RageMusicImg // Imagen placeholder
  },
  {
    id: 2,
    name: 'Producto Monitoreo de Cultivo',
    description: `AgroFértil S.A., empresa dedicada a la producción de berries en Chile, se identifican problemas clave que motivan esta propuesta tecnológica: una pérdida anual del 20% por causa de sequías y plagas, el uso manual de registros en papel para las labores de riego y fertilización, y la necesidad urgente de cumplir con normas de exportación, como la trazabilidad en el uso de pesticidas.
    Se utilizó Figma para mostrar una demo de la App.`,
    enlace: 'https://www.figma.com/proto/AveDKWiavdZe4saIv5XZdp/Sin-t%C3%ADtulo?node-id=1-60&t=mxvjAKINdbquTXaR-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A60&show-proto-sidebar=1',
    image: Imagen
  },
  {
    id: 3,
    name: 'Proyecto Calculadora',
    description: 'Proyecto personal, para comprender mejor el lenguaje HTML. Se utilizo Visual Studio para su desarrollo',
    enlace: 'https://belenisa.github.io/Calculadora/',
    image: Calculadora
  }
];

export default producto;