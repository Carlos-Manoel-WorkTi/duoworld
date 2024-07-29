import styled from "styled-components";

export const ContainerNav = styled.nav`
  width: 100%;
  height: auto;
  position: fixed;
  bottom: 0; 
  left: 0; 
  z-index: 99;
  @media (min-width: 600px) {
    display: none;
  }
  `;

export const ButtonContainer = styled.div`
  display: flex;
  background-color: #080808; 
  width: 100%;
  height: 50px;
  align-items: center;
  justify-content: space-around;
  box-shadow: rgb(32, 17, 79)0px 5px 15px, rgb(32, 17, 79) 5px 10px 15px;
  margin: 0 auto; 
`;

export const Button = styled.button`
  outline: 0 !important;
  border: 0 !important;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  transition: all ease-in-out 0.3s;
  cursor: pointer;

  &:hover {
    transform: translateY(-3px);
  }

  a{
    text-decoration: none;
    color: #ebebeb;
  }
  #NHome,#NSongs,#NHistories,#NWords,#NHelp,#NUser{
            border-bottom: 2px solid rgb(65, 54, 189);
        }
`;

export const Icon = styled.svg`
  font-size: 27px;
  width: 1em;
  height: 1em;
  stroke-width: 0;
  fill: currentColor;
  stroke: currentColor;


`;
