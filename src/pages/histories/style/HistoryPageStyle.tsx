import styled from "styled-components";

export const NPage = styled.span`
    width: 90px;
    height: auto;
    display: flex;
    margin: 0px 30px 0px 60px;
    top: 114px;
    position: absolute;
    color: #f4f4f4;
    font-size: 1.3em;
    margin-left: 30%;
    #nup{
        padding-left: 3px;
        font-size: 1.1em;
        color: white;
    }
`
export const ContainerPages = styled.main`
    color: white;
    width: 100%;
    display: flex;
    justify-content: center;

`
export const TextPage = styled.div<{ onMouseDown?: React.MouseEventHandler<HTMLParagraphElement> }>`
  display: flex;
  justify-content: start;
  padding: 40px 65px;
  letter-spacing: 1px;
  font-size: 1.2em;
  line-height: 35px;
  font-weight: 300;
  width: 100%;
  flex-wrap: wrap;
  align-items: start;
  text-align: start;

  span {
    margin: 0 4px;
    cursor: pointer;
    text-align: start;
  }
`;

export const ContainerTranslate = styled.p`
  --background-light: #5816d1; /* Red */
  --background-dark: #000000; /* Black */
  --text-color-light: #ffffff;
  --text-color-dark: #ffffff;
  --bubble-size: 12px;
  --glow-color: rgba(255, 255, 255, 0.5); /* Brighter glow color */

  position: absolute;
  top: 100%;
  left: 0;
  width: auto;
  height: auto;
  background: var(--background-light);
  color: var(--text-color-light);
  border-radius: 8px; /* Rounded edges */
  padding: 0.7em 1.8em;
  font-size: 0.9em;
  z-index: 14;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  pointer-events: none;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s;
  margin-top: -100px;
  margin-left:-20px;

  &::before {
    content: "";
    position: absolute;
    top: 100%;
    /* left: 50%;    */
    transform: translate(-50%);
    border-style: solid;
    border-width: 8px 8px 0;
    border-color: var(--background-light) transparent transparent;
  }

  .tooltip-container:hover & {
    top: 120%; /* Adjusted position for the bubble tooltip */
    opacity: 1;
    visibility: visible;
    pointer-events: auto;
  }
`;



export const ToggleSwitch = styled.label`
  width: 50px;
  height: 50px;
  margin-left: 70%;
  margin-top: -45px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgb(31, 31, 31);
  border-radius: 50%;
  cursor: pointer;
  transition-duration: 0.3s;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.13);
  overflow: hidden;
  /* border: 1px solid green; */

  &:hover {
    background-color: rgb(61, 61, 61);
  }

  &:active {
    transform: scale(0.7);
  }
`;

export const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  display: none;
`;

export const Speaker = styled.div<{ checked: boolean }>`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
  transition-duration: 0.3s;
  opacity: ${props => (props.checked ? 0 : 1)};
`;

export const MuteSpeaker = styled.div<{ checked: boolean }>`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: ${props => (props.checked ? 1 : 0)};
  z-index: 3;
  transition-duration: 0.3s;
  background-color: ${props => (props.checked ? 'red' : 'transparent')};
  border: 1px solid ${props => (props.checked ? 'red' : 'green')};
`;

export const SpeakerIcon = () => (
  <svg viewBox="0 0 75 75" version="1.0" xmlns="http://www.w3.org/2000/svg" width="18" height="18">
    <path
      style={{ stroke: '#44a82e', strokeWidth: 5, strokeLinejoin: 'round', fill: '#2ed036' }}
      d="M39.389,13.769 L22.235,28.606 L6,28.606 L6,47.699 L21.989,47.699 L39.389,62.75 L39.389,13.769z"
    ></path>
    <path
      style={{ fill: 'none', stroke: '#fff', strokeWidth: 5, strokeLinecap: 'round' }}
      d="M48,27.6a19.5,19.5 0 0 1 0,21.4M55.1,20.5a30,30 0 0 1 0,35.6M61.6,14a38.8,38.8 0 0 1 0,48.6"
    ></path>
  </svg>
);

export const MuteSpeakerIcon = () => (
  <svg strokeWidth="5" stroke="#fff" viewBox="0 0 75 75" version="1.0" width="18" height="18">
    <path
      strokeLinejoin="round"
      fill="#fff"
      d="m39,14-17,15H6V48H22l17,15z"
    ></path>
    <path
      strokeLinecap="round"
      fill="#fff"
      d="m49,26 20,24m0-24-20,24"
    ></path>
  </svg>
);


export const FaqButton = styled.button`
  width: 40px;
  height: 40px;
  margin-left: 76%;
  margin-top: -65px;
  border-radius: 50%;
  border: none;
  background-color: #ffe53b;
  background-image: linear-gradient(147deg, #e2e2e2 0%, #3f14ad 74%);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.151);
  position: relative;

  svg {
    height: 1.5em;
    fill: white;
  }

  &:hover svg {
    animation: jello-vertical 0.7s both;
  }

  @keyframes jello-vertical {
    0% {
      transform: scale3d(1, 1, 1);
    }
    30% {
      transform: scale3d(0.75, 1.25, 1);
    }
    40% {
      transform: scale3d(1.25, 0.75, 1);
    }
    50% {
      transform: scale3d(0.85, 1.15, 1);
    }
    65% {
      transform: scale3d(1.05, 0.95, 1);
    }
    75% {
      transform: scale3d(0.95, 1.05, 1);
    }
    100% {
      transform: scale3d(1, 1, 1);
    }
  }
`;

export const Tooltip = styled.span`
  position: absolute;
  margin-top: -30px;
  opacity: 0;
  background-color: #ffe53b;
  background-image: linear-gradient(147deg, #d2d5d5 0%, #3f14ad 74%);
  color: white;
  padding: 5px 10px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition-duration: 0.2s;
  pointer-events: none;
  letter-spacing: 0.5px;
  width: 150px;
  z-index: 50;

  &::before {
    position: absolute;
    content: "";
    width: 10px;
    height: 10px;
    background-color: #d8d8d8 ;
    background-size: 1000%;
    background-position: center;
    transform: rotate(45deg);
    bottom: -15%;
    transition-duration: 0.3s;
  }
  
  ${FaqButton}:hover & {
    top: -40px;
    opacity: 1;
    transition-duration: 0.3s;
  }
`;

export const FaqIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
    <path
      d="M80 160c0-35.3 28.7-64 64-64h32c35.3 0 64 28.7 64 64v3.6c0 21.8-11.1 42.1-29.4 53.8l-42.2 27.1c-25.2 16.2-40.4 44.1-40.4 74V320c0 17.7 14.3 32 32 32s32-14.3 32-32v-1.4c0-8.2 4.2-15.8 11-20.2l42.2-27.1c36.6-23.6 58.8-64.1 58.8-107.7V160c0-70.7-57.3-128-128-128H144C73.3 32 16 89.3 16 160c0 17.7 14.3 32 32 32s32-14.3 32-32zm80 320a40 40 0 1 0 0-80 40 40 0 1 0 0 80z"
    ></path>
  </svg>
);