import { createGlobalStyle } from 'styled-components';
import Header from '../components/Header';

const googleFontURL = 'https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&display=swap';


const GlobalStyle = createGlobalStyle`
    @import url('${googleFontURL}'); 

    :root {
        --padding-small: 8px;
        --padding-medium: 16px;
        --padding-large: 24px;
        --margin-small: 8px;
        --margin-medium: 16px;
        --margin-large: 24px;
    }

    body {
        margin: 0;
        padding: 0;
        font-family: 'Open Sans', sans-serif; 
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        font-size: calc(12px + 0.5vw); 
    }

    img {
        max-width: 100%;
        height: auto;
    }
    
    @media (max-width: 768px) {
        :root {
            --padding-small: 4px;
            --padding-medium: 8px;
            --padding-large: 12px;
            --margin-small: 4px;
            --margin-medium: 8px;
            --margin-large: 12px;
        }

        body {
            font-size: calc(12px + 1vw); 
        }
    }
`;

function MyApp({ Component, pageProps }) {
    return (
        <>
            <GlobalStyle />
            <Header />

            <Component {...pageProps} />
        </>
    );
}

export default MyApp;