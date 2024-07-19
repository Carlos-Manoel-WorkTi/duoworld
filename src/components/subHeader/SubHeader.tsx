import React from 'react';
import styled from 'styled-components';
import TitleSection from './titleSection/TitleSection';
import { Container } from './titleSection/style/TitleSectionStyle';
import SearchField from './searchComp/SearchField';

// Define a interface para as props do SubHeader
interface SubHeaderProps {
  size: string;
  text: string;
}

const ContainerHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SubHeader: React.FC<SubHeaderProps> = ({ size, text }) => {
  return (
    <ContainerHeader>
      <Container>
        <TitleSection sizeText={size} text={text} />
      </Container>
      <SearchField />
    </ContainerHeader>
  );
};

export default SubHeader;
