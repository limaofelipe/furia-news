import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: 0;
  }

  body {
    background: ${(props) => props.theme['gray-900']};
    color: ${(props) => props.theme['gray-900']};
    margin: 0 auto;
    
    -webkit-font-smoothing: antialiased;
  }


  body, input, textarea, button {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
  }

`
