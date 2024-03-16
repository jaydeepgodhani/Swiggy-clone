import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchRestaurantMenu } from "../utils/Constants";
import Category from "./Category";

const Restaurant = () => {
  const { resid } = useParams();
  const [resInfo, setResInfo] = useState(null);
  const [showIndex, setShowIndex] = useState(0);
  // const [items, setItems] = useState([]);

  useEffect(() => {
    fetchRestaurant();
  }, []);

  const fetchRestaurant = async () => {
    const data = await fetch(fetchRestaurantMenu + resid);
    const json = await data.json();
    setResInfo(json);
  };

  if (resInfo === null || resInfo == []) return <div></div>;

  const { name, costForTwo, cuisines } = resInfo;
  const categories = resInfo["menu-items"];

  return (
    <div className="text-center p-8">
      <h1 className="font-bold py-4 text-xl">
        {name} - {costForTwo}
      </h1>

      {categories.map((category, key) => (
        <Category
          key={key}
          data={category}
          setShowIndex={() => {
            if(showIndex === key) setShowIndex(null);
            else setShowIndex(key);
          }}
          showItems={showIndex === key ? true : false}
        />
      ))}
    </div>
  );
};

export default Restaurant;
