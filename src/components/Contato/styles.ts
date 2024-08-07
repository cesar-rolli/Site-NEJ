import styled, { css } from "styled-components";

import {
  Instagram,
  Linkedin,
  MailOutline
} from "../../styles/Icons";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  padding-bottom: 10vh;
  align-items: center;
  justify-content: center;
  text-align: center;
  background: var(--laranja);
  margin-top: 5vh;
  
  > p {
    padding: 3vh 0 0 0;
    width: 60vw;
    color: var(--branco-logo);
  }

  @media (min-width: 960px) {
    padding: 1vh 0;
    > p {
      padding: 3vh 0;
      width: 100vw;
    }
  }
`;

export const ContainerContato = styled.div`
  display: flex;
  flex-direction: column;
  width: 70vw;
  justify-content: center;
  align-items: center;

@media (min-width: 960px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const NejPoaContato = styled.img`
  width: 50vw;

  @media (min-width: 960px) {
    margin: 0;
    width: 20vw;
  }
`;

export const ListaContatos = styled.div`
  display: flex;
  flex-direction: row;
  width: 35vw;
  justify-content: space-between;

  @media (min-width: 960px) {
    width: 10vw;
  }
`;

export const MeioContato = styled.a`
  display: flex;
  text-decoration: none;
  align-items: center;

  > h1 {
    padding-left: 1vw;
    font-size: 2vh;
    color: var(--branco);
    font-weight: 400;
  }

  &:hover {
    > h1 {
      color: var(--azul);
    }
  }
 
	@media (min-width: 960px) {
    > h1 {
      font-size: 3vh;
    }
  }
`;

const Icons = css`
  height: 8vw;
  fill: var(--branco-logo);
  background: var(--azul);
  border-radius: 1vh;

  &:hover {
    fill: var(--laranja);
  }
  @media (min-width: 960px) {
    height: 2.5vw;
  }
`;

export const InstagramIcon = styled(Instagram)`
  ${Icons}
`;

export const LinkedinIcon = styled(Linkedin)`
  ${Icons}
`;

export const MailIcon = styled(MailOutline)`
  ${Icons}
`;
