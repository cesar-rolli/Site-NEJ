import React, {  } from "react";

import { Container, Divisor, LogoParceiro, WrapperIndividual, WrapperParceiros } from "./styles";

import Header from "../../components/Header";
import Contato from "../../components/Contato";

import bain from '../../assets/bain.png';
import bat from '../../assets/bat.png';
import lojasqq from '../../assets/lojasqq.png';
import v4 from '../../assets/V4.png';
import { Helmet } from "react-helmet";

const NossosParceiros: React.FC = () => {
  return (
    <Container>
      <Header />

      <Helmet>
          <title>NEJ POA - Parceiros</title>
          <meta property="og:image" content="../../assets/nejpoa.png" />
      </Helmet>
      <h1>Parceiros</h1>
      <WrapperParceiros>
        <WrapperIndividual>
          <a href='https://bit.ly/3zkQiCG'>
            <LogoParceiro src={bain}/>
          </a>
          <h1>Uma das maiores empresas de consultoria global, a Bain & Company ajuda os agentes de mudança mais ambiciosos do mundo a definir o futuro.</h1>
        </WrapperIndividual>
        <Divisor />
        <WrapperIndividual>
          <a href='https://bit.ly/3RMkHQJ'>
            <LogoParceiro src={bat}/>
          </a>
          <h1>A BAT (British American Tobacco) é a maior empresa de tabaco do mundo, presente em mais de 200 países. No Brasil, ela está presente em 6 estados incluindo o Rio Grande do Sul.</h1>
        </WrapperIndividual>
        <Divisor />
        <WrapperIndividual>
          <a href='https://bit.ly/3LR753e'>
            <LogoParceiro src={lojasqq}/>
          </a>
          <h1>Sendo uma das maiores varejistas do Brasil e fundada no Rio Grande do Sul, conta com mais de 300 lojas nos estados do sul do país, além de estar presente em São Paulo e Minas Gerais.</h1>
        </WrapperIndividual>
        <Divisor />
        <WrapperIndividual>
          <a href='https://bit.ly/3VGV6tB'>
            <LogoParceiro src={v4}/>
          </a>
          <h1>Com mais de 250 escritórios no Brasil, a V4 Company é uma assessoria de marketing focada em construir e otimizar o processo de vendas através da internet conectando pessoas que geram resultados com empresas que buscam vender mais.</h1>
        </WrapperIndividual>
      </WrapperParceiros>
      <Contato />
    </Container>
  );
};

export default NossosParceiros;