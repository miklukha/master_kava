import { Global } from '@emotion/react';
import 'modern-normalize';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { globalStyles } from 'styles/global';
import { App } from 'App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Global styles={globalStyles} />
    <App />
  </React.StrictMode>
);
