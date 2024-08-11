import React, { useEffect, useState } from "react";
import HeaderComp from "../../components/header/Header_comp";
import {
  ContainerPages,
  ContainerTranslate,
  FaqButton,
  FaqIcon,
  HiddenCheckbox,
  MuteSpeaker,
  MuteSpeakerIcon,
  NPage,
  Speaker,
  SpeakerIcon,
  TextPage,
  ToggleSwitch,
  Tooltip,
} from "./style/HistoryPageStyle";
import DataBook from "./script/DataBook";
import SubHeader from "../../components/subHeader/SubHeader";
import {
  calculateReadingPercentage,
  NavigateHistory,
  Params,
} from "./script/Methods";
import ListWords from "./script/words";
import LineMethodsFooter from "../../components/paginato/LineMethodsFooter";
import {
  getItemToLocalStorage,
  setItemToLocalStorage,
} from "../../storage/localStorage";
import Footer from "../../components/footer/Footer";

interface CardData {
  id: string;
  nome: string;
  pct: number;
  pageStoped?: number;
}
interface CardsList {
  songs: CardData;
  words: CardData;
  history: CardData;
}

export default function HistoryPage() {
  const { navigateBack, navigateTo } = NavigateHistory();
  const { getParams } = Params();
  const [selectedWordId, setSelectedWordId] = useState<string | null>(null);
  const [isListeningChecked, setIsListeningChecked] = useState(false);

  useEffect(() => {
    const storage = getItemToLocalStorage("cards") as CardsList | null;

    if (storage) {
      const currentPage = parseInt(getParams("page") ?? "1", 10);
      const lastPageStopped = storage.history.pageStoped || 1;
      const updatedPageStopped =
        currentPage > lastPageStopped ? currentPage : lastPageStopped;
      const pct = calculateReadingPercentage(
        updatedPageStopped,
        DataBook.book.totalPages
      ).toFixed(0);

      const updatedStorage = {
        ...storage,
        history: {
          ...storage.history,
          pageStoped: updatedPageStopped,
          pct: parseInt(pct, 10), // Convert the fixed string back to a number if needed
        },
      };

      setItemToLocalStorage("cards", updatedStorage);
    }
  }, [getParams]);

  const handleChange = () => {
    setIsListeningChecked((prev) => !prev);
  };

  const handleMouseDown = (
    event: React.MouseEvent<HTMLSpanElement, MouseEvent>
  ) => {
    const target = event.target as HTMLElement;
    const wordId = target.getAttribute("data-id");
    const word = target.textContent || "";

    if (wordId) {
      setSelectedWordId(wordId);
      if (!isListeningChecked) SpeakTexto(word);
    }
  };

  const pageData = DataBook.book.pages.find(
    (page) => page.pageNumber === parseInt(getParams("page"))
  ) ?? { pageNumber: 0, content: "Fim do livro!" };

  const { pageNumber, content } = pageData;

  function nextPage() {
    navigateTo(
      `/histories/id=` +
        DataBook.book.id +
        `/name=` +
        DataBook.book.title +
        `/page=` +
        (pageNumber + 1)
    );
  }

  const cleanWord = (word: string) => {
    return word.toLowerCase().replace(/[.,/#!$%^&*;:{}=\-_`~()]/g, "");
  };

  function SpeakTexto(texto: string) {
    if ("speechSynthesis" in window) {
      const utterance = new SpeechSynthesisUtterance(texto);
      utterance.lang = "en-US";
      utterance.rate = 1;
      utterance.volume = 1;
      window.speechSynthesis.speak(utterance);
    } else {
      console.log("A API de fala não é suportada neste navegador.");
    }
  }

  const renderContentWithWords = (text: string) => {
    const words = text.split(" ");
    return words.map((word, index) => {
      const cleanedWord = cleanWord(word);
      const translation = ListWords[cleanedWord];
      const wordId = `word-${index}`;

      return (
        <span
          key={wordId}
          data-id={wordId}
          onMouseDown={handleMouseDown}
          tabIndex={0}
          className="tooltip-container"
          style={{
            display: "inline-block",
            position: "relative",
            margin: "0 2px",
          }}
        >
          {word}
          {selectedWordId === wordId && translation && (
            <ContainerTranslate>{translation}</ContainerTranslate>
          )}
        </span>
      );
    });
  };

  return (
    <>
      <HeaderComp active="LHistories" />
      <SubHeader
        size={30}
        fieldSearch={true}
        text={DataBook.book.title}
        action1={navigateBack}
        action2={nextPage}
      />
      <FaqButton>
        <FaqIcon />
        <Tooltip>In case of error, open a new tab in the browser.</Tooltip>
      </FaqButton>
      <ToggleSwitch>
        <HiddenCheckbox checked={isListeningChecked} onChange={handleChange} />
        <Speaker checked={isListeningChecked}>
          <SpeakerIcon />
        </Speaker>
        <MuteSpeaker checked={isListeningChecked}>
          <MuteSpeakerIcon />
        </MuteSpeaker>
      </ToggleSwitch>
      <ContainerPages>
        {pageNumber > 0 ? <NPage>Page: {pageNumber}</NPage> : ""}
        <TextPage>{renderContentWithWords(content)}</TextPage>
      </ContainerPages>
      <LineMethodsFooter
        $url={`/histories/id=` + DataBook.book.id}
        action1={navigateBack}
        action2={nextPage}
      ></LineMethodsFooter>
      <Footer $wdb={false}/>
    </>
  );
}
