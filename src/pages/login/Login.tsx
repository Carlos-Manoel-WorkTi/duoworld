import React, { useState } from 'react';
import { Form, Input, InputForm, Label, FlexColumn, FlexRow, ButtonSubmit, Button, Span, Paragraph, Container, FacebookIcon } from './style/LoginStyle';
import { useAuth } from '../../auth/Auth';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";
import { NavigateHistory } from '../histories/script/Methods';
import { setCookie } from '../../storage/localStorage';
import { ResponseDTOS } from '../../auth/DTOs/ResponseDTOS';

const FormComponent: React.FC = () => {
  const clientId = "871723791946-n630vv83dk8moqu0gfh34qjqra5j5pau.apps.googleusercontent.com";
  const { navigateTo } = NavigateHistory();
  const { setAuthData } = useAuth();

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string | null>(null);

  const handleGoogleSuccess = async (response: any) => {
    if (response.credential) {
      const token = response.credential;
      try {
        const decodedToken: any = jwtDecode(token);
        const userData = {
          login: true,
          img: decodedToken.picture,
          name: decodedToken.name,
          email: decodedToken.email
        };


      
        setAuthData({ profile: { data: userData } });

        const registerResponse = await fetch('https://duoword.onrender.com/auth/register', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ ...userData, password: decodedToken.email })
        });

        const registerResult = await registerResponse.json();
        if (registerResult.status || registerResult.ok) {
          setCookie('userProfile', registerResult.jwt, 3, true);
          navigateTo("/");
        } else {
          await handleLogin(decodedToken.email, decodedToken.email);
        }
      } catch (error) {
        console.error('Error handling Google success:', error);
        setError('Failed to authenticate with Google');
      }
    } else {
      setError('Failed to authenticate with Google');
    }
  };

  const handleGoogleError = () => {
    setError('Error authenticating with Google');
  };

  const handleLogin = async (email: string, password: string) => {
    try {
      const response = await fetch("https://duoword.onrender.com/auth/login", {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });

      if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

      const result = await response.json();
      if (result.status) {
        localStorage.setItem('userProfile', result.jwt);
        fetchAuthData();
        navigateTo("/");
      } else {
        setError('Invalid login credentials');
      }
    } catch (error) {
      console.error('Error during login:', error);
      setError('Failed to login');
    }
  };

  const fetchAuthData = async () => {
    const authToken = localStorage.getItem("userProfile");
    try {
      const response = await fetch("https://duoword.onrender.com/user", {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${authToken}`
        }
      });
      const data: ResponseDTOS = await response.json();
      if (data.status) {
        setAuthData({
          profile: {
            data: {
              login: true,
              img: data.user[0].image,
              name: data.user[0].name,
              email: data.user[0].email
            }
          }
        });
      } else {
        throw new Error('Failed to fetch user data');
      }
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  const login = async (e: React.FormEvent) => {
    e.preventDefault();
    await handleLogin(email, password);
  };

  return (
    <Container>
      <Form onSubmit={login}>
        <FlexColumn>
          <Label>Email</Label>
        </FlexColumn>
        <InputForm>
          <svg height="20" viewBox="0 0 32 32" width="20" xmlns="http://www.w3.org/2000/svg">
            <g id="Layer_3" data-name="Layer 3">
              <path d="m30.853 13.87a15 15 0 0 0 -29.729 4.082 15.1 15.1 0 0 0 12.876 12.918 15.6 15.6 0 0 0 2.016.13 14.85 14.85 0 0 0 7.715-2.145 1 1 0 1 0 -1.031-1.711 13.007 13.007 0 1 1 5.458-6.529 2.149 2.149 0 0 1 -4.158-.759v-10.856a1 1 0 0 0 -2 0v1.726a8 8 0 1 0 .2 10.325 4.135 4.135 0 0 0 7.83.274 15.2 15.2 0 0 0 .823-7.455zm-14.853 8.13a6 6 0 1 1 6-6 6.006 6.006 0 0 1 -6 6z"></path>
            </g>
          </svg>
          <Input type="text" placeholder="Enter your Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </InputForm>

        <FlexColumn>
          <Label>Password</Label>
        </FlexColumn>
        <InputForm>
          <svg height="20" viewBox="-64 0 512 512" width="20" xmlns="http://www.w3.org/2000/svg">
            <path d="m336 512h-288c-26.453125 0-48-21.523438-48-48v-224c0-26.476562 21.546875-48 48-48h288c26.453125 0 48 21.523438 48 48v224c0 26.476562-21.546875 48-48 48zm-288-288c-8.8125 0-16 7.167969-16 16v224c0 8.832031 7.1875 16 16 16h288c8.8125 0 16-7.167969 16-16v-224c0-8.832031-7.1875-16-16-16zm0 0"></path>
            <path d="m304 224c-8.832031 0-16-7.167969-16-16v-80c0-52.929688-43.070312-96-96-96s-96 43.070312-96 96v80c0 8.832031-7.167969 16-16 16s-16-7.167969-16-16v-80c0-70.59375 57.40625-128 128-128s128 57.40625 128 128v80c0 8.832031-7.167969 16-16 16zm0 0"></path>
          </svg>
          <Input type="password" placeholder="Enter your Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </InputForm>

        {error && <Paragraph>{error}</Paragraph>}

        <FlexRow>
          <Span>Forgot your password?</Span>
          <Span>Sign up</Span>
        </FlexRow>

        <ButtonSubmit type="submit">Log in</ButtonSubmit>

        <FlexColumn>
          <Paragraph>Or</Paragraph>
          <Button>
            <GoogleOAuthProvider clientId={clientId}>
              <GoogleLogin
                onSuccess={handleGoogleSuccess}
                onError={handleGoogleError}
                text="signin_with"
              />
            </GoogleOAuthProvider>
          </Button>
          <Button>
            <FacebookIcon />
            <Span>Sign in with Facebook</Span>
          </Button>
        </FlexColumn>
      </Form>
    </Container>
  );
};

export default FormComponent;
