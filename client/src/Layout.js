import './App.css'
import Sidebar from './components/SideBar/SideBar';
import MainDash from './MainDash/MainDash';




function Layout() {
  console.log("loyal")
  return (
   
    <div className="App">
      <div className="AppGlass">
      <Sidebar/>
      <MainDash/>
      </div>
      </div>
   
  
  );
}

export default Layout;
