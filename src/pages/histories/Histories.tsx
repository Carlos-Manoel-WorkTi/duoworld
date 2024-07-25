
import HeaderComp from "../../components/header/Header_comp";
import SubHeader from "../../components/subHeader/SubHeader";
import { ContainerBooks, Book } from "./style/HistoriesStyle";
import { BooksData } from "./script/HistoriesScript";
import {NavigateHistory} from "./script/Methods";


const Histories = () => {
  
  const { navigateBack } = NavigateHistory();
  
  return (<>
      <HeaderComp active="LHistories"></HeaderComp>
      <SubHeader size={30} text="HISTORIES" fieldSearch={false} action1={navigateBack}/>
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
