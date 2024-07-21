
import styled from "styled-components";

export const Contanier = styled.section`
    display: flex;
    width: 95%;
    /* background: linear-gradient(45deg,transparent,#340f7888,#340f78ce,#340f7888,#280b5f87,transparent); */
    /* border: 1px solid white; */
    /* box-shadow: rgba(100, 100, 111, 0.2) 0px 10px 20px 0px; */
    background: linear-gradient(161deg, transparent, rgb(13, 13, 13), #0c0c0cce, #340f7888, #110b1e90, transparent);
    height: auto;
    color: white;
    justify-content: center;
    padding: 2% 2%;
    margin: 0 30px;
    border-radius: 5px;
`
export const BlocoFirst = styled.div`
    display: flex;
    flex-direction: column;
    width: 22%;
    height: 100%;
    background-color: rgba(13, 13, 13, 0);
`
export const BlocoSecond = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    width: 60%;
    padding-left: 20px;
`
export const CapaBook = styled.img`
    height: 390px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 20px 0px;
`

export const Title = styled.h2`
    font-family: "Inika", serif;
    font-size: 2.5em;
`
export const Author = styled.h2`
    font-family: Arial, Helvetica, sans-serif;
    font-size: 1.5em;
    color: #d9d9d9;
    padding: 0 0 10px 0;
`
export const DataPublicate = styled.h6`
    font-size: 1.1em;
    font-family: monospace;
    margin-top: 10px;
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
`
export const RowDescrition = styled.div`
    border-top: 1px solid white;
    margin-top: 14px;
    padding-top: 15px;
    font-size: 1.2em;
    height: 153px;
`
export const RowBtn = styled.div`
    /* border: 1px solid white; */
    width: 100%;
    height: 40px;
    margin-top: 20px;
    
`
export interface PropBookDetail {
    // name:string;
}

export const Button = styled.button`
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
  width: 50%;
  
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
`;

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
`;

export const CardContent = styled.div`
  padding: 10px 0px 10px 25px;
  color: #c3c3c3;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
  @media screen and (min-width:600px){
    /* display: none;*/
  } 
`;

export const Image = styled.img`
  width: 100%;
  height: auto;
`;