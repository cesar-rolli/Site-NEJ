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
    font-family: "Comfortaa", sans-serif;
    margin: 15vh 0 5vh 0;
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
  margin-bottom: 5vh;

	@media (min-width: 960px) {
    width: 30vw;
	}
`;

export const ContainerSobreNos = styled.div`
  display: grid;
  align-items: center;
  text-align: center;
  margin-bottom: 10vh;
  width: 100vw;
  justify-content: center;
  font-family: "Reem Kufi", sans-serif;

  > h1 {
    padding-right: 10vw;
    text-align: start;
    width: 80vw;
    margin: 0;
  
    font-size: 3.5vh;
    color: #000;
    font-weight: 400;
  }

	@media (min-width: 960px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    > h1 {
      width: 30vw;
    }
    > h2 {
      width: 30vw;
    }
  }
`;

export const Descricao = styled.div`
  display: flex;
  flex-direction: column;
  width: 80vw;
  margin: 0 5vw;
  text-align: start;
  align-items: center;
  line-height: 1.2;

  @media (min-width: 960px) {
    width: 25vw;
    align-items: start;
  }

  > h2 {
    font-size: 3.5vh;
    color: #000;
    font-weight: bold;
  }
  > p {
    margin-top: 1vh;
    font-size: 2.5vh;
    color: #000;
    font-weight: 400;
  }
`;