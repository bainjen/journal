import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

html, body {
  overflow-x: hidden;
  font-size: 16px; 
  background-color: ${({ theme }) => theme.bodyBackground};
}

h1 {
  font-size: 32px;
}

h2, h3, h4, h5, h6 {
  font-size: 24px; 
}

`;

/* CSS HEX */
const colors = {
  blacks: {
    black1: "#0c1618ff",
  },
  whites: {
    // white1: "#fdfbedff",
    white1: "#f9f8f5",
  },
  yellows: {
    yellow1: "#e0b700ff",
    yellow2: "#e0b7004a",
  },
  greens: {
    green1: "#004643ff",
  },
};

export const dandyTheme = {
  bodyBackground: colors.whites.white1,
  maxWidth: "1440px",
  borderRadius: "4px",

  //nav
  navBackground: colors.whites.white1,
  logoColor: colors.blacks.black1,
  navLinkColor: colors.blacks.black1,
  hoverColor: colors.yellows.yellow1,
  navFont: "'Montserrat', sans-serif",

  // index
  entryTitleColor: colors.yellows.yellow1,
  titleFont: "'Libre Baskerville', serif",
  textFont: "'Montserrat', sans-serif",
  textColor: colors.blacks.black1,
  cardColor: colors.whites.white1,
  btnBackground: colors.whites.white1,
  btnColor: colors.blacks.black1,
  btnFont: "'Montserrat', sans-serif",

  //create
  inputLabel: "'Montserrat', sans-serif",
  createBorder: colors.yellows.yellow1,
  xBtn: colors.yellows.yellow1,

  //preview
  prevTitleColor: colors.yellows.yellow1,
  prevTitleFont: "'Libre Baskerville', serif",
  prevHeadingColor: colors.blacks.black1,
  prevTextColor: colors.blacks.black1,
  prevTextFont: "'Montserrat', sans-serif",

  //login
  loginMainFont: "'Playfair Display', serif",
  loginHover: colors.yellows.yellow2,
};
