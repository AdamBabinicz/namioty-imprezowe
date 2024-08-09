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
  outline: none;
  background: none;
}

a:hover {
  color: ${({ theme }) =>
    theme.linkHover}; /* Ustawia kolor linków podczas najechania myszką */
}

svg {
  fill: currentColor; /* Ustawienie koloru SVG zgodnie z kolorem tekstu */
  stroke: currentColor; /* Zapewnia zgodność dla SVG ze ścieżkami */
  vertical-align: middle; /* Wyśrodkowanie ikony SVG względem tekstu */
  transition: fill 0.3s ease, stroke 0.3s ease; /* Dodaje płynne przejście koloru */
  display: inline-block; /* Zapewnia prawidłowe wyświetlanie w blokach inline */
  overflow: visible; /* Zapobiega problemom z widocznością SVG */
  backface-visibility: hidden; /* Zapobiega zanikaniu SVG na niektórych przeglądarkach */
}

p {
  line-height: 1.6; /* Ustawia wysokość linii dla tekstu w paragrafach */
}
`;

export default GlobalStyle;
