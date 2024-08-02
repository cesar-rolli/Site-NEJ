import styled from "styled-components";

export const Container = styled.div`
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
