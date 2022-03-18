import React from "react";
import styles from "./Cards.module.css";
import Image from "../Image/Image";
import style from "./News.module.css";

export const Cards = ({ variant }) => {
  return (
    <div className={styles.wrapper} variant={variant}>
      <div className={styles.highlight}>
        <h5 className={style.h5}>THE VERGE</h5>
        <h3 className={style.h3}>Industry wants to rein in new hack reporting mandates</h3>
        <span className={style.timestamp}>John Porter • September 26, 2021</span>
      </div>
      <div>
        <figure>
          <Image
            src="https://designshack.net/wp-content/uploads/placeholder-image.png"
            width="260px"
            height="146px"
            alt="imagem"
          />
        </figure>
      </div>
    </div>
  );
};

export default Cards;
