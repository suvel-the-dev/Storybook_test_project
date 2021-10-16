import React from "react";
import { Image, Caption } from "../index";
import './ImageThree.css'

const ImageOne = ({ image, altTxt, imageSubText }) => {
  return (
    <div className="image-three">
      <Image img={image} altTxt={altTxt} />
      <Caption>{imageSubText}</Caption>
    </div>
  );
};

export default ImageOne;
