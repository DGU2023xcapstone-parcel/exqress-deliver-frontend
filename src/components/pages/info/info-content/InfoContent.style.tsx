import { css } from "@emotion/react";
import styled from "@emotion/styled";

interface TextState {
  isBig: boolean;
  isDark: boolean;
}
interface ButtonState {
  isActivate: boolean;
}

export const Wrapper = styled.div`
  ${({ theme }) => {
    const { colors } = theme;
    return css`
      height: 120px;
      width: 100%;

      display: flex;
      justify-content: space-between;
      align-items: center;

      border-bottom: 1px solid ${colors.main};
    `;
  }}
`;

export const Text = styled.div<TextState>`
  ${({ theme, isBig, isDark }) => {
    const { colors, fonts } = theme;
    return css`
      width: 150px;

      font-size: ${isBig ? fonts.size.medium : fonts.size.small};
      color: ${isDark ? colors.black : colors.gray300};
    `;
  }}
`;

export const Button = styled.button<ButtonState>`
  ${({ theme, isActivate }) => {
    const { colors } = theme;
    return css`
      width: 102px;
      height: 26px;

      color: ${colors.white};

      background-color: ${isActivate ? colors.main : colors.gray100};

      cursor: pointer;
    `;
  }}
`;
