import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import Homepage from './components/Homepage/Homepage'
// import RouteSelection from './components/RouteSelection/RouteSelection'
// import LogOrsign from './components/Login-Signup/LogOrsign'
// import Signup from './components/Login-Signup/Signup'
// import Profile from './components/Profile/Profile'
// import TicketPage from './components/TicketPage/TicketPage'
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={ <Homepage/> } />
          {/* <Route path="/login" render={props => <LogOrsign {...props} />} />
          <Route path="/register" render={props => <Signup {...props} />} />
          <Route path="/routes" exact render={props => <RouteSelection {...props} />} />
          <Route path="/profile" exact render={props => <Profile {...props} />} />
          <Route path="/getTicket" exact render={props => <TicketPage {...props} />} /> */}
        </Routes>
      </Router>
    </div>

  );
}

export default App;