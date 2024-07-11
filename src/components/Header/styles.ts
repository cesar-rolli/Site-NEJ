import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

import { CropSquare, Close } from "../../styles/Icons";

export const ContainerHeader = styled.div`
  width: 90vw;
  left: 5vw;
  position: fixed;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  z-index: 2;
  transition: transform 1s;
  top: 0;
  
  &.menuPage {
    transform: translateY(-200px);
    transition: transform 1s;
  }
`;

export const MenuList = styled.div`  
  cursor: pointer;
  display: flex;
  height: 10vh;
  width: 10vw;

  flex-direction: row;
  align-items: center;
  justify-content: center;

  > p {
    font-size: 3vh;
    color: var(--laranja);
    font-family: "Reem Kufi", sans-serif;
  }
`;

export const MenuIcon = styled(CropSquare)`
  width: 32px;
  height: 32px;
  color: var(--laranja);
  margin-left: 16px;
  transform: rotate(0deg);
  transition: transform 0.5s;
  
  &.rotate {
    transform: rotate(90deg);
    transition: transform 0.5s;
  }
`;

export const ImgLink = styled(Link)`
`;

export const Logo = styled.img`
  width: 10vw;
`;

export const ContainerMenu = styled.div`
  top: -200vh;
  left: 0;
  transition: top 1s;
  position: fixed;
  display: flex;
  flex-direction: row;
  background: var(--preto);
  height: 100vh;
  width: 100vw;

  &.menuPage{
    transition: top 1s;
    position: fixed;
    display: flex;
    flex-direction: row;
    align-items: center;
    z-index: 3;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
  }
`;

export const MenuList2 = styled.div`  
  cursor: pointer;
  display: flex;
  height: 10vh;
  width: 10vw;

  flex-direction: row;
  align-items: center;
  border: none;
  justify-content: center;

  > p {
    font-size: 3vh;
    color: var(--branco);
    font-family: "Reem Kufi", sans-serif;
  }
`;

export const Header2 = styled.div`
  width: 90vw;
  left: 5vw;
  top: 0vh;
  position: absolute;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  z-index: 3;
  align-items: center;
`;

export const CloseIcon = styled(Close)`
  width: 32px;
  height: 32px;
  fill: var(--branco);
  margin-left: 16px;
  transform: rotate(0deg);
  transition: transform 0.5s;
  
  &.rotate {
    transform: rotate(90deg);
    transition: transform 0.5s;
  }
`;

export const MenuOptions = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 60vh;
  top: 0vh;
  left: 0vw;
  padding-top: 23vh;
  transition: transform 0.5s;
  transform: rotate(-10deg) scale(2);
  
  &.menuPage {
    transform: rotate(0deg) scale(1);
    transition: transform 0.5s 0.2s;
  }
`;

export const Links = styled(Link)`
  text-decoration: none;
  font-family: "Reem Kufi", sans-serif;
  color: var(--branco);  
  width: 20vw;
  left: 60vw;
  position: relative;
  font-size: 5vh;

  &:hover {
    text-decoration: 2px underline var(--branco);
  }
`;

export const OptionButton = styled.a`
  cursor: pointer;
  padding-left: 60vw;
  position: relative;
  left: 60vw;
  padding: 0;
  display: flex;
  font-family: "Reem Kufi", sans-serif;
  margin: 0;
  text-decoration: none;
  
  &:hover {
    text-decoration: 2px underline var(--branco);
  }

  &.pagina {
    width: 20vw;
    font-size: 5vh;
    color: var(--branco);  
  }

  &.link {
    width: 8vw;
    font-size: 2vh;
    color: var(--cinza-escuro);
  }
`;

export const LeftImage = styled.img`
  position: absolute;
  display: flex;
  width: 30vw;
  height: 30vw;
  top: 20vh;
  left: 15vw;
  transform: rotate(-10deg) scale(1.2);
  transition: transform 0.5s;
  
  &.menuPage {
    transform: rotate(0deg) scale(1);
    transition: transform 0.5s 0.2s;
  }
`;