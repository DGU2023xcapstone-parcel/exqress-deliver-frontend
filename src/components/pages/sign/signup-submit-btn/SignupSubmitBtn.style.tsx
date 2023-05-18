import { css } from "@emotion/react";
import styled from "@emotion/styled";

interface WrapperState {
  isActivate: boolean;
}
export const Wrapper = styled.button<WrapperState>`
  ${({ theme, isActivate }) => {
    const { colors } = theme;
    return css`
      height: 79px;
      width: 100%;
      bottom: 0;

      display: flex;
      justify-content: space-around;
      align-items: center;
      position: absolute;

      box-shadow: 0px -4px 8px rgba(0, 0, 0, 0.18);
      border-radius: 30px 30px 0 0;
      background-color: ${isActivate ? colors.main : colors.gray300};
    `;
  }}
`;

export const Text = styled.div`
  ${({ theme }) => {
    const { fonts, colors } = theme;
    return css`
      font-size: ${fonts.size.big};
      font-weight: ${fonts.weight.bold};
      color: ${colors.white};
    `;
  }}
`;
