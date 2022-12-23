import { ThemeProvider } from 'styled-components'
import theme from '/styles/theme'
import JsxGlobalStyle from '/styles/global/styled-jsx'
import GlobalStyle from '/styles/global'
import { StoreProvider } from '/store'

function App({ Component, pageProps }) {
  return (
    <>
      <style jsx global>
        {JsxGlobalStyle}
      </style>
      <GlobalStyle />
      <StoreProvider>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </StoreProvider>
    </>
  )
}

export default App
