import React from 'react'
import HeaderComp from '../../components/header/Header_comp'
import SubHeader from '../../components/subHeader/SubHeader'
import { NavigateHistory } from '../histories/script/Methods';
import Footer from '../../components/footer/Footer';
import { ContainerLirycs } from './style/SongInitStyle';
import song from './script/song';
       
 


export default function SongInit() {

  const { navigateTo, navigateBack } = NavigateHistory();
    // const { getParams } = Params();
    const { lyrics } = song[0]
    const paragraphs = lyrics.split('\n').filter(line => line.trim() !== '');

  return (
    <>
      <HeaderComp active="LSongs"></HeaderComp>
      <SubHeader
                size={30}
                text="SONGS"
                fieldSearch={true}
                action1={() => navigateBack()}
                action2={() => navigateTo(`/songs`)}
            />

      <main>
        <ContainerLirycs>
            {paragraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </ContainerLirycs>
      </main>

      <Footer wdb={true}/>
    </>
  )
}
