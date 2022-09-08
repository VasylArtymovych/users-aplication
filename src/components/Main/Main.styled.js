import styled from "styled-components";

export const CardsPostsWraper = styled("div")`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;

  @media (min-width: 768px) {
    gap: 20px;
  }
  @media (min-width: 1200px) {
    gap: 30px;
  }
`;

export const CardsContainer = styled("div")`
  display: grid;
  grid-template-columns: 1fr;
  justify-content: center;
  grid-gap: 10px;

  @media (min-width: 768px) {
    grid-template-columns: 300px 300px;
    gap: 20px;
  }
  @media (min-width: 1200px) {
    grid-template-columns: 420px 420px;
    gap: 30px;
  }
`;

export const BtnsContainer = styled("div")`
  display: flex;
  justify-content: space-between;
  margin-top: 35px;
  @media (min-width: 768px) {
    margin-top: 53px;
  }
`;

export const StyledButton = styled("div")`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 400;
  font-size: 14px;
  line-height: calc(30 / 24);
  color: ${({ theme }) => theme.colors.text};

  &:hover {
    opacity: 0.7;
    cursor: pointer;
  }

  @media (min-width: 768px) {
    font-size: 24px;
    line-height: calc(30 / 24);
  }
`;
