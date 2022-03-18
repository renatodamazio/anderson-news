import React from "react";
import Image from "../Image/Image";
import style from "./News.module.css";
import moment from "moment";

export const Destak = ({
  title,
  description,
  url,
  urlToImage,
  publishedAt,
  source,
}) => {
  return (
    <div className={style.wrapper}>
      <span className={style.sectionTitle}>{title}</span>
      <figure className={style.figure}>
        <Image src={urlToImage} width="100%" height="311px" alt={title} />
      </figure>
      <h5 className={style.h5}>{source?.name}</h5>
      <h3 className={style.h3}>{title}</h3>
      <p className={style.paragraph}>{description}</p>
      <span className={style.timestamp}>
        {moment(publishedAt).startOf("hour").fromNow()}
      </span>
    </div>
  );
};

export default Destak;
