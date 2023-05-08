import { Global } from '@emotion/react';
import { BrowserRouter } from 'react-router-dom';
import 'modern-normalize';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { globalStyles } from 'styles/globalStyles';
import { App } from 'App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter basename="/master_kava/">
      <Global styles={globalStyles} />
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
