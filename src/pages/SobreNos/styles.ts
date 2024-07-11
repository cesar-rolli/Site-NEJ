import styled, { css } from "styled-components";

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

export const SobreNosImage1 = styled.img`
  display: flex;
  width: 50vw;
  margin-top: 5vh;
`;

export const SobreNosImage2 = styled.img`
  display: flex;
  width: 30vw;
  margin-top: 5vh;
`;

export const ContainerSobreNos = styled.div`
  display: flex;
  flex-direction: row;
  // justify-content: space-between;
  align-items: center;
  margin-top: 10vh;
  font-family: "Reem Kufi", sans-serif;

  > h1 {
    padding-right: 10vw;
    text-align: justify;
    width: 30vw;
    margin: 0;
  
    font-size: 3.5vh;
    color: #000;
    font-weight: 400;
  }

  > h2 {
    padding-left: 10vw;
    text-align: justify;
    width: 30vw;
    margin: 0;
  
    font-size: 3.5vh;
    color: #000;
    font-weight: 400;
  }
`;