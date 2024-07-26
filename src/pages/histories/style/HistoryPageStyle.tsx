import styled from "styled-components";

export const NPage = styled.span`
    width: 90%;
    height: auto;
    display: flex;
    margin: 0px 30px 0px 60px;
    top: 151px;
    position: absolute;
    color: #f4f4f4;
    font-size: 1.3em;
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
  padding: 20px 65px;
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