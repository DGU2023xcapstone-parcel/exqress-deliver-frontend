import styled from "@emotion/styled";
import { css, keyframes } from "@emotion/react";

const slideIn = keyframes`
  from {
    transform: translateY(200%);
  }
  to {
    transform: translateY(0);
  }
`;

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  bottom: 0;
  left: 0;

  position: fixed;
  display: flex;
  justify-content: center;
  align-items: end;
  z-index: 999;

  background-color: rgba(0, 0, 0, 0.5);
`;

export const Box = styled.div`
  ${({ theme }) => {
    return css`
      max-width: 420px;
      width: 100%;
      height: 240px;

      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      color: ${theme.colors.black};
      background-color: ${theme.colors.white};
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      border-radius: 15px 15px 0 0;

      animation: ${slideIn} 0.5s ease-in-out;
    `;
  }}
`;

export const Header = styled.div`
  ${({ theme }) => {
    return css`
      width: 92%;
      margin-bottom: 20px;

      display: flex;
      justify-content: space-around;
      align-items: center;

      color: ${theme.colors.black};
      font-size: ${theme.fonts.size.big};
      font-weight: ${theme.fonts.weight.bold};
    `;
  }}
`;

export const Logo = styled.img`
  margin-right: 3px;
`;

export const Image = styled.img`
  margin-right: 3px;
`;

export const Desc = styled.div`
  ${({ theme }) => {
    return css`
      display: flex;

      font-size: ${theme.fonts.size.medium};
      font-weight: ${theme.fonts.weight.regular};
    `;
  }}
`;

export const Text = styled.div`
  padding-top: 5px;
`;

export const Button = styled.button`
  ${({ theme }) => {
    return css`
      width: 340px;
      height: 40px;

      color: ${theme.colors.white};
      font-size: ${theme.fonts.size.big};
      font-weight: ${theme.fonts.weight.bold};

      background-color: ${theme.colors.main};
      border: 1px solid ${theme.colors.main};
    `;
  }}
`;

export const Footer = styled.div`
  ${({ theme }) => {
    return css`
      margin-top: 20px;

      color: ${theme.colors.gray300};
      font-size: ${theme.fonts.size.medium};
      font-weight: ${theme.fonts.weight.medium};
      text-decoration: underline;
    `;
  }}
`;
