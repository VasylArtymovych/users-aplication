import styled from "styled-components";

export const CardContainer = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 25px 5px;
  background-color: ${({ theme }) => theme.colors.secondBackground};
  border-radius: ${({ theme }) => theme.radii.medium};

  @media (min-width: 768px) {
    padding: 35px 7px;
  }
  @media (min-width: 1200px) {
    padding: 55px 10px;
  }
  @media (min-width: 1500px) {
    padding: 75px 10px;
  }
`;

export const TextWraper = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-bottom: 20px;
  font-weight: 400;
  font-size: 14px;
  line-height: calc(30 / 24);
  color: ${({ theme }) => theme.colors.text};

  @media (min-width: 768px) {
    margin-bottom: 30px;
    font-size: 18px;
    line-height: calc(30 / 24);
  }
  @media (min-width: 1200px) {
    font-size: 22px;
    line-height: calc(30 / 22);
  }
  @media (min-width: 1500px) {
    font-size: 24px;
    line-height: calc(30 / 24);
  }
`;

export const CardBtn = styled("button")`
  display: block;
  width: 50%;
  padding: 10px;
  font-weight: 600;
  font-size: 14px;
  line-height: calc(18 / 14);
  color: ${({ theme }) => theme.colors.text};
  background-color: ${({ theme }) => theme.colors.buttons};
  border-radius: ${({ theme }) => theme.radii.medium};
  border: none;
  outline: none;

  &:hover {
    opacity: 0.7;
    cursor: pointer;
  }

  @media (min-width: 768px) {
    width: 60%;
    padding: 15px;
    font-weight: 600;
    font-size: 18px;
    line-height: calc(24 / 18);
  }
  @media (min-width: 1200px) {
    padding: 20px;
    font-weight: 600;
    font-size: 24px;
    line-height: calc(30 / 24);
  }
  @media (min-width: 1500px) {
    width: 248px;
    height: 70px;
    padding: 20px;
    font-weight: 600;
    font-size: 24px;
    line-height: calc(30 / 24);
  }
`;
