import React from 'react';
import { Button, ButtonContainer, ContainerNav, Icon } from './NavMobileStyle';

const icons = {
    home: (
      <Icon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="2">
        <path d="M3 9l9-7 9 7v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9zm2 0v10h4v-6h4v6h4V9H5z"/>
      </Icon>
    ),
    music: (
      <Icon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="2">
        <path d="M9 17v-10l12-2v12m-12 1.5v-11.7m12 11.7v-12M9 21H7a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2m0 16h2m-2-8V4"/>
      </Icon>
    ),
    pencil: (
      <Icon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="2">
        <path d="M3 17.25V21h3.75L18.5 9.25l-3.75-3.75L3 17.25zM20.71 7.29a1 1 0 0 1 0 1.42l-3.5 3.5a1 1 0 0 1-1.42-1.42l3.5-3.5a1 1 0 0 1 1.42 0z"/>
      </Icon>
    ),
    book: (
        <Icon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="2">
          <path d="M6 2a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H6zm0 2h12v16H6V4zm2 0v16m8-16v16"/>
        </Icon>
      ),
    user: (
        <Icon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="0">
          <path d="M12 2.5a5.5 5.5 0 0 1 3.096 10.047 9.005 9.005 0 0 1 5.9 8.181.75.75 0 1 1-1.499.044 7.5 7.5 0 0 0-14.993 0 .75.75 0 0 1-1.5-.045 9.005 9.005 0 0 1 5.9-8.18A5.5 5.5 0 0 1 12 2.5ZM8 8a4 4 0 1 0 8 0 4 4 0 0 0-8 0Z"/>
        </Icon> )
  };
  

export default function NavMobile() {
  return (
    <ContainerNav>
      <ButtonContainer>
        <Button>
          {icons.home}
        </Button>
        <Button>
        <svg className="h-6 w-6 text-yellow-500" fill="none" height="20" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
        <path d="M9 18V5l12-2v13"></path>
        <circle cx="6" cy="18" r="3"></circle>
        <circle cx="18" cy="16" r="3"></circle>
      </svg>
        </Button>   
        <Button>
          {icons.pencil}
        </Button>
        <Button>
          {icons.book}
        </Button>
        <Button>
          {icons.user}
        </Button>
      </ButtonContainer>
    </ContainerNav>
  )
}
