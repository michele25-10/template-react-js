import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { SSRProvider } from 'react-bootstrap';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <SSRProvider>
    <App />
  </SSRProvider>
);


