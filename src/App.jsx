import { ThemeProvider } from 'styled-components'
import { Main } from './pages/Main'
import { GlobalStyle } from './style/global'
import { Theme } from './style/theme/theme'

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <Main />
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
