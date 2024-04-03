import React from "react";
import { useLocation } from "react-router-dom";
import Blog from "../Blog/Blog"

const BlogDetails = (props) => {
  const location = useLocation();
  console.log(props, " props");
  console.log(location, " useLocation Hook");
  const { image, date, title, description, author } = location.state;

  return (
    <div className=" pt-24 px-6">
      <div className="h-[500px] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="mx-auto h-[500px] w-full object-cover transition duration-700 hover:scale-110"
        />
      </div>
      <div className="container ">
        <p className="text-slate-600 text-sm py-3">
          {" "}
          written by {author} on {date}
        </p>
        <h1 className="text-2xl font-semibold">{title}</h1>
        <p className="leading-2">{description}</p>
      </div>

     
      <Blog />
    </div>
  );
};

export default BlogDetails;