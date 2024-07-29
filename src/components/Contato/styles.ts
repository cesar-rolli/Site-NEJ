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
  
  > p {
    padding: 3vh 0 0 0;
    width: 60vw;
  }

  @media (min-width: 960px) {
    padding: 5vh 0;
    > p {
      padding: 0;
      width: 100vw;
    }
  }
`;

export const ContainerContato = styled.div`
  display: grid;
  width: 70vw;
  justify-content: center;
  align-items: center;

@media (min-width: 960px) {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
`;

export const NejPoaContato = styled.img`
  width: 50vw;
  margin: -5vh 0;

  @media (min-width: 960px) {
    margin: 0;
    width: 30vw;
    padding-right: 10vw;
  }
`;

export const ListaContatos = styled.div`
  display: flex;
  flex-direction: column;
`;

export const MeioContato = styled.a`
  display: flex;
  text-decoration: none;
  align-items: center;

  > h1 {
    padding-left: 1vw;
    font-size: 2vh;
    color: var(--preto);
    font-weight: 400;
  }

  &:hover {
    > h1 {
      color: var(--laranja);
    }
  }
 
	@media (min-width: 960px) {
    > h1 {
      font-size: 3vh;
    }
  }
`;

export const InstagramIcon = styled(Instagram)`
  height: 6vw;
  fill: var(--preto);

  &.fillInstagramIcon{
    fill: var(--laranja);
  }
  @media (min-width: 960px) {
    height: 4vw;
  }
`;

export const LinkedinIcon = styled(Linkedin)`
  height: 6vw;
  fill: var(--preto);

  &.fillLinkedinIcon{
    fill: var(--laranja);
  }
  @media (min-width: 960px) {
    height: 4vw;
  }
`;

export const MailIcon = styled(MailOutline)`
  height: 6vw;
  fill: var(--preto);

  &.fillMailIcon{
    fill: var(--laranja);
  }
  @media (min-width: 960px) {
    height: 4vw;
  }
`;
