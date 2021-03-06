import React from "react";
import { ImageOne, ImageTwo, ImageThree, TextContent } from "./subComponent";
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
  reversed,
}) => {
  console.log({ reversed });

  const gridReversedClass = `grid-order-${reversed ? "reverse" : "normal"}`;
  return (
    <div className={`txtnimg-grid ${gridReversedClass}`}>
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
