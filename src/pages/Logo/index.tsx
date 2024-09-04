import React from "react";

import { 
  Container, 
  Logo
} from "./styles";

import nejpoa from '../../assets/nejpoa.png';

const ImgLogo: React.FC = () => {
  return (
    <Container>
      <Logo src={nejpoa} />
    </Container>
  );
};

export default ImgLogo;