import { useState, lazy, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {

  const isOnline = useOnlineStatus();

  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  const loggedInUser = useContext(UserContext);

  const [loginValue, setLoginValue] = useState("Login");

  return (
    <div className="flex justify-between sticky top-0 z-999 bg-gray-100">
      <h2 className="items-center m-8">Swiggy</h2>
      <div className="flex p-4 m-4 items-center">
        <ul className="flex">
          <li className="mx-4 px-2 py-1 text-center justify-center">
            {isOnline == true ? "🟢 Online" : "🔴 Offline"}
          </li>
          <li className="bg-white mx-6 px-6 py-1 rounded-md">
            <Link to="/">Home</Link>
          </li>
          <li className="bg-white mx-2 px-6 py-1 rounded-md">
            <Link to="/about">About Us</Link>
          </li>
          <li className="bg-white mx-2 px-6 py-1 rounded-md">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="bg-white mx-2 px-6 py-1 rounded-md font-bold">
            <Link to="/cart">Cart ({cartItems.length})</Link>
          </li>
        </ul>
        <button
          className="px-6 py-1 rounded-md bg-blue-500 mx-4 text-white hover:bg-blue-600 ease-in-out duration-300 border-2 border-black w-[120px]"
          onClick={() => {
            loginValue === "Login"
              ? setLoginValue("Logout")
              : setLoginValue("Login");
          }}
        >
          {loginValue}
        </button>
        {loggedInUser.loggedInUser}
      </div>
    </div>
  );
}

export default Header;