import { fetchDataImg } from "../utils/Constants";

const Card = (prop) => {
  const {name, cloudinaryImageId, costForTwo, avgRating, totalRatingsString, id} = prop?.data;
  return (
    <div className="card" style={{ backgroundColor: "#f0f0f0" }}>
      <img className="res-logo" src={ fetchDataImg + cloudinaryImageId }/>
      <h3>{name}</h3>
      <div>{costForTwo}</div>
      <div>{avgRating}</div>
      <div>{totalRatingsString}</div>
    </div>
  )
}

export default Card;