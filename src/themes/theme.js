import { createGlobalStyle } from "styled-components";
// font-family: 'Abril Fatface', cursive;
// font-family: 'Libre Baskerville', serif;
// font-family: 'Lobster', cursive;
// font-family: 'Merriweather', serif;
// font-family: 'Montserrat', sans-serif;
// font-family: 'Open Sans', sans-serif;
// font-family: 'Oswald', sans-serif;
// font-family: 'Playfair Display', serif;

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
};
