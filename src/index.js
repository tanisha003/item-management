import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ItemProvider } from './context/ItemContext';
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ItemProvider>
      <App />
    </ItemProvider>
  </React.StrictMode>
);