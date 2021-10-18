import React from "react";
import { Image, Caption } from "../../../index";
import "./index.css";

const ImageThree = ({ image, altTxt, imageSubText }) => {
  return (
    <div className="image-three">
      <Image img={image} altTxt={altTxt} />
      <Caption>{imageSubText}</Caption>
    </div>
  );
};

export default ImageThree;
