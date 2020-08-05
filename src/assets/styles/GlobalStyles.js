import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
    html {
        scroll-behavior: smooth;
    }
    body {
        display: flex;
        @media (max-height: 1024px) {
            display: block;
        }
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
    button {
        cursor: pointer;
    }
    #root {
        margin: 0 auto;
        margin-top: 80px;
        @media (max-height: 1024px) {
            margin-top: 0px;
        }
        width: ${({ theme }) => theme.width};
        height: 736px;
        @media (max-height: 1024px) {
            height: auto;
        }
        -webkit-box-shadow: 53px 24px 52px -4px rgba(184,182,184,1);
        -moz-box-shadow: 53px 24px 52px -4px rgba(184,182,184,1);
        box-shadow: 53px 24px 52px -4px rgba(184,182,184,1);
        border-radius: ${({ theme }) => theme.borderRadius};
        @media (max-height: 1024px) {
            border-radius: 0px;
        }
        background-color: ${({ theme }) => theme.white};
        overflow:auto;
        &::-webkit-scrollbar {
            display: none;
        };
        -ms-overflow-style: none;  /* IE and Edge */
        scrollbar-width: none;  /* Firefox */
    }
`

export default GlobalStyles
