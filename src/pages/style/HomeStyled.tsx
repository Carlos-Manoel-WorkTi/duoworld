import styled from 'styled-components';
// src/GlobalStyles.js
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background-color: #0D0D0D;
    }

`;


export const HomeComponent = styled.div`
    margin: 0;
    padding: 0;
    background-color: black;
`
export const SectionMainComponent = styled.section`
    height: 485px;
    background: #0D0D0D;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 80px;
    @media screen and (max-width:992px){
        gap: 20px; 
    }
    @media screen and (max-width:600px){
        flex-direction: column;
        height: auto;
        padding-bottom: 10%;
        padding-top: 5%;
    }
`
export const SectionMessage = styled.section`
    width: 100%;
    height: 300px;
    background: linear-gradient(38deg, #0D0D0D 48%, rgb(36, 4, 99));
   
    
`
export const ContainerMessage = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;

    h5{
        width: 85%;
        font-family: "Righteous", sans-serif;
        font-weight: 400;
        font-style: normal;
        color: #dedede;
        font-size: 1.5em;
        background-color: rgb(210 210 210 / 6%);
        padding: 30px 20px;
        border-radius: 10px;
        letter-spacing: 0.9px;
        text-align: center;
        line-height: 40px;
    }

    @media screen and (max-width:600px) {
        h5{
            font-size: 1.2em;
        }
    }
`