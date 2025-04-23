import { SWIGGY_IMAGE } from "../utils/constants";

const ResCard = (props) => {
    const { resData } = props;
    const { cloudinaryImageId, name, avgRating, sla, cuisines, areaName } =
      resData.info;
    return (
      <div className="res-card">
        <div>
          <img
            className="res-image"
            src={ SWIGGY_IMAGE + cloudinaryImageId
            }
            alt="food"
          />
        </div>
        <div className="res-text">
          <h3>{name}</h3>
          <h4>{avgRating} Stars</h4>
          <h4>{sla.slaString}</h4>
          <h4>{cuisines.join(", ")}</h4>
          <h4>{areaName}</h4>
        </div>
      </div>
    );
  };

  export default ResCard;