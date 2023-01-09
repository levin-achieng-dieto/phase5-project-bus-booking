import React, {useState}from "react";
import "./SideBar.css";
import Logo from "./logo.png";
import { Link } from "react-router-dom";
import { UilSignOutAlt, UilEstate, UilSubway, UilUsersAlt, UilMap, UilDialpad, } from "@iconscout/react-unicons";

const Sidebar = () => {
    const [selected, setSelected] = useState(0);

    const SidebarData = [
      {
        path: "/",
        icon: UilEstate,
        heading: "Dashboard",
      },
      {
       
        path: "/buses",
        icon: UilSubway,
        heading: "Buses",
      },
       {
      
        path: "/routes",
        icon: UilMap,
         heading: "Routes",
       },
      {
        
        path: "/seats",
        icon: UilDialpad,
        heading: "Seats"
      },
  
      {
       
        path: "/customers",
        icon: UilUsersAlt,
        heading: "Customers",
      },
      {
     
        path: "/bookings",
        icon: UilUsersAlt,
        heading: "Bookings",
      },
  ]
  const linkStyle = {
    margin: "1rem",
    textDecoration: "none",
    color: 'black'
  };

    return(
 <div className ="Sidebars">
  {/* {logo} */}
   <div className="logo">
        <img src={Logo} alt="logo" />
        <span>
          BUSES
        </span>
      </div>
     

       {/* {menu} */}

      <div className="menu">
        
      {SidebarData.map((item, index) => {
          return (
              <div 
              className={selected === index ? "menuItem active" : "menuItem"}
              key={index}
              onClick={() => setSelected(index)}
              >
              <Link to={item.path}  style={linkStyle}>
              <item.icon/>
              <span>{item.heading}</span>
              </Link>
            </div>
          );
       } )}

  

           {/* signoutIcon */}
           <div className="menuItem">
          <UilSignOutAlt />
        </div>
    

        </div>



 </div>

 
    )
};

export default Sidebar;