import React from 'react';
import Text from '../atoms/Text';

function CardBody({ title, description, enlace }) {
  return (
    <>
      <Text variant="h5">{title}</Text>
      <Text variant="p">{description}</Text>
      <Text variant="span"  style={{color:'white'}}>
        Link: {enlace}
      </Text>
    </>
  );
}

export default CardBody;