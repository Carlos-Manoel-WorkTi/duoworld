import React, { useState } from 'react';
import HeaderComp from '../../components/header/Header_comp';
import SubHeader from '../../components/subHeader/SubHeader';
import { NavigateHistory } from '../histories/script/Methods';
import Footer from '../../components/footer/Footer';
import { ContainerLirycs, ContainerScroll, ContainerSong, ContainerSongAuthor, ContainerSongControllers, ContainerSongControllersBack, ContainerSongControllersForward, ContainerSongIMG, ContainerSongInf, ContainerSongInfDiv, ContainerSongProgress, ContainerSongTimeCurrent, ContainerSongTimeFinal, ContainerSongTitle, ContainerSongTitleAndAuthor, Lirycs, PlayPauseButton, Switch, Works } from './style/SongInitStyle';
import song from './script/song';

export default function SongInit() {
  const { navigateTo, navigateBack } = NavigateHistory();
  const { lyrics } = song[0];
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(e.target.checked);
  };
  return (
    <>
      <HeaderComp active="LSongs" />
      <SubHeader
        size={30}
        text="SONGS"
        fieldSearch={true}
        action1={() => navigateBack()}
        action2={() => navigateTo(`/songs`)}
      />

      <main>
        <ContainerLirycs>
          <Lirycs >{lyrics}</Lirycs>
          <Works >
            <ContainerSong>
                <ContainerSongIMG src='https://upload.wikimedia.org/wikipedia/pt/9/9c/Ed_Sheeran_Perfect.jpg'/>
                <ContainerSongTitleAndAuthor> 
                  <ContainerSongTitle>Perfect</ContainerSongTitle>
                  <ContainerSongAuthor>Ed shearren</ContainerSongAuthor>
                </ContainerSongTitleAndAuthor>
                <ContainerSongInf>
                  <ContainerSongControllers>
                    <ContainerSongControllersBack>
                      <svg width="23" height="16" viewBox="0 0 23 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.5 8V0L0 8L11.5 16V8ZM23 0L11.5 8L23 16V0Z" fill="#fff"></path>
                      </svg>
                    </ContainerSongControllersBack>
                     <PlayPauseButton></PlayPauseButton>
                      <ContainerSongControllersForward>
                          <svg width="23" height="16" viewBox="0 0 23 16" fill="none"     xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.5 8V0L23 8L11.5 16V8ZM0 0L11.5 8L0 16V0Z"fill="#fff"></path>
                          </svg>
                      </ContainerSongControllersForward>
                  </ContainerSongControllers>
                  <ContainerSongInfDiv>
                      <ContainerSongTimeCurrent>00:02</ContainerSongTimeCurrent>
                      <ContainerSongProgress>
                        <progress value={4} max={100} />
                      </ContainerSongProgress>
                      <ContainerSongTimeFinal>03:30</ContainerSongTimeFinal>
                  </ContainerSongInfDiv>
                </ContainerSongInf>
            </ContainerSong>
            <ContainerScroll>
              <h1>Scroll automatico</h1>
              <Switch id="switch1" checked={isChecked} onChange={handleChange} />
              <p>Status: {isChecked ? 'On' : 'Off'}</p>
            </ContainerScroll>
          </Works>
        </ContainerLirycs>
      </main>

      <Footer wdb={true} />
    </>
  );
}
