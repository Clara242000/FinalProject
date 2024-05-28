// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client'; // Importă createRoot din react-dom
import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div>
      <App/>
    </div>
  </React.StrictMode>
)

