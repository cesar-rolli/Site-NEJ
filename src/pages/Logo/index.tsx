import React from "react";

import { 
  Container, 
  Logo
} from "./styles";

import nejpoa from '../../assets/nejpoa.png';

const Erro404: React.FC = () => {
  return (
    <Container>
      <Logo src={nejpoa} />
    </Container>
  );
};

export default Erro404;