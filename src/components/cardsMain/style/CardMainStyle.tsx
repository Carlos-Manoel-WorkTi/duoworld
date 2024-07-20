// src/CardComponent.js
import React from 'react';
import styled from 'styled-components';
import CardComponentProps from '../DTOs/CardComponentProps ';
import ProgressBarProps from '../DTOs/ProgressBarProps';
import { NavLink } from 'react-router-dom';


const Card = styled.div`
  width: 260px;
  height: 330px;
  border-radius: 20px;
  background: #0D0D0D;
  padding: 5px;
  padding-top: 10px;
  overflow: hidden;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 20px 0px;
  transition: transform 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);

  &:hover {
    transform: scale(1.1);
  }

  @media (max-width: 992px){
    width: 230px;
    height: 300px;
        }
  @media (max-width: 720px){
    width: 200px;
    height: 290px;
      }
  @media (max-width: 720px) {
    width: 80%;
    min-width: 100px;
    height: 290px;
    }
`;

const TopSection = styled.div<{
    startColor?: string;
    endColor?: string;
}>`
  height: 180px;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  background: linear-gradient(
    45deg,
    ${props => props.startColor || 'rgb(89, 4, 187)'} 0%,
    ${props => props.endColor || '#307EB7'} 100%
  );
  position: relative;
  
  #container_info{
    width: 100%;
    height: 85%;
    /* height: 96%; */
    display: flex;
    justify-content: center;
   padding-left: 10px;
    flex-direction: column;
    font-family: "Inika", serif;

    .url{
      text-decoration: none;
    }
    #bloco1{
      height: 52%;

      #containerTags{
        display: flex;
        justify-content: start;
        gap: 5px;
      }
    }
    #bloco2{
      height: 20%;
      display: flex;
        width: 100%;
        justify-content: center;
    }
    #bloco3{
      height: 5%;
    }

    @media (max-width: 992px){

    }
    @media screen and (max-width:600px){
      #bloco2{
        display: flex;
        width: 100%;
        justify-content: center;
    }
    }
  }

  &::before {
    content: "";
    position: absolute;
    top: 30px;
    left: 0;
    background: rgba(255, 255, 255, 0);
    height: 15px;
    width: 15px;
    border-top-left-radius: 15px;
    box-shadow: -5px -5px 0 2px #0D0D0D;
  }
`;

const Border = styled.div`
  border-bottom-right-radius: 10px;
  height: 30px;
  width: 150px;
  background: #0D0D0D;
  position: relative;
  transform: skew(-40deg);
  box-shadow: -10px -10px 0 0 #0D0D0D;

  &::before {
    content: "";
    position: absolute;
    width: 15px;
    height: 15px;
    top: 0;
    right: -15px;
    background: rgba(255, 255, 255, 0);
    border-top-left-radius: 10px;
    box-shadow: -5px -5px 0 2px #0D0D0D;
  }

  @media screen and (max-width:992px) {
    width: 127px;
  }
  @media screen and (max-width:722px) {
    width: 111px;
  }
`;

const Icons = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 30px;
  display: flex;
  justify-content: space-between;
`;


const SocialMedia = styled.div`
  height: 100%;
  padding: 8px 15px;
  display: flex;
  gap: 7px;

  .svg {
    height: 100%;
    fill: #1b233d;

    &:hover {
      fill: white;
    }
  }
`;

const BottomSection = styled.div`
  margin-top: 15px;
  padding: 10px 5px;

  @media screen and (max-width:600px){
    margin-top: 0px;
    padding: 0px 5px;  
  }
`;

const Title = styled.span`
  display: block;
  font-size: 20px;
  font-weight: bolder;
  color: white;
  text-align: center;
  letter-spacing: 2px;
  font-family: "Saira", sans-serif;
  font-optical-sizing: auto;
  font-style: normal;
  font-variation-settings:
    "wdth" 100;

    @media screen and (max-width:600px){
      font-size: 20px;
  }
  `;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;

  @media screen and (max-width:600px){
    margin-top: 5px;
  }
  `;

const TitleSection = styled.div`
  height: 100%;
  aspect-ratio: 1;
  padding: 7px 0 7px 15px;
  width: 100%;
  display: flex;
  justify-content: start;
  align-items: center;
  h3 {
    height: 100%;
    border-bottom: 1px solid white;
    font-size: 1.4em;
    line-height: 5px;
    color: white;
    font-family: "Kdam Thmor Pro", sans-serif;
    font-weight: 400;
    font-style: normal;
  }

  @media screen and (max-width:992px){
      h3{
        font-size: 1.2em;
      }
  }
  @media screen and (max-width:722px){
      h3{
        font-size: 1em;
      }
  }
  
`;
const Item = styled.div<{textColor?:string}>`
  flex: 30%;
  text-align: center;
  padding: 5px;
  color: ${props => props.textColor || 'rgba(170, 222, 243, 0.721)'} ;

  .big-text {
    font-size: 15px;
    display: block;
  }

  .regular-text {
    font-size: 12px;
  }

  &:nth-child(2) {
    border-left: 1px solid rgba(255, 255, 255, 0.126);
    border-right: 1px solid rgba(255, 255, 255, 0.126);
  }
`;

const Logo = styled.h6`
      display: flex;
        justify-content: center;
        font-size: 1em;
        color: white;
        font-family: "Shojumaru", system-ui;
        font-weight: 400;
        font-style: normal;
        line-height: 8px;
`
const EnterButton = styled.button<{
  startColor?: string;
  endColor?: string;
  btnColor?:string;
  btnBG?:string;
}>`
  background-image: linear-gradient(
    19deg,
    ${props => props.btnBG || '#21D4FD'} 0%,
    ${props => props.endColor || '#B721FF'} 100%
  );
  color: white;
  font-family: inherit;
  padding: 0.35em;
  padding-left: 1.2em;
  font-size: 10px;
  border-radius: 10em;
  border: none;
  letter-spacing: 0.05em;
  display: flex;
  align-items: center;
  overflow: hidden;
  position: relative;
  height: 3.2em;
  padding-right: 3.3em;
  width: auto;
  margin-left: -4px;
  cursor: pointer;
  text-transform: uppercase;
  font-weight: 500;
  box-shadow: 0 0 1.6em rgba(183, 33, 255, 0.3),
    0 0 1.6em hsla(191, 98%, 56%, 0.3);
  transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);

  .icon {
    background: white;
    margin-left: 1em;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 2.2em;
    width: 2.2em;
    border-radius: 10em;
    right: 0.3em;
    transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);

    svg {
      width: 1.5em;
      transition: transform 0.3s;
      color: ${props => props.btnColor || '#B721FF'};
    }
  }

  &:hover .icon {
    width: calc(100% - 0.6em);

    svg {
      transform: translateX(0.1em);
    }
  }

  &:active .icon {
    transform: scale(0.9);
  }

  @media screen and (max-width:600px) {
    margin-left: -2px;
    font-size: 11px;
    height: 3.1em ;
    border-radius: 10px;
  }
`;

const CurrentTitle = styled.h3`
  font-size: 1.5em;
  color: white;
  padding-bottom: 2px;
`

const ProgressBarContainer = styled.div`
  width: 90%;
  background-color: #e0e0df;
  border-radius: 50px;
  position: relative;
  height: 12px; /* Ajuste a altura conforme necessário */
  margin: 10px 0;
`;

const ProgressBarFiller = styled.div<ProgressBarProps>`
  height: 100%;
  width: ${(props) => props.percentage}%;
  background-color: #868686;
  border-radius: inherit;
  text-align: center;
  transition: width 0.2s ease-in;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const ProgressBarLabel = styled.span`
  position: absolute;
  width: 100%;
  text-align: center;
  color: #fff; /* Ajuste a cor conforme necessário */
  font-weight: bold;
  margin-top: -13px;
  font-size: 0.7em;
`;

const Data = styled.span`
  font-size:1em;
  float: left;
  color: #e5e5e5;
  padding-top: 3px;
`
const Parallelogram = styled.div`
  width: 53px;
  height: 14px;
  background: linear-gradient(to right, #232323,#2e2e2e);
  transform: skew(20deg);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  color: #e1e1e1;
  font-weight: bold;
  font-size: 1.1em;
  font-family: monospace;
  font-weight: 400;
  overflow: hidden;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: -50px;
    width: 50px;
    height: 100%;
    background: inherit;
    transform: skew(-20deg);
  }

  &:after {
    content: '';
    position: absolute;
    top: 0;
    right: -50px;
    width: 50px;
    height: 100%;
    background: inherit;
    transform: skew(-20deg);
  }

  span {
    transform: skew(-20deg);
    font-size: 0.8em;
  }
`;


const CardComponent: React.FC<CardComponentProps> = (prop) => {
  return (
    <Card>
      <TopSection startColor={prop.data.style.startColor} endColor={prop.data.style.endColor}>
        <Border />
        <Icons>
          <TitleSection>
              <h3>{prop.data.title.titleSec}</h3>
          </TitleSection>
          <SocialMedia>
            <Logo>DW</Logo>
          </SocialMedia>
        </Icons>
        <div id="container_info">
          <div id="bloco1">  
            <CurrentTitle>{prop.data.title.titleCurrent}</CurrentTitle>
            <div id="containerTags">
        
              {prop.data.tags.map((tag, index) => (
                
                <Parallelogram key={index}>
                  <span>{tag}</span>
                </Parallelogram>

               ))}

            </div>
            
            <Data>01/10/2024</Data>
          </div>
          <div id="bloco2">
            <NavLink to={prop.data.title.link} className="url"/>
            {/* <a href={prop.data.title.link} target="_parent" rel="noopener noreferrer"> */}
            <EnterButton startColor={prop.data.style.startColor} endColor= "rgb(2 3 3)" btnColor={prop.data.style.btnBG} btnBG={prop.data.style.btnBG}>
            Continuar
            <div className="icon">
              <svg
                height="24"
                width="24"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 0h24v24H0z" fill="none"></path>
                <path
                  d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                  fill="currentColor"
                ></path>
              </svg>
            </div>
          </EnterButton>
        
          </div>
          <div id="bloco3">
            <ProgressBarContainer >
              <ProgressBarFiller percentage={60}/>
              <ProgressBarLabel>{`${60}%`}</ProgressBarLabel>
            </ProgressBarContainer>
          </div>
        </div>
      </TopSection>
      <BottomSection>
        <Title>Status</Title>
        <Row>
          <Item textColor={prop.data.style.startColor} >
            <span className="big-text">{prop.data.p1.value}</span>
            <span className="regular-text">{prop.data.p1.text}</span>
          </Item>
          <Item textColor={prop.data.style.startColor}>
            <span className="big-text">{prop.data.p2.value}</span>
            <span className="regular-text">{prop.data.p2.text}</span>
          </Item>
          <Item textColor={prop.data.style.startColor}>
            <span className="big-text">{prop.data.p3.value}</span>
            <span className="regular-text">{prop.data.p3.text}</span>
          </Item>
        </Row>
      </BottomSection>
    </Card>
  );
};

export default CardComponent;
