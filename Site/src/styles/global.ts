import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:focus {
  outline: 0;
  box-shadow: 0;
  -webkit-font-smoothing: antialiased;
}

body, input, textarea, button {
  font: 400 1rem 'Roboto', sans-serif;
}
`;


/*
-----------------------------------------------------------------------------
Essas são as configuração padrão que qualquer página que eu criar irá ter,
então por padrão eu defini as definições acima para fácilitar as criações dos
meus futuros projetos.
-----------------------------------------------------------------------------
 */
