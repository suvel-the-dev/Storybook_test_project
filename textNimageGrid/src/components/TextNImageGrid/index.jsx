import React from "react";
import TextContent from "./TextContent";
import ImageOne from "./ImageOne";
import ImageTwo from "./ImageTwo";
import ImageThree from "./ImageThree";

import "./index.css";

const TextNImageGrid = () => {
  return (
    <div className="txtnimg-grid">
      <TextContent
        title={"Text and Image module 2"}
        subtitle={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum condimentum eros ex, quis cursus arcu tempor quis. Ut elementum pellentesque orci at rhoncus. Donec in pellentesque turpis. Suspendisse imperdiet viverra quam in fringilla. In ullamcorper maximus rhoncus. Proin vitae maximus neque. Vivamus imperdiet sem vitae ullamcorper suscipit. `}
      />
      <ImageOne
        altTxt={"image of laptop"}
        image={
          "https://images.unsplash.com/photo-1503602642458-232111445657?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80"
        }
        imageSubText={"Image taken from a free resource"}
      />
      <ImageTwo
        altTxt={"image of laptop"}
        image={
          "https://images.unsplash.com/photo-1605098801888-def2d3c129e4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=627&q=80"
        }
        imageSubText={"Image taken from a free resource"}
      />
      <ImageThree
        altTxt={"image of laptop"}
        image={
          "https://images.unsplash.com/photo-1519947486511-46149fa0a254?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80"
        }
        imageSubText={"Image taken from a free resource"}
      />
    </div>
  );
};

export default TextNImageGrid;
