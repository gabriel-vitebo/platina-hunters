import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size: 16px;
  }
  
  body {
    -webkit-font-smoothing: antialiased;
    font-family: ${({ theme }) => theme.FONTS.primary};
    background-color:  ${({ theme }) => theme.COLORS.blackBG};
  }


  a {
      text-decoration: none;
  }

  button,a {
    cursor: pointer;
    transition: filter 0.2s;
  }
`

export default GlobalStyles
