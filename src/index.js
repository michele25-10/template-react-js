import React from 'react';
import ReactDOM from 'react-dom';

//function contente tutta quanta l'applicazione
import App from './App';

//traduzioni delle varie lingue
import './i18n.js'

//Server-Side Render per il SEO da react 18 non serve più
//import { SSRProvider } from 'react-bootstrap';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  /*<SSRProvider>*/
  <App />
  /*</SSRProvider>*/
);


