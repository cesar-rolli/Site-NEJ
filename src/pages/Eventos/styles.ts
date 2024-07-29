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