import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchRestaurantMenu } from "../utils/Constants";

const Restaurant = () => {
  const { resid } = useParams();
  const [resInfo, setResInfo] = useState(null);
  // const [items, setItems] = useState([]);

  useEffect(() => {
    fetchRestaurant();
  }, []);

  const fetchRestaurant = async () => {
    const data = await fetch(fetchRestaurantMenu + resid);
    const json = await data.json();
    setResInfo(json);

  };

  if(resInfo === null || resInfo == []) return <div></div>;

  const { name, costForTwo, cuisines } = resInfo;
  const items = resInfo["menu-items"];;

  return (
    <div className="p-8">
      <h1 className="font-bold py-4">
        {name} - {costForTwo}
      </h1>

      <ul>
        {items.map((item) => (
          <li key={item.key}>
            {item.name} - {" Rs."}
            {item.price / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Restaurant;
