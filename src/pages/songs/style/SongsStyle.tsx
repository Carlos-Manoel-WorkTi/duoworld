import { NavLink } from "react-router-dom";
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

// Icon Styles
export const Icon = styled.svg<{ className?: string }>`
  height: 24px;
  width: 24px;
  color: ${props => props.className ? 'white' : '#ededed'};
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
  
  const ContainerSongs = styled.div<{$url:string}>`
    width: 23%;
    height: 100%;
    background-image: URL(${prop => prop.$url});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    color: white;
    position: relative;
    z-index: 1;
    max-width: 320px;
    min-height: 340px;
    border-radius: 10px;
    & > * {
      position: relative;
      z-index: 3;
      padding-left: 2%;
    }
    &::before{
      content: '';
      position: absolute;
      background: linear-gradient(to top, #000000, #000000f2, #1414146e);
      width: 100%;
      height: 100%;
      z-index: 2;
      border-radius: 5px;
      box-shadow: 0px 1px 1px #2a2a2a;
    }
    .blocoIcons{
      height: 30px;
      width: 100%;
      display: flex;
      justify-content: space-between;
      padding: 2% 5% 1% 0%;
      align-items: center;
      svg{
        width: 50px;
      }
      .heart{
        stroke: red;
      }
    }

    h2{
      width: 100%;
      display: flex;
      font-size: 2.6em;
      padding: 6% 3% 0% 4%;
      font-family: "Libre Bodoni", serif;
      font-optical-sizing: auto;
      min-height: 170px;
      align-items: end;
    }
    h3{
      width: 100%;
      display: block;
      font-size: 1.8em;
      padding: 0% 0% 5% 4%;
      font-family: "IBM Plex Sans", sans-serif;
      font-weight: 100;
      font-style: normal;
    }
    .blocoInf{
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 3% 4% 5% 4%;
      .time{
       font-size: 1.15em;
       margin-top: 2px;
      }
    }
    .data{
      padding: 0% 0% 5% 4%;
      color: #d4d4d4;
      font-family: "IBM Plex Sans", sans-serif;
    }

    .btn-listening{
      width: 100%;
      display: flex;
      justify-content: center;
      height: auto;
      padding-bottom: 5%;
      padding-top:3%;
    }
    &:hover{
      box-shadow: 0px 2px 2px #e6e5e8;;
      transition: ease-in;
    }
  `

const Tag = styled.span<{ $cl: string }>`
  padding: 0 3% 1% 2%;
  width: auto;
  height: auto;
  color: white;
  font-size: 1.2em;

  ${props => {
     const shadowColor = props.$cl === "easy" ? "#9F2E2E" : props.$cl === "hard" ? "#219ac2" : "green";
    return `
      text-shadow: 
        1px 1px 0 ${shadowColor},  
       -1px -1px 0 ${shadowColor},
        1px -1px 0 ${shadowColor},
       -1px 1px 0 ${shadowColor};
      border: 1px solid ${shadowColor};
    `;
  }}

  display: flex;
  align-items: start;
  border-radius: 5px;
`;

const StyledButton = styled.button`
  display: inline-block;
  padding: 12px 24px;
  border: 1px solid #4f4f4f;
  border-radius: 4px;
  transition: all 0.2s ease-in;
  position: relative;
  overflow: hidden;
  font-size: 19px;
  cursor: pointer;
  color: #f9f9f9;
  z-index: 1;
  background: transparent; /* Ensures the background is transparent */
  outline: none; /* Removes default button outline */
  text-align: center; /* Center text inside the button */
  
  &:before {
    content: "";
    position: absolute;
    left: 50%;
    transform: translateX(-50%) scaleY(1) scaleX(1.25);
    top: 100%;
    width: 140%;
    height: 180%;
    background-color: rgba(0, 0, 0, 0.05);
    border-radius: 50%;
    display: block;
    transition: all 0.5s 0.1s cubic-bezier(0.55, 0, 0.1, 1);
    z-index: -1;
  }

  &:after {
    content: "";
    position: absolute;
    left: 55%;
    transform: translateX(-50%) scaleY(1) scaleX(1.45);
    top: 180%;
    width: 160%;
    height: 190%;
    background-color: #4315ae;
    border-radius: 50%;
    display: block;
    transition: all 0.5s 0.1s cubic-bezier(0.55, 0, 0.1, 1);
    z-index: -1;
  }

  &:hover {
    color: #eaeaea;
    border: 1px solid #4315ae;
  }

  &:hover:before {
    top: -35%;
    background-color: #4315ae;
    transform: translateX(-50%) scaleY(1.3) scaleX(0.8);
  }

  &:hover:after {
    top: -45%;
    background-color: #4315ae;
    transform: translateX(-50%) scaleY(1.3) scaleX(0.8);
  }
`;
  interface CardsSongsIA {
    link:string;
    name:string;
    data:string;
    author:string;
    tag:string;
    time:string;
    id?:number;
  }
  const CardSong: React.FC<CardsSongsIA> = ({link,name,data,author,tag,time,id}) => {
    return(
      <ContainerSongs $url={link}>
        <div className="blocoIcons">
            <Icon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth={2}>
                <svg className="red" fill="none" height="26" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 18V5l12-2v13"></path>
                  <circle cx="6" cy="18" r="3"></circle>
                  <circle cx="18" cy="16" r="3"></circle>
                </svg>
              </Icon>
              <Icon className="heart" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
              </Icon>
        </div>
         <h2>{name}</h2>
         <h3>By {author}</h3>
         <div className="blocoInf">
            <Tag $cl={tag}>{tag}</Tag>
            <span className="time">{time}</span>
         </div>
         <h5 className="data">{data}</h5>
         <div className="btn-listening">
          <NavLink to={`/songs/name=${name}/id=${id}`}>
             <StyledButton>Ouvir musica</StyledButton>
          </NavLink>
         </div>
      </ContainerSongs>
    )
  }
  export  {PlayPauseButton,CardSong};