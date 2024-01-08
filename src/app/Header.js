import { useState, lazy } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {

  const isOnline = useOnlineStatus();

  const [loginValue, setLoginValue] = useState("Login");

  return (
    <div className="flex justify-between sticky top-0 z-999 bg-gray-100">
      <h2 className="items-center m-8">Swiggy</h2>
      <div className="flex p-4 m-4 items-center">
        <ul className="flex">
          <li className="px-4">{isOnline == true ? "Green" : "Red"}</li>
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About</Link>
          </li>
          <li className="px-4">
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