import React from 'react';
import { Button, ButtonContainer, ContainerNav, Icon } from './NavMobileStyle';
import { NavLink } from 'react-router-dom';
interface PropHeaderITC {
  active: string;
}

const NavMobile: React.FC<PropHeaderITC> = ({active}) => {
  const icons = {
      home: (
        <Icon  id={active === "NHome" ? "NHome" : ""} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth="2">
          <path d="M3 9l9-7 9 7v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9zm2 0v10h4v-6h4v6h4V9H5z"/>
        </Icon>
      ),
      music: (
        <Icon id={active === "NSongs" ? "NSongs" : ""} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth={2}>
          <svg  className="h-6 w-6 text-yellow-500" fill="none" height="26" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 18V5l12-2v13"></path>
            <circle cx="6" cy="18" r="3"></circle>
            <circle cx="18" cy="16" r="3"></circle>
            </svg>
        </Icon>
      ),
      pencil: (
        <Icon id={active === "NWords" ? "NWords" : ""} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth="2">
          <path d="M3 17.25V21h3.75L18.5 9.25l-3.75-3.75L3 17.25zM20.71 7.29a1 1 0 0 1 0 1.42l-3.5 3.5a1 1 0 0 1-1.42-1.42l3.5-3.5a1 1 0 0 1 1.42 0z"/>
        </Icon>
      ),
      book: (
          <Icon id={active === "NHistories" ? "NHistories" : ""} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth="2">
            <path d="M6 2a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H6zm0 2h12v16H6V4zm2 0v16m8-16v16"/>
          </Icon>
        ),
      user: (
          <Icon id={active === "NUser" ? "NUser" : ""} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth="0">
            <path d="M12 2.5a5.5 5.5 0 0 1 3.096 10.047 9.005 9.005 0 0 1 5.9 8.181.75.75 0 1 1-1.499.044 7.5 7.5 0 0 0-14.993 0 .75.75 0 0 1-1.5-.045 9.005 9.005 0 0 1 5.9-8.18A5.5 5.5 0 0 1 12 2.5ZM8 8a4 4 0 1 0 8 0 4 4 0 0 0-8 0Z"/>
          </Icon> )
    };
    
  return (
    <ContainerNav>
      <ButtonContainer>
        <Button>
          <NavLink to="/">
             {icons.home}
          </NavLink>
        </Button>
        <Button>
          <NavLink to="/songs">
          {/* <Icon id={active === "NWords" ? "NWords" : ""}>
            <svg  className="h-6 w-6 text-yellow-500" fill="none" height="26" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 18V5l12-2v13"></path>
            <circle cx="6" cy="18" r="3"></circle>
            <circle cx="18" cy="16" r="3"></circle>
            </svg>
          </Icon> */}
             {icons.music}
          </NavLink>
       
        </Button>   
        <Button>
        <NavLink to="/words">
          {icons.pencil}
        </NavLink>
        </Button>
        <Button>
        <NavLink to="/histories">
         {icons.book}
        </NavLink>
        </Button>
        <Button>
        <NavLink to="/profile">
          {icons.user}
        </NavLink>  
          
        </Button>
      </ButtonContainer>
    </ContainerNav>
  )
}
export default NavMobile;