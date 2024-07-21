import React from "react";
import StackGrid from "react-stack-grid";

import { Container } from "./styles";

import Header from "../../components/Header";
import Contato from "../../components/Contato";

const Eventos: React.FC = () => {
  return (
    <Container>
      <Header />

      <h1>Eventos</h1>
      
      <StackGrid
        columnWidth={150}
      >
        <div key="key1">Item 1</div>
        <div key="key2">Item 2</div>
        <div key="key3">Item 3</div>
      </StackGrid>
      <Contato />
    </Container>
  );
};

export default Eventos;