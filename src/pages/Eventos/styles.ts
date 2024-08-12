import styled from "styled-components";

export const Container = styled.div`
	position: absolute;

	display: flex;
	flex-direction: column;
	width: 100vw;
	align-items: center;

	> h1 {
		font-size: 8vh;
		color: var(--laranja);
		font-family: "Raleway", sans-serif;
		margin: 15vh 0 5vh 0;
	}

	@media (min-width: 960px) {
		> h1 {
			font-size: 12vh;
		}
  }
`;

export const ContainerDetalhes = styled.div`
	display: flex;
	flex-direction: column;
	width: 70vw;
	margin: 5vh 0;

	> h2 {
    text-align: start;
    width: 70vw;
    font-weight: bold;
		font-family: "Raleway", sans-serif;
  
    font-size: max(3vh, 32px);
    color: var(--laranja);
    line-height: 1.3;
		margin-top: 3vh;
	}
	> p {
    text-align: start;
    width: 70vw;
    font-weight: 400;
		font-family: "Comfortaa", sans-serif;
  
    font-size: max(2.5vh, 16px);
    color: var(--preto);
    line-height: 1.3;
		margin-top: 1vh;
	}
`;

export const FaleConosco = styled.button`
	width: 70vw;
	height: 10vh;
	background: var(--branco);
	cursor: pointer;
	border-radius: 16px;
	border: 4px solid var(--laranja);

	> p {
    font-weight: bold;
		font-family: "Comfortaa", sans-serif;
    font-size: 2.5vh;
    color: var(--preto);
		text-decoration: none;
	}
	&:hover {
		background: var(--laranja);
		> p {
			color: var(--branco);
		}
	}

	@media (min-width: 960px) {
		width: 20vw;
  }
`;
