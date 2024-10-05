import React, { useState } from "react";

import { 
  Before,
  Carrossel,
  Container, 
  Foto, 
  Next,
} from "./styles";

import foto0 from '../../assets/eventos/foto0.webp';
import foto1 from '../../assets/eventos/foto1.webp';
import foto2 from '../../assets/eventos/foto2.webp';
import foto3 from '../../assets/eventos/foto3.webp';
import foto4 from '../../assets/eventos/foto4.webp';
import foto5 from '../../assets/eventos/foto5.webp';
import foto6 from '../../assets/eventos/foto6.webp';
import foto7 from '../../assets/eventos/foto7.webp';
import foto8 from '../../assets/eventos/foto8.webp';

interface Fotos {
  nome: string;
}
const ListaFotos: Array<Fotos> = [
  {nome: foto0},
  {nome: foto1},
  {nome: foto2},
  {nome: foto3},
  {nome: foto4},
  {nome: foto5},
  {nome: foto6},
  {nome: foto7},
  {nome: foto8},
]

const EventosComponent: React.FC = () => {
  const [indice, setIndice] = useState(0);
  const handleClickNext = () => {
    if (window.innerWidth >= 960){
      setIndice(indice + 3);
      if (indice === (ListaFotos.length - 3)) {setIndice(indice => indice = 0)}
    } else {
      setIndice(indice + 1);
      if (indice === (ListaFotos.length - 3)) {setIndice(indice => indice = 0)}
    }    
  }
  const handleClickBefore = () => {
    if (window.innerWidth >= 960){
      setIndice(indice - 3);
      if (indice === 0) {setIndice(indice => indice = ListaFotos.length - 3)}
    } else {
      setIndice(indice - 1);
      if (indice === 0) {setIndice(indice => indice = ListaFotos.length - 3)}
    }
  }

  return(
    <Container>
      <Before onClick={handleClickBefore} />
      <Carrossel>
        <Foto src={ListaFotos[indice].nome} />
        <Foto 
          src={ListaFotos[indice + 1].nome}
          className="celular" />
        <Foto 
          src={ListaFotos[indice + 2].nome}
          className="celular" />
      </Carrossel>
      <Next onClick={handleClickNext} />
    </Container>
  )
}

export default EventosComponent;