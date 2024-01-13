import { useState, useEffect } from "react";
import { fetchDataImg, fetchDataURL, data } from "../utils/Constants";
import { Link, useParams } from "react-router-dom";
import Card, { CardWithPromoted } from "./Card";

const Body = () => {
  const [inputText, setInputText] = useState("");
  const [hotelData, setHotelData] = useState([]);
  const [dataLoaded, setDataLoaded] = useState(false);
  const [displayData, setDisplayData] = useState([]);
  const CardPromoted = CardWithPromoted(Card);

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
            className="border border-solid border-black rounded-md p-1"
            onChange={(e) => {
              setInputText(e.target.value);
            }}
            value={inputText}
          />
          <button
            onClick={() => {
              setDisplayData(
                hotelData.filter((item) => item.name.includes(inputText))
              );
            }}
            className="px-4 bg-blue-500 mx-4 rounded-md py-1 text-white hover:bg-blue-600 ease-in-out duration-300 border-2 border-black"
          >
            Search
          </button>
          <div className="flex mt-4 flex-wrap flex-auto">
            {displayData.map((item) => {
              return (
                <Link key={item.id} to={"/restaurant/" + item.id}>
                  {item.promoted == true ? (
                    <CardPromoted key={item.id} data={item} />
                  ) : (
                    <Card key={item.id} data={item} />
                  )}
                </Link>
              );
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
