import styled from "styled-components";
import { Link } from "react-router-dom";

import { Menu, Close } from "../../styles/Icons";

export const ContainerHeader = styled.div`
  width: 100vw;
  position: fixed;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  z-index: 2;
  transition: transform 1s;
  top: 0;
  background: var(--laranja);
  
  &.menuPage {
    transform: translateY(-200px);
    transition: transform 1s;
  }
`;

export const MenuList = styled.div`  
  cursor: pointer;
  display: flex;
  width: 30vw;
  right: 5vw;
  position: relative;

  flex-direction: row;
  align-items: center;
  justify-content: center;

	@media (min-width: 500px) {
    width: 10vw;
	}

	@media (min-width: 960px) {
    width: 10vw;
	}
`;

export const MenuIcon = styled(Menu)`
  width: 32px;
  height: 32px;
  color: var(--branco-logo);
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
  width: 15vw;
  left: 5vw;
  position: relative;

	@media (min-width: 500px) {
    width: 5vw;
	}

	@media (min-width: 960px) {
    width: 5vw;
	}
`;

export const Logo2 = styled.img`
  width: 25vw;
  left: 5vw;

	@media (min-width: 500px) {
    width: 10vw;
	}

	@media (min-width: 960px) {
    width: 10vw;
	}
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
  width: 30vw;

  flex-direction: row;
  align-items: center;
  border: none;
  justify-content: center;

	@media (min-width: 500px) {
    width: 10vw;
	}

	@media (min-width: 960px) {
    width: 10vw;
	}
`;

export const Header2 = styled.div`
  width: 100vw;
  left: 5vw;
  top: 0vh;
  position: absolute;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  z-index: 3;
  align-items: center;

	@media (min-width: 960px) {
    width: 90vw;
  }
`;

export const CloseIcon = styled(Close)`
  width: 32px;
  height: 32px;
  fill: var(--branco);
  margin-left: 16px;
`;

export const MenuPage = styled.div`
  display: flex;
  flex-direction: row;
  position: absolute;
  align-items: center;
  justify-content: center;

	@media (min-width: 960px) {
    margin-left: 20vw;
  }
`;

export const MenuOptions = styled.div`
  display: flex;
  flex-direction: column;

  transform: rotate(-10deg) scale(1.2);
  transition: transform 0.5s;
  
  &.menuPage {
    transform: rotate(0deg) scale(1);
    transition: transform 0.5s 0.2s;
  }
`;

export const Links = styled(Link)`
  text-decoration: none;
  color: var(--branco);  
  margin-left: 5vw;
  font-size: 5vh;

  &:hover {
    text-decoration: 2px underline var(--branco);
  }

	@media (min-width: 960px) {
    left: 60vw;
    margin-top: 2vh;
	}
`;

export const LeftImage = styled.img`
  display: none;

  @media (min-width: 960px) {
    display: flex;
    width: 30vw;
    height: 30vw;
    transform: rotate(-10deg) scale(1.2);
    transition: transform 0.5s;
    
    &.menuPage {
      transform: rotate(0deg) scale(1);
      transition: transform 0.5s 0.2s;
    }
  }
`;
