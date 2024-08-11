import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f0f0f0;
`;

export const Title = styled.h1`
  margin-bottom: 20px;
  font-size: 2rem;
  color: #333;
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
`;

export const Input = styled.input`
  margin-bottom: 10px;
  padding: 10px;
  font-size: 1rem;
  border: 1px solid #ddd;
  border-radius: 4px;

  &:focus {
    border-color: #0056b3;
    outline: none;
  }
`;

export const Button = styled.button`
  padding: 10px;
  font-size: 1rem;
  color: #fff;
  background-color: #0056b3;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #004494;
  }
`;
