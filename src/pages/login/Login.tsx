import React, { useState } from 'react';
import { Container, Form, Input, Button, Title } from './style/LoginStyle';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Lógica de autenticação
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <Container>
      <Title>Login</Title>
      <Form>
        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button onClick={handleLogin}>Login</Button>
      </Form>
    </Container>
  );
};

export default Login;
