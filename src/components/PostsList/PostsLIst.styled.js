import styled from "styled-components";

export const List = styled("ul")`
  width: 100%;
  padding: 20px 10px;
  color: ${({ theme }) => theme.colors.text};
  background-color: ${({ theme }) => theme.colors.secondBackground};
  border-radius: ${({ theme }) => theme.radii.medium};
  & > li {
    padding: 15px 0;

    @media (min-width: 1200px) {
      padding: 20px 0;
    }
  }
  & > li:not(:last-child) {
    border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  }

  @media (min-width: 768px) {
    padding: 30px 20px;
  }
  @media (min-width: 1200px) {
    padding: 50px 30px;
  }

  @media (min-width: 1500px) {
    width: 870px;
    padding: 108px 150px;
  }
`;

export const Title = styled("h3")`
  font-weight: 600;
  font-size: 16px;
  line-height: calc(18 / 16);

  @media (min-width: 1200px) {
    font-weight: 600;
    font-size: 22px;
  }
  @media (min-width: 1500px) {
    font-size: 36px;
    line-height: calc(45 / 36);
  }
`;

export const Text = styled("p")`
  margin-top: 10px;
  font-weight: 400;
  font-size: 12px;
  line-height: calc(14 / 12);

  @media (min-width: 1200px) {
    margin-top: 20px;
    font-size: 16px;
    line-height: calc(18 / 16);
  }
  @media (min-width: 1500px) {
    font-size: 18px;
    line-height: calc(22 / 18);
  }
`;
