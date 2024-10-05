import React from "react";

import { Container, ContainerDetalhes, FaleConosco } from "./styles";

import Header from "../../components/Header";
import Contato from "../../components/Contato";
import EventosComponent from "../../components/EventosComponent";
import { Helmet } from "react-helmet";

const Eventos: React.FC = () => {
  return (
    <Container>
      <Helmet>
        <title>NEJ POA - Eventos</title>
        <meta property="og:image" content="../../assets/nejpoa.png" />
      </Helmet>
      <Header />

      <h1>Eventos</h1>
      <EventosComponent />
      <ContainerDetalhes>
        <h2>AlmiraNEJ</h2>
        <p>Pensado em guiar o empresário júnior na sua jornada de trainee à diretoria, o Almira visa trazer pessoas que foram do MEJ para orientar em cada etapa da vida dentro da EJ e sugerir qual vai ser o próximo passo.</p>
        <h2>HackaNEJ</h2>
        <p>Para sua realização, palestrantes dão capacitações estratégicas desde metodologias de como solucionar um problema até como fazer um pitch. Intercalado com as palestras, apresentamos um problema atual e presentes nas empresas. Então as EJs são separadas em grupos, onde o NEJ POA juntamente com os palestrantes, passam a mentorar para solucionarem os problemas e apresentar a solução aos jurados.</p>
        <h2>InterNEJ</h2>
        <p>Pensando em voltar as origens do NEJ POA, o InterNEJ serve para integrar as EJ's através de competição em esportes e premiar as vencedoras dentre todas as EJ's da Rede.</p>
        <h2>DecolaNEJ</h2>
        <p>Sendo o maior evento do NEJ POA e pensando em atingir todas as EJs, o Decola traz momentos de capacitação e proporciona construção entre EJs, diversas pautas sobre gestão de projetos, gestão pessoal, comercial e tópicos que serão demandados pelas EJs no momento de construção do evento. Como o Decola é o ponto de maior proximidade entre o NEJ POA e a rede, serve para dar motivação e ferramentas necessárias para a rede alcançar os resultados almejados.</p>
      </ContainerDetalhes>
      <a href="mailto:contato@nejpoa.com.br">
        <FaleConosco><p>Entre em contato!</p></FaleConosco>
      </a>
      <Contato />
    </Container>
  );
};

export default Eventos;