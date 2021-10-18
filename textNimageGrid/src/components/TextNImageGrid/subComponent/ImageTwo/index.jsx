import React from "react";
import { Image, Caption } from "../../../index";
import "./index.css";

const ImageTwo = ({ image, altTxt, imageSubText }) => {
  return (
    <div className="image-two">
      <Image img={image} altTxt={altTxt} />
      <Caption>{imageSubText}</Caption>
    </div>
  );
};

export default ImageTwo;
