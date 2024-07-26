import React from 'react';
import { ContainerMessage, HomeComponent, LoaderComponent, LoaderDW, SectionMessage, ShowerIn } from './style/HomeStyled';
import { SectionMainComponent } from './style/HomeStyled';
import CardsMain from '../components/cardsMain/CardsMain';
import TitleSection from '../components/subHeader/titleSection/TitleSection';
import { LogoName } from '../components/logo/Logo';
import HeaderComp from '../components/header/Header_comp';


function Home() {
  return (

    <HomeComponent>

           <HeaderComp active="LHome" ></HeaderComp>
            <ShowerIn>
              <LoaderComponent></LoaderComponent>
              <LoaderDW size={35} />
            </ShowerIn>
          <main>
            <SectionMainComponent>
                <CardsMain></CardsMain>
            </SectionMainComponent> 

            <SectionMessage>
              <LogoName>DuoWorld</LogoName>
              <TitleSection sizetext={35} $text="VOCE SABIA?"/>
              <ContainerMessage>
                <h5>Actually: Em inglês significa "na verdade", enquanto em português significa "realmente".</h5>
              </ContainerMessage>
            </SectionMessage>
          </main>
    </HomeComponent>
  );
}

export default Home;
