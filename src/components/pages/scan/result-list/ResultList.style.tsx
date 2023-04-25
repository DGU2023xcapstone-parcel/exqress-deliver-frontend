import styled from "@emotion/styled";

export const Wrapper = styled.div`
  height: 100%;
  width: 80%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h2`
  width: 100%;

  display: flex;
  justify-items: left;

  size: ${(props) => props.theme.fonts.size.huge};
  font-weight: ${(props) => props.theme.fonts.weight.medium};
`;

export const Box = styled.div`
  height: 370px;
  width: 100%;

  border-top: 3px solid ${(props) => props.theme.colors.main};
`;
