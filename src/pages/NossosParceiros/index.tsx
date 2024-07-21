import React, {  } from "react";

import { Container } from "./styles";

import Header from "../../components/Header";
import Contato from "../../components/Contato";

const NossosParceiros: React.FC = () => {
  return (
    <Container>
      <Header />

      <h1>Parceiros</h1>
      <Contato />
    </Container>
  );
};

export default NossosParceiros;