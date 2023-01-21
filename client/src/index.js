import React from 'react';
import ReactDOM from 'react-dom';
import HomeApp from './Clients/HomeApp';
import "./Clients/index.css"
import { BrowserRouter  } from "react-router-dom";


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <HomeApp/>
    </BrowserRouter>
   
    </React.StrictMode>,
  document.getElementById('root')
);

