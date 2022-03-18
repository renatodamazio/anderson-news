import React from "react";
import style from "./Destak.module.css";
import Image from "../Image/Image";
import newsStyle from "./News.module.css";

export const Destak = () => {
  return (
    <div>
      <span className={style.sectionTitle}>Breaking News</span>
      <figure className={style.figure}>
        <Image
          src="https://www.madrecor.com.br/wp-content/uploads/2016/10/orionthemes-placeholder-image.jpg"
          width="100%"
          height="311px"
          alt="Image Destak"
        />
      </figure>
      <h5 className={style.h5}>BBC News</h5>
      <h3 className={style.h3}>
        Obama: Haitian migrants' plight is 'heartbreaking,' but Biden knows
        system is broken
      </h3>
      <p className={newsStyle.paragraph}>
        Some Democrats have criticized the Biden administration's handing of the
        crisis.
      </p>
      <span className={style.timestamp}>12 minutes ago</span>
    </div>
  );
};

export default Destak;
