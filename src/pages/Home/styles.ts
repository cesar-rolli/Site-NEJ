import styled, { css } from "styled-components";

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

	@media (min-width: 500px) {
	}
	@media (min-width: 960px) {
	}
`;

// MISSAO
export const ContainerMissao = styled.div`
  display: grid;
  justify-content: space-between;
  width: 100vw;
  justify-content: center;
  margin-bottom: -5vh;

  @media (min-width: 960px) {
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    padding-left: 15vw;
    margin-bottom: 5vh;
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
	height: 100vh;
	text-align: center;
  margin-left: 10vw;

  > p {
    font-size: 2vh;
    color: var(--preto);
  }

  > h1 {
		font-size: 6vh;
    color: var(--preto);
    font-family: "Comfortaa", sans-serif;
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
			padding: 5vh 0;
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
	padding-top: 5vh;

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
	}
	@media (min-width: 960px) {
    align-items: start;
    text-align: start;
  }
`;

export const Divisor = styled.div`
  width: 80vw;
  height: 1px;
  background: var(--azul);
  margin-top: 5vh;

	@media (min-width: 960px) {
    width: 40vw;
  }
`;

export const ContainerFoto = styled.div`
  height: 100vh;
  position: relative;
  display: flex;
`;

export const ControleFotos = styled.div`
  width: 12vh;
  height: 32vh;  
  background: var(--branco);
  position: absolute;
  display: flex;
  flex-direction: column;
  bottom: 0;
  border-radius: 0 8vw 0 0;
  justify-content: space-evenly;
  align-items: center;

	@media (min-width: 960px) {
    width: 12vh;
    height: 32vh;
    border-radius: 3vw;
    left: 1vw;
    bottom: 1vw;
  }
`;

const Circulos = css`
  background: var(--azul);
  width: 8vh;
  height: 8vh;
  border-radius: 4vh;
  cursor: pointer;

  @media (min-width: 960px) {
    width: 8vh;
    height: 8vh;
    border-radius: 4vh;
  }
`;

export const Circulo1 = styled.div`
  ${Circulos}
`;

export const Circulo2 = styled.div`
  ${Circulos}
`;

export const Circulo3 = styled.div`
  ${Circulos}
`;

export const Gasometro = styled.img`
  display: flex;
  height: 100vh;
  width: 100vw;
  
	@media (min-width: 960px) {
    display: flex;
    width: 40vw;
    height: 100vh;
    border-radius: 0 0 0 3vw;
    top: 10vh;
  }
`;

// EVENTOS
export const ContainerEventos = styled.div `
	display: flex;
	flex-direction: column;
	width: 100vw;
	height: 100vh;
	background: var(--cinza-claro);
	align-items: center;
  margin-top: 10vh;

	> h1 {
    font-size: 8vh;
    color: var(--preto);
    font-family: "Comfortaa", sans-serif;
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
  top: 30vh;
  width: 70vw;
	align-items: center;
  
  > h1 {
    font-size: 8vh;
    color: var(--laranja);
    margin: 0;
    font-family: "Comfortaa", sans-serif;
    padding: 3vh 0;
  }

	@media (min-width: 960px) {
    > h1 {
      font-size: 12vh;
    }
  }
`;

export const BlocoParceiros = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
	align-items: center;
	width: 70vw;

	@media (min-width: 960px) {
    flex-direction: row;
  }
`;

export const LogoParceiro = styled.img`
  display: flex;
  width: 50vw;

	@media (min-width: 960px) {
    width: 20vw;
  }
`;

// SOBRE NOS
export const ContainerSobreNos = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  background: var(--cinza-claro);
  
  align-items: center;  

  > h1 {
    font-size: 8vh;
    color: var(--preto);
    font-family: "Comfortaa", sans-serif;
    padding: 3vh 0;
  }

  > h2 {
    text-align: justify;
    width: 70vw;
    font-weight: 400;
  
    font-size: 2.5vh;
    color: var(--preto);
    line-height: 1.3;
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
  margin-top: 5vh;
	border-radius: 1vw;
	margin-bottom: 5vh;
  
	@media (min-width: 960px) {
    width: 50vw;
  }
`;