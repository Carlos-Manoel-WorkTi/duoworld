import React from 'react'
import {  HamburgerLabel, HeaderComponent } from './style/HeaderStyle'
import { NavLink } from 'react-router-dom';

interface PropHeaderITC {
  active: string;
}

const HeaderComp: React.FC<PropHeaderITC> = ({active}) => {
  return (
   <HeaderComponent>
      <div id="user">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8co4Li5Riht4VYYvdrYS188NoK19B-pznKg&s" alt="" />
        <div>
          <h4>Usuario</h4>
          <h5>ususario@gmail.com</h5>
        </div>
      </div>
      <h1 id='logo'>DW</h1>
      <ul>
        <li id={active === "LHome" ? "LHome" : ""} >
          <NavLink to="/" >Home &#187;</NavLink>
        </li>
        <li id={active === "LSongs" ? "LSongs" : ""}>
          <NavLink to="/songs" >Songs &#187;</NavLink>
        </li>
        <li id={active === "LWords" ? "LWords" : ""}>
          <NavLink to="/words" >Words &#187;</NavLink>
        </li>
        <li id={active === "LHistories" ? "LHistories" : ""}>
          <NavLink to="/histories" >Histories &#187;</NavLink>
        </li>
        <li id={active === "LHelp" ? "LHelp" : ""}>
          <NavLink to="/teste">Help &#187;</NavLink>
        </li>
      </ul>
      <HamburgerLabel className="hamburger">
        <input type="checkbox" />
        <svg viewBox="0 0 32 32">
          <path className="line line-top-bottom" d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"></path>
          <path className="line" d="M7 16 27 16"></path>
        </svg>
      </HamburgerLabel>

   </HeaderComponent>
  )
}

export default HeaderComp;