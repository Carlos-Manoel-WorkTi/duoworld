import React from 'react';
import styled, { css } from 'styled-components';

const Button = styled.button<{text:string}>`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: rgb(20, 20, 20);
  border: none;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 0px 0px 4px rgb(32, 17, 79);
  cursor: pointer;
  transition: width 0.3s, border-radius 0.3s, background-color 0.3s;
  overflow: hidden;
  position: relative;

  &:hover {
    width: 140px;
    border-radius: 50px;
    background-color: rgba(114, 79, 239, 0);
    align-items: center;
  }

  &:hover .svgIcon {
    opacity: 0; /* Fade out the arrow */
    transition: opacity 0.3s;
  }

  &::before {
    position: absolute;
    bottom: -20px;
    content:  "${(props) => props.text}";
    color: white;
    font-size: 0;
    opacity: 0;
    transition: font-size 0.3s, opacity 0.3s;
  }

  &:hover::before {
    font-size: 13px;
    opacity: 1;
    bottom: unset;
  }
`;

const SvgIcon = styled.svg<{ direction: string }>`
  width: 12px;
  transition: opacity 0.3s, transform 0.3s;
  opacity: 1; /* Ensure opacity is set initially */

  path {
    fill: white;
  }

  ${(props) =>
    props.direction === 'left' &&
    css`
      transform: rotate(90deg);
    `}
  ${(props) =>
    props.direction === 'up' &&
    css`
      transform: rotate(-90deg);
    `}
  ${(props) =>
    props.direction === 'right' &&
    css`
      transform: rotate(-90deg); /* No rotation for right direction */
    `}
  ${(props) =>
    props.direction === 'down' &&
    css`
      transform: rotate(180deg);
    `}
`;

const NavigationArrow = ({ direction = 'left', text = '' }) => (
  <Button text={text}>
    <SvgIcon viewBox="0 0 384 512" direction={direction} className="svgIcon">
      <path d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8V64c0-17.7-14.3-32-32-32s-32 14.3-32 32v306.8L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
    </SvgIcon>
  </Button>
);

export default NavigationArrow;
