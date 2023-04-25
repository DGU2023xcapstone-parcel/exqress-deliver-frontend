const colors = {
  main: "#485EEE",
  sub: "#485EEEAB",
  black: "#000000",
  white: "#ffffff",
  gray100: "#9C9C9C",
  gray300: "#86888A",
};

const fontWeight = {
  regular: 400,
  medium: 500,
  bold: 700,
};

const fontSize = {
  tiny: "12px",
  small: "15px",
  medium: "17px",
  big: "20px",
  huge: "32px",
};

const fonts = {
  weight: fontWeight,
  size: fontSize,
};

const devices = {
  mobile: `@media only screen and (max-width: 425px)`,
  tablet: `@media only screen and (max-width: 768px)`,
  desktop: `@media only screen and (max-width: 1440px)`,
};

export const theme = {
  colors,
  fonts,
  devices,
};

export type ColorType = typeof colors;
export type FontType = typeof fonts;
export type DeviceType = typeof devices;
