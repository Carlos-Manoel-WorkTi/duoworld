import React, { useEffect, useState } from 'react';
import CardComponent from './style/CardMainStyle';
import { setItemToLocalStorage, getItemToLocalStorage } from '../../storage/localStorage';
import CardComponentProps from './DTOs/CardComponentProps ';

interface CardData {
  id: string;
  nome: string;
  pct: number;
  pageStoped?:number;
  stoped?:number;
  totally?:number;
}

  interface CardsList {
    songs: CardData;
    words: CardData;
    history: CardData;
  }

function truncateTitle(title:string, maxLength = 20) {
    if (title.length > maxLength) {
        return title.substring(0, maxLength) + '...';
    }
    return title;
}

export default function CardsMain() {
  const [cardsData, setCardsData] = useState<CardsList | null>(null);

  useEffect(() => {

    const storedCardsData = getItemToLocalStorage('cards') as CardsList | null;

    if (!storedCardsData) {
   
      const initialCardsData: CardsList = {
        songs: { id: '1', nome: 'Another love', pct: 0,stoped: 0,totally:0},
        words: { id: '1', nome: 'WAS', pct: 0},
        history: { id: '1', nome: 'A Névoa da floresta', pct: 0,pageStoped:0 }
      };
      setItemToLocalStorage('cards', initialCardsData);
      setCardsData(initialCardsData);

    } else {
 
      setCardsData(storedCardsData);
    }
  }, []);

  if (!cardsData) {
    return <div>Loading...</div>;
  }

  const songs: CardComponentProps['data'] = {
    id: 1,
    porncetagem: true,
    pct: cardsData.songs.pct,
    title: {
      titleSec: "SONGS",
      titleCurrent: truncateTitle(cardsData.songs.nome),
      link: `/songs/name=${cardsData.songs.nome}/id=${cardsData.songs.id}`
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
    style: {
      startColor: "rgb(89, 4, 187)",
      endColor: "#307EB7",
      btnBG: "rgb(86, 44, 197)",
    },
    tags: ["normal", "romance", "fantasia"]
  };

  const words: CardComponentProps['data'] = {
    id: 2,
    porncetagem: false,
    pct: cardsData.words.pct,
    title: {
      titleSec: "WORDS",
      titleCurrent: truncateTitle(cardsData.words.nome),
      link: `/histories/id=${cardsData.history.id}`
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
    style: {
      startColor: "#60B6E7",
      endColor: "#30B77E",
      btnBG: "rgb(89, 175, 215)"
    },
    tags: ["dificil", "romance", "fantasia"]
  };

  const histories: CardComponentProps['data'] = {
    id: 3,
    porncetagem: true,
    pct: cardsData.history.pct,
    title: {
      titleSec: "HISTORIES",
      titleCurrent: truncateTitle(cardsData.history.nome),
      link: `/histories/id=${cardsData.history.id}`
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
    style: {
      startColor: "#D9E731",
      endColor: "#B73030",
      btnBG: "rgb(196, 181, 77)"
    },
    tags: ["dificil", "romance", "fantasia"]
  };

  return (
    <>
      <CardComponent data={songs} />
      <CardComponent data={words} />
      <CardComponent data={histories} />
    </>
  );
}
