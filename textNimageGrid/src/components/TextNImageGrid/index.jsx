import React from "react";
import TextContent from "./TextContent";
import ImageOne from "./ImageOne";
import ImageTwo from "./ImageTwo";
import ImageThree from "./ImageThree";

import "./index.css";

const TextNImageGrid = ({
  title,
  subtitle,
  imageOne,
  imageOneAlt,
  imageOneSubText,
  imageTwo,
  imageTwoAlt,
  imageTwoSubText,
  imageThree,
  imageThreeAlt,
  imageThreeSubText,
  // reversed,
}) => {
  return (
    <div className="txtnimg-grid">
      <TextContent title={title} subtitle={subtitle} />
      <ImageOne
        altTxt={imageOneAlt}
        image={imageOne}
        imageSubText={imageOneSubText}
      />
      <ImageTwo
        altTxt={imageTwoAlt}
        image={imageTwo}
        imageSubText={imageTwoSubText}
      />
      <ImageThree
        altTxt={imageThreeAlt}
        image={imageThree}
        imageSubText={imageThreeSubText}
      />
    </div>
  );
};

export default TextNImageGrid;
