import styled, { css } from "styled-components";

import { NavigateBefore, NavigateNext } from "../../styles/Icons";

export const Container = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;

	@media (min-width: 960px) {
    width: 80vw;
	}
`;

const Arrow = css`
  width: 8vh;
  height: 8vh;
  color: var(--laranja);
  cursor: pointer;
`;

export const Before = styled(NavigateBefore)`
  ${Arrow}
`;

export const Next = styled(NavigateNext)`
  ${Arrow}
`;

export const Carrossel = styled.div`
  width: 70vw;
  height: 105vw;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  @media (min-width: 960px) {
    height: 70vh;
  }
`;

export const Foto = styled.img`
  width: 70vw;
  height: 105vw;
  display: flex;
  border-radius: 5vw;

	@media (min-width: 960px) {
    width: 46vh;
    height: 70vh;
    border-radius: 1vw;
    top: 10vh;
  }

  &.celular {
    width: 0;
    height: 0;

    @media (min-width: 960px) {
      width: 46vh;
      height: 70vh;
    }
  }
`;