import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
	position: absolute;

	display: flex;
	flex-direction: column;
	width: 100vw;
	height: 100vh;
	align-items: center;

	> h1 {
		font-size: 12vh;
		color: var(--laranja);
		font-family: "Reem Kufi", sans-serif;
		margin-top: 15vh;
	}
`;

export const Email = styled.input`
  background: #f0f;
`;

export const Senha = styled.input`
  background: #00f;
`;

export const Acessar = styled.button`
  background: #000;
`;

export const EsqueciSenha = styled(Link)`

`;