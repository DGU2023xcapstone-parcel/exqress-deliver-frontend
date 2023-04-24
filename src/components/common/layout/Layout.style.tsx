import styled from "@emotion/styled";

export const Wrapper = styled.div`
  height: calc(100vh - 79px);

  display: flex;
  flex-direction: column;

  & > .content {
    height: 100%;
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
