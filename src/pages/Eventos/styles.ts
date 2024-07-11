import styled from "styled-components";

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