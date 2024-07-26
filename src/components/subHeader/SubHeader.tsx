import React from 'react';
import styled from 'styled-components';
import TitleSection from './titleSection/TitleSection';
import { Container } from './titleSection/style/TitleSectionStyle';
import SearchField from './searchComp/SearchField';
import NavigationArrow from './NavigationsArrows/NavigationsArrosStyled';

  // Define a interface para as props do SubHeader
  interface SubHeaderProps {
    size: number;
    text: string;
    fieldSearch:boolean;
    action1?: ()=>void;
    action2?: ()=>void;
  }

const ContainerHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
 const ContainerArrows = styled.div`
  display: flex;
  gap: 20px;
  padding-right: 30px;
  align-items: center;

  button{
    width: 43px;
    height: 43px;
  }
 `
 const ContainerArrowsAndSearch = styled.div`
 display: flex;
 gap: 15px;
 padding-right: 30px;
 align-items: center;

 button{
   width: 43px;
   height: 43px;
 }
`

const SubHeader: React.FC<SubHeaderProps> = ({ size, text, fieldSearch, action1, action2}) => {
  return (
    <ContainerHeader>
      <Container>
        <TitleSection sizetext={size} $text={text} />
      </Container>
      {!fieldSearch ? 
        <ContainerArrowsAndSearch>
          <SearchField />
          <NavigationArrow direction='left' $text='Voltar' onClick={action1} /> 
          <NavigationArrow direction='right' $text='Avançar' onClick={action2} />
        </ContainerArrowsAndSearch>
        :
        <ContainerArrows>
          <NavigationArrow direction='left' $text='Voltar' onClick={action1} />
          <NavigationArrow direction='right' $text='Avançar' onClick={action2} />
        </ContainerArrows>}
    </ContainerHeader>
  );
};

export default SubHeader;
