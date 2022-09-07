import styled, { css } from "styled-components";

export const CardsContainer = styled("div")`
  display: grid;
  grid-template-columns: 420px 420px;
  justify-content: center;
  grid-gap: 30px;
  margin-top: 35px;
`;

export const BtnsContainer = styled("div")`
  display: flex;
  justify-content: space-between;
  margin-top: 53px;
`;

export const StyledButton = styled("div")`
  /* ${({ disabled }) =>
    disabled
      ? css`
          visibility: hidden;
        `
      : null} */
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 400;
  font-size: 24px;
  line-height: calc(30 / 24);
  color: ${({ theme }) => theme.colors.text};
`;
