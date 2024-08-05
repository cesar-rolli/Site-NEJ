import styled from "styled-components";

export const Container = styled.div`
	position: absolute;

	display: flex;
	flex-direction: column;
	width: 100vw;
	height: 100vh;
	align-items: center;

	> h1 {
		font-size: 8vh;
		color: var(--laranja);
		font-family: "Comfortaa", sans-serif;
		margin-top: 15vh;
	}

	@media (min-width: 960px) {
		> h1 {
			font-size: 12vh;
		}
  }
`;

export const WrapperParceiros = styled.div`
	display: flex;
	flex-direction: column;
	width: 70vw;
`;

export const WrapperIndividual = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;

	> h1 {
		font-size: 3vh;
		color: var(--preto);
    font-family: "Comfortaa", sans-serif;
    font-weight: 400;
		line-height: 1.5;
		margin-bottom: 3vh;
	}

	@media (min-width: 960px) {
		flex-direction: row;
		align-items: stretch;

		> h1 {
			margin: 15vh 0 0 5vw;
		}
  }
`;

export const LogoParceiro = styled.img`
  display: flex;
  width: 50vw;

	@media (min-width: 960px) {
    width: 20vw;
  }
`;

export const Divisor = styled.div`
  width: 70vw;
  height: 1px;
  background: var(--azul);
  margin-top: 5vh;
`;