
import { ChangeEvent } from "react";
import styled from "styled-components";

export const Contanier = styled.section`
    display: flex;
    width: 95%;
    background: linear-gradient(161deg, transparent, rgb(13, 13, 13), #0c0c0cce, #340f7888, #110b1e90, transparent);
    height: auto;
    color: white;
    justify-content: center;
    padding: 2% 2%;
    margin: 0 30px;
    border-radius: 5px;

    #ib{
      display: flex;
      justify-content: center;
      margin-bottom: 10px;
    }

    @media (max-width:910px){
      margin: 0 20px;
    }
    @media (max-width:780px){
      flex-direction:column;
      #ib{
        position: relative;
        margin-bottom: 1px;
      }
    }
    @media (max-width:600px){
      width: 100%;
      padding: 2% 3%;
      margin: 0 1px;
      #ib{
        margin-top: 15px;
      }
    }
`
export const BlocoFirst = styled.div`
    display: flex;
    flex-direction: column;
    width: 22%;
    height: 100%;
    background-color: rgba(13, 13, 13, 0);
    margin-top: 20px;
    min-width: 200px;
    @media (max-width:910px){
      min-width: auto;    
    }
    @media (max-width:600px){
      margin-top: 10px;
    }
    @media (max-width:510px){
      margin-top: 17px;
    }

`
export const BlocoSecond = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    width: 60%;
    padding-left: 20px;
    @media (max-width:910px){
      width: 75%;
      padding-left: 50px;
    }
    @media (max-width:410px){
      padding-left: 35px;
    }
`
export const CapaBook = styled.img`
    height: 390px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 20px 0px;
`

export const Title = styled.h2`
    font-family: "Inika", serif;
    font-size: 2.5em;
    @media (max-width:780px){
      font-size: 2em;
      display: flex;
      align-items: center;
    }
    @media (max-width:780px){
      font-size: 1.7em;
    }
    @media (max-width:510px){
      font-size: 1.6em;
      margin-bottom: 2px;
    }
    @media (max-width:450px){
      font-size: 1.4em;
    }
`
export const Author = styled.h2`
    font-family: Arial, Helvetica, sans-serif;
    font-size: 1.5em;
    color: #d9d9d9;
    padding: 0 0 10px 0;
    @media (max-width:780px){
      font-size: 1.3em;
    }
    @media (max-width:780px){
          font-size: 1.2em;
    }
    @media (max-width:510px){
      font-size: 1em;
      padding: 0 0 3px 0;
    }
    @media (max-width:450px){
      font-size: 0.9em;
    }
`
export const DataPublicate = styled.h6`
    font-size: 1.1em;
    font-family: monospace;
    margin-top: 10px;
    @media (max-width:780px){
      font-size: 1em;
      
}

`
export const RowAvaliative = styled.div`
    width: 100%;
    display: flex;
    justify-content: end;
    margin-top: -25px;
    gap: 1em;
    span{
        font-size: 1.2em;
        color: #d9d8d8;
    }
    #aval{
      font-size: 1em;
      /* color: aliceblue; */
    }
    @media (max-width:780px){
       justify-content: start;
      margin-top: 2px;
      span{
        font-size: 1em;
    }
    #aval{
      font-size: 1em;
    }
    .rating-stars{
      height: 30px;
    }
    .rating-stars svg{
      height: 20px;
    }
    }
    @media (max-width:510px){
      #aval{
      font-size: 0.9em;
    }
    .rating-stars svg{
      height: 18px;
    }
    }
    @media (max-width:450px){
      .rating-stars svg{
      height: 17px;
    }
    }
  
`
export const RowDescrition = styled.div`
    border-top: 1px solid white;
    margin-top: 14px;
    padding-top: 15px;
    font-size: 1.2em;
    height: 153px;
    @media (max-width:780px){
      font-size: 1.1em;
}

@media (max-width:780px){
      display: none;
}
`
export const RowDescritionMb = styled.div`
    border-top: 1px solid white;
    margin-top: 25px;
    padding-top: 15px;
    font-size: 1.2em;
    height: 153px;


@media (min-width:780px){
      display: none;
} 
@media (max-width:600px){
  font-size: 1em;   
} 
@media (max-width:375px){
  font-size: 0.9em;   
} 
@media (max-width:310px){
  font-size: 0.8em;   
} 
`
export const RowBtn = styled.div`
    /* border: 1px solid white; */
    width: 100%;
    height: 40px;
    margin-top: 1 0px;
    display: flex;
    justify-content: space-between;
    @media (max-width:780px){
      margin-top:23px;
}
    
`
export interface PropBookDetail {
    // name:string;
}

export const ButtonInit = styled.button`
  position: relative;
  font-size: 14px;
  letter-spacing: 3px;
  height: 3em;
  padding: 0 3em;
  border: none;
  background: linear-gradient(90deg, #7366d59a, #918cb3 100%);
  color: #fff;
  text-transform: uppercase;
  overflow: hidden;
  border-radius: 5px;
  width: 100%;
  margin-top: -3px;

  &::before {
    content: '';
    display: block;
    position: absolute;
    z-index: 0;
    bottom: 0;
    left: 0;
    height: 0px;
    width: 100%;
    background: linear-gradient(90deg, #5a47e88d, #1e0f92 100%);
    transition: 0.2s;
  }
  
  .label {
    position: relative;
  }
  
  .icon {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 3em;
    width: 3em;
    position: absolute;
    top: 3em;
    right: 0;
    opacity: 0;
    transition: 0.4s;
  }
  
  &:hover::before {
    height: 100%;
  }
  
  &:hover .icon {
    top: 0;
    opacity: 1;
  }
  @media (max-width:780px){
      
  }
  @media (max-width:780px){
    padding: 0 2em;
    }
  @media (max-width:510px){
    padding: 0 0.7em;
    font-size: 11px;
    letter-spacing: 1px;
    }
    @media (max-width:600px){
      padding: 0 1em;
    }
`;

export const ButtonCap = styled.select<{value:string,onChange:(event: ChangeEvent<HTMLSelectElement>)=>void}>`
  background-color: transparent;
  height: 3em;
  outline: none;
  color: white ;
  padding: 5px 15px;
  border-radius: 10px;
  margin-top: -2px;
  option{
    color: purple;
  }
  @media (max-width:780px){
    padding: 1px 1px;
    }
    @media (max-width:600px){
    padding: 1px 1px;
    font-size: 0.7em;
    margin-top: 1px;
    border-radius: 0;
    border: none;
    border-bottom: 1px solid white;
    }
    @media (max-width:600px){
      margin-top: -4px;
    }
    @media (max-width:370px){
      margin-top: -52px;
    }
`
// BOOK
export const CoverContainer = styled.div<{coverImage:string}>`
  width: 300px; /* Adjust the width as needed */
  height: 450px; /* Adjust the height as needed */
  position: relative;
  background-image: url(${(prop) => prop.coverImage});
  background-size: cover;
  background-position: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Text = styled.div`
  font-size: 24px;
  color: #000;
  text-align: center;
  font-family: 'Times New Roman', Times, serif;
  @media (max-width:780px){
      font-size: 20px;
}
`;


export  const Card = styled.div`
  width: 190px;
  height: 295px;
  background: lightgrey;
  position: relative;
  transform: skewY(-10deg);
  border: 5px solid #6d74e3;
  box-sizing: border-box;
  transition: all 0.3s;

  &::before {
    content: '';
    width: 10px;
    height: 294px;
    background: #343873;
    position: absolute;
    top: -5px;
    left: -14.7px;
    transform-origin: right;
    transform: skewY(45deg);
    border: none;
    transition: all 0.5s;
  }

  &::after {
    content: '';
    height: 10px;
    width: 190px;
    background: #6d74e3;
    position: absolute;
    top: -14.7px;
    left: -5px;
    transform-origin: bottom;
    transform: skewX(45deg);
    border: none;
    transition: all 0.5s;
  }

  &:hover {
    transform: skewY(0deg);
  }

  &:hover::before {
    width: 0px;
    height: 249px;
    left: 0;
    top: 0.1px;
  }

  &:hover::after {
    width: 184px;
    height: 0px;
    left: 0.1px;
    top: 0;
  }
  @media screen and (max-width:780px){
    width: 161px;
    height: 251px;
    &::after {
      width: 160px;
    }
    &::before {
      height: 252px;
    }
  } 
  @media (max-width:780px){
    width: 138px;
    height: 214px;
    &::after {
      width: 138px;
    }
    &::before {
      height: 214px;
    }
  }
  @media (max-width:510px){
    width: 125px;
    height: 193px;
    &::after {
      width: 125px;
    }
    &::before {
      height: 194px;
    }
  }
  @media (max-width:430px){
    width: 115px;
    height: 178px;
    &::after {
      width: 115px;
    }
    &::before {
      height: 179px;
    }
  }
  @media (max-width:410px){
    width: 100px;
    height: 178px;
    img{
      height: 100%;
    }
    &::after {
      width: 100px;
    }
    &::before {
      height: 179px;
    }
  }
`;

export const CardContent = styled.div`
  padding: 10px 0px 10px 0px;
  color: #c3c3c3;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
  text-align: center;

  @media screen and (min-width:600px){
    /* display: none;*/
  } 
  @media (max-width:910px){
    padding: 2px 0px 10px 0px;
    }
    @media (max-width:780px){
    display: none;
    }
`;

export const Image = styled.img`
  width: 100%;
  height: auto;
`;

export const ContainerCaps = styled.section`
     display: flex;
    width: 95%;
    background: #18181892;
    height: auto;
    color: white;
    justify-content: center;
    align-items: center;
    padding: 2% 2%;
    margin: 10px 30px;
    border-radius: 5px;
    border-radius: 5px;
    flex-direction: column;
    gap: 10px;
    @media (max-width:910px){
      margin: 10px 20px;
}
    @media (max-width:600px){
      width: 100%;
            padding: 2% 3%;
            margin: 0 1px;
    }
`
export const Cap = styled.div`
  border-radius: 5px;
  width: 100%;
  height: 40px;
  border: 1px gray;
  display: flex;
  justify-content: space-between;
  background-color: transparent;
  border: 1px solid #a2a2a252;
  align-items: center;
  padding: 25px 20px;
  a{
    width: 100%;
    height: 40px;
    border: 1px gray;
    display: flex;
    justify-content: space-between;
    text-decoration: none;
    align-items: center;
    }
  .cnp{
    display: flex;
    gap: 20px;
    align-items: center;
  }
  .npage{
    font-size: 1.2em;
    font-family: "Inika", serif;
    color: rgb(109, 116, 227);
    display: flex;
    align-items: center;
  }
  h4{
    font-size: 1.2em;
    font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    color: #d0d0d0;
  }
  .dataCap{
    color: rgb(78, 13, 198);
  }

  @media (max-width:910px){

  }
  @media (max-width:780px){
    h4{
      font-size: 1.1em;
    }
  }
  @media (max-width:600px){
    padding: 10px 10px;
    .cnp{
    gap: 5px;
  }
  .npage{
    font-size: 1em;
  }
    h4{
      font-size: 0.9em;
    }
    .dataCap{
    font-size: 0.7em;
  }
  }
  @media (max-width:333px){
    h4{
      font-size: 0.8em;
    }
    .dataCap{
    font-size: 0.6em;
  }
  .cnp{
    gap: 2px;
  }
  }
`