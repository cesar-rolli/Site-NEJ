import React, { useState } from "react";

import { 
  CloseIcon,
  ContainerHeader, 
  ContainerMenu, 
  Header2, 
  LeftImage, 
  Logo, 
  MenuIcon, 
  MenuList,
  MenuOptions,
  MenuList2,
  OptionButton,
  Links,
  ImgLink
} from "./styles";

import nlaranja from '../../assets/nlaranja.png';
import nej from '../../assets/nej.png';
import foto1 from '../../assets/foto1.png';

const Header: React.FC = () => {
  const [menuPage, setMenuPage] = useState(true);
  const [rotateIcon, setRotateIcon] = useState(true);

  const handleClick = () => {
    setMenuPage(!menuPage);
    if (menuPage) {
      document.body.style.overflow = "hidden"
      setRotateIcon(false);
    } 
    else {
      document.body.style.overflow = "scroll"
    }
  }

  const rotate = () => {
    setRotateIcon(!rotateIcon);
  }

	return (
    <>
    <ContainerHeader className={menuPage ? "" : "menuPage"}>
      <ImgLink to={"/"}><Logo src={nlaranja} /></ImgLink>
        <MenuList 
          onMouseEnter={rotate}
          onMouseLeave={rotate}
          onClick={handleClick}>
          <p>Menu</p>
          <MenuIcon className={rotateIcon ? "" : "rotate"} />
      </MenuList>
    </ContainerHeader>

    <ContainerMenu className={menuPage ? "" : "menuPage"}>
    <Header2>
      <ImgLink to={"/"}><Logo src={nej} /></ImgLink>
      <MenuList2
        onMouseEnter={rotate}
        onMouseLeave={rotate}
        onClick={handleClick}>
        <p>Fechar</p>
        <CloseIcon className={rotateIcon ? "" : "rotate"} />
      </MenuList2>
    </Header2>
    <LeftImage src={foto1} className={menuPage ? "" : "menuPage"}/>
    <MenuOptions className={menuPage ? "" : "menuPage"}>
      <Links to={"/"}>Home</Links>
      <Links to={"/rede-nej-poa"}>Rede NEJ POA</Links>
      <Links to={"/eventos"}>Eventos</Links>
      <Links to={"/nossos-parceiros"}>Nossos parceiros</Links>
      <Links to={"/sobre-nos"}>Sobre nós</Links>
      <OptionButton 
        className={"link"}
        href="https://www.instagram.com/nejpoa"
        >Instagram</OptionButton>
      <OptionButton
        className={"link"}
        href="https://www.linkedin.com/company/nejpoa"
        >LinkedIn</OptionButton>
      </MenuOptions>
    </ContainerMenu>
    </>
  );
};

export default Header;  