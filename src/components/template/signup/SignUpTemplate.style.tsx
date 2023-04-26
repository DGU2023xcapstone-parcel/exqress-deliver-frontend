import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const Wrapper = styled.div`
  height: 100%;
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  position: relative;
`;

export const Box = styled.div`
  height: 60%;
  width: 90%;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

export const Text = styled.div`
  ${({ theme }) => {
    const { fonts } = theme;
    return css`
      width: 100%;
      padding-top: 10px;

      font-size: ${fonts.size.tiny};
      font-weight: ${fonts.weight.medium};
    `;
  }}
`;
