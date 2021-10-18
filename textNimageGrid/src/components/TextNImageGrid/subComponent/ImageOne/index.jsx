import React from "react";
import { Image, Caption } from "../../../index";
import "./index.css";

const ImageOne = ({ image, altTxt, imageSubText }) => {
  return (
    <div className="image-one">
      <Image img={image} altTxt={altTxt} />
      <Caption>{imageSubText}</Caption>
    </div>
  );
};

export default ImageOne;
