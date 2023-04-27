import { css } from "@emotion/react";
import styled from "@emotion/styled";

interface TextState {
  isBig: boolean;
  isDark: boolean;
}
export const Wrapper = styled.div`
  ${({ theme }) => {
    const { colors } = theme;
    return css`
      height: 80px;
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

export const Button = styled.button`
  width: 102px;
  height: 26px;
`;
