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

// import Homepage from "./components/Homepage/Homepage";
// import AdminLogin from './components/Auth/AdminLogin';
// import AdminSignUp from "./components/Auth/AdminSignUp"


{/* <Route exact path="/" element={ <Homepage />}/>
<Route exact path ='/signin' element ={<AdminSignUp/>}></Route> 
<Route exact path ='/login' element ={<AdminLogin/>}></Route>  */}
