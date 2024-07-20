import React from 'react'
import CardComponentProps from './DTOs/CardComponentProps '
import CardComponent


 from './style/CardMainStyle'
export default function CardsMain() {

  const songs: CardComponentProps['data'] = {
    title:{
      titleSec:"SONGS",
      titleCurrent: "Another love",
      link:""
    },
    p1: {
      text: 'Musicas',
      value: '2365'
    },
    p2: {
      text: 'Ouvidas',
      value: '48'
    },
    p3: {
      text: 'Tempo',
      value: '120'
    },   
    style:{
      startColor:"rgb(89, 4, 187)",
      endColor:"#307EB7 ",
      btnBG: "rgb(86, 44, 197)",
    },
    tags:["normal","romance","fantasia"]
  };
  const words: CardComponentProps['data'] = {
    title:{
      titleSec:"WORDS",
      titleCurrent: "WAS",
      link:""
    },
    p1: {
      text: 'Aprendendo',
      value: '2'
    },
    p2: {
      text: 'Aprendidas',
      value: '48'
    },
    p3: {
      text: 'Total',
      value: '120'
    },
    style:{ 
      startColor:"#60B6E7",
      endColor:"#30B77E",
      btnBG: "rgb(89, 175, 215)"
    },
    tags:["dificil","romance","fantasia"]
  };
  const histories: CardComponentProps['data'] = {
    title:{
      titleSec:"HISTORIES",
      titleCurrent: "The snow-white",
      link:"/histories"
    },
    p1: {
      text: 'Historias',
      value: '2365'
    },
    p2: {
      text: 'Lidas',
      value: '48'
    },
    p3: {
      text: 'Tempo',
      value: '120'
    },
    style:{
      startColor:"#D9E731",
      endColor:"#B73030",
      btnBG: "rgb(196, 181, 77)"
    },
    tags:["dificil","romance","fantasia"]
  };
  return (
    <>
      <CardComponent data={songs}  />
      <CardComponent data={words} />
      <CardComponent data={histories} />
    </>
  )
}
