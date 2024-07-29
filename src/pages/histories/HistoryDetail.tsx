import React, { ChangeEvent, useState } from 'react';
import { NavLink } from 'react-router-dom';
import HeaderComp from '../../components/header/Header_comp';
import { Author, BlocoFirst, BlocoSecond, ButtonInit, ButtonCap, Card, CardContent, Contanier, DataPublicate, Image, PropBookDetail, RowAvaliative, RowBtn, RowDescrition, Title, ContainerCaps, Cap } from './style/HistoryDetailStyle';
import { BooksData } from './script/HistoriesScript';
import BookDTO from './DTOs/BookDTO';
import SubHeader from '../../components/subHeader/SubHeader';
import { RatingStars, TagsContainer, Tag } from './style/HistoriesStyle';
import { NavigateHistory, Params } from './script/Methods';
import { getItemToLocalStorage, setItemToLocalStorage } from '../../storage/localStorage';
import NavMobile from '../../components/navMobile/NavMobile';
import Footer from '../../components/footer/Footer';

export const HistoryDetail: React.FC<PropBookDetail> = (prop) => {
    const [page, setPage] = useState<string>("1");

    const { navigateTo, navigateBack } = NavigateHistory();
    const { getParams } = Params();
    
    const DataCurrentBook: BookDTO = BooksData.find((book) => book.id === parseInt(getParams("id") ?? "1")) ?? {
        id: 1,
        title: '',
        author: '',
        link: '',
        rating: 1,
        tags: [''],
        description: '',
        totalPages: 1,
        chapters: ['']
    };

    const handleStartReading = () => {
        const currentCardsData = getItemToLocalStorage('cards') || {
            songs: { id: '1', nome: 'Another love', pct: 0 },
            words: { id: '1', nome: 'WAS', pct: 0 },
            history: { id: '1', nome: 'A Névoa da floresta', pct: 0,pageStoped:0 }
        };
        const updatedCardsData = {
            ...currentCardsData,
            history: { id: DataCurrentBook.id.toString(), nome: DataCurrentBook.title, pct: 0,pageStoped: currentCardsData.history.pageStoped || 1 }
        };
        setItemToLocalStorage('cards', updatedCardsData);
    };

    const totalPages = DataCurrentBook.totalPages || 1;
    const pageOptions = Array.from({ length: totalPages }, (_, index) => (
        <option key={index + 1} value={index + 1}>
            Capítulo: {index + 1}
        </option>
    ));

    return (
        <>
            <HeaderComp active="LHistories" />
            <SubHeader
                size={30}
                text="HISTORIES"
                fieldSearch={true}
                action1={() => navigateTo("/histories")}
                action2={() => parseInt(page) > 1 ? navigateTo(`/histories/id=${DataCurrentBook.id}/name=${encodeURIComponent(DataCurrentBook.title)}/page=1`) : navigateBack()}
            />
            <main>
                <Contanier>
                    <BlocoFirst>
                        <Card>
                            <Image src={DataCurrentBook.link} alt="description" />
                            <CardContent>{DataCurrentBook.title}</CardContent>
                        </Card>
                        <div>
                            {/* <span>Sinopse</span> */}
                        </div>
                    </BlocoFirst>
                    <BlocoSecond>
                        <Title>{DataCurrentBook.title}</Title>
                        <Author>by {DataCurrentBook.author}</Author>
                        <RowAvaliative>
                            <span>
                                <span id="aval">Avaliação:</span> {DataCurrentBook.rating}
                            </span>
                            <RatingStars rating={DataCurrentBook.rating} />
                        </RowAvaliative>
                        <TagsContainer>
                            {DataCurrentBook.tags.map((tag, index) => (
                                <Tag color="#151515" key={index}>
                                    <p>{tag}</p>
                                </Tag>
                            ))}
                        </TagsContainer>
                        <DataPublicate>{DataCurrentBook.publicationDate}</DataPublicate>
                        <RowDescrition>
                            Sinopse: {DataCurrentBook.description}
                        </RowDescrition>
                        <RowBtn>
                            <NavLink
                                to={`/histories/id=${DataCurrentBook.id}/name=${encodeURIComponent(DataCurrentBook.title)}/page=${page}`}
                                onClick={handleStartReading} // Atualiza o localStorage ao iniciar leitura
                            >
                                <ButtonInit>
                                    <span className="label">Iniciar leitura</span>
                                    <span className="icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                                            <path fill="none" d="M0 0h24v24H0z"></path>
                                            <path fill="currentColor" d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"></path>
                                        </svg>
                                    </span>
                                </ButtonInit>
                            </NavLink>
                            <ButtonCap value={page} onChange={(event: ChangeEvent<HTMLSelectElement>) => setPage(event.target.value)}>
                                {pageOptions}
                            </ButtonCap>
                        </RowBtn>
                    </BlocoSecond>
                </Contanier>
            </main>
            <ContainerCaps>
                {DataCurrentBook.chapters?.length ? DataCurrentBook.chapters.map((chapter, index) => (
                    <Cap key={index}>
                        <NavLink to={`/histories/id=${DataCurrentBook.id}/name=${encodeURIComponent(DataCurrentBook.title)}/page=${index + 1}`}>
                            <div className='cnp'>
                                <span className='npage'>{index + 1} -</span>
                                <h4>{chapter}</h4>
                            </div>
                            <span className='dataCap'>{DataCurrentBook.publicationDate}</span>
                        </NavLink>
                    </Cap>
                )) : "Sem capítulos disponíveis"}
            </ContainerCaps>
            <NavMobile active="NHistories" ></NavMobile>
            <Footer wdb={true}/>
        </>
    );
};
