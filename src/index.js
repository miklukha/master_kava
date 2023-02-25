import { Global, ThemeProvider } from '@emotion/react';
import 'modern-normalize';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { GlobalStyles, theme } from 'styles';
import { App } from 'components/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Global styles={GlobalStyles} />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
