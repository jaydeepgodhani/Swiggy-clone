import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {

  const [loginValue, setLoginValue] = useState("Login");

  return(
    <div className="header">
      <h2 className="header-title">Swiggy</h2>
      <div className="navbar">
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
          <li>
            <Link to='/contact'>Contact</Link>
          </li>
        </ul>
        <button className="login-button" onClick={ () => {
          loginValue === "Login" ? setLoginValue("Logout") : setLoginValue("Login")
        }}>{loginValue}</button>
      </div>
    </div>
  )
}

export default Header;