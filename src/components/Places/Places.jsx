import React from "react";
import PlaceCard from "./PlaceCard";
import Img1 from "../../assests/india.jpg";
import Img2 from "../../assests/china.jpg";
import Img3 from "../../assests/usa.jpg";
import Img4 from "../../assests/maldives2.jpg";
import Img5 from "../../assests/borabora.jpg";
import Img6 from "../../assests/keywest.jpg";
const PlacesData = [
  {
    img: Img1,
    title: "TajMahal",
    location: "India",
    description: "The Taj Mahal (/ˌtɑːdʒ məˈhɑːl, ˌtɑːʒ-/; lit. 'Crown of the Palace')[4][5][6] is an ivory-white marble mausoleum on the right bank of the river Yamuna in Agra, Uttar Pradesh, India. It was commissioned in 1631 by the fifth Mughal emperor, Shah Jahan (r. 1628–1658) to house the tomb of his beloved wife, Mumtaz Mahal; it also houses the tomb of Shah Jahan himself. The tomb is the centrepiece of a 17-hectare (42-acre) complex, which includes a mosque and a guest house, and is set in formal gardens bounded on three sides by a crenellated wall.",
    price: 6700,
    type: "Cultural Relax",
  },
  {
    img: Img2,
    title: "The Great Wall Of  China",
    location: "China",
    description:
      "The Great Wall of China is a series of fortifications that were built across the historical northern borders of ancient Chinese states and Imperial China123. It is one of the largest building-construction projects ever undertaken43. The wall runs for about 4,500 miles (7,300 km) from the Bo Hai (Gulf of Chihli) in the east to a point deep in Central Asia in the west53. It was built to protect China from raids by nomadic tribes from the Eurasian Steppe12.",
    type: "Cultural Relax",
  },
  {
    img: Img3,
    title: "Statue Of Liberty",
    location: "USA",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    price: 6200,
    type: "Cultural Relax",
  },
  {
    img: Img4,
    title: "Beach",
    location: "Maldives",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    price: 6700,
    type: "Cultural Relax",
  },
  {
    img: Img5,
    title: "Water Activity",
    location: "BoraBora",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    price: 6700,
    type: "Cultural Relax",
  },
  {
    img: Img6,
    title: "Safari",
    location: "Keywest",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    price: 6200,
    type: "Cultural Relax",
  },
];

const Places = ({ handleOrderPopup }) => {
  return (
    <>
      <div className="dark:bg-gray-900 dark:text-white bg-slate-100 pt-24 flex flex-col items-center justify-center">
        <section data-aos="fade-up" className="container ">
          <h1 className=" my-8 border-l-8 text-center border-primary/50 py-2 pl-2 text-3xl font-bold">
            Best Places to Visit
          </h1>
          <div className="grid grid-cols-1 gap-5 p-6 sm:grid-cols-2 md:grid-cols-3 ">
            {PlacesData.map((item, index) => (
              <PlaceCard
                handleOrderPopup={handleOrderPopup}
                key={index}
                {...item}
              />
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default Places;