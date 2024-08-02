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
    font-family: "Reem Kufi", sans-serif;
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
  margin: 5vh 0 5vh 10vw;

	@media (min-width: 960px) {
    width: 30vw;
    margin-top: 5vh;
	}
`;

export const ContainerSobreNos = styled.div`
  display: grid;
  align-items: center;
  text-align: center;
  margin-top: 10vh;
  width: 100vw;
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

  > h2 {
    padding-left: 10vw;
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