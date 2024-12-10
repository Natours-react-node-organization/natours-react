import ItemCard from "../item-card";
import SeaImg from "../../img/tours/tour-2-cover.jpg";
import ForestImg from "../../img/tours/tour-1-cover.jpg";
import SnowImg from "../../img/tours/tour-3-cover.jpg";
import CityImg from "../../img/tours/tour-4-cover.jpg";

function TourCard() {
  const text = `Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`;
  const titles = [
    "The sea Explorer inside the ocean",
    "The forest hicker",
    "The snow adventurer",
    "The city wanderer",
  ];
  return (
    <>
      <ItemCard
        seaImg={SeaImg}
        ForestImg={ForestImg}
        SnowImg={SnowImg}
        CityImg={CityImg}
        text={text}
        title={titles}
      />
    </>
  );
}
export default TourCard;
