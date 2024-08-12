import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: end;
	width: 100vw;
	height: 100vh;
`;

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	text-align: center;
	width: 80vw;

	> h1 {
		font-weight: bold;
		font-family: "Comfortaa", sans-serif;
		font-size: min(6vh, 32px);
	}

	> h2 {
		margin: 5vh 0;
		font-weight: 400;
		font-family: "Comfortaa", sans-serif;
		font-size: min(6vh, 24px);
	}

	@media (min-width: 960px) {  
		margin-bottom: 5vh;
  }
`;

export const Links = styled(Link)`
  text-decoration: none;
  display: flex;
	cursor: pointer;
	height: min(5vh, 24px);
	width: 70vw;
  border: 2px solid var(--azul);
  border-radius: 16px;
  color: var(--azul);
  justify-content: center;
  align-items: center;

  > p {
    font-weight: bold;
    font-family: "Comfortaa", sans-serif;
		font-size: min(3vh, 16px);
  }

	&:hover {
    background: var(--azul);
    color: var(--branco);
  }

	@media (min-width: 960px) {  
    width: 20vw;
  }
`;