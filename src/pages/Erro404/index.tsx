import React from "react";

import { 
  Container, 
  Wrapper,
  Links,
} from "./styles";
import Header from "../../components/Header";
import Contato from "../../components/Contato";
import { Helmet } from "react-helmet";

const Erro404: React.FC = () => {
  return (
    <Container>
      <Header />
      <Wrapper>
        <Helmet>
          <title>NEJ POA - Erro</title>
          <meta property="og:image" content="../../assets/nejpoa.png" />
        </Helmet>
        <h1>Oops... Essa página não existe.</h1>
        <h2>Retorne para a página inicial clicando no botão abaixo</h2>
        <Links to={"/"}><p>Página inicial</p></Links>
      </Wrapper>
      <Contato />
    </Container>
  );
};

export default Erro404;