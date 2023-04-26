import styled from "@emotion/styled";

export const Wrapper = styled.div`
  height: 100vh;

  display: flex;
  flex-direction: column;

  & > .content {
    height: 100%;
    width: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
