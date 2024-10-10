// Importamos React y ReactDOM, que son necesarios para renderizar nuestra aplicación en el DOM.
import React from 'react';
import ReactDOM from 'react-dom/client';

// Importamos el componente principal de la aplicación.
import App from './App';

// Buscamos el elemento raíz en el archivo index.html.
const rootElement = document.getElementById('root');

// Creamos el root con ReactDOM y le pasamos el elemento raíz.
const root = ReactDOM.createRoot(rootElement);

// Renderizamos la aplicación completa dentro del root.
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
