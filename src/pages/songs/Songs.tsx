import React from 'react'
import HeaderComp from '../../components/header/Header_comp'
import SubHeader from '../../components/subHeader/SubHeader'
import SearchFull from '../../components/searchFull/SearchFull'
import { NavigateHistory } from '../histories/script/Methods';
import Footer from '../../components/footer/Footer';
import NavMobile from '../../components/navMobile/NavMobile';
import Paginato from '../../components/paginato/Paginato';
import {CardSong, ContainerSong } from './style/SongsStyle';
import { SongsData } from './script/DataSongs';



export default function Songs() {

  const { navigateBack } = NavigateHistory();

  return (
    <>
      <HeaderComp active="LSongs"></HeaderComp>
      <SubHeader size={30} text="SONGS" fieldSearch={false} action1={navigateBack} />
      <SearchFull/>
      <main>
        <ContainerSong>
            {/* 
                  { <Icon className="text-red-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
                  </Icon>
                  <Icon className="text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </Icon> }
                  <Icon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth={2}>
                  <svg  className="red" fill="none" height="26" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 18V5l12-2v13"></path>
                    <circle cx="6" cy="18" r="3"></circle>
                    <circle cx="18" cy="16" r="3"></circle>
                    </svg>
                </Icon>
            */}
              {/* {SongsData.map(song => (
                <Card key={song.id}>

                      <ContainerImg src={`${song.link}`} alt={song.title} />
                      <div id="frv">
                        <Header>
                          <Info>
                            <TextInfo>
                              <Title>{song.title}</Title>
                              <Artist>By {song.author}</Artist>
                            </TextInfo>
                          </Info>
                          <Actions>
                              <Icon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth={2}>
                                <svg className="red" fill="none" height="26" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M9 18V5l12-2v13"></path>
                                  <circle cx="6" cy="18" r="3"></circle>
                                  <circle cx="18" cy="16" r="3"></circle>
                                </svg>
                              </Icon>
                          </Actions>
                        </Header>
                        <ProgressContainer>
                              <Time>
                                <span>{Math.floor(song.totalDuration)}:{Math.round((song.totalDuration % 1) * 60)}</span>
                                <NavLink  to={`/songs/name=${song.title}/id=${song.id} `}>
                                  <PlayPauseButton />
                                </NavLink>
                              </Time>
                        </ProgressContainer>
                      </div>
              </Card>
                  ))} */}
              {SongsData.map(song => (
                <CardSong 
                    link={song.link}
                    name={song.title}
                    data={"10/10/2021"}
                    author={song.author}
                    tag='hard'
                    time={song.totalDuration}/>
                  ))} 
               
        </ContainerSong>
      </main>
      <Paginato/>
      <NavMobile active="NSongs" ></NavMobile>
      <Footer wdb={true}/>
    </>
  )
}
