import { useEffect, useState } from "react";
import { swiggy_Url } from "../../Const/Url";

const useFetchRestro = () => {
  const [restro, setrestro] = useState();

  async function fetchrestro() {
    const data = await fetch(swiggy_Url);
    const json = await data.json();
    const list =
      json.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    setrestro(list);
  }

  useEffect(() => {
    fetchrestro();
  }, []);

  return restro;
};

export default useFetchRestro;
