
import HeaderComp from "../../components/header/Header_comp";
import SubHeader from "../../components/subHeader/SubHeader";
import { ContainerBooks, Book } from "./style/HistoriesStyle";


const Histories = () => {
  const BooksData = [
    {
      "link": "https://marketplace.canva.com/EAD0UPCkitY/1/0/1024w/canva-capa-de-livro-de-suspense-monocrom%C3%A1tica-com-foto-de-floresta-U1dpnJ3bwKw.jpg",
      "title": "A Névoa da Floresta",
      "author": "John Doe",
      "rating": 5,
      "tags": ["Adventure", "Fantasy", "Action"],
      "description": "Em meio a uma floresta encantada coberta por uma névoa mística, um grupo de aventureiros se vê em uma jornada épica para desvendar antigos segredos e enfrentar criaturas sobrenaturais. Uma história de bravura e amizade que vai além da imaginação."
    },
    {
      "link": "https://marketplace.canva.com/EADzX7EZa7M/1/0/501w/canva-azul-escuro-fic%C3%A7%C3%A3o-cient%C3%ADfica-capa-de-livro-cZM_hhCqt2o.jpg",
      "title": "Vida Após a Morte",
      "author": "John Doe",
      "rating": 4.2,
      "tags": ["Adventure", "Fantasy", "Action"],
      "description": "Quando um cientista audacioso descobre a chave para a vida após a morte, ele desencadeia uma série de eventos que desafiam a compreensão da existência. Embarque em uma viagem por realidades paralelas e mistérios cósmicos nesta narrativa intrigante."
    },
    {
      "link": "https://marketplace.canva.com/EAE4oJOnMh0/1/0/1003w/canva-capa-de-livro-de-suspense-O7z4yw4a5k8.jpg",
      "title": "O Segredo das Sombras",
      "author": "Jane Smith",
      "rating": 3.8,
      "tags": ["Mystery", "Thriller", "Detective"],
      "description": "Uma detetive é chamada para investigar uma série de crimes inexplicáveis em uma cidade obscura e decadente. Conforme ela se aprofunda, descobre segredos sombrios e uma conspiração que ameaça mudar o destino da cidade."
    },
    {
      "link": "https://marketplace.canva.com/EAGGmVOseW8/1/0/1003w/canva-capa-de-livro-crist%C3%A3o-moderno-preto-e-branco-5is_KTxfxwY.jpg",
      "title": "O Caminho da Paz",
      "author": "Alice Johnson",
      "rating": 4.7,
      "tags": ["Science Fiction", "Time Travel", "Drama"],
      "description": "Num futuro onde viagens no tempo são possíveis, uma jovem luta para corrigir os erros do passado e criar um futuro melhor. Sua jornada é marcada por dilemas morais e desafios emocionais que testam seus limites."
    },
    {
      "link": "https://marketplace.canva.com/EAFK6vGA_UA/1/0/1003w/canva-capa-de-livro-com-foto-de-cidade-noturna-com-fuma%C3%A7a-e-pessoas-moderno-preto-nNp97h0CD0Y.jpg",
      "title": "Sem Caminho",
      "author": "Robert Brown",
      "rating": 4.5,
      "tags": ["Historical", "Legend", "Fantasy"],
      "description": "Em um mundo onde lendas antigas ganham vida, um historiador busca o significado de uma profecia perdida que pode mudar o curso da história. Descubra uma narrativa rica em mitos e mistérios que revelam o passado oculto da humanidade."
    },
    {
      "link": "https://marketplace.canva.com/EAFYhBnAbuQ/2/0/1003w/canva-capa-de-livro-de-fantasia-com-feiticeira-floresta-e-magia-XKRUgMPSjF0.jpg",
      "title": "O Caminho de Faustino",
      "author": "Sophia Lee",
      "rating": 2.3,
      "tags": ["Fantasy", "Adventure", "Magic"],
      "description": "Em uma floresta encantada, um jovem mago deve enfrentar desafios e desvendar segredos antigos para proteger seu reino das forças das trevas. Uma aventura mágica cheia de perigos e descobertas."
    },
    {
      "link": "https://marketplace.canva.com/EAGGaQ-X5KU/1/0/1003w/canva-capa-de-livro-crist%C3%A3o-simples-azul-bege-e-preto-PDc8kCuNoLc.jpg",
      "title": "The Time Keeper",
      "author": "James Wilson",
      "rating": 4.4,
      "tags": ["Science Fiction", "Adventure", "Time Travel"],
      "description": "Quando um guardião do tempo descobre uma maneira de manipular eventos históricos, ele deve enfrentar as consequências de suas ações e proteger a linha do tempo contra forças que buscam distorcer a realidade."
    },
    {
      "link": "https://marketplace.canva.com/EADqcMNbzgs/1/0/1003w/canva-preto-e-branco-suspense-ebook-_Kh7SCTI2fU.jpg",
      "title": "Shadows in the Dark",
      "author": "Emily Davis",
      "rating": 4.6,
      "tags": ["Suspense", "Thriller", "Mystery"],
      "description": "Uma investigação sobre uma série de desaparecimentos leva a um suspense psicológico profundo, onde segredos sombrios e intrigas pessoais se entrelaçam em um enredo de tirar o fôlego."
    }
  ];
  
 
  return (<>
      <HeaderComp active="LHistories"></HeaderComp>
      <main>
        <SubHeader size="30" text="HISTORIES"/>
        <ContainerBooks>

           {BooksData.map((book, index) => (
              <Book
                key={index}
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
