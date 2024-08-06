import styled, { keyframes }  from 'styled-components';
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
        overflow-x: hidden;
        box-sizing: border-box;
        height: 100vh;
        min-height: 100vh;
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
export const ShowerIn = styled.section`
    width: 100%;
    height: 18vh;
    background-color: rgb(13, 13, 13);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-right: 40px;
    @media (max-width: 800px) {
      height: 14vh;
  }
    @media (max-width: 500px) {
      height: 14vh;
      div:last-child{
        display: none;
      }
  }
  
    `
// HomeStyled.ts


// Animate 1
const uiverse723 = keyframes`
  0%, 100% {
    clip-path: polygon(0% 45%, 15% 44%, 32% 50%, 
     54% 60%, 70% 61%, 84% 59%, 100% 52%, 100% 100%, 0% 100%);
  }
  50% {
    clip-path: polygon(0% 60%, 16% 65%, 34% 66%, 
     51% 62%, 67% 50%, 84% 45%, 100% 46%, 100% 100%, 0% 100%);
  }
`;

const Loader = styled.div`
  position: relative;
  margin: 60px 220px;
  @media (max-width: 600px) {
    margin: 60px 153px;
    }
    @media (max-width: 500px) {
      margin: 40px 123px;
    }
    @media (max-width: 360px) {
      margin: 30px 100px;
    }
`;

const Span = styled.span`
  position: absolute;
  color: #ffffff;
  transform: translate(-50%, -50%);
  font-size: 58px;
  letter-spacing: 5px;
  font-family: "Shojumaru", system-ui;
    font-weight: 400;
    font-style: normal;

  &:nth-child(1) {
    /* color: transparent; */
    -webkit-text-stroke: 0.3px rgb(130 75 242);
  }

  &:nth-child(2) {
    color: rgb(65, 54, 189);
    -webkit-text-stroke: 1px rgb(105, 41, 224);
    animation: ${uiverse723} 3s ease-in-out infinite;
  }
  @media (max-width: 600px) {
    font-size: 40px;
    
  }
  @media (max-width: 500px) {
    font-size: 30px;
    
  }
  @media (max-width: 360px) {
    font-size: 25px;
    
  }
`;

export const LoaderComponent = () => {
  return (
    <Loader>
      <Span>DuoWord</Span>
      <Span>DuoWord</Span>
    </Loader>
  );
};

// Animação de dashArray
const dashArray = keyframes`
  0% {
    stroke-dasharray: 0 1 359 0;
  }
  50% {
    stroke-dasharray: 0 359 1 0;
  }
  100% {
    stroke-dasharray: 359 1 0 0;
  }
`;

// Animação de dashOffset
const dashOffset = keyframes`
  0% {
    stroke-dashoffset: 385;
  }
  100% {
    stroke-dashoffset: 5;
  }
`;

// Estilos do contêiner
const LoaderContainer = styled.div`
  display: flex;
  margin: 0.25em 0;
  background-color: transparent;
  box-shadow: 0 1px 0px #20114f, 0 0 1px #20114f, 0 0 0px #20114f;
  border: none;
  border-radius: 20px;
  padding: 10px;

`;

const SvgContainer = styled.svg`
  display: inline-block;
`;

const AbsoluteSvg = styled(SvgContainer)`
  position: absolute;
  height: 0;
  width: 0;
`;

const DashPath = styled.path`
  animation: ${dashArray} 2s ease-in-out infinite, ${dashOffset} 2s linear infinite;
`;

// Componente LoaderDW
export const LoaderDW = ({ size = 100 }) => (
  <LoaderContainer>
    <AbsoluteSvg viewBox="0 0 100 100">
      <defs xmlns="http://www.w3.org/2000/svg">
        <linearGradient gradientUnits="userSpaceOnUse" y2="2" x2="0" y1="22" x1="0" id="b">
          <stop stopColor="#f5f5f5"></stop>
          <stop stopColor="rgb(65, 54, 189)" offset="1.5"></stop>
        </linearGradient>
        <linearGradient gradientUnits="userSpaceOnUse" y2="0" x2="0" y1="64" x1="0" id="c">
          <stop stopColor="rgb(65, 54, 189)"></stop>
          <stop stopColor="#ffffff" offset="1"></stop>
          <animateTransform
            repeatCount="indefinite"
            keySplines=".42,0,.58,1;.42,0,.58,1;.42,0,.58,1;.42,0,.58,1;.42,0,.58,1;.42,0,.58,1;.42,0,.58,1;.42,0,.58,1"
            keyTimes="0; 0.125; 0.25; 0.375; 0.5; 0.625; 0.75; 0.875; 1"
            dur="8s"
            values="0 32 32;-270 32 32;-270 32 32;-540 32 32;-540 32 32;-810 32 32;-810 32 32;-1080 32 32;-1080 32 32"
            type="rotate"
            attributeName="gradientTransform"
          ></animateTransform>
        </linearGradient>
        <linearGradient gradientUnits="userSpaceOnUse" y2="2" x2="0" y1="62" x1="0" id="d">
          <stop stopColor="#f4f4f4"></stop>
          <stop stopColor="rgb(65, 54, 189)" offset="1.5"></stop>
        </linearGradient>
      </defs>
    </AbsoluteSvg>

    <SvgContainer viewBox="0 0 100 100" width={size} height={size}>
      <DashPath
        strokeLinejoin="round"
        strokeLinecap="round"
        strokeWidth="11"
        stroke="url(#c)"
        fill="none" /* Remove qualquer preenchimento */
        d="M 30,20 Q 130,80 20,90 L 20,20 Z"
        pathLength="320"
      ></DashPath>
    </SvgContainer>

    <SvgContainer viewBox="0 0 100 100" width={size + 5} height={size}>
      <DashPath
        strokeLinejoin="round"
        strokeLinecap="round"
        strokeWidth="9"
        stroke="url(#d)"
        fill="none" /* Remove qualquer preenchimento */
        d="M 1,20 L 20,90 L 40,40 L 70,90 L 90,20"
        pathLength="360"
      ></DashPath>
    </SvgContainer>
  </LoaderContainer>
);