import styled, { keyframes } from 'styled-components';

export const ContainerLirycs = styled.section`
    display: flex;
    flex-direction: column;
    width: 92%;
    background-color: #111111;
    color: #e1e1e1;
    padding: 2% 0% 0% 0%;
    margin: 0 30px;
    padding: 0;
    border-radius: 5px;
    align-items: flex-start;
    text-align: left;
    position: relative;

    @media (min-width: 768px) {
        flex-direction: row;
        justify-content: space-between;
        margin: 0 30px;
        width: 97%;
    }
    @media (max-width: 600px){  
        background-color: transparent   ;
        margin: 6px 10px;
        width: 95%;
    }
`;

export const Lirycs = styled.p`
    font-size: 1.5em; 
    width: 100%;
    margin: 0;
    padding: 5% 2%;
    letter-spacing: 3px;
    font-family: Arial, Helvetica, sans-serif;
    line-height: 1.5;

    @media (min-width: 768px) {
        width: 50%;
        font-size: 1.8em; 
    }

    @media (min-width: 1024px) {
        font-size: 1.8em; 
        padding: 2% 2%;
    }
    @media (max-width: 600px){
        font-size: 1.3em; 
        letter-spacing: 2px;
    }
`;

// area works


export const Works = styled.p`
    width: 100%;
    background-color: #0f0e10;
    border-left:1px solid rgb(28, 9, 82);
    margin: 10px 0;
    padding: 2% 1%;
    box-sizing: border-box;
    position: sticky;
    bottom: 0; 
    top: auto; 
    
    @media (min-width: 768px) {
        width: 50%;
        position: sticky;
        top: 0px;
        height: 73vh;
        margin: 0;
    }

    @media (max-width: 767px) {
        position: sticky; 
        height: 70px;
        width: 100%;
        bottom: 0;
    }
`;

export const ContainerSong = styled.div`
    width: 100%;
    height: 60px;
    display: flex;
    border-bottom: 1px solid #eaeaeabd;
`

export const ContainerSongTitleAndAuthor = styled.div`
    display: flex;
    flex-direction: column;
    width: 30%;
    height: 50px;
    justify-content: center;
    padding-left: 10px;
    font-family: "Poppins";
  
`
export const ContainerSongIMG = styled.img`
    width: 50px;
    height: 50px;
`

export const ContainerSongTitle = styled.h2`
    width: 80%;
    height: 50px;
    color: aliceblue;
`
export const ContainerSongAuthor = styled.h3`
    font-size: 0.9em;
    color: #d4d4d4;
    margin-top: -20px;
    padding-left: 1px;
`
export const ContainerSongInf = styled.div`
    display: flex;
    justify-content: center;
    width: 60%;
    height: 50px;
    flex-direction: column;
    align-items: center;
    padding-top: 12px;
`
export const ContainerSongInfDiv = styled.div`
    display: flex;
    justify-content: space-around;
    width: 100%;
    height: 50px;
    column-gap: 10px;
    align-items: center;
    padding-top: 2px;
`
export const ContainerSongTimeCurrent = styled.span`
  font-weight: 400;
  font-size: 12px;
  color: #fff;
`;

export const ContainerSongTimeFinal = styled.span`
  font-weight: 400;
  font-size: 12px;
  color: #fff;
`;

export const ContainerSongProgress = styled.div`
  width: 100%;
  height: 4px;
  display: flex;
  align-items: center;
  cursor: pointer;

  progress {
    width: 100%;
    height: 100%;
    border-radius: 100px;
    appearance: none;

    &::-webkit-progress-bar {
      background-color: #424242;
      border-radius: 100px;
    }

    &::-webkit-progress-value {
      background-color: #2a5ab1;
      border-radius: 100px;
    }
  }
`;
export const ContainerSongControllers = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    column-gap: 20px;
    align-items: center;
    flex-wrap: wrap;
`
export const ContainerSongControllersBack = styled.button`
  border: none;
  background: transparent;
  cursor: pointer;

  svg {
    fill: #fff;
    width: 23px;
    height: 16px;
  }
`;

export const ContainerSongControllersForward = styled.button`
  border: none;
  background: transparent;
  cursor: pointer;

  svg {
    fill: #fff;
    width: 23px;
    height: 16px;
  }
`;

const ContainerSongControllersStartAndPause  = styled.div`
  width: 37px;
  height: 34px;
  position: relative;
  margin-top: -7px;
  border-radius: 50%;
  @media (max-width: 460px){
    margin-top: -13px;
}
`;

const borderAnimate = keyframes`
  0% {
    transform: rotate(0);
    background: conic-gradient(#f53a19, transparent 20%);
  }

  80% {
    background: conic-gradient(#e13415, transparent 90%);
  }

  100% {
    transform: rotate(360deg);
    background: conic-gradient(#e33819, #d32506);
  }
`;

const reveal = keyframes`
  0% {
    width: 0;
  }

  100% {
    width: 35%;
  }
`;
const PlayButton = styled.input`
  position: absolute;
  appearance: none;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: conic-gradient(#fff, #fff);
  cursor: pointer;
  outline: none;

  &::before {
    content: "";
    position: absolute;
    width: 93%;
    height: 93%;
    background-color: #000;
    border-radius: 50%;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }

  &:checked {
    animation: ${borderAnimate} 700ms ease-in-out 1;
    animation-fill-mode: forwards;
  }
`;

const PlayIcon = styled.div`
  position: absolute;
  width: 14px;
  height: 12px; 
  left: 60%;
  top: 50%;
  background-color: #f2f2f2;
  transform: translate(-60%, -50%) rotate(90deg);
  clip-path: polygon(50% 15%, 0% 100%, 100% 100%);
  transition: all 400ms ease-in-out;
  cursor: pointer;
  z-index: 2;

  ${PlayButton}:checked + & {
    clip-path: polygon(0 100%, 0% 100%, 100% 100%);
  }
`;

const PauseIcon = styled.div`
  position: absolute;
  width: 14px;
  height: 12px; 
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  cursor: pointer;
  z-index: 2;

  &::before {
    content: "";
    position: absolute;
    width: 0%;
    height: 100%;
    background-color: #f63f1e;
    left: 0;
  }

  &::after {
    content: "";
    position: absolute;
    width: 0;
    height: 100%;
    background-color: #f54425;
    right: 0;
  }

  ${PlayButton}:checked ~ &::before {
    animation: ${reveal} 300ms ease-in-out 350ms 1;
    animation-fill-mode: forwards;
  }

  ${PlayButton}:checked ~ &::after {
    animation: ${reveal} 300ms ease-in-out 600ms 1;
    animation-fill-mode: forwards;
  }
`;

export const PlayPauseButton: React.FC = () => {
    return (
      <ContainerSongControllersStartAndPause>
        <label>
          <PlayButton type="checkbox" />
          <PlayIcon />
          <PauseIcon />
        </label>
      </ContainerSongControllersStartAndPause>
    );
  };

  

  interface SwitchProps {
    id: string;
    checked: boolean;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  }
  
  const SwitchContainer = styled.div`
    background-color: rgba(0, 0, 0, 0.2);
    border-radius: 30px;
    border: 4px solid rgba(58, 58, 58, 0.1);
    box-shadow: 0 0 6px rgba(0, 0, 0, 0.5) inset;
    height: 48px;
    margin: 2px 20px;
    position: relative;
    width: 120px;
    display: inline-block;
    user-select: none;
  `;
  
  const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
    position: absolute;
    visibility: hidden;
  `;
  
  const SwitchLabel = styled.label`
    cursor: pointer;
    display: block;
    height: 42px;
    width: 115px;
    position: relative;
  `;
  
  const SwitchSlider = styled.span`
    background: linear-gradient(#4f4f4f, #2b2b2b);
    border-radius: 30px;
    border: 1px solid #1a1a1a;
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.5), 0 1px 1px rgba(255, 255, 255, 0.1) inset, 0 -2px 0 rgba(0, 0, 0, 0.2) inset;
    display: block;
    height: 38px;
    left: 1px;
    position: absolute;
    top: 1px;
    transition: all 0.2s linear;
    width: 53px;
  
    &::before {
        background: #fff;
    background: -webkit-linear-gradient(left, rgba(48, 48, 48, 0.4), rgba(34, 34, 34, 0.4));
    background: linear-gradient(left, rgba(48, 48, 48, 0.4), rgba(34, 34, 34, 0.4));
    border-radius: 30px 10px 10px 30px;
    box-shadow: -2px 0 5px rgba(0, 0, 0, 0.2) inset;
    content: "";
    display: block;
    height: 33px;
    left: 2px;
    position: absolute;
    top: 2px;
    width: 21px;
    user-select: none;
    }
  
    &::after {
        background: #fff;
    background: -webkit-linear-gradient(right, rgba(48, 48, 48, 0.4), rgba(34, 34, 34, 0.4));
    border-radius: 10px 30px 30px 10px;
    box-shadow: 2px 0 5px rgba(0, 0, 0, 0.2) inset;
    content: "";
    display: block;
    height: 33px;
    position: absolute;
    right: 2px;
    top: 2px;
    width: 21px;
    user-select: none;
    }
  `;
  
  const LightOn = styled.div`
    background: radial-gradient(circle, lightgreen 0%, green 100%);
    border-radius: 10px;
    border: 1px solid #004562;
    box-shadow: 0 2px 5px green, 0 0 5px green inset;
    content: "";
    display: block;
    height: 10px;
    position: absolute;
    top: 16px;
    right: -20%;
    transition: all 0.2s;
    width: 10px;
    z-index: 12;
  `;
  
  const LightOff = styled.div`
    background: radial-gradient(circle, rgb(255, 58, 58) 0%, rgb(255, 113, 113) 100%);
    border-radius: 10px;
    border: 1px solid #742323;
    box-shadow: 0 2px 5px rgba(255, 67, 48, 0.6), 0 0 5px rgba(255, 159, 109, 0.5) inset;
    content: "";
    display: block;
    height: 10px;
    position: absolute;
    top: 16px;
    left: -20%;
    transition: all 0.2s;
    width: 10px;
    z-index: 12;
  `;
  
  export const Switch = ({ id, checked, onChange }: SwitchProps) => (
    <SwitchContainer>
      <HiddenCheckbox id={id} checked={checked} onChange={onChange} />
      <SwitchLabel htmlFor={id}>
        {checked ? <LightOn /> : <LightOff />}
        <SwitchSlider
          style={{
            left: checked ? '59px' : '1px',
          }}
        />
      </SwitchLabel>
    </SwitchContainer>
  );

  export const ContainerScroll = styled.div`
    width: 100%;
    height: auto;
    padding:3% 0%;
  `