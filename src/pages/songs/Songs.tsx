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
              {SongsData.map(song => (
                <CardSong 
                    key={song.id}
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
      <Footer $wdb={true}/>
    </>
  )
}
