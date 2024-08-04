// src/styles/GlobalStyle.js
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  
}

html {
font-size: 16px; /* Ustawienie bazowego rozmiaru czcionki */
  scroll-behavior: smooth;
  overflow-x: hidden;
}

body {
  background: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
  font-family: 'Roboto', sans-serif;
  transition: all 0.50s linear;
  overflow-x: hidden;
  
}

a {
  text-decoration: none; /* Usuwa podkreślenie z linków */
  color: ${({ theme }) => theme.linkColor}; /* Ustawia kolor linków */
  transition: color 0.3s ease; /* Dodaje płynne przejście koloru z opóźnieniem */
}

a:hover {
  color: ${({ theme }) =>
    theme.linkHover}; /* Ustawia kolor linków podczas najechania myszką */
}

p {
  line-height: 1.6; /* Ustawia wysokość linii dla tekstu w paragrafach */
}


.dark-mode {
  background: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
}

.light-mode {
  background: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
}
`;

export default GlobalStyle;
