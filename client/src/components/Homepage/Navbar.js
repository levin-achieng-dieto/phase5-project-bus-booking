import "./navbar.css"
import Homepage from "./Homepage"

const Navbar = () => {
  return (
    <div>
      <Homepage/>
    <div className="navbar">
      <div className="navContainer">
        <span className="logo"></span>
        <div className="navItems">
          <button className="navButton">Register</button>
          <button className="navButton">Login</button>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Navbar