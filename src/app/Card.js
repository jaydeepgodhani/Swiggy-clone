import { fetchDataImg } from "../utils/Constants";

const Card = (prop) => {
  const {name, cloudinaryImageId, costForTwo, avgRating, totalRatingsString, id} = prop?.data;
  return (
    <div className="m-3 p-3 border-solid border-grey border-2 rounded-md w-[200px] h-[280px] overflow-hidden hover:border-black hover:bg-gray-200 hover:shadow-md">
      <img
        className="h-[150px] rounded-md min-w-full"
        src={fetchDataImg + cloudinaryImageId}
      />
      <h3 className="font-bold py-2">{name}</h3>
      <div>{costForTwo}</div>
      <div>
        {avgRating} star - {totalRatingsString}
      </div>
    </div>
  );
}

export default Card;