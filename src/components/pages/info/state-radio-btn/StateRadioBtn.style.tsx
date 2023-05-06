import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Text = styled.div`
  ${({ theme }) => {
    const { fonts } = theme;
    return css`
      padding-top: 3px;

      font-size: ${fonts.size.tiny};
      font-weight: ${fonts.weight.medium};
    `;
  }}
`;

export const Input = styled.input`
  width: 20px;
  height: 20px;
`;
