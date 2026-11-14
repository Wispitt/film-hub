import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        background-color: #000000;
    }

    * {
        outline: none;
        text-decoration: none;
        border: none;
        font-family: "Chewy", system-ui;
    }

    button, a {
        cursor: pointer;
    }
`;
