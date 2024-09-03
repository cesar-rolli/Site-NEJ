import React from "react";

import { 
  Container, 
  ContainerContato, 
  InstagramIcon, 
  LinkedinIcon, 
  ListaContatos, 
  MailIcon, 
  MeioContato, 
  NejPoaContato 
} from "./styles";

import nejpoa from '../../assets/nej.png';

const Contato: React.FC = () => {
  return(
    <Container>
      <ContainerContato>
        <NejPoaContato src={nejpoa} />
        <ListaContatos>
          <MeioContato href="https://www.instagram.com/nejpoa">
            <InstagramIcon />
          </MeioContato>
          <MeioContato href="https://www.linkedin.com/company/nejpoa">
            <LinkedinIcon />
          </MeioContato>
          <MeioContato href="mailto:contato@nejpoa.com.br">
            <MailIcon />
          </MeioContato>
        </ListaContatos>
      </ContainerContato>
      <p>2024 | Núcleo das Empresas Juniores de Porto Alegre </p>
    </Container>
  );
};

export default Contato;  