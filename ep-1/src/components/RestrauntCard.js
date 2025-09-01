import { IMG_CDN_URL } from "../config";

const RestrauntCard = ({
  cloudinaryImageId,
  imageUrl,
  name,
  cuisines,
  areaName: area,
  lastMileTravelString,
  costForTwo,
  avgRating,
}) => {
  // Prefer direct image URL if available, otherwise fall back to Cloudinary
  const imgSrc = imageUrl ? imageUrl : IMG_CDN_URL + cloudinaryImageId;

  return (
    <div className="card">
      <img src={imgSrc} alt={name} />
      <h2>{name}</h2>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{area}</h4>
      <span>
        <h4>
          <i className="fa-solid fa-star"></i> {avgRating}
        </h4>
        <h4>{lastMileTravelString}</h4>
        <h4>{costForTwo}</h4>
      </span>
    </div>
  );
};

export default RestrauntCard;