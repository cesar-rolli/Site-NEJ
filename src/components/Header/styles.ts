import styled, { css } from "styled-components";

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
    font-size: 20px;
    color: #C75D25;
    font-family: "Reem Kufi", sans-serif;
  }
`;

export const MenuIcon = styled(CropSquare)`
  width: 32px;
  height: 32px;
  color: #C75D25;
  margin-left: 16px;
  transform: rotate(0deg);
  transition: transform 0.5s;
  
  &.rotate {
    transform: rotate(90deg);
    transition: transform 0.5s;
  }
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
  background: #0d0e13;
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
    font-size: 20px;
    color: #DFD9D9;
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
  fill: #DFD9D9;
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

export const OptionButton = styled.a`
  cursor: pointer;
  padding-left: 60vw;
  margin-top: 16px;
  position: relative;
  left: 60vw;
  padding: 0;
  display: flex;
  font-family: "Reem Kufi", sans-serif;
  margin: 0;
  text-decoration: none;
  
  &:hover {
    text-decoration: 2px underline #fff;
  }

  &.pagina {
    width: 20vw;
    font-size: 5vh;
    color: #DFD9D9;  
  }

  &.link {
    width: 8vw;
    font-size: 2vh;
    color: #8a8a8a;
  }
`;

export const Blackbox = styled.div`
  height: 5vh;
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
