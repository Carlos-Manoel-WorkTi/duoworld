import React from 'react';
import ReactDOM from 'react-dom/client';
import Routes from './routes/routes';
import reportWebVitals from './reportWebVitals';
import { RouterProvider } from 'react-router-dom';
import { GlobalStyle } from './pages/style/HomeStyled';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
      <GlobalStyle/>
     
      <RouterProvider router={Routes}/>
  </React.StrictMode>
);

reportWebVitals();
