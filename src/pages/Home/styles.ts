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
    font-family: "Reem Kufi", sans-serif;
  }

  > p {
    font-size: 3vh;
    color: var(--preto);
    font-family: "Reem Kufi", sans-serif;
    font-weight: 400;
    padding-bottom: 10vh;
  }

	@media (min-width: 500px) {
	}
	@media (min-width: 960px) {
	}
`;

export const ContainerMissao = styled.div`
	width: 100vw;
	padding-left: 15vw;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
`;

// MISSAO
export const ContainerRede = styled.div`
	display: flex;
	flex-directions: row;
  justify-content: space-between;
`;

export const Missao = styled.div`
  width: 40vw;
	height: 102.2vh;
	text-align: end;

  > p {
    font-size: 2vh;
    font-family: "Reem Kufi", sans-serif;
    color: var(--preto);
  }

  > h1 {
		font-size: 6vh;
    color: var(--preto);
    font-family: "Anton", sans-serif;
    margin-top: 23vh;
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
		> p {
			font-size: 2.5vh;
			padding: 5vh 0;
			padding-left: 8vw;
		}
		> h1 {
			font-size: 12vh;
		}
	}
`;

export const ValoresRede = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	text-align: end;
	padding-top: 5vh;

  > h1 {
    font-size: 10vh;
    color: var(--laranja);
    font-family: "Roboto", sans-serif;
		font-weight: 700;
    font-style: italic;
  }

	> p {
    font-size: 2vh;
    color: var(--preto);
    font-family: "Reem Kufi", sans-serif;
    font-weight: 400;
	}
`;

export const Divisor = styled.div`
  width: 40vw;
  height: 1px;
  background: var(--azul);
`;

export const Gasometro = styled.img`
  width: 40vw;
	height: 102.2vh;
	border-radius: 0 0 0 3vw;
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
    font-size: 12vh;
    color: var(--preto);
    font-family: "Reem Kufi", sans-serif;
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
    font-size: 12vh;
    color: var(--laranja);
    margin: 0;
  }
`;

export const BlocoParceiros = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
	width: 70vw;
`;

export const LogoParceiro = styled.img`
  display: flex;
  width: 20vw;
`;

// SOBRE NOS
export const ContainerSobreNos = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  background: var(--cinza-claro);
  
  font-family: "Reem Kufi", sans-serif;
  align-items: center;  

  > h1 {
    font-size: 12vh;
    color: var(--preto);
  }

  > h2 {
    text-align: justify;
    width: 70vw;
    font-weight: 400;
  
    font-size: 3.5vh;
    color: var(--preto);
  }
`;

export const SobreNosImg = styled.img`
  display: flex;
  width: 50vw;
  margin-top: 5vh;
	border-radius: 1vw;
	margin-bottom: 5vh;
`;