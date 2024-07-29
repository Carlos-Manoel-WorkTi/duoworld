
import HeaderComp from "../../components/header/Header_comp";
import SubHeader from "../../components/subHeader/SubHeader";
import { ContainerBooks, Book } from "./style/HistoriesStyle";
import { BooksData } from "./script/HistoriesScript";
import {NavigateHistory} from "./script/Methods";
import SearchFull from "../../components/searchFull/SearchFull";
import Paginato from "../../components/paginato/Paginato";
import Footer from "../../components/footer/Footer";
import NavMobile from "../../components/navMobile/NavMobile";


const Histories = () => {
  
  const { navigateBack } = NavigateHistory();
  
  return (<>
      <HeaderComp active="LHistories"></HeaderComp>
      <SubHeader size={30} text="HISTORIES" fieldSearch={false} action1={navigateBack} />
      <SearchFull/>
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
      <Paginato/>
      <NavMobile active="NHistories" ></NavMobile>
      <Footer/>
    </>
  );
};

export default Histories;
