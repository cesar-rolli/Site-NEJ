import React from "react";

import { Container } from "./styles";

import Header from "../../components/Header";
import Contato from "../../components/Contato";
import EventosComponent from "../../components/EventosComponent";

const Eventos: React.FC = () => {
  return (
    <Container>
      <Header />

      <h1>Eventos</h1>
      <EventosComponent />
      <Contato />
    </Container>
  );
};

export default Eventos;