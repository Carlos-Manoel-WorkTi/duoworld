import styled from 'styled-components';

export const Container = styled.div`
    width: auto;
    display: flex;
    background: transparent;
`;

export const Title = styled.h2<{ sizeText: string }>`
    position: relative; 
    color: #efefef;
    font-size: ${props => props.sizeText}px;
    font-family: "Righteous", sans-serif;
    font-weight: 400;
    font-style: normal;
    padding: 30px 55px;
    letter-spacing: 4px; 

    &::before {
        content: '';
        position: absolute;
        left: 30px;
        top: 50%; 
        width: 10px; 
        height: 50px;
        border-radius: 10%;
        background-color: #4136BD; 
        transform: translateY(-50%); 
    }

    @media (max-width:600px){
        font-size: 26px;
        padding: 30px 45px;
        &::before{
            height: 40px;
            left: 20px;
        }
    }
`;
