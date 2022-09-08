import styled from "styled-components";

export const List = styled("ul")`
  width: 50%;
  padding: 20px 10px;
  color: ${({ theme }) => theme.colors.text};
  background-color: ${({ theme }) => theme.colors.secondBackground};
  border-radius: ${({ theme }) => theme.radii.medium};
  & > li {
    padding: 5px 0;
  }
  & > li:not(:last-child) {
    border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  }

  @media (min-width: 768px) {
    width: 350px;
    padding: 30px 20px;
  }
  @media (min-width: 1200px) {
    width: 470px;
  }
  @media (min-width: 1500px) {
    width: 870px;
    padding: 108px 150px;
  }
`;

export const Title = styled("h3")`
  margin-bottom: 10px;
  font-weight: 600;
  font-size: 18px;
  line-height: calc(22 / 18);

  @media (min-width: 1200px) {
    font-weight: 600;
    font-size: 22px;
  }
  @media (min-width: 1500px) {
    margin-bottom: 20px;
    font-size: 36px;
    line-height: calc(45 / 36);
  }
`;

export const Text = styled("p")`
  font-weight: 400;
  font-size: 12px;
  line-height: calc(14 / 12);

  @media (min-width: 1200px) {
    font-size: 16px;
  }
  @media (min-width: 1500px) {
    font-weight: 400;
    font-size: 18px;
    line-height: calc(23 / 18);
  }
`;
