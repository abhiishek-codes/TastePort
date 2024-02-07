import { header_Img_Url } from "../../Const/Url";

const Header = () => {
  return (
    <div className="bg-gray-100 drop-shadow-lg ">
      <div className="flex justify-between items-center w-11/12 m-auto py-2">
        <img src={header_Img_Url} alt="Logo" className="w-32" />

        <ul className="flex gap-4 font-semibold text-lg">
          <li>Contact US</li>
          <li>About US</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
