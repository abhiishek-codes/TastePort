import RestroCard from "./Restro_Card";
import useFetchRestro from "./useFetchRestro";

const Body = () => {
  const restroList = useFetchRestro();
  console.log(restroList);
  return (
    <div className="drop-shadow-lg w-11/12 m-auto">
      <div className="flex flex-wrap my-8 gap-6">
        {restroList?.map((items, index) => {
          return <RestroCard key={items.info.id} restrodetails={items.info} />;
        })}
      </div>
    </div>
  );
};

export default Body;
