import { restro_img } from "../../Const/Url";

const RestroCard = ({ restrodetails }) => {
  const { avgRatingString, cloudinaryImageId, cuisines, name, isOpen } =
    restrodetails;
  return (
    <div className="border-2 drop-shadow-md w-64 h-auto ">
      <div className="p-2 flex-col align-middle ">
        <img
          className="object-cover h-40 w-64 bg-no-repeat"
          src={restro_img + cloudinaryImageId}
          alt="Logo_restro"
        />
        <div className="pt-3">
          <h2>{name}</h2>
          <h3 className="text-ellipsis">{cuisines.join(",")}</h3>
          <h3>{avgRatingString != "--" ? avgRatingString : "New"}</h3>
          <h3>{isOpen ? "Open ✅" : "close ✖"}</h3>
        </div>
      </div>
    </div>
  );
};

export default RestroCard;
