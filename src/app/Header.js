import { useState, lazy } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {

  const isOnline = useOnlineStatus();

  const [loginValue, setLoginValue] = useState("Login");

  return (
    <div className="header">
      <h2 className="header-title">Swiggy</h2>
      <div className="nav-heading">
        <ul className="navbar">
          <li>{isOnline == true ? 'Green' : 'Red'}</li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
        <button
          className="login-button"
          onClick={() => {
            loginValue === "Login"
              ? setLoginValue("Logout")
              : setLoginValue("Login");
          }}
        >
          {loginValue}
        </button>
      </div>
    </div>
  );
}

export default Header;