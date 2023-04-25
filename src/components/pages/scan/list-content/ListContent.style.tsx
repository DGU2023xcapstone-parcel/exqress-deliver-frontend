import styled from "@emotion/styled";

export const Wrapper = styled.div`
  height: 15%;
  width: 100%;

  display: flex;
  align-items: center;

  border-bottom: 1px solid ${(props) => props.theme.colors.main};
`;

export const RightBox = styled.div`
  width: 75%;

  text-align: center;
`;

export const LeftBox = styled.div`
  width: 25%;

  text-align: left;
`;

export const Text = styled.div`
  size: ${(props) => props.theme.fonts.size.big};
  font-weight: ${(props) => props.theme.fonts.weight.medium};
`;
