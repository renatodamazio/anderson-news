import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';

export const Image = (props) => {
  return (
    <LazyLoadImage
      effect="bur"
      delayMethod="debounce"
      delayTime={1000}
      onError={() => {
        console.log('Unable to load the image')
    }}
      placeholderSrc="/images/default.jpeg"
      visibleByDefault={props.src === "/images/default.jpeg"}
      {...props}
    />
  );
};

export default Image;
