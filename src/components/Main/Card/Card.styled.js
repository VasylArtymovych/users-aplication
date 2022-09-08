import styled, { css } from "styled-components";

export const CardContainer = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 25px 5px;
  background-color: ${({ theme }) => theme.colors.secondBackground};
  border-radius: ${({ theme }) => theme.radii.small};

  @media (min-width: 768px) {
    ${({ layout }) => {
      return layout
        ? css`
            padding: 20px 5px;
          `
        : css`
            padding: 35px 10px;
          `;
    }}
  }
  @media (min-width: 1200px) {
    padding: 55px 10px;
    ${({ layout }) => {
      return layout
        ? css`
            padding: 35px 5px;
            border-radius: ${({ theme }) => theme.radii.small};
          `
        : css`
            padding: 55px 10px;
            border-radius: ${({ theme }) => theme.radii.medium};
          `;
    }}
  }
  @media (min-width: 1500px) {
    border-radius: ${({ theme }) => theme.radii.medium};
    ${({ layout }) => {
      return layout
        ? css`
            padding: 44px 10px;
          `
        : css`
            padding: 75px 10px;
          `;
    }}
  }
`;

export const TextWraper = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-weight: 400;
  ${({ layout }) => {
    return layout
      ? css`
          margin-bottom: 10px;
          font-size: 8px;
          line-height: calc(12 / 8);
        `
      : css`
          margin-bottom: 20px;
          font-size: 12px;
          line-height: calc(16 / 12);
        `;
  }}
  line-height: calc(18 / 12);
  color: ${({ theme }) => theme.colors.text};

  @media (min-width: 768px) {
    ${({ layout }) => {
      return layout
        ? css`
            margin-bottom: 10px;
            font-size: 8px;
            line-height: calc(14 / 8);
          `
        : css`
            margin-bottom: 20px;
            font-size: 14px;
            line-height: calc(18 / 14);
          `;
    }}
  }
  @media (min-width: 1200px) {
    ${({ layout }) => {
      return layout
        ? css`
            font-size: 13px;
            line-height: calc(18 / 14);
          `
        : css`
            font-size: 18px;
            line-height: calc(22 / 18);
          `;
    }}
  }
  @media (min-width: 1500px) {
    ${({ layout }) => {
      return layout
        ? css`
            font-size: 18px;
            line-height: calc(22 / 18);
          `
        : css`
            font-size: 24px;
            line-height: calc(30 / 24);
          `;
    }}
  }
`;

export const CardBtn = styled("button")`
  display: block;
  width: 70%;
  color: ${({ theme }) => theme.colors.text};
  background-color: ${({ theme }) => theme.colors.buttons};
  border-radius: ${({ theme }) => theme.radii.medium};
  border: none;
  outline: none;
  ${({ layout }) => {
    return layout
      ? css`
          padding: 5px;
          font-weight: 400;
          font-size: 8px;
          line-height: calc(10 / 8);
        `
      : css`
          padding: 10px;
          font-weight: 600;
          font-size: 12px;
          line-height: calc(18 / 14);
        `;
  }}

  &:hover {
    opacity: 0.7;
    cursor: pointer;
  }

  @media (min-width: 768px) {
    width: 60%;

    ${({ layout }) => {
      return layout
        ? css`
            padding: 5px;
            font-weight: 400;
            font-size: 8px;
            line-height: calc(10 / 8);
          `
        : css`
            padding: 10px;
            font-weight: 600;
            font-size: 14px;
            line-height: calc(24 / 18);
          `;
    }}
  }
  @media (min-width: 1200px) {
    ${({ layout }) => {
      return layout
        ? css`
            padding: 10px;
            font-weight: 400;
            font-size: 14px;
            line-height: calc(22 / 18);
          `
        : css`
            padding: 15px;
            font-weight: 600;
            font-size: 22px;
            line-height: calc(28 / 22);
          `;
    }}
  }
  @media (min-width: 1500px) {
    ${({ layout }) => {
      return layout
        ? css`
            width: 196px;
            height: 55px;
            padding: 20px;
            font-weight: 400;
            font-size: 18px;
            line-height: calc(23 / 24);
          `
        : css`
            width: 248px;
            height: 70px;
            padding: 20px;
            font-weight: 600;
            font-size: 24px;
            line-height: calc(30 / 24);
          `;
    }}
  }
`;
