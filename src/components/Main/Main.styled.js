import styled, { css } from "styled-components";

export const CardsPostsWraper = styled("div")`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;

export const CardsContainer = styled("div")`
  display: grid;
  grid-template-columns: 420px 420px;
  justify-content: center;
  grid-gap: 30px;

  /* grid-template-columns: ${({ layout }) =>
    layout ? "420px 420px" : "270px 270px"}; */

  /* ${(props) => {
    props.layout &&
      css`
        display: grid;
        grid-template-columns: 270px 270px;
        justify-content: center;
        grid-gap: 30px;
      `;
  }}; */
`;

export const BtnsContainer = styled("div")`
  display: flex;
  justify-content: space-between;
  margin-top: 53px;
`;

export const StyledButton = styled("div")`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 400;
  font-size: 24px;
  line-height: calc(30 / 24);
  color: ${({ theme }) => theme.colors.text};
`;
