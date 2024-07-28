import styled from "styled-components";

export const ContainerFooterMethods = styled.section`
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 8%;
    align-items: center;
    border-top: 1px solid white;
    margin: 40px 0 20px 0;
    padding-top: 10px;

    button{
        width: 31px;
        height: 34px;
    }
`
export const BackButton = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  padding: 10px;
  transition: background-color 0.3s ease;
  border-radius: 10px;

  
  & > div {
      width: 30px; // Largura dos traços
      height: 4px; // Altura dos traços
      background-color: #333; // Cor dos traços
      margin: 4px 0; // Espaçamento entre os traços
      transition: background-color 0.3s ease;
    }
    &:hover {
        background-color: #6103b4; 

        div{
            background-color: #fdfdfd;
        }
    }
`;
