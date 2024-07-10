import { createGlobalStyle, css } from "styled-components";

export const ReemKufiFont = css`
  @import url('https://fonts.googleapis.com/css2?family=Reem+Kufi:wght@400..700&display=swap');
`;

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html, body, #root {
    max-height: 100vh;
    max-width: 100vw;

    width: 100vw;
    height: 100vh;
    overflow-x: hidden;
  }
  *::-webkit-scrollbar {
    width: 8px;
    height: 8px;
    z-index: 2;
  }
  *::-webkit-scrollbar-track {
    background: rgb(255, 255, 255, 0.1);
  }
  *::-webkit-scrollbar-thumb {
    background-color: rgb(255, 255, 255, 0.3);
    border-radius: 20px;
  }
  *, button, input {
    border: 0;
    background: none;
    font-family: "Reem Kufi", sans-serif;
  }
  html {
    background: var(--branco);
  }
  :root {
    --preto: #000;
    --branco: #D9D9D9;
    --laranja: #C75D25;
    --azul: #1B5E82;
  }
`;