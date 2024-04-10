import React from 'react';
import Laptop from './Laptop';
import Boxes from './Boxes';
import { Container } from '../common/styled';

const MiniBoxes = () => {
  return (
        <Container>
            <Laptop /> 
            <Boxes/>
        </Container>  
  )
}

export default MiniBoxes