import React, { useEffect } from 'react'
import CardComponentProps from './DTOs/CardComponentProps '
import CardComponent from './style/CardMainStyle'
import { setItemToLocalStorage,getItemToLocalStorage } from '../../storage/localStorage';

interface CardData {
  id: string;
  nome: string;
  pct:number;
}

interface CardsList {
  songs: CardData;
  words: CardData;
  history: CardData;
}

export default function CardsMain() {
//  |
  
  useEffect(() => {
    const cardsData: CardsList = {
      songs: { id: '1', nome: 'Another love', pct:0 },
      words: { id: '1', nome: 'WAS',pct:0 },
      history: { id: '1', nome: 'A Névoa da floresta',pct:0 }
    };
    setItemToLocalStorage('cards', cardsData);
  }, []);

  const cardsData = getItemToLocalStorage("cards") as CardsList | null;

  if (!cardsData) {
    return <div>Loading...</div>;
  }

  const songs: CardComponentProps['data'] = {
    id:1,
    porncetagem:true,
    pct: cardsData.songs.pct,
    title:{
      titleSec:"SONGS",
      titleCurrent: cardsData?.songs.nome,
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
    id:2,
    porncetagem:false,
    pct: cardsData.words.pct,
    title:{
      titleSec:"WORDS",
      titleCurrent: cardsData?.words.nome,
      link:"/words"
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
    id:3,
    porncetagem:true,
    pct: cardsData.history.pct,
    title:{
      titleSec:"HISTORIES",
      titleCurrent: cardsData?.history.nome,
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
      <CardComponent data={songs}/>
      <CardComponent data={words} />
      <CardComponent data={histories} />
    </>
  )
}
