import React from "react";
import "./index.css";
const Image = ({ img, altTxt }) => {
  return <img className="image" src={img} alt={altTxt} />;
};

export default Image;
