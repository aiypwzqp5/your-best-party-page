import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    html {
        --white: #fff;
        --black: #000;
        --orange: #EDAA52;
        --red: #E94F37;
        --light-gray: #F6F7EB;
        --gray: #D9D9D9;
        --dark-gray: #363535;
        --green: #34DA31;
        --cream: #F8ECEC; 
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: Roboto;
    }
`

export default GlobalStyle;