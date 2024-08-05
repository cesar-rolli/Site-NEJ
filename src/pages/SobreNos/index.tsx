import React from "react";

import {
  Container, 
  ContainerSobreNos, 
  Descricao, 
  SobreNosImage,
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
        <SobreNosImage src={sobrenos2}/>
        <Descricao>
          <h2>REPRESENTAMOS A REDE</h2>
          <p>através de nossa diversidade, frente às instituições e no ecossistema empreendedor.</p>
        </Descricao>
      </ContainerSobreNos>
      <ContainerSobreNos>
        <SobreNosImage src={sobrenos3}/>
        <Descricao>
          <h2>ENGAJAMOS A REDE</h2>
          <p>sendo exemplo, através de eventos de qualidade para capacitar, unir e desenvolver nossos empreendedores, por meio de nosso conselho e prestando suporte de excelência.</p>
        </Descricao>
      </ContainerSobreNos>
      <ContainerSobreNos>
        <SobreNosImage src={sobrenos4}/>
        <Descricao>
          <h2>FORTALECEMOS A REDE</h2>
          <p>por meio de parcerias e de uma jornada complementar para a empresa júnior.</p>
        </Descricao>
      </ContainerSobreNos>
      
      <Contato />
    </Container>
  );
};

export default SobreNos;  