import styled, { createGlobalStyle } from 'styled-components';
import BGImage from './images/numberonecopilot-bg.png';

const colors = {
    primary: "white",
    secondary: "#fffff"
}

export const GlobalStyle = createGlobalStyle`

body {
    background-image: url(${BGImage});
    background-size: cover;
    height: 100vh;
    overflow-y: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
}

* {
    box-sizing: border-box;
    font-family: 'Lato';
}
`;

export const Wrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-center: center;
width: 90vw;
max-width: 800px;
min-height: 400px;
margin: 0 auto;

background: rgba( 255, 255, 255, 0.30 );
box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
backdrop-filter: blur( 12.5px );
-webkit-backdrop-filter: blur( 10.0px );
border-radius: 20px;
border: 1px solid rgba( 255, 255, 255, 0.18 );

> h1 {
    font-family: 'Yeseva One';
    color: ${colors.primary};
    display: flex;
    flex-direction: row;
    justify-content: center;
}

> p {
    color: ${colors.primary};
    font-weight: bold;
    display: flex;
    flex-direction: row;
    justify-content: center;
}

.start {
    width: 50px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-self: center;
}
`