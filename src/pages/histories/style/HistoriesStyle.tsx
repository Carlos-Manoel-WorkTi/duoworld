  import styled from "styled-components";
  import BookDTO from "../DTOs/BookDTO";
import { NavLink } from "react-router-dom";

  export const ContainerBooks = styled.section`
    height: auto;
    width: 100%;
    gap: 1em;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap; 

    a{
      text-decoration: none;
    }
    @media screen and (max-width: 845px) {
      justify-content: center;
      gap: 5em;
    }
    @media screen and (max-width: 680px) {
      gap: 3.5em;
    }
    @media screen and (max-width: 460px) {
      gap: 2.5em;
    }
    @media screen and (max-width: 390px) {
      gap: 1.5em;
    }
  `;

  const Card = styled.div<{id:number}>`
    box-shadow: 0px 4px 16px #420bb1;
    height: 376px;
    width: 20%; 
    display: flex;
    flex-direction: column;
    justify-content: end;
    gap: 0.5em;
    border-radius: 1.5em;
    position: relative;
    padding: 1.3em;
    z-index: 1;
    overflow: hidden;
    margin-bottom: 30px;
    min-width: 100px;
    a{
      text-decoration: none;
    }

    &:hover{
      .background{
        background-color: #1a1717;
        color: red !important;
      }

    }

    @media screen and (max-width: 1200px) {
      width: 25%; 
    }
    @media screen and (max-width: 1060px) {
      width: 27%;
      height: 376px;
    }
    @media screen and (max-width: 845px) {
      width: 36%; 
      height: 386px;
    }
    @media screen and (max-width: 680px) {
      width: 40%; 
      height: 386px;
    }
    @media screen and (max-width: 600px) {
      padding: 0.7em 1em;
      width: 40%; 
      height: 300px;
      border-radius: 1.1em;
    }
    @media screen and (max-width: 480px) {
      padding: 0.7em 0.5em;
      width: 40%; 
      height: 300px;
      border-radius: 0.9em;
    }
    @media screen and (max-width: 410px) {
      padding: 0.7em 0.5em;
      width: 160px; 
      height: 300px;
      border-radius: 0.6em;
    }
    @media screen and (max-width: 410px) {
      padding: 0.7em 0.3em;
      width: 145px;
      height: 241px;
      box-shadow: 0px 4px 10px #420bb1;
    }
    @media screen and (max-width: 340px) {
      padding: 0.7em 0.3em;
      width: 90%;
      height: 390px;
    }
  `;
    
 const Background = styled.div<{link:string}>`
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      background-image: 
        linear-gradient(to top, #111111 40%, 
            transparent),
        url(${prop => prop.link});
      background-size: cover;
      background-position: center;
      z-index: 0;

      ${Card}:hover & {
        background-image:
          linear-gradient(to top, #111111 40%, 
            #111111d2),
          url(${prop => prop.link});
      }

      @media screen and (max-width: 1060px) {
        height: 120%;
    }
    @media screen and (max-width: 600px){
      height: 100%;
      background-image: 
        linear-gradient(to top, #111111 40%, 
            transparent),
        url(${prop => prop.link});
    }
    @media screen and (max-width: 490px) {
        height: 100%;
    }
    `;
    const Container = styled.div`
      color: #ffffff;
      z-index: 2;
      position: relative;
      font-family: 'Nunito', sans-serif;
      display: flex;
      flex-direction: column;
      /* background-color: white; */
      width: 100%;
      gap: 0.5em;
    `;

  const HeadingContainer = styled.div`
    height: fit-content;
    width: 100%;
  `;

  const Heading = styled.h1`
    font-weight: 900;
    text-shadow: 0 0 1px #e9e8e8; 
    font-size: 1.5em;
    letter-spacing: 0.2em;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    @media screen and (max-width: 1060px) {
      font-size: 1.3em;
    }
    @media screen and (max-width: 440px) {
      font-size: 1em;
    }
    @media screen and (max-width: 340px){
      font-size: 1.5em;
    }
  `;

  const SubHeading = styled.p`
    font-weight: 600;
    font-size: 1.2em;
    font-family: 'Courier New', Courier, monospace;
    color: #959595;
    @media screen and (max-width: 1060px) {
      font-size: 1.1em;
    }
    @media screen and (max-width: 440px) {
      font-size: 0.8em;
    }
    @media screen and (max-width: 340px){
      font-size: 1.3em;
    }
  `;

  const RatingContainer = styled.div`
    display: flex;
    justify-content: left;
    align-items: center;
    height: fit-content;
    width: 100%;
    gap: 1.5em;
    @media screen and (max-width: 1060px) {
      gap: 0.3em;
    }
    @media screen and (max-width: 600px) {
      
    }
    @media screen and (max-width: 325px){

    }
  `;

  const IconsContainer = styled.div`
    display: flex;
    justify-content: left;
    gap: 0.5em;
    width: fit-content;
    height: fit-content;
    @media screen and (max-width: 1060px) {
      .rating-stars{
        
      }
    }
    @media screen and (max-width: 560px) {
      svg{
        width: 17px;
        height: 17px;
      }
    
    @media screen and (max-width: 450px) {
      svg{
        width: 15px;
        height: 15px;
      }
    }
    @media screen and (max-width: 380px) {
      svg{
        width: 13px;
        height: 13px;
      }
    }
    @media screen and (max-width: 350px) {
      svg{
        width: 10px;
        height: 10px;
      }
    }
    @media screen and (max-width: 340px){
      svg{
        width: 20px;
        height: 20px;
      }
    }
  }
  `;

  const RatingText = styled.div`
    color: #ffffff;
    font-family: 'Nunito', sans-serif;
    font-size: 1.2em;
    font-weight: light;
    
    @media screen and (max-width: 1060px) {
      font-size: 1em;
    }
    @media screen and (max-width: 480px) {
      font-size: 0.8em  ;
    }
    @media screen and (max-width: 340px){
      font-size: 1.1em  ;
    }
  `;

export const TagsContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: fit-content;
    /* width: fit-content; */
    gap: 0.5em;
    /* margin-bottom: 4px; */
    `;

export const Tag = styled.div<{color:string}>`
    border: 2px solid ${(prop) => prop.color};
    border-radius: 0.5em;
    color: #dddddd;
    /* color: ${(prop) => prop.color}; #222222*/
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    font-size: 0.9em;
    font-weight: normal;
    padding: 0.4em 0.5em ;
    cursor: pointer;
    transition: background-color 0.3s, color 0.3s;

    &:hover {
      background-color: #222222;
      color: white;
    }

    @media screen and (max-width: 600px) {
      font-size: 0.7em  ;
      padding: 0.4em 0.2em ;
    }
    @media screen and (max-width: 450px) {
      font-size: 0.6em  ;
      padding: 0.3em 0.1em ;
    }
    @media screen and (max-width: 340px){
      font-size: 0.9em  ;
      padding: 0.4em 0.4em ;
    }
  `;

  const Description = styled.p`
    font-family: 'Nunito', sans-serif;
    color: #d5d5d5;
    font-weight: light;
    position: relative;
    height: 0em;
    transition: height 0.5s;
    overflow: hidden;
    


    ${Card}:hover & {
      height: 7em;
    }

    @media screen and (max-width: 600px){
      ${Card}:hover & {
      display: none;  
    }
    }
    @media screen and (max-width: 340px){
      ${Card}:hover & {
      display: block;
    }
    }
  `;




  interface StarProps {
    filled: boolean;
  }

  const FullStar: React.FC<StarProps> = ({ filled }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width="24" height="24">
      <path
        d="M316.7 17.8l65.43 132.4l146.4 21.29c26.27 3.796 36.79 36.09 17.75 54.59l-105.9 102.1l25.05 145.5c4.508 26.31-23.23 45.9-46.49 33.7L288 439.6l-130.9 68.7C133.8 520.5 106.1 500.9 110.6 474.6l25.05-145.5L29.72 226.1c-19.03-18.5-8.516-50.79 17.75-54.59l146.4-21.29l65.43-132.4C271.1-6.083 305-5.786 316.7 17.8z"
        fill={filled ? "#FFD700" : "transparent"} // Gold for filled stars, transparent for unfilled stars
      />
    </svg>
  );

  const HalfStar: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width="24" height="24">
      <path
        d="M288 439.6l-130.9 68.7C152.2 510.8 147.1 512 142.2 512c-18.59 0-35.17-16.66-31.61-37.45l25.04-145.5L29.72 226.1C10.68 207.6 21.2 175.3 47.47 171.5l146.4-21.29l65.43-132.4c5.883-11.91 17.33-17.8 28.73-17.8c.0234 0-.0234 0 0 0L288 439.6z"
        fill="#FFD700" 
      />
    </svg>
  );

  interface RatingStarsProps {
    rating: number;
  }

  export const RatingStars: React.FC<RatingStarsProps> = ({ rating }) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5;

    return (
      <div className="rating-stars">
        {[...Array(fullStars)].map((_, index) => (
          <FullStar key={index} filled />
        ))}
        {halfStar && <HalfStar />}
        {[...Array(5 - fullStars - (halfStar ? 1 : 0))].map((_, index) => (
          <FullStar key={index + fullStars + (halfStar ? 1 : 0)} filled={false} />
        ))}
      </div>
    );
  };


  export const Book: React.FC<BookDTO> = (prop) => (
    <Card id={prop.id} >
        <NavLink to={`/histories/id=${prop.id}`}>
        <Background link={prop.link} className="background" />
        <Container className="container">
          <HeadingContainer>
            <Heading>
              {prop.title}  
            </Heading>
            <SubHeading>
              By {prop.author}
            </SubHeading>
          </HeadingContainer>
          <RatingContainer>
            <IconsContainer>    
              <RatingStars rating={prop.rating} />
            </IconsContainer>
            <RatingText>
              <p>{prop.rating + " "} stars</p>
            </RatingText>
          </RatingContainer>
          <TagsContainer>
          {prop.tags.map((tag, index) => (
                <Tag color="#222222" key={index}>
                    <p>{tag}</p>
                </Tag>              
              ))}
          </TagsContainer>
        </Container>
          <Description>
            {prop.description.substring(0,150)+"..."}
          </Description>
    </NavLink>
      </Card>
    );



