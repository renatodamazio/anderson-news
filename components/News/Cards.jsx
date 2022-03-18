import React from "react";
import styles from "./Cards.module.css";
import Image from "../Image/Image";
import style from "./News.module.css";
import moment from "moment";

export const Cards = ({
  variant,
  title,
  url,
  urlToImage,
  author,
  publishedAt,
  source,
}) => {
  const formatDateTime = (dateTime) => {
    return moment(dateTime).format("MMMM dddd[,] YYYY");
  };
  return (
    <div className={styles.wrapper} variant={variant}>
      <div className={styles.highlight}>
        <h5 className={style.h5}>{source.name}</h5>
        <h3 className={style.h3}>{title}</h3>
        <span className={style.timestamp}>
          {author} • {formatDateTime(publishedAt)}
        </span>
      </div>
      <div>
        <figure>
          <Image src={urlToImage} width="260px" height="146px" alt="imagem" />
        </figure>
      </div>
    </div>
  );
};

export default Cards;
