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
    white1: "#fdfbedff",
  },
  yellows: {
    yellow1: "#e0b700ff",
  },
  greens: {
    green1: "#004643ff",
  },
};

export const dandyTheme = {
  entryTitleColor: colors.yellows.yellow1,
};
