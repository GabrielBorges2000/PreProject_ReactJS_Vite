import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

*{
  margin: 0;
  padding: 0;
  box-sizing: border border-box;
}

:focus {
  outline: 0;
  box-shadow: 0 0 0 2px ${props => props.theme['green-500']};
  -webkit-font-smoothing: antialiased;
}

body, input, textarea, button {
  background: black;
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
