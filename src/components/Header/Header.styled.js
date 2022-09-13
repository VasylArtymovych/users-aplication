import styled from "styled-components";

export const Section = styled.div`
  width: 100vw;
  min-height: 100px;
  padding: 50px 0 35px 0;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Wraper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.p`
  font-weight: 400;
  font-size: calc(14px + 14 * (100vw / 1200));
  line-height: calc(14 / 12);
  color: ${({ theme }) => theme.colors.text};

  &:hover {
    opacity: 0.7;
    cursor: pointer;
  }
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  margin-right: 10px;
  font-size: calc(12px + 12 * (100vw / 1200));
  line-height: calc(18 / 12);
  color: ${({ theme }) => theme.colors.text};

  & select {
    padding: 3px;
    font-weight: 400;
    font-size: calc(12px + 6 * (100vw / 1200));
    line-height: calc(14 / 12);
    color: ${({ theme }) => theme.colors.text};
    background-color: ${({ theme }) => theme.colors.secondBackground};
    border-radius: 20px;
    border: none;
    outline: none;

    @media (min-width: 768px) {
      padding: 7px;
    }
  }

  @media (min-width: 768px) {
    padding: 7px;
  }
  @media (min-width: 1200px) {
    flex-direction: row;
  }
`;

export const Input = styled.input`
  max-width: 120px;
  height: 35px;
  padding: 7px 10px;
  font-weight: 400;
  font-size: 14px;
  line-height: calc(14 / 12);
  color: ${({ theme }) => theme.colors.text};
  background-color: ${({ theme }) => theme.colors.secondBackground};
  border-radius: 40px;
  border: none;
  outline: none;
  &::placeholder {
    color: ${({ theme }) => theme.colors.text};
  }

  @media (min-width: 768px) {
    min-width: 220px;
    height: 50px;
    padding: 10px 20px;
    font-weight: 400;
    font-size: 20px;
    line-height: calc(30 / 24);
  }
  @media (min-width: 1200px) {
    min-width: 248px;
    height: 70px;
    padding: 20px 35px;
    font-weight: 400;
    font-size: 24px;
    line-height: calc(30 / 24);
  }
`;
