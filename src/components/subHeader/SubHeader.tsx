import React from 'react';
import styled from 'styled-components';
import TitleSection from './titleSection/TitleSection';
import { Container } from './titleSection/style/TitleSectionStyle';
import SearchField from './searchComp/SearchField';
import NavigationArrow from './NavigationsArrows/NavigationsArrosStyled';

// Define a interface para as props do SubHeader
interface SubHeaderProps {
  size: string;
  text: string;
  fieldSearch:boolean;
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
 `


const SubHeader: React.FC<SubHeaderProps> = ({ size, text, fieldSearch }) => {
  return (
    <ContainerHeader>
      <Container>
        <TitleSection sizeText={size} text={text} />
      </Container>
      {!fieldSearch ? 
        <SearchField /> :
        <ContainerArrows>
          <NavigationArrow direction='left' text='Voltar'/>
          <NavigationArrow direction='right' text='Avançar'/>
        </ContainerArrows>}
    </ContainerHeader>
  );
};

export default SubHeader;
