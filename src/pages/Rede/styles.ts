import styled from "styled-components";

import { KeyboardArrowDown } from "../../styles/Icons";

export const Container = styled.div`
	position: absolute;
	
	display: flex;
	flex-direction: column;
	align-items: center;

	> h1 {
		font-size: 6vh;
		color: var(--laranja);
		font-family: "Comfortaa", sans-serif;
		margin-top: 15vh;
	}

	> h2 {
		width: 70vw;
		font-size: 3vh;
    font-weight: 400;
		color: var(--preto);
		font-family: "Comfortaa", sans-serif;
		margin-top: 5vh;
	}

	@media (min-width: 960px) {
		> h1 {
			font-size: 12vh;
		}
  }
`;

export const Foto = styled.img`
  width: 80vw;
  display: flex;
  border-radius: 5vw;

	@media (min-width: 960px) {
    width: 70vw;
    border-radius: 1vw;
    top: 10vh;
  }

  &.celular {
    width: 0;
    height: 0;

    @media (min-width: 960px) {
      width: 46vh;
      height: 70vh;
    }
  }
`;

export const ServicosRede = styled.button`
	width: 80vw;
	height: 10vh;
	background: var(--branco);
	cursor: pointer;
	border-radius: 5vh;
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

export const ListaArea = styled.div`
	width: 80vw;
	height: 10vh;
	background: var(--branco);
	cursor: pointer;
	border-radius: 5vh;
	border: 4px solid var(--laranja);

	@media (min-width: 960px) {
		width: 20vw;
	}
`;

export const DropDown = styled.div`
	display: none;

	&.active {
		display: flex;
		flex-direction: column;
		background: #f00;
		border-radius: 4vh;
	}
`;

export const Areas = styled.button`
	font-weight: 400;
	font-family: "Comfortaa", sans-serif;
	font-size: 2vh;
	cursor: pointer;
	height: 4vh;

	@media (min-width: 960px) {

	}
`;

export const DropDownIcon = styled(KeyboardArrowDown)`
  width: 32px;
  height: 32px;
  color: var(--preto);
  margin-left: 16px;
  transform: rotate(0deg);
	transition: transform 1s;

	&.rotate {
		transform: rotate(180deg);
		transition: transform 1s;
	}
`;

export const LegendaLista = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	padding: 2.5vh 4vw 0 4vw; 
	justify-content: space-between;
	
	> p {
		font-weight: 500;
		font-family: "Comfortaa", sans-serif;
		font-size: 2.5vh;
		color: var(--preto);
		text-decoration: none;
	}

	@media (min-width: 960px) {
		padding: 2vh 1vw 0 1vw; 
	}
`;

export const AreaEJs = styled.div`

`;