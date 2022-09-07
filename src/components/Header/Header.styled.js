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
  font-size: 24px;
  line-height: calc(30 / 24);
  color: ${({ theme }) => theme.colors.text};
`;

export const Label = styled.label`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-right: 10px;
  color: ${({ theme }) => theme.colors.text};

  & select {
    padding: 7px;
    font-weight: 400;
    font-size: 14px;
    line-height: calc(30 / 24);
    color: ${({ theme }) => theme.colors.text};
    background-color: ${({ theme }) => theme.colors.secondBackground};
    border-radius: 20px;
    border: none;
    outline: none;
  }
`;

export const Input = styled.input`
  width: 248px;
  height: 70px;
  padding: 20px 35px;
  font-weight: 400;
  font-size: 24px;
  line-height: calc(30 / 24);
  color: ${({ theme }) => theme.colors.text};
  background-color: ${({ theme }) => theme.colors.secondBackground};
  border-radius: 40px;
  border: none;
  outline: none;
  &::placeholder {
    color: ${({ theme }) => theme.colors.text};
  }
`;
