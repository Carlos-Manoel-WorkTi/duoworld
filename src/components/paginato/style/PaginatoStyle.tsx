import styled from "styled-components";

export const ContainerPaginator = styled.section`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px; /* Reduzido o gap para melhor ajuste dos cards */
    padding: 30px;
    
    @media screen and (max-width: 600px){
      padding: 20px; /* Ajustado padding para dispositivos menores */
    }
`;

export const Card = styled.div`
    width: 43px;
    height: 43px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #ddd;
    border-radius: 4px;
    background-color: #f9f9f9;
    font-size: 16px;
    font-weight: bold;
    
    @media screen and (max-width: 600px){
      width: 33px;
      height: 33px;
      font-size: 14px;
    }
`;


