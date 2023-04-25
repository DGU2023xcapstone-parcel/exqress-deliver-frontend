import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const Button = styled.button`
  ${({ theme }) => {
    const { colors, fonts } = theme;
    return css`
      height: 34px;
      width: 100%;

      color: ${colors.white};
      font-size: ${fonts.size.tiny};
      font-weight: ${fonts.weight.bold};

      border-radius: 10px;
      background-color: ${colors.sub};
    `;
  }}
`;
