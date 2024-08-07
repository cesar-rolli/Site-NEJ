import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  align-items: center;
  justify-content: start;

  > h1 {
		font-size: 8vh;
    color: var(--laranja);
    font-family: "Raleway", sans-serif;
    margin-top: 15vh;
  }

	@media (min-width: 960px) {
		> h1 {
			font-size: 12vh;
		}
  }
`;

export const SobreNosImage = styled.img`
  width: 70vw;
  border-radius: 1vw;
  justify-self: center;
  margin-top: 5vh;

	@media (min-width: 960px) {
    width: 30vw;
	}
`;

export const ContainerSobreNos = styled.div`
  display: grid;
  align-items: center;
  text-align: center;
  width: 100vw;
  justify-content: center;

	@media (min-width: 960px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
`;

export const Descricao = styled.div`
  display: flex;
  flex-direction: column;
  width: 70vw;
  margin: 0 5vw;
  text-align: start;
  align-items: start;
  line-height: 1.2;

  @media (min-width: 960px) {
    width: 25vw;
    align-items: start;
  }

  > h2 {
    font-size: 3.5vh;
    color: var(--preto);
    font-weight: bold;
    font-family: "Raleway", sans-serif;
    margin: 2vh 0;
  }
  > p {
    font-family: "Comfortaa", sans-serif;
    font-size: 2.5vh;
    color: var(--preto);
    font-weight: 400;
  }
`;