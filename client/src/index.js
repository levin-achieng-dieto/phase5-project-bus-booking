import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App"
import { BrowserRouter  } from "react-router-dom";
import { LoggedInProvider } from './components/Auth/Context/LoginContext';


ReactDOM.render(
  <React.StrictMode>
    <LoggedInProvider>
    <BrowserRouter>
    
    <App/>
    </BrowserRouter>
    </LoggedInProvider>
    </React.StrictMode>,
  document.getElementById('root')
);

