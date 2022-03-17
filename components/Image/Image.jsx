import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

export const Image = (props) => {
  return <LazyLoadImage {...props} />;
};

export default Image;