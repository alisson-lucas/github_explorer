import React from 'react';

import { Container } from './styles';
import Load from '../../../img/load.gif';

const Loader: React.FC = () => {
  return (
    <Container>
      <img src={Load} alt="loader"/>
    </Container>
  );
}

export default Loader;