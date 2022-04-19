import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${props => props.theme.lightcolors.background};
    color: ${props => props.theme.lightcolors.text};
    font-family: 'Karla', sans-serif;
  }
`
