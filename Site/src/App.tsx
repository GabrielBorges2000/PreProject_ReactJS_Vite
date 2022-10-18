import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { Router } from './Router'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/theme/default'



export function App() {
    return (
      <ThemeProvider theme={defaultTheme}>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
        <GlobalStyle />
      </ThemeProvider>
    )
}

/*
-----------------------------------------------------------------------------
ThemeProvider
Representa que as minhas cores estão
sendo aplicadas na minha home ou nas rotas criadas.
-----------------------------------------------------------------------------
Ao utilizar o termo export
facilita para que a minha exportação de arquivo ou de
função funcione de maniera mais fácil e rápida.
-----------------------------------------------------------------------------
 */
