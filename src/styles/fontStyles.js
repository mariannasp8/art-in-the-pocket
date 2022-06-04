import { createGlobalStyle } from "styled-components";

const FontStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Joan&display=swap')
font-family: 'Joan', serif;
${
  "" /* @font-face {
  font-family: 'Avenir';
  src: url(${AvenirRoman}) format('woff');
  font-family: 'Faro Variable Trial';
  src: url(${FaroVariableWebTrial}) format('woff2');
} */
}
`;

export default FontStyles;
