import React from "react";
import { useLocation } from "react-router-dom";


const PlaceDetails = (props) => {
  const location = useLocation();
  console.log(props, " props");
  console.log(location, " useLocation Hook");
  const { img,  title, description } = location.state;

  return (
    <div className=" pt-24 px-6 flex flex-col items-center justify-center ">
        <h1 className=" text-center">Place Description</h1>
      <div className=" w-[70%] h-[500px] overflow-hidden pt-6">
        <img
          src={img}
          alt={title}
          className="mx-auto h-[500px] w-full object-cover transition duration-700 hover:scale-110"
        />
      </div>
      <div className="container">
        <h1 className="text-2xl font-semibold">{title}</h1>
        <p className="leading-2">{description}</p>
      </div>
    </div>
  );
};

export default PlaceDetails;