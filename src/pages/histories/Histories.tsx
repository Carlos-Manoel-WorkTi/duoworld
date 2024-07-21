
import HeaderComp from "../../components/header/Header_comp";
import SubHeader from "../../components/subHeader/SubHeader";
import { ContainerBooks, Book } from "./style/HistoriesStyle";
import { BooksData } from "./script/HistoriesScript";


const Histories = () => {



  return (<>
      <HeaderComp active="LHistories"></HeaderComp>
      <SubHeader size="30" text="HISTORIES" fieldSearch={false}/>
      <main>
        <ContainerBooks>
           {BooksData.map((book, index) => (
              <Book
                key={index}
                id={book.id}
                link={book.link}
                title={book.title}
                author={book.author}
                rating={book.rating}
                tags={book.tags}
                description={book.description}
              />
            ))}
        </ContainerBooks>
      </main>
    </>
  );
};

export default Histories;
