import React, {  } from "react";

import { Container } from "./styles";

import Header from "../../components/Header";
import Contato from "../../components/Contato";

const Rede: React.FC = () => {
  return (
    <Container>
      <Header />

      <h1>Rede NEJ POA</h1>
      <Contato />
    </Container>
  );
};

export default Rede;