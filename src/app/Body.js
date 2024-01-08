import { useState, useEffect } from "react";
import { fetchDataImg, fetchDataURL, data } from "../utils/Constants";
import { Link, useParams } from "react-router-dom";
import Card from "./Card";

const Body = () => {
  const [inputText, setInputText] = useState("");
  const [hotelData, setHotelData] = useState([]);
  const [dataLoaded, setDataLoaded] = useState(false);
  const [displayData, setDisplayData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch(fetchDataURL);
    const something = await response.json();
    setHotelData(something);
    setDisplayData(something);
    setDataLoaded(true);
  };

  return (
    <div className="p-8">
      {dataLoaded === true ? (
        <div>
          <input
            type="text"
            className="border border-solid border-black"
            onChange={(e) => {
              setInputText(e.target.value);
            }}
            value={inputText}
          />
          <button
            onClick={() => {
              setDisplayData(
                hotelData.filter((item) => item.info.name.includes(inputText))
              );
            }}
            className="px-4 bg-blue-500 mx-4 rounded-md"
          >
            Search
          </button>
          <div className="flex mt-4 flex-wrap flex-auto">
            {displayData.map((item) => {
              return (
                <Link key={item.id} to={'/restaurant/'+item.id}>
                  <Card key={item.id} data={item} />
                </Link>
              )
            })}
          </div>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default Body;
