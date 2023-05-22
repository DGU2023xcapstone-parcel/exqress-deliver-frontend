import { css } from "@emotion/react";
import styled from "@emotion/styled";

interface LoadingState {
  isActivate: boolean;
}
export const Wrapper = styled.div<LoadingState>`
  ${({ isActivate }) => {
    return css`
      width: 100vw;
      height: 100vh;
      top: 0;
      left: 0;

      display: ${isActivate ? "flex" : "none"};
      align-items: center;
      justify-content: center;
      position: absolute;

      background: #ffffffb7;
      z-index: 999;
    `;
  }}
`;

export const Img = styled.img`
  width: 100px;
  height: 100px;
`;
