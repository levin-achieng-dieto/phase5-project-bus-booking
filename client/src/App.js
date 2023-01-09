
import './App.css'
// import Sidebar from './components/Sidebar';
import Sidebar from './components/SideBar/SideBar';

import MainDash from './MainDash/MainDash';



function App() {
  return (
    <>
    <div className="App">
      <div className="AppGlass">
      <Sidebar/>
      <MainDash/>
      </div>
      </div>
   
      </>
  );
}

export default App;