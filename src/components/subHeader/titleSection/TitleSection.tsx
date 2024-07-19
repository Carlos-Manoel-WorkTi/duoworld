import React from 'react';
import { Container, Title} from './style/TitleSectionStyle';

interface TitleSectionProps {
    text:string,
    sizeText: string;
}

const TitleSection: React.FC<TitleSectionProps> = ({ sizeText,text }) => {
    return (
        <Container >
          <Title sizeText={sizeText}>
            {text}
          </Title>
        </Container>
    );
};

export default TitleSection;