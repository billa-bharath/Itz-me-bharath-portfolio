import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import "./navstyle.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div>
     
      <App />
    </div>
  </React.StrictMode>
);

reportWebVitals();
