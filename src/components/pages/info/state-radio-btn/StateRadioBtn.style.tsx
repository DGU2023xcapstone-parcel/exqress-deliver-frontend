import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Input = styled.input``;

export const Text = styled.div`
  ${({ theme }) => {
    const { fonts } = theme;
    return css`
      font-size: ${fonts.size.tiny};
      font-weight: ${fonts.weight.medium};
    `;
  }}
`;
