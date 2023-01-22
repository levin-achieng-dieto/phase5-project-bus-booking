import React from 'react';
import { createRoot } from 'react-dom/client'
// import ReactDOM from 'react-dom';
//import HomeApp from './Clients/HomeApp';
import "./Clients/index.css"
import { BrowserRouter  } from "react-router-dom";
import App from "./buses/App"
import "./buses/index.css"

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </React.StrictMode>,

);

