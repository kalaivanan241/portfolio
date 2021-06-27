import React from "react";
import Image from "./../../assets/images/404NotFound.svg";
import "./NotFound.scss";

const NotFound = () => {
  return (
    <div className="not-found">
      <img src={Image} />
    </div>
  );
};

export default NotFound;