import React from 'react'
import HeaderComp from '../../components/header/Header_comp'
import SubHeader from '../../components/subHeader/SubHeader'
import SearchFull from '../../components/searchFull/SearchFull'
import { NavigateHistory } from '../histories/script/Methods';


export default function Words() {

  const { navigateBack } = NavigateHistory();

  return (
    <>
      <HeaderComp active="LWords"></HeaderComp>
      <SubHeader size={30} text="WORDS" fieldSearch={false} action1={navigateBack} />
      <SearchFull/>
    </>
  )
}
