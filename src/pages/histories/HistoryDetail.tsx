import { useParams } from "react-router-dom";
import HeaderComp from "../../components/header/Header_comp";
import { Author, BlocoFirst, BlocoSecond, Button, Card, CardContent, Contanier, DataPublicate, Image, PropBookDetail, RowAvaliative, RowBtn, RowDescrition, Title } from "./style/HistoryDetailStyle";
import { BooksData } from "./script/HistoriesScript";
import BookDTO from "./DTOs/BookDTO";
import SubHeader from "../../components/subHeader/SubHeader";
import { RatingStars, TagsContainer, Tag } from "./style/HistoriesStyle";


export const HistoryDetail: React.FC<PropBookDetail> = (prop) => {

    const params = useParams<{ id: string }>();

    const DataCurrentBook: BookDTO = BooksData.find((book) => book.id === parseInt(params.id ?? "1")) ?? {
      id: 1,
      title: '',
      author: '',
      link: '',
      rating: 1,
      tags: [''],
      description: ''
    };
    return(
        <>
        <HeaderComp active="LHistories"/>
        <SubHeader size="30" text="HISTORIES" fieldSearch={true}/>
        <main>
            <Contanier>
                <BlocoFirst>
                    {/* <CapaBook src={DataCurrentBook.link}/> */}
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
                        <span><span id="aval" >Avaliação:</span> {DataCurrentBook.rating} </span>
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
                        <Button>
                            <span className="label">Inciar leitura</span>
                            <span className="icon">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                                <path fill="none" d="M0 0h24v24H0z"></path>
                                <path fill="currentColor" d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"></path>
                            </svg>
                            </span>
                        </Button>
                    </RowBtn>
                </BlocoSecond>
            </Contanier>
        </main>
        </>
)
}