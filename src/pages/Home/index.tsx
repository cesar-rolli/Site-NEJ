import React, { useEffect, useState } from "react";

import { 
  ContainerParceiros,
  Container, 
  ContainerRede, 
  ContainerMissao, 
  Missao,
  ContainerSobreNos, 
  SobreNosImg, 
  ValoresRede, 
  Wrapper,
  ContainerEventos,
  Gasometro,
} from "./styles";

import Header from "../../components/Header";
import Contato from "../../components/Contato";

import time from '../../assets/time.png';
import gasometro from '../../assets/teste.png';
import Eventos from "../../components/EventosComponent";
import Parceiros from "../../components/Parceiros";

const Home: React.FC = () => {
  // VALORES DA REDE
  const [n_empresas, setN_empresas] = useState(0);
	useEffect(() => {
    if (n_empresas < 20) {
      setTimeout(() => setN_empresas(prev => prev += 1), 50)
		}
    if (n_empresas >= 20 && n_empresas < 30) {
      setTimeout(() => setN_empresas(prev => prev += 1), 80)
		}
	},[n_empresas])

  const [n_empresarios, setN_empresarios] = useState(0);
	useEffect(() => {
		if (n_empresarios < 400) {
			setTimeout(() => setN_empresarios(prev => prev += 1), 5)
		}
		if (n_empresarios >= 400 && n_empresarios < 430) {
			setTimeout(() => setN_empresarios(prev => prev += 1), 20)
		}
		if (n_empresarios >= 430 && n_empresarios < 440) {
			setTimeout(() => setN_empresarios(prev => prev += 1), 30)
		}
		if (n_empresarios >= 440 && n_empresarios < 445) {
			setTimeout(() => setN_empresarios(prev => prev += 1), 50)
		}
		if (n_empresarios >= 445 && n_empresarios < 450) {
			setTimeout(() => setN_empresarios(prev => prev += 1), 80)
		}
	},[n_empresarios])

  return (
    <Container>
      <Header />

      <Wrapper>
        <ContainerMissao>
          <Gasometro src={gasometro} />
          <Missao>
            <h1>Experiência<br/>Empresa Junior</h1>
            <ContainerRede>
              <ValoresRede>
                <h1>+{n_empresas}</h1>
                <p>Empresas Juniores associadas<br/>a Rede NEJ POA</p>
              </ValoresRede>
              <ValoresRede>
                <h1>+{n_empresarios}</h1>
                <p>Estudantes e Empresários Juniores<br/>na região metropolitana de Porto Alegre</p>
              </ValoresRede>
            </ContainerRede>
            <p>Somos o Núcleo que da suporte, fortalece o ecossistema gerando oportunidades para a rede, desenvolve e aprimora as EJ's da região metropolitana de Porto Alegre.</p>
          </Missao>
        </ContainerMissao>

        <ContainerEventos>
          <h1>Eventos</h1>
          <Eventos />
        </ContainerEventos>

        <ContainerParceiros>
          <h1>Parceiros</h1>
          <Parceiros />
        </ContainerParceiros>

        <ContainerSobreNos>
          <h1>Sobre Nós</h1>
          <h2>Somos pós juniores das EJs da nossa Rede, unidos pelo propósito do NEJ POA, dando continuidade a uma jornada de liderança e empreendedorismo, agora voltada ao desenvolvimento das empresas juniores. <br/><br/>
            Nosso dia a dia é corrido, somos de universidades, cursos, EJ's e principalmente realidades diferentes, mas nos unimos em prol de um objetivo maior. Somos quando estamos juntos, nos apoiamos e comemoramos a cada vitória.</h2>
          <SobreNosImg src={time}/>
        </ContainerSobreNos>

        <Contato />
      </Wrapper>
    </Container>
  );
};

export default Home;