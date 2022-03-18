import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

export const Image = (props) => {
  return <LazyLoadImage effect="opacity" {...props} />;
};

export default Image;
