import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const CategoryItems = ({data}) => {

  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    // Dispatch an action
    dispatch(addItem(item));
  }

  return (
    <div>
      {data.map((item) => (
        <div
          key={item.key}
          className="p-2 m-2 border-gray-200 border-b-2 text-left"
        >
          <div className="py-2">
            <span>{item.name}</span>
            <span> - Rs. {item.price}</span>
          </div>
          <p className="text-xs">item description goes here yo</p>
          <button
            onClick={() => handleAddItem(item)}
            className="px-4 bg-blue-500 mx-4 rounded-md py-1 text-white hover:bg-blue-600 ease-in-out duration-300 border-2 border-black"
          >
            Add +
          </button>
        </div>
      ))}
    </div>
  );
}

export default CategoryItems;