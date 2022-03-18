import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

export const Image = (props) => {
  return (
    <LazyLoadImage
      effect="opacity"
      placeholderSrc="/images/default.jpeg"
      visibleByDefault={props.src === "/images/default.jpeg"}
      {...props}
    />
  );
};

export default Image;
