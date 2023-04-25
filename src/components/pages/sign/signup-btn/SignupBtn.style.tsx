import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const Wrapper = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Text = styled.h3`
  ${({ theme }) => {
    const { fonts } = theme;
    return css`
      font-size: ${fonts.size.small};
      font-weight: ${fonts.weight.regular};
    `;
  }}
`;

export const Button = styled(Link)`
  ${({ theme }) => {
    const { fonts, colors } = theme;
    return css`
      font-weight: ${fonts.weight.bold};
      font-size: ${fonts.size.small};
      color: ${colors.black};
    `;
  }}
`;
