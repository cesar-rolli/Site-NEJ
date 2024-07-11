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
  padding: 5vh 0;

  align-items: center;
`;

export const ContainerContato = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
	width: 70vw;
	justify-content: center;
`;

export const NejPoaContato = styled.img`
  display: flex;
  flex-direction: row;
  width: 25vw;
  padding-right: 10vw;
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
    font-size: 3vh;
    color: var(--preto);
    font-family: "Reem Kufi", sans-serif;
    font-weight: 400;
  }

  &:hover {
    > h1 {
      color: var(--laranja);
    }
  }
`;

export const InstagramIcon = styled(Instagram)`
  height: 4vw;
  fill: var(--preto);

  &.fillInstagramIcon{
    fill: var(--laranja);
  }
`;

export const LinkedinIcon = styled(Linkedin)`
  height: 4vw;
  fill: var(--preto);

  &.fillLinkedinIcon{
    fill: var(--laranja);
  }
`;

export const MailIcon = styled(MailOutline)`
  height: 4vw;
  fill: var(--preto);

  &.fillMailIcon{
    fill: var(--laranja);
  }
`;
