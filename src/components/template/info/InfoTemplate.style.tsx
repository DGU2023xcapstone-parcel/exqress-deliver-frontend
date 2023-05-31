import { css } from "@emotion/react";
import styled from "@emotion/styled";

interface ScrollState {
  isScroll: boolean;
}

export const Wrapper = styled.div`
  height: 100%;
  width: 90%;

  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const TitleBox = styled.div`
  height: 150px;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

export const RadioBox = styled.div`
  width: 100%;
  height: 50px;

  display: flex;
  justify-content: space-around;
`;

export const InfoBox = styled.div<ScrollState>`
  ${({ isScroll }) => {
    return css`
      height: 500px;
      width: 100%;

      overflow: auto;

      /* touch-action: ${isScroll ? "pan-y" : "none"}; */
      /* overscroll-behavior: contain; */
    `;
  }}
`;

export const Title = styled.div`
  ${({ theme }) => {
    const { fonts } = theme;
    return css`
      font-size: ${fonts.size.huge};
      font-weight: ${fonts.weight.medium};
    `;
  }}
`;

export const Line = styled.hr`
  ${({ theme }) => {
    const { colors } = theme;
    return css`
      height: 3px;
      width: 100%;

      background-color: ${colors.main};
    `;
  }}
`;
