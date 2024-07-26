import React from 'react';
import { Container, Title} from './style/TitleSectionStyle';

interface TitleSectionProps {
    $text:string,
    sizetext: number;
}

const TitleSection: React.FC<TitleSectionProps> = ({ sizetext,$text }) => {
    return (
        <Container >
          <Title $sizetext={sizetext}>
            {$text}
          </Title>
        </Container>
    );
};

export default TitleSection;