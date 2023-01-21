import React from "react";

import { Routes, Route, BrowserRouter as Router } from "react-router-dom";

// import Homepage from "./components/Homepage/Homepage";
// import AdminLogin from './components/Auth/AdminLogin';
// import AdminSignUp from "./components/Auth/AdminSignUp"
import React, {useEffect, useState} from 'react'
import Layout from './Layout';
import AdminSignUp from "./components/Auth/AdminSignUp"
import Homepage from "./components/Homepage/Homepage"
import AdminLogin from "./components/Auth/AdminLogin"
import { Routes, Route, Link} from "react-router-dom"
import Buses from "./components/Bus/Buses"
import { Dashboard } from '@material-ui/icons';
import Users from './components/Customers/User';
import BusRoutes from './components/Routes/BusRoutes';
import MainDash from './MainDash/MainDash';
import Cards from "./components/Cards/Cards"
import ClientLogin from './components/Auth/ClientLogin';
import ClientSignUp from './components/Auth/ClientSignup';
import DriverLogin from './components/Auth/DriverLogin';
import DriverSignUp from './components/Auth/DriverSignUp';
import Booking from './components/Booking1/Booking.jsx';
import Payment from './components/Payment/Payment';
import Ticket from './components/Payment/Ticket';
import AddBus from './components/Bus/AddBus';
import AddUser from './components/Customers/AddUser';
import SeatSelection from './components/Seats/SeatSelection';
import Customers from "./components/Customers/Customers"



function App() {
  const [adminUser, setAdminUser] = useState(null)
  const [clientUser, setClientUser] =useState(null)
  const [driverUser, setDriverUser] = useState(null)

  useEffect(() => {
    fetch("/admin-me").then((r) => {
      if (r.ok){
        r.json.then((user) => setAdminUser(user))
      }
    })
  }, [])

  useEffect(() => {
    fetch("/client-me").then((r) => {
      if (r.ok){
        r.json.then((user) => setClientUser(user))
      }
    })
  }, [])

  useEffect(() => {
    fetch("/driver-me").then((r) => {
      if (r.ok){
        r.json.then((user) => setDriverUser(user))
      }
    })
  }, [])

  return (
    <Router>
      <Routes>
      
      </Routes>
    </Router>
  );
}

export default App

// export default App;
//     <>
//       <Routes>
//         <Route exact path="/" element={<Homepage adminUser={adminUser} setAdminUser={setAdminUser} />}></Route>
//       </Routes>
//       <main>
//         {adminUser ? (
//           <Routes>
//             <Route exact path="/" element={<Layout />} />
//           </Routes>
//         ) : (
//           <Routes>
//             <Route path="/adminsignup" element={<AdminSignUp setAdminUser={setAdminUser} />}></Route>
//             <Route path="/adminlogin" element={<AdminLogin setAdminUser={setAdminUser} />}></Route>
//             <Route path="/" element={<Layout />}></Route>
//           </Routes>
//         )}
//         {/* <Routes> */}
//           {/* <Route path="/" element ={<Homepage />}></Route>
//           <Route path="/adminlogin" element={<AdminLogin adminUser={adminUser}/>} />
//           <Route path="/adminsignup" element={<AdminSignUp setAdminUser={setAdminUser}/>} />
//           <Route path="/layout" element={<Layout />} ></Route>
//           <Route path= "/buses" element ={<Buses/>}></Route>
          
//           <Route path="/cards" element={<Cards />} ></Route>
//           <Route path="/users" element={<Users />} ></Route>
//           <Route path="/busssroutes" element={<BusRoutes />} ></Route>
//           <Route exact path="/bookings" element={<Booking />} ></Route>
//           <Route exact path="/payments" element={<Payment />} ></Route>
//           <Route exact path="/tickets" element={<Ticket />} > </Route>
//           <Route exact path="/addbus" element={<AddBus />} > </Route>
//           <Route exact path="/adduser" element={<AddUser />} > </Route>
//           <Route exact path="/Seatselection" element={<SeatSelection />} > </Route>
//           <Route path="/maindash" element={<MainDash />}></Route>
//           <Route path="/customers" element={<Customers />}></Route>

//           <Route path="/clientlogin" element={<ClientLogin clientUser={clientUser} />} />
//           <Route path="/clientsignup" element={<ClientSignUp setClientUser={setClientUser} />} />
//           <Route path="driverlogin" element={<DriverLogin driverUser={driverUser} />} />
//           <Route path="/driversignup" element={<DriverSignUp setDriverUser={setDriverUser} />} />
//         </Routes> */}
//       </main>
//     </>
//   );
// }
// export default App;
