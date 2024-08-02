import React, { useState } from "react";

import {
  BlocoParceiros,
  Container, 
  LogoParceiro,
} from "./styles";

import bain from '../../assets/bain.png';
import bat from '../../assets/bat.png';
import lojasqq from '../../assets/lojasqq.png';
import v4 from '../../assets/V4.png';

const Parceiros: React.FC = () => {
  return(
    <Container>
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
    </Container>
  )
}

export default Parceiros;