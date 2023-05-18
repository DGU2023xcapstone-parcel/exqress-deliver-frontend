import { css } from "@emotion/react";
import styled from "@emotion/styled";

interface SubTextState {
  isValid: boolean;
}
export const Wrapper = styled.div`
  height: 100%;
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const Box = styled.div`
  height: 50%;
  width: 90%;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

export const TextBox = styled.div`
  width: 100%;
  height: 70px;
`;

export const Text = styled.div`
  ${({ theme }) => {
    const { fonts } = theme;
    return css`
      width: 100%;
      padding-bottom: 10px;

      font-size: ${fonts.size.tiny};
      font-weight: ${fonts.weight.medium};
    `;
  }}
`;

export const SubText = styled.div<SubTextState>`
  ${({ theme, isValid }) => {
    const { fonts, colors } = theme;
    return css`
      width: 100%;
      padding-top: 10px;

      font-size: ${fonts.size.tiny};
      font-weight: ${fonts.weight.medium};
      color: ${isValid ? colors.main : colors.red};
    `;
  }}
`;
