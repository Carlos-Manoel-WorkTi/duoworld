import styled from "styled-components";

export const HeaderComponent = styled.header`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: linear-gradient(to bottom,#0d061a,#0D0D0D);
    margin: 0;
    height: 76px;
    padding: 0 20px 0 20px;
    border-bottom: 1px solid #20114f;


    #user{
        width: 30%;
        display: flex;
        align-items: center;
        color: white;
        font-family: "Inika", serif;


        img{
            width: 57px;
            height: 54px;
            border-radius: 50%;
            margin-right: 5px;
            border: 1px solid white;
        }

        div{
        
            h4,h5{
                font-weight: 400;
                font-style: normal;
    
            }
            h4{
                color: white;
                font-weight: bolder;
            }
            h5{
                color: #d2d2d2;
            }
        }
        /* From Uiverse.io by adeladel522 */ 
.button {
  position: relative;
  transition: all 0.3s ease-in-out;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2);
  padding-block: 0.5rem;
  padding-inline: 1.25rem;
  background-color: #11082285;
  border-radius: 9999px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: #ffff;
  gap: 10px;
  font-weight: bold;
  border: 3px solid #20114f;
  outline: none;
  overflow: hidden;
  font-size: 15px;
  
}

.icon {
  width: 24px;
  height: 24px;
  transition: all 0.3s ease-in-out;
}

.button:hover {
  transform: scale(1.05);
  border-color: #fff9;
}

.button:hover .icon {
  transform: translate(4px);
}

.button:hover::before {
  animation: none;
}

.button::before {
  content: "";
  position: absolute;
  width: 100px;
  height: 100%;
  background-image: linear-gradient(
    120deg,
    rgba(255, 255, 255, 0) 30%,
    rgba(255, 255, 255, 0.56),
    rgba(255, 255, 255, 0) 70%
  );
  top: 0;
  left: -100px;
  opacity: 0.6;
  animation: shine 2s ease-out infinite; 
}

@keyframes shine {
  0% {
    left: -100px;
  }

  60% {
    left: 100%;
  }

  to {
    left: 100%;
  }
}

    }
    #logo{
        display: flex;
        justify-content: center;
        width: 29%;
        font-size: 1.9em;
        color: white;
        font-family: "Shojumaru", system-ui;
        font-weight: 400;
        font-style: normal;

        @media (max-width: 992px){
          justify-content: space-around;
          display: none;
        }
        @media (max-width: 720px){
          font-size: 1.6em;
        }
        @media (max-width: 720px){
          display: none;
        }
    }

    ul{
        width: 42%;
        display: flex;
        gap: 23px;
        color: white;
        justify-content: end;
        li{
            list-style: none;

            a{
              text-decoration: none;
              color: white;
            }
            
        }
        #LHome,#LSongs,#LHistories,#LWords,#LHelp{
            border-bottom: 2px solid rgb(65, 54, 189);
        }
        
    .active-link {
      color: #ffffff;
      font-weight: bold;
      border-bottom: 2px solid rgb(65, 54, 189);
    }

    }
    @media (max-width: 992px){
      ul{
        width: auto;
      }
    } 
    @media (max-width: 690px){
      ul{
        width: auto;
        gap: 15px;
        margin-right: -5px;
      }
      ul li a{
        font-size: 0.9em;
      }
    } 
    @media (max-width: 600px) {
      ul{
        width: auto;
      }
      ul li{
        display:none;
      }
  }
`


export const HamburgerLabel = styled.label`
  cursor: pointer;

  input {
    display: none;
  }

  svg {
    height: 3em;
    transition: transform 600ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  .line {
    fill: none;
    stroke: white;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-width: 3;
    transition: stroke-dasharray 600ms cubic-bezier(0.4, 0, 0.2, 1),
                stroke-dashoffset 600ms cubic-bezier(0.4, 0, 0.2, 1),
                stroke 600ms cubic-bezier(0.4, 0, 0.2, 1); /* Adicionei esta linha */
  }

  .line-top-bottom {
    stroke-dasharray: 12 63;
  }

  input:checked + svg {
    transform: rotate(-45deg);
  }

  input:checked + svg .line {
    stroke: red; /* Mudança para vermelho */
  }

  input:checked + svg .line-top-bottom {
    stroke-dasharray: 20 300;
    stroke-dashoffset: -32.42;
  }


  @media (min-width: 600px) {
      display:none;
    }
`;
