
import './App.css';
import { Route, Routes } from 'react-router-dom'
import RouteList from './EmpListing';
import RouteAdd from './EmpDetail';
import RouteEdit from './EmpEdit';


function App() {
  return (
    <div className="App">
        <Routes>
          <Route path='/' element={<RouteList />}></Route>
          <Route path='/Route/new' element={<RouteAdd />}></Route>

          <Route path='/route/:empid' element={<RouteEdit />}></Route>
          <Route path='/employee/edit/:empid' element={<RouteList />}></Route>
        </Routes>
     
    </div>
  );

}

export default App;