import React, { useEffect, useState } from "react";

import { 
  BlocoParceiros,
  ContainerParceiros,
  Container, 
  Divisor, 
  ContainerRede, 
  LogoParceiro, 
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

import bain from '../../assets/bain.png';
import bat from '../../assets/bat.png';
import lojasqq from '../../assets/lojasqq.png';
import v4 from '../../assets/V4.png';
import sobrenos from '../../assets/sobre-nos-1.png';
import gasometro from '../../assets/teste.png';

interface Fotos {
  nome: string
  imagem: string
  valor: number
}

const fotos: Fotos[] = [
  {
    nome: 'foto0',
    imagem: '../../assets/eventos/foto0.png',
    valor: 0
  },{
    nome: 'foto1',
    imagem: '../../assets/eventos/foto1.png',
    valor: 1
  },{
    nome: 'foto2',
    imagem: '../../assets/eventos/foto2.png',
    valor: 2
  },{
    nome: 'foto3',
    imagem: '../../assets/eventos/foto3.png',
    valor: 3
  },
]

const Home: React.FC = () => {
  // VALORES DA REDE
  const [n_empresas, setN_empresas] = useState(0);
	useEffect(() => {
    if (n_empresas < 30) {
      setTimeout(() => setN_empresas(prev => prev += 1), 50)
		}
	},[n_empresas])

  const [n_empresarios, setN_empresarios] = useState(0);
	useEffect(() => {
		if (n_empresarios < 450) {
			setTimeout(() => setN_empresarios(prev => prev += 1), 5)
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
            <p>Somos o Núcleo que da suporte, fortalece o ecossistema gerando oportunidades para a rede, desenvolve e aprimora as EJ's da região metropolitana de Porto Alegre.</p>
            <Divisor />
            <ContainerRede>
              <ValoresRede>
                <h1>+{n_empresas}</h1>
                <p>Empresas Juniores associadas<br/>a Rede NEJ POA</p>
              </ValoresRede>
              <ValoresRede>
                <h1>+{n_empresarios}</h1>
                <p>Estudantes e Empresários Juniores<br/>na regiãometropolitana de Porto Alegre</p>
              </ValoresRede>
            </ContainerRede>
          </Missao>
        </ContainerMissao>

        <ContainerEventos>
          <h1>Eventos</h1>
        </ContainerEventos>

        <ContainerParceiros>
          <h1>Parceiros</h1>
          <BlocoParceiros>
            <a href='https://bit.ly/3zkQiCG'>
              <LogoParceiro src={bain}/>
            </a>
            <a href='https://bit.ly/3RMkHQJ'>
              <LogoParceiro src={bat}/>
            </a>
          </BlocoParceiros>
          <BlocoParceiros>
            <a href='https://bit.ly/3W0jiZx'>
              <LogoParceiro src={lojasqq}/>
            </a>
            <a href='https://bit.ly/3VGV6tB'>
              <LogoParceiro src={v4}/>
            </a>
          </BlocoParceiros>
        </ContainerParceiros>

        <ContainerSobreNos>
          <h1>Sobre Nós</h1>
          <h2>Somos pós juniores das EJs da nossa Rede, unidos pelo propósito do NEJ POA, dando continuidade a uma jornada de liderança e empreendedorismo, agora voltada ao desenvolvimento das empresas juniores. <br/><br/>
            Nosso dia a dia é corrido, somos de universidades, cursos, EJ's e principalmente realidades diferentes, mas nos unimos em prol de um objetivo maior. Somos quando estamos juntos, nos apoiamos e comemoramos a cada vitória.</h2>
          <SobreNosImg src={sobrenos}/>
        </ContainerSobreNos>

        <Contato />
      </Wrapper>
    </Container>
  );
};

export default Home;