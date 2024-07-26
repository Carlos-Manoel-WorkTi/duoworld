import React from 'react';
import styled from 'styled-components';

// Estilos para o container de erro 404
const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #0b0b0b;
  color: #721c24;
  text-align: center;
  font-family: Arial, sans-serif;
`;

// Estilos para o código de erro
const ErrorCode = styled.h1`
  font-size: 6rem;
  margin: 0;
  font-weight: bold;
`;

// Estilos para a mensagem de erro
const ErrorMessage = styled.p`
  font-size: 1.5rem;
  margin: 0;
  margin-top: 1rem;
  font-weight: 500;
`;

// Estilos para a descrição do erro
const ErrorDescription = styled.p`
  font-size: 1rem;
  margin: 0;
  margin-top: 0.5rem;
  color: #6c757d;
`;

// Estilos para o link de volta para a home
const HomeLink = styled.a`
  margin-top: 2rem;
  font-size: 1rem;
  color: #007bff;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const Error404: React.FC = () => {
  return (
    <NotFoundContainer>
      <ErrorCode>404</ErrorCode>
      <ErrorMessage>Oops! Page not found.</ErrorMessage>
      <ErrorDescription>It seems the page you're looking for doesn't exist or has been moved.</ErrorDescription>
      <HomeLink href="/">Go Back to Home</HomeLink>
    </NotFoundContainer>
  );
};

export default Error404;
