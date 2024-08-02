import React, { useState } from "react";

import { 
  Container, 
  ServicosRede, 
  Foto, 
  ListaArea,
  Areas,
  DropDown,
  DropDownIcon,
  LegendaLista,
  AreaEJs
} from "./styles";

import Header from "../../components/Header";
import Contato from "../../components/Contato";

import rede from "../../assets/rede-1.png";

const Rede: React.FC = () => {
  const [active, setActive] = useState(true);
  const [rotate, setRotate] = useState(true);
  const handleClick = () => {
    setActive(!active);
    setRotate(!rotate);
  }

  const print0 = () => {
    console.log("0")
  }
  const print1 = () => {
    console.log("1")
  }
  const print2 = () => {
    console.log("2")
  }
  const print3 = () => {
    console.log("3")
  }
  const print4 = () => {
    console.log("4")
  }
  const print5 = () => {
    console.log("5")
  }
  const print6 = () => {
    console.log("6")
  }
  const print7 = () => {
    console.log("7")
  }
  const print8 = () => {
    console.log("8")
  }
  const print9 = () => {
    console.log("9")
  }

  return (
    <Container>
      <Header />

      <h1>Rede NEJ POA</h1>
      <Foto src={rede} />
      <h2>Nossa Rede é muito grande e diversa, então selecione abaixo a área de seu interesse.</h2>

      <ListaArea onClick={handleClick}>
        <LegendaLista>
          <p>Selecione a área</p>
          <DropDownIcon className={rotate ? "" : "rotate"} />
        </LegendaLista>
        <DropDown className={active ? "" : "active"}>
          <Areas onClick={print0}>Administração</Areas>
          <Areas onClick={print1}>Agronomia</Areas>
          <Areas onClick={print2}>Contabilidade</Areas>
          <Areas onClick={print3}>Design</Areas>
          <Areas onClick={print4}>Direito</Areas>
          <Areas onClick={print5}>Engenharia</Areas>
          <Areas onClick={print6}>Geociências</Areas>
          <Areas onClick={print7}>Química</Areas>
          <Areas onClick={print8}>Saúde</Areas>
          <Areas onClick={print9}>Relações Internacionai</Areas>
        </DropDown>
      </ListaArea>
      <AreaEJs>
      </AreaEJs>
      
      <a href="https://drive.google.com/file/d/1uWfHNtc5fqWu3stMmTbpCRHnDBvBbNun/view?usp=sharing">
        <ServicosRede><p>Veja os serviços da nossa rede!</p></ServicosRede>
      </a>
      <Contato />
    </Container>
  );
};

export default Rede;