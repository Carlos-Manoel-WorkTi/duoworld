import React from 'react';
import ReactDOM from 'react-dom/client';
import Routes from './routes/routes';
import reportWebVitals from './reportWebVitals';
import { RouterProvider } from 'react-router-dom';
import { GlobalStyle } from './pages/style/HomeStyled';
import { AuthProvider } from './auth/Auth';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
      <AuthProvider>
      <GlobalStyle/>

      <RouterProvider router={Routes}/>
      </AuthProvider>
  </React.StrictMode>
);

reportWebVitals();
