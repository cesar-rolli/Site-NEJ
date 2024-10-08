import styled, { css } from "styled-components";

import { KeyboardArrowDown } from "../../styles/Icons";

export const Container = styled.div`
	position: absolute;
	
	display: flex;
	flex-direction: column;
	align-items: center;

	> h1 {
		font-size: 6vh;
		color: var(--laranja);
		font-family: "Raleway", sans-serif;
		margin: 15vh 0 5vh 0;
	}

	> h2 {
		width: 70vw;
    font-size: max(3vh, 24px);
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
  }
`;

export const ServicosRede = styled.button`
	width: 80vw;
	height: 10vh;
	background: var(--branco);
	cursor: pointer;
	border-radius: 16px;
	border: 0.5vh solid var(--laranja);
	margin-top: 3vh;

	> p {
    font-weight: bold;
		font-family: "Comfortaa", sans-serif;
    font-size: max(2.5vh, 20px);
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
	border-radius: 16px;
	border: 0.5vh solid var(--laranja);
	margin: 5vh 0;

	@media (min-width: 960px) {
		width: 20vw;
	}
`;

export const DropDown = styled.div`
	display: none;

	&.active {
		margin-top: 2.5vh;
		position: absolute;
		display: flex;
		flex-direction: column;
		background: var(--branco);
		border-radius: 16px;
		border: 0.5vh solid var(--laranja);
		z-index: 3;

		@media (min-width: 960px) {
			margin-top: 2vh;
		}
	}
`;

export const Areas = styled.button`
	font-weight: 400;
	font-family: "Comfortaa", sans-serif;
	font-size: max(2vh, 16px);
	cursor: pointer;
	height: 4vh;
	width: 76vw;

	@media (min-width: 960px) {
		width: 19vw;
	}

	&:hover {
    background: var(--cinza-claro);
		border-radius: 16px;
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
	justify-content: space-between;
	padding: 3vh 3vw 0 3vw; 
	
	> p {
		font-weight: 500;
		font-family: "Comfortaa", sans-serif;
    font-size: max(2.5vh, 20px);
		color: var(--preto);
		text-decoration: none;
	}

	@media (min-width: 960px) {
		padding: 2.5vh 1vw 0 1vw; 
	}
`;

const AreaDasEJs = css`
	display: flex;
	flex-direction: column;
	width: 70vw;
	align-items: center;
`;
export const Adm = styled.div`
	display: none;

	&.administracao {
		${AreaDasEJs}
	}
`;
export const Agro = styled.div`
	display: none;

	&.agronomia {
		${AreaDasEJs}
	}
`;
export const Contabeis = styled.div`
	display: none;

	&.contabilidade {
		${AreaDasEJs}
	}
`;
export const Design = styled.div`
	display: none;

	&.design {
		${AreaDasEJs}
	}
`;
export const Direito = styled.div`
	display: none;

	&.direito {
		${AreaDasEJs}
	}
`;
export const Engenharia = styled.div`
	display: none;

	&.engenharia {
		${AreaDasEJs}
	}
`;
export const Geo = styled.div`
	display: none;

	&.geociencias {
		${AreaDasEJs}
	}
`;
export const Quimica = styled.div`
	display: none;

	&.quimica {
		${AreaDasEJs}
	}
`;
export const Saude = styled.div`
	display: none;

	&.saude {
		${AreaDasEJs}
	}
`;
export const Ri = styled.div`
	display: none;

	&.ri {
		${AreaDasEJs}
	}
`;

export const CloseDropDown = styled.div`
	display: none;

	&.active {
		display: flex;
		width: 100vw;
		height: 200vh;
		z-index: 2;
		position: absolute;
	}
`;

export const ShowEJs = styled.div`
	display: flex;
	flex-direction: column;
	
	@media (min-width: 960px) {
		flex-direction: row;
	}
`;
	
export const DetalhesEJs = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	text-align: center;
	width: 50vw;
	margin: 2vw;

	> h1 {
    font-size: max(4vh, 32px);
		color: var(--preto);
		font-family: "Comfortaa", sans-serif;
		margin: 3vh 0 1vh 0;
	}
	> p {
    font-size: max(2.3vh, 16px);
		color: var(--preto);
		line-height: 1.3;
		font-family: "Comfortaa", sans-serif;
	}

	@media (min-width: 960px) {
		width: 20vw;
		margin: 1vw;
	}
`;

export const LogoEJ = styled.img`
	width: 40vw;
	height: 40vw;
	border-radius: 16px;

	@media (min-width: 960px) {
		width: 10vw;
		height: 10vw;
	}
`;