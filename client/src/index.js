import React from 'react';
import ReactDOM from 'react-dom';
import HomeApp from './Clients/HomeApp';
import "./Clients/index.css"
// import App from "./buses/App";
// import "./buses/index.css"

import { BrowserRouter  } from "react-router-dom";


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <HomeApp/>
    {/* <App/> */}
    </BrowserRouter>
   
    </React.StrictMode>,
  document.getElementById('root')
);

