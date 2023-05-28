import styled from "@emotion/styled";
import { css, keyframes } from "@emotion/react";

const slideIn = keyframes`
  from {
    transform: translateY(-100%);
  }
  to {
    transform: translateY(0);
  }
`;

export const Wrapper = styled.div`
  width: 100vw;
  height: 30px;
  top: 20px;
  left: 0;

  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
  animation: ${slideIn} 0.5s ease-in-out;
`;

export const Box = styled.div`
  ${({ theme }) => {
    return css`
      width: 200px;
      height: 30px;

      color: ${theme.colors.white};
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      border-radius: 15px;
    `;
  }}
`;
