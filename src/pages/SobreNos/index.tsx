import React from "react";

import {
  Container, 
  ContainerSobreNos, 
  SobreNosImage2,
} from './styles';

import Header from "../../components/Header";

import sobrenos2 from '../../assets/sobre-nos-2.png';
import sobrenos3 from '../../assets/sobre-nos-3.png';
import sobrenos4 from '../../assets/sobre-nos-4.png';
import Contato from "../../components/Contato";

const SobreNos: React.FC = () => {
  return(
    <Container>
      <Header />

      <h1>Sobre Nós</h1>
      <ContainerSobreNos>
        <SobreNosImage2 src={sobrenos2}/>
        <h2>REPRESENTAMOS A REDE<br/>através de nossa diversidade, frente às instituições e no ecossistema empreendedor.</h2>
      </ContainerSobreNos>
      <ContainerSobreNos>
        <h1>ENGAJAMOS A REDE<br/>sendo exemplo, através de eventos de qualidade para capacitar, unir e desenvolver nossos empreendedores, por meio de nosso conselho e prestando suporte de excelência.</h1>
        <SobreNosImage2 src={sobrenos3}/>
      </ContainerSobreNos>
      <ContainerSobreNos>
        <SobreNosImage2 src={sobrenos4}/>
        <h2>FORTALECEMOS A REDE<br/>por meio de parcerias e de uma jornada complementar para a empresa júnior.</h2>
      </ContainerSobreNos>
      
      <Contato />
    </Container>
  );
};

export default SobreNos;  