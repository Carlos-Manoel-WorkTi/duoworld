import React, { useState } from 'react';
import HeaderComp from '../../components/header/Header_comp';
import { ContainerPages, ContainerTranslate, NPage, TextPage } from './style/HistoryPageStyle';
import DataBook from './script/DataBook';
import SubHeader from '../../components/subHeader/SubHeader';
import { NavigateHistory, Params } from './script/Methods';
import ListWords from './script/words';

export default function HistoryPage() {
  const [selectedWordId, setSelectedWordId] = useState<string | null>(null);

  const handleMouseDown = (event: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
    const target = event.target as HTMLElement;
    const wordId = target.getAttribute('data-id');

    if (wordId) {
      setSelectedWordId(wordId);
    }
  };

  const { navigateBack, navigateTo } = NavigateHistory();
  const { getParams } = Params();

  const pageData = DataBook.book.pages.find((page) => page.pageNumber === parseInt(getParams("page"))) ?? { pageNumber: 0, content: "Página não encontrada" };

  const { pageNumber, content } = pageData;

  function nextPage() {
    navigateTo(`/histories/id=` + DataBook.book.id + `/name=` + DataBook.book.title + `/page=` + (pageNumber + 1));
  }

  // Função para remover pontuação e converter para minúsculas
  const cleanWord = (word: string) => {
    return word.toLowerCase().replace(/[.,/#!$%^&*;:{}=\-_`~()]/g,"");
  };

  // Função para dividir o conteúdo em palavras e adicionar `data-attributes`
  const renderContentWithWords = (text: string) => {
    const words = text.split(' ');
    return words.map((word, index) => {
      const cleanedWord = cleanWord(word);
      const translation = ListWords[cleanedWord];
      const wordId = `word-${index}`;

      return (
        <span
          key={wordId}
          data-id={wordId}
          onMouseDown={handleMouseDown}
          tabIndex={0} // Permite que o elemento receba foco
          className="tooltip-container"
          style={{
            display: 'inline-block',
            position: 'relative',
            margin: '0 2px'
          }}
        >
          {word}
          {selectedWordId === wordId && translation && (
            <ContainerTranslate>
              {translation}
            </ContainerTranslate>
          )}
        </span>
      );
    });
  };

  return (
    <>
      <HeaderComp active='LHistories' />
      <SubHeader size={30} fieldSearch={true} text={DataBook.book.title} action1={navigateBack} action2={nextPage} />

      <ContainerPages>
        <NPage>Pagina: {pageNumber}</NPage>
        <TextPage>
          {renderContentWithWords(content)}
        </TextPage>
      </ContainerPages>
    </>
  );
}
