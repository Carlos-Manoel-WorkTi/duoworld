import React, { useRef, useState, useEffect, useCallback } from "react";
import HeaderComp from "../../components/header/Header_comp";
import SubHeader from "../../components/subHeader/SubHeader";
import { NavigateHistory } from "../histories/script/Methods";
import Footer from "../../components/footer/Footer";
import {
  ContainerLirycs,
  ContainerScroll,
  ContainerSong,
  ContainerSongAuthor,
  ContainerSongControllers,
  ContainerSongControllersBack,
  ContainerSongControllersForward,
  ContainerSongIMG,
  ContainerSongInf,
  ContainerSongInfDiv,
  ContainerSongProgress,
  ContainerSongTimeCurrent,
  ContainerSongTimeFinal,
  ContainerSongTitle,
  ContainerSongTitleAndAuthor,
  ControllerVel,
  Lirycs,
  PlayPauseButton,
  Switch,
  Works,
} from "./style/SongInitStyle";
import song from "./script/song";
import { getItemToLocalStorage, setItemToLocalStorage } from "../../storage/localStorage";
import { calculateSongPercentage } from "./script/methos";
import { useLocation, useNavigate } from "react-router-dom";

interface CardData {
  id: string;
  nome: string;
  pct: number;
  stoped?:number;
  totally?:number;
}
interface CardsList {
  songs: CardData;
  words: CardData;
  history: CardData;
}


export default function SongInit() {
  const { navigateTo, navigateBack } = NavigateHistory();
  const [isChecked, setIsChecked] = useState(false);
  const [speed, setSpeed] = useState(20); // Initial speed
  const containerRef = useRef<HTMLDivElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [debounceTimeout, setDebounceTimeout] = useState<NodeJS.Timeout | null>(null);

  // Extract song data
  const currentSong = song[0];
  const { lyrics, title, author, link, audioSrc, id } = currentSong;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(e.target.checked);
  };

  const increaseSpeed = () => {
    setSpeed((prevSpeed) => Math.max(5, prevSpeed - 5)); // Increase speed, limit to 5ms
  };

  const decreaseSpeed = () => {
    setSpeed((prevSpeed) => Math.min(1000, prevSpeed + 5)); // Decrease speed, limit to 1000ms
  };


useEffect(() => {
  const audio = audioRef.current;
  const container = containerRef.current;

  const updateTime = () => {
    if (audio) {
      setCurrentTime(audio.currentTime);
      setDuration(audio.duration);
    }
  };

  const handleScroll = () => {
    // Atualizar posição de rolagem no estado quando o usuário rolar manualmente
  };

  const scroll = () => {
    if (!container) return;

    const scrollHeight = container.scrollHeight;
    const clientHeight = container.clientHeight;
    let scrollTop = container.scrollTop;

    if (scrollTop + clientHeight >= scrollHeight) {
      // Parar rolagem se atingir o final
      if (scrollInterval) {
        clearInterval(scrollInterval);
        setIsChecked(!isChecked);
      }
    } else {
      container.scrollTop += 1; // Rolar para baixo 1px
    }
  };

  const resetScroll = () => {
    // Reabilitar rolagem automática após o usuário rolar manualmente
    if (scrollInterval) clearInterval(scrollInterval);
    scrollInterval = setInterval(scroll, speed);
  };

  let scrollInterval: NodeJS.Timeout | null = null;

  if (audio) {
    audio.addEventListener("timeupdate", updateTime);
    audio.addEventListener("loadedmetadata", updateTime);
    audio.addEventListener("canplaythrough", () => setIsLoading(false)); // Atualizar estado quando o áudio puder tocar
    audio.addEventListener("error", (e) => {
      console.error('Error loading audio:', e);
      setIsLoading(false);
    });
  }

  if (container) {
    if (isChecked) {
      scrollInterval = setInterval(scroll, speed); // Iniciar rolagem automática
      container.addEventListener("scroll", handleScroll);
      container.addEventListener("scroll", resetScroll);
    } else {
      if (scrollInterval) clearInterval(scrollInterval);
    }
  }

  return () => {
    if (audio) {
      audio.removeEventListener("timeupdate", updateTime);
      audio.removeEventListener("loadedmetadata", updateTime);
      audio.removeEventListener("canplaythrough", () => setIsLoading(false));
      audio.removeEventListener("error", (e) => {
        console.error('Error loading audio:', e);
        setIsLoading(false);
      });
    }
    if (container) {
      if (scrollInterval) clearInterval(scrollInterval);
      container.removeEventListener("scroll", handleScroll);
      container.removeEventListener("scroll", resetScroll);
    }
  };
}, [isChecked, speed]);

const debouncePlayPause = () => {
  if (debounceTimeout) clearTimeout(debounceTimeout);

  const timeoutId = setTimeout(() => {
    handlePlayPause();
  }, 300); // Atraso de 300ms

  setDebounceTimeout(timeoutId);
};
const handlePlayPause = () => {
  const audio = audioRef.current;
  if (audio) {
    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
      setIsChecked(false);
    } else {
      if (!isLoading) {
        audio.play().catch(error => {
          console.error('Error playing audio:', error);
        });
        setIsPlaying(true);
      } else {
        console.warn('Audio is still loading, please wait...');
      }
    }
  }
};


  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
  };

  const handleRewind = () => {
    const audio = audioRef.current;
    if (audio) {
      audio.currentTime = Math.max(0, audio.currentTime - 10); // Retroceder 10 segundos
    }
  };

  const handleForward = () => {
    const audio = audioRef.current;
    if (audio) {
      audio.currentTime = Math.min(audio.duration, audio.currentTime + 10); // Avançar 10 segundos
    }
  };


  const salveData = useCallback(() => {
    const storage = getItemToLocalStorage("cards") as CardsList | null;

    if (storage) {
      const cTime = storage.songs.nome === title ? Math.max(storage.songs.stoped || 0, currentTime) : currentTime;
      const pct = calculateSongPercentage(cTime, duration).toFixed(0);

      const currentPct = storage.songs.pct;
      if (parseInt(pct) <= currentPct) {
        return;
      }

      const updatedStorage = {
        ...storage,
        songs: {
          ...storage.songs,
          id: id,
          nome: title,
          pct: parseInt(pct, 10),
          stoped: currentTime,
          totally: duration
        }
      };
      setItemToLocalStorage("cards", updatedStorage);
    }
  }, [title, id, currentTime, duration]);

  useEffect(() => {
    const handleBeforeUnload = (event: BeforeUnloadEvent) => {
      salveData()
    
    };
    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [salveData]);

  
  return (
    <>
      <HeaderComp active="LSongs" />
      <SubHeader
        size={30}
        text="SONGS"
        fieldSearch={true}
        action1={() => {
          salveData()
          navigateBack()}}
        action2={() => navigateTo(`/songs`)}
      />

      <main>
        <ContainerLirycs
          ref={containerRef}
          style={{ overflowY: "scroll", height: "100vh" }}
        >
          <Lirycs>{lyrics}</Lirycs>
          <Works>
            <ContainerSong>
              <ContainerSongIMG
                src={
                  link ||
                  "https://upload.wikimedia.org/wikipedia/pt/9/9c/Ed_Sheeran_Perfect.jpg"
                }
              />
              
              <ContainerSongTitleAndAuthor>
                <ContainerSongTitle>{title}</ContainerSongTitle>
                <ContainerSongAuthor>{author}</ContainerSongAuthor>
              </ContainerSongTitleAndAuthor>
              <ContainerSongInf>
                <ContainerSongControllers>
                  <ContainerSongControllersBack onClick={handleRewind}>
                    <svg
                      width="23"
                      height="16"
                      viewBox="0 0 23 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.5 8V0L0 8L11.5 16V8ZM23 0L11.5 8L23 16V0Z"
                        fill="#fff"
                      ></path>
                    </svg>
                  </ContainerSongControllersBack>
                  <PlayPauseButton onc={(debouncePlayPause)}>
                    {isPlaying ? (
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M8 5v14l11-7L8 5z" fill="#fff"></path>
                      </svg>
                    ) : (
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8 5v14h4V5H8zm4 14h4V5h-4v14zm4 0h4V5h-4v14z"
                          fill="#fff"
                        ></path>
                      </svg>
                    )}
                  </PlayPauseButton>
                  <ContainerSongControllersForward  onClick={handleForward}>
                    <svg
                      width="23"
                      height="16"
                      viewBox="0 0 23 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.5 8V0L23 8L11.5 16V8ZM0 0L11.5 8L0 16V0Z"
                        fill="#fff"
                      ></path>
                    </svg>
                  </ContainerSongControllersForward>
                </ContainerSongControllers>
                                <ContainerSongInfDiv>
                                  <ContainerSongTimeCurrent>
                                    {formatTime(currentTime)}
                                  </ContainerSongTimeCurrent>
                                  <ContainerSongProgress>
                                    <progress value={currentTime} max={duration} />
                                  </ContainerSongProgress>
                                  <ContainerSongTimeFinal>
                                    {formatTime(duration)}
                                  </ContainerSongTimeFinal>
                                </ContainerSongInfDiv>
              </ContainerSongInf>
              <audio ref={audioRef} src={`${audioSrc}`}/>
            </ContainerSong>
            <ContainerScroll>
              <h2>Scroll automático</h2>
              <Switch
                id="switch1"
                checked={isChecked}
                onChange={handleChange}
              />  
              <p>
                Status:{" "}
                {isChecked ? (
                  <span style={{ color: "green" }}>On</span>
                ) : (
                  <span style={{ color: "#cd3c3c" }}>Off</span>
                )}
              </p>

              <div>
                <ControllerVel>
                  <p>Velocidade: {speed}ms</p>
                  <button onClick={decreaseSpeed} disabled={!isChecked}>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M19 13H5V11H19V13Z" fill="currentColor" />
                    </svg>
                  </button>
                  <button onClick={increaseSpeed} disabled={!isChecked}>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M19 13H13V19H11V13H5V11H11V5H13V11H19V13Z"
                        fill="currentColor"
                      />
                    </svg>
                  </button>
                </ControllerVel>
              </div>
            </ContainerScroll>
          </Works>
        </ContainerLirycs>
      </main>

      <Footer $wdb={true} />
      
    </>
  );
}
