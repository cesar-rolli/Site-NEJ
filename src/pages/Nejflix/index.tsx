import React from "react";

import { 
  Acessar,
  Container, 
  Email, 
  EsqueciSenha, 
  Senha 
} from "./styles";

import Header from "../../components/Header";

const Rede: React.FC = () => {
  return (
    <Container>
      <Header />

      <h1>NEJFLIX</h1>

      <Email />
      <Senha />
      <Acessar />
      <EsqueciSenha to={"/esqueci-senha"}/>
    </Container>
  );
};

export default Rede;