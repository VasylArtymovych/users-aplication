import styled from "styled-components";

export const List = styled("ul")`
  width: 870px;
  padding: 108px 150px;
  color: ${({ theme }) => theme.colors.text};
  background-color: ${({ theme }) => theme.colors.secondBackground};
  border-radius: ${({ theme }) => theme.radii.medium};
  & > li {
    padding: 30px 0;
  }
`;

export const Title = styled("h3")`
  margin-bottom: 20px;
  font-weight: 600;
  font-size: 36px;
  line-height: calc(45 / 36);
`;

export const Text = styled("p")`
  font-weight: 400;
  font-size: 18px;
  line-height: calc(23 / 18);
`;
