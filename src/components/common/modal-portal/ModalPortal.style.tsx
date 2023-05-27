import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const Wrapper = styled.div`
  ${({ theme }) => {
    return css`
      width: 100vw;
      height: 100vh;
      top: 0;
      left: 0;

      position: fixed;
      display: flex;
      justify-content: center;
      align-items: center;

      background-color: ${theme.colors.black};
      background: rgba(15, 15, 15, 0.7);
      z-index: 999;
    `;
  }}
`;

export const Box = styled.div`
  ${({ theme }) => {
    return css`
      width: 300px;
      height: 200px;

      color: ${theme.colors.black};
      background-color: ${theme.colors.white};
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      border-radius: 20px;
    `;
  }}
`;
