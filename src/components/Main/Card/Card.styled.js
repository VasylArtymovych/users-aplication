import styled from "styled-components";

export const CardContainer = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 420px;
  height: 370px;
  padding: 75px 10px;
  background-color: ${({ theme }) => theme.colors.secondBackground};
  border-radius: ${({ theme }) => theme.radii.medium};
`;

export const TextWraper = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-weight: 400;
  font-size: 24px;
  line-height: calc(30 / 24);
  color: ${({ theme }) => theme.colors.text};
`;

export const CardBtn = styled("button")`
  display: block;
  width: 248px;
  height: 70px;
  padding: 20px;
  font-weight: 600;
  font-size: 24px;
  line-height: calc(30 / 24);
  color: ${({ theme }) => theme.colors.text};
  background-color: ${({ theme }) => theme.colors.buttons};
  border-radius: ${({ theme }) => theme.radii.medium};
  border: none;
  outline: none;
`;
