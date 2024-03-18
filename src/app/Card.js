import { fetchDataImg } from "../utils/Constants";

const Card = ({data}) => {
  const {name, cloudinaryImageId, costForTwo, avgRating, totalRatingsString, id} = data;
  return (
    <div className="m-3 p-3 border-solid border-grey border-2 rounded-md w-[200px] h-[280px] overflow-hidden hover:border-black hover:bg-gray-700 hover:shadow-md hover:text-white ease-in-out duration-300 hover:scale-105">
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

export const CardWithPromoted = (Card) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white m-3 px-2 rounded-r hover:z-99">
          Promoted
        </label>
        <Card {...props} />
      </div>
    );
  }
}

export default Card;