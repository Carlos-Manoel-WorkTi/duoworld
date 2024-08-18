import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../../auth/Auth';// Importe o hook useAuth
import { HamburgerLabel, HeaderComponent } from './style/HeaderStyle';
import { NavigateHistory } from '../../pages/histories/script/Methods';

const HeaderComp: React.FC<{ active: string }> = ({ active }) => {
  const { authData } = useAuth(); 
  const { navigateTo } = NavigateHistory();
  return (
    <HeaderComponent>
      <div id="user">
        {authData.profile.data.login ? (
          <>
            <img src={`${authData.profile.data.img}`} alt="Profile" />
            <div>
              <h4>{`${authData.profile.data.name}`}</h4>
              <h5>{`${authData.profile.data.email?.substring(0,15)}...`}</h5>
            </div>
          </>
        ) : (
          
        <button className="button" onClick={() => navigateTo("/login") } >
          Login in
          <svg fill="currentColor" viewBox="0 0 24 24" className="icon">
            <path
              clipRule="evenodd"
              d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
              fillRule="evenodd"
            ></path>
          </svg>
        </button>

        )}
      </div>
      <h1 id='logo'>DW</h1>
      <ul>
        <li id={active === "LHome" ? "LHome" : ""}>
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
        <li id={active === "LConfig" ? "LHelp" : ""}>
          <NavLink to="/Config">Config &#187;</NavLink>
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
  );
}

export default HeaderComp;
