import React, { useState } from "react";

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

import nejpoa from '../../assets/nejpoa-colorido.png';

const Contato: React.FC = () => {
  
  const [fillInstagram, setFillInstagram] = useState(true);
  const [fillLinkedin, setFillLinkedin] = useState(true);
  const [fillMail, setFillMail] = useState(true);

  const fillInstagramIcon = () => {
    setFillInstagram(!fillInstagram);
  }
  const fillLinkedinIcon = () => {
    setFillLinkedin(!fillLinkedin);
  }
  const fillMailIcon = () => {
    setFillMail(!fillMail);
  }

  return(
    <Container>
      <ContainerContato>
        <NejPoaContato src={nejpoa} />
        <ListaContatos>
          <MeioContato 
            href="https://www.instagram.com/nejpoa"
            onMouseEnter={fillInstagramIcon}
            onMouseLeave={fillInstagramIcon}>
            <InstagramIcon className={fillInstagram ? "" : "fillInstagramIcon"}/>
            <h1>@nejpoa</h1>
          </MeioContato>
          <MeioContato 
            href="https://www.linkedin.com/company/nejpoa"
            onMouseEnter={fillLinkedinIcon}
            onMouseLeave={fillLinkedinIcon}>
            <LinkedinIcon className={fillLinkedin ? "" : "fillLinkedinIcon"}/>
            <h1>linkedin.com/company/nejpoa</h1>
          </MeioContato>
          <MeioContato
            href="mailto:contato@nejpoa.com.br"
            onMouseEnter={fillMailIcon}
            onMouseLeave={fillMailIcon}>
            <MailIcon className={fillMail ? "" : "fillMailIcon"}/>
            <h1>contato@nejpoa.com.br</h1>
          </MeioContato>
        </ListaContatos>
      </ContainerContato>
      <p>2024 | Núcleo das Empresas Juniores de Porto Alegre </p>
    </Container>
  );
};

export default Contato;  