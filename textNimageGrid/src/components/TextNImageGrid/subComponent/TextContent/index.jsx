import React from "react";
import { Title, Subtitle } from "../../../index";
import "./index.css";

const TextContent = ({ title, subtitle }) => {
  return (
    <div className="txt-container">
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
    </div>
  );
};

export default TextContent;
