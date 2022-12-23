import { createGlobalStyle } from 'styled-components'
import { normalize } from 'polished'
import fonts from '/styles/theme/fonts'

const GlobalStyle = createGlobalStyle`
  ${normalize}

  div {
    box-sizing: border-box;
    word-break: break-word;
  }
  a {
    text-decoration: none;
    cursor: pointer;
  }
  
  body {
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    -webkit-touch-callout: none;
    -webkit-text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
    margin: auto;
    overflow-x: hidden;
    background-size: 100%;
    font-family: ${fonts.roboto};
    &.no-scroll {
      overflow: hidden;
    }
    svg, img {
      display: block;
    }
  }

  * {
    -webkit-tap-highlight-color: transparent;

    &:focus {
      outline: none;
    }
  }
`

export default GlobalStyle
