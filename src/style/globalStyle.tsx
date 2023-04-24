import { Global, css } from "@emotion/react";

const style = css`
  html,
  body {
    max-width: 420px;
    padding: 0;
    margin: 0px auto;

    -webkit-text-size-adjust: none;
  }
  select,
  input,
  button,
  textarea {
    border: 0;
    outline: 0 !important;
  }
`;

const GlobalStyle = () => {
  return <Global styles={style} />;
};

export default GlobalStyle;
