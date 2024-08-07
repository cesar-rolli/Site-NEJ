import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	align-items: center;
	width: 100vw;
`;

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
  align-items: center;  

	background: var(--branco);

  > h1 {
    font-size: 12vh;
		padding-top: 5vh;
    color: var(--laranja);
    font-family: "Comfortaa", sans-serif;
  }

  > p {
    font-size: 3vh;
    color: var(--preto);
    font-weight: 400;
    padding-bottom: 10vh;
  }
`;

// MISSAO
export const ContainerMissao = styled.div`
  display: grid;
  justify-content: space-between;
  width: 100vw;
  justify-content: center;

  @media (min-width: 960px) {
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    padding-left: 15vw;
  }
`;  

export const ContainerRede = styled.div`
	display: grid;
  align-items: center;
	text-align: end;
  width: 80vw;

  @media (min-width: 500px) {
  }
	@media (min-width: 960px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 40vw;
	}
`;

export const Missao = styled.div`
  width: 80vw;
	text-align: center;
  margin-left: 10vw;

  > p {
    font-size: 2vh;
    color: var(--preto);
    font-family: "Comfortaa", sans-serif;
    margin: 5vh 0;
  }

  > h1 {
		font-size: 6vh;
    color: var(--preto);
    font-family: "Raleway", sans-serif;
    margin: 5vh 0;
  }

	@media (min-width: 500px) {
		> p {
			font-size: 2.5vh;
		}
		> h1 {
			font-size: 15vh;
		}
	}

	@media (min-width: 960px) {
    width: 40vw;
    text-align: start;
    margin-left: 0;
		> p {
			font-size: 3vh;
			margin: 5vh 0;
      line-height: 1.5;
		}
		> h1 {
      margin-top: 20vh;
			font-size: 12vh;
		}
	}
`;

export const ValoresRede = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	text-align: center;
  margin: 2vh 0;

  > h1 {
    font-size: 10vh;
    color: var(--laranja);
    font-family: "Comfortaa", sans-serif;
		font-weight: 700;
    font-style: italic;
  }
  
	> p {
    font-size: 2.3vh;
    color: var(--preto);
    line-height: 1.3;
    font-family: "Comfortaa", sans-serif;
	}

	@media (min-width: 960px) {
    align-items: start;
    text-align: start;
    height: 20vh;
  }
`;

export const Gasometro = styled.img`
  display: flex;
  height: 100vh;
  width: 100vw;

	@media (min-width: 960px) {
    display: flex;
    width: 35vw;
    height: 100vh;
    border-radius: 0 0 0 3vw;
  }
`;

// EVENTOS
export const ContainerEventos = styled.div `
	display: flex;
	flex-direction: column;
	width: 100vw;
	background: var(--branco);
	align-items: center;
  margin-bottom: 5vh;

	> h1 {
    align-self: start;
    margin-left: 15vw;
    font-size: 7vh;
    color: var(--azul);
    font-family: "Raleway", sans-serif;
    padding: 3vh 0;
	}

	@media (min-width: 960px) {
    > h1 {
      font-size: 12vh;
    }
  }
`;

// PARCEIROS
export const ContainerParceiros = styled.div`
  display: flex;
  flex-direction: column;
  width: 70vw;
	align-items: center;
  
  > h1 {
    align-self: start;
    font-size: 7vh;
    color: var(--laranja);
    font-family: "Raleway", sans-serif;
    padding: 3vh 0;
  }

	@media (min-width: 960px) {
    > h1 {
      font-size: 12vh;
    }
  }
`;

// SOBRE NOS
export const ContainerSobreNos = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  background: var(--branco);
  width: 70vw;
  
  align-items: center;  

  > h1 {
    align-self: start;
    font-size: 7vh;
    color: var(--azul);
    font-family: "Raleway", sans-serif;
  }

	@media (min-width: 960px) {
    > h1 {
      font-size: 12vh;
    }
    > h2 {
      font-size: 3.5vh;
    }
  }
`;

export const SobreNosImg = styled.img`
  display: flex;
  width: 70vw;
	border-radius: 5vw;
  
	@media (min-width: 960px) {
    width: 30vw;
    border-radius: 1vw;
  }
`;

export const Apresentacao = styled.div`
  display: flex;
  flex-direction: column;
  width: 70vw;
  justify-content: center;
  align-items: center;
  margin-top: 3vh;

	@media (min-width: 960px) {
    flex-direction: row;    
  }
`;

export const CTASobreNos = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  > h2 {
    margin-right: 2vw;
    text-align: start;
    font-weight: 400;
    font-family: "Comfortaa", sans-serif;  
    font-size: 2.5vh;
    color: var(--preto);
    line-height: 1.3;
    }
`;

export const Links = styled(Link)`
  text-decoration: none;
  display: flex;
	cursor: pointer;
	height: 5vh;
	width: 70vw;
  border: 2px solid var(--azul);
  border-radius: 16px;
  margin: 5vh 0;
  color: var(--azul);
  justify-content: center;
  align-items: center;

  > p {
    font-weight: bold;
    font-family: "Comfortaa", sans-serif;
    font-size: 2vh;
  }

	&:hover {
    background: var(--azul);
    color: var(--branco);
  }

	@media (min-width: 960px) {  
    width: 20vw;
    margin: 5vh 0 0 0;
  }
`;