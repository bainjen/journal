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
  navBackground: colors.whites.white1,
  logoColor: colors.blacks.black1,
  navLinkColor: colors.blacks.black1,
  hoverColor: colors.yellows.yellow1,

  entryTitleColor: colors.yellows.yellow1,
};
