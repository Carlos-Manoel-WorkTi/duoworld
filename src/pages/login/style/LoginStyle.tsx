// StyledComponents.ts
import styled from 'styled-components';

export const Container = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #191a1a;
  overflow: hidden;
`
// Form container
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  background-color: #ffffff;
  padding: 30px;
  width: 450px;
  border-radius: 20px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`;

// Input placeholder styling
export const Input = styled.input`
  margin-left: 10px;
  border-radius: 10px;
  border: none;
  width: 85%;
  height: 100%;
  
  &:focus {
    outline: none;
  }
`;

// Input form container with icon
export const InputForm = styled.div`
  border: 1.5px solid #ecedec;
  border-radius: 10px;
  height: 50px;
  display: flex;
  align-items: center;
  padding-left: 10px;
  transition: 0.2s ease-in-out;

  &:focus-within {
    border: 1.5px solid #2d79f3;
  }
`;

// Label for input fields
export const Label = styled.label`
  color: #151717;
  font-weight: 600;
`;

// Flex containers
export const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  justify-content: space-between;
`;

// Button styling
export const ButtonSubmit = styled.button`
  margin: 20px 0 10px 0;
  background-color: #151717;
  border: none;
  color: white;
  font-size: 15px;
  font-weight: 500;
  border-radius: 10px;
  height: 50px;
  width: 100%;
  cursor: pointer;

  &:hover {
    background-color: #252727;
  }
`;

export const Button = styled.button`
  margin-top: 10px;
  width: 100%;
  height: 50px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  gap: 10px;
  border: 1px solid #ededef;
  background-color: white;
  cursor: pointer;
  transition: 0.2s ease-in-out;

  &:hover {
    border: 1px solid #2d79f3;
  }
`;

// Span styling
export const Span = styled.span`
  font-size: 14px;
  margin-left: 5px;
  color: #2d79f3;
  font-weight: 500;
  cursor: pointer;
`;

// Paragraph styling
export const Paragraph = styled.p`
  text-align: center;
  color: black;
  font-size: 14px;
  margin: 5px 0;
`;

// Icons for buttons

export const GoogleIcon = () => (
  <svg
    version="1.1"
    width="20"
    id="Layer_1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    x="0px"
    y="0px"
    viewBox="0 0 512 512"
    xmlSpace="preserve"
  >
    <path
      style={{ fill: '#FBBB00' }}
      d="M113.47,309.408L95.648,375.94l-65.139,1.378C11.042,341.211,0,299.9,0,256
        c0-42.451,10.324-82.483,28.624-117.732h0.014l57.992,10.632l25.404,57.644c-5.317,15.501-8.215,32.141-8.215,49.456
        C103.821,274.792,107.225,292.797,113.47,309.408z"
    />
    <path
      style={{ fill: '#518EF8' }}
      d="M507.527,208.176C510.467,223.662,512,239.655,512,256c0,18.328-1.927,36.206-5.598,53.451
        c-12.462,58.683-45.025,109.925-90.134,146.187l-0.014-0.014l-73.044-3.727l-10.338-64.535
        c29.932-17.554,53.324-45.025,65.646-77.911h-136.89V208.176h138.887L507.527,208.176L507.527,208.176z"
    />
    <path
      style={{ fill: '#28B446' }}
      d="M416.253,455.624l0.014,0.014C372.396,490.901,316.666,512,256,512
        c-97.491,0-182.252-54.491-225.491-134.681l82.961-67.91c21.619,57.698,77.278,98.771,142.53,98.771
        c28.047,0,54.323-7.582,76.87-20.818L416.253,455.624z"
    />
    <path
      style={{ fill: '#F14336' }}
      d="M419.404,58.936l-82.933,67.896c-23.335-14.586-50.919-23.012-80.471-23.012
        c-66.729,0-123.429,42.957-143.965,102.724l-83.397-68.276h-0.014C71.23,56.123,157.06,0,256,0
        C318.115,0,375.068,22.126,419.404,58.936z"
    />
  </svg>
);



export const FacebookIcon = () => (
  <svg
    version="1.1"
    width="20"
    id="Layer_1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    x="0px"
    y="0px"
    viewBox="0 0 320 320"
    xmlSpace="preserve"
  >
    <path
      style={{ fill: '#1877F2' }}
      d="M288,0H32C14.328,0,0,14.328,0,32v256c0,17.672,14.328,32,32,32h128v-112h-32v-48h32v-36.736c0-31.4,25.464-56.4,56.4-56.4c16.068,0,29.4,1.224,33.4,1.752v38.264h-23.028c-17.933,0-21.418,8.558-21.418,21.113v27.137h42.236l-6.134,48h-36.102v112h72c17.672,0,32-14.328,32-32V32C320,14.328,305.672,0,288,0z"
    />
  </svg>
);

