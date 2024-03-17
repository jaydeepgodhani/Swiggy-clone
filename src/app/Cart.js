import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {

  const items = useSelector((store)=> store.cart.items);
  const dispatch = useDispatch();
  const clickHandler = () => {
    dispatch(clearCart());
  }
  console.log(items);
  return (
    <div className="text-center m-4 p-4">
      <h1 className="text-2xl font-bold">Cart</h1>
      <button className="px-6 py-1 m-3 rounded-md bg-blue-500 mx-4 text-white hover:bg-blue-600 ease-in-out duration-300 border-2 border-black w-auto" onClick={clickHandler}>
        Clear Cart
      </button>
      {items.map((item) => (
        <div key={item.key}>
          {item.name} - {item.price}
        </div>
      ))}
      {items.length === 0 && <div className="m-3">Cart is empty ! Please add some items..</div>}
    </div>
  );
}

export default Cart;