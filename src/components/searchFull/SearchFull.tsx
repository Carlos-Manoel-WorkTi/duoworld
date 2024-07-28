import React from 'react'
import SearchField from '../subHeader/searchComp/SearchField'
import { ContainerSearchFull, TextResponse } from './style/SearchFullStyle'

export default function SearchFull() {
  return (
    <ContainerSearchFull>
        <TextResponse>All:</TextResponse>
        <SearchField/>
    </ContainerSearchFull>
  )
}
