import React from 'react';
import ReactDOM from 'react-dom';
import App from './buses/App';
import "./buses/index.css"
import { BrowserRouter  } from "react-router-dom";


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <App/>
    </BrowserRouter>
   
    </React.StrictMode>,
  document.getElementById('root')
);

