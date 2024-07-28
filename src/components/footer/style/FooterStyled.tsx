import styled from "styled-components";

export const ContainerFooter = styled.footer`
  width: 100%;
  background:linear-gradient(to bottom, rgb(13 13 14), rgb(17, 4, 45), rgb(7, 2, 16));
  color: #ffffff;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  border-top: 1px solid #242424;

  @media screen and (max-width: 600px){
    padding: 15px;
  }
`;

export const FooterContent = styled.div`
  max-width: 1200px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
`;

export const FooterLinks = styled.div`
  display: flex;
  gap: 20px;
  
  a {
    color: #dedfdf;
    text-decoration: none;
    font-weight: bold;
    
    &:hover {
      text-decoration: underline;
    }
  }
`;

export const FooterText = styled.p`
  margin: 0;
  font-size: 14px;
  color: #bbbbbb;
`;

export const FooterLogo = styled.img`
  width: 100px;
  height: auto;
  margin-bottom: 10px;
`;
