import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    html {
        scroll-behavior: smooth;
    }
    body {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0;
        padding: 0;
        height: 100vh;
        background-color: ${({ theme }) => theme.backgroundRoot};
        font-family: 'Roboto', sans-serif;
        font-size: 16px;
        text-align: center;
        color: ${({ theme }) => theme.darkBlue};
    }
    a {
        color: ${({ theme }) => theme.darkBlue};
        text-decoration: none;
    }
    #root {
        margin: 0 auto;
        margin-top: 80px;
        width: ${({ theme }) => theme.width};
        height: 736px;
        -webkit-box-shadow: 53px 24px 52px -4px rgba(184,182,184,1);
        -moz-box-shadow: 53px 24px 52px -4px rgba(184,182,184,1);
        box-shadow: 53px 24px 52px -4px rgba(184,182,184,1);
        border-radius: ${({ theme }) => theme.borderRadius};
        background-color: ${({ theme }) => theme.white};
        overflow:auto;
        &::-webkit-scrollbar {
            display: none;
        };
        -ms-overflow-style: none;  /* IE and Edge */
        scrollbar-width: none;  /* Firefox */
    }
`;

export default GlobalStyles;
