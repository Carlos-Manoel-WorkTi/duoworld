import styled,{ keyframes } from "styled-components";

export const ContainerSong = styled.section`
    width: 100%;
    height: auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    row-gap: 30px;
    @media (max-width: 460px) {
    row-gap: 20px;
  }
    
`

// Card Container
export const Card = styled.div`
  width: 50%;
  max-width: 44vw;
  margin: auto;
  background-color: white;
  box-shadow: 0 1px 3px rgb(32, 17, 79);
  border-radius: 8px;
  overflow: hidden;
  @media (prefers-color-scheme: dark) {
    background: linear-gradient(109deg, #060606, #1f1f1f);
    color: 
    white;
  }
  @media (max-width: 460px) {
    width: 90%;
    max-width: none;
  }
  
`;

// Header Section
export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  @media (max-width: 460px) {
    padding: 10px;
  }
`;

// Info Section
export const Info = styled.div`
  display: flex;
  align-items: center;
`;

// Icon Styles
export const Icon = styled.svg<{ className?: string }>`
  height: 24px;
  width: 24px;
  color: ${props => props.className ? 'white' : '#6822e4'};
`;

// Text Info
export const TextInfo = styled.div`
  margin-left: 12px;
`;

export const Title = styled.h3`
  font-size: 1.125rem;
  font-weight: 500;
  color: ${props => props.theme.textColor};
`;

export const Artist = styled.p`
  color: ${props => props.theme.subTextColor};
`;

// Actions Section
export const Actions = styled.div`
  display: flex;
  align-items: center;
`;

// Progress Section
export const ProgressContainer = styled.div`
  position: relative;
  padding: 16px;
`;


export const Time = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 0.875rem;
  color: ${props => props.theme.textColor};
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

// Componentes Estilizados
const Container = styled.div`
  width: 37px;
  height: 34px;
  position: relative;
  margin-top: -7px;
  border-radius: 50%;
  @media (max-width: 460px){
    margin-top: -13px;
  }
`;

const PlayButton = styled.input`
  position: absolute;
  appearance: none;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: conic-gradient(#56d866, #13af13);
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
  background-color: #75ff47;
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
const PlayPauseButton: React.FC = () => {
    return (
      <Container>
        <label>
          <PlayButton type="checkbox" />
          <PlayIcon />
          <PauseIcon />
        </label>
      </Container>
    );
  };
  
  export default PlayPauseButton;