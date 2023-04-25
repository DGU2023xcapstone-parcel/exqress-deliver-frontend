import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { SizeType } from "@/types/types";

interface SizeProps {
  sizeType: SizeType;
}
export const Wrapper = styled.div<SizeProps>`
  ${({ sizeType }) => {
    return css`
      height: 34px;
      width: ${sizeType === "Big"
        ? "100%"
        : sizeType === "Medium"
        ? "70%"
        : "30%"};

      display: flex;
    `;
  }}
`;

export const Box = styled.input`
  ${({ theme }) => {
    const { colors, fonts } = theme;
    return css`
      height: 100%;
      padding-left: 10px;

      flex: 1;

      font-size: ${fonts.size.tiny};
      font-weight: ${fonts.weight.medium};
      color: ${colors.gray100};

      border-radius: 10px;
      border: 0.5px solid ${colors.gray100};
    `;
  }}
`;
