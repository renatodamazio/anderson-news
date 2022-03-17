import React from "react";
import Link from "next/link";
import style from "./Link.module.css";
export const Anchor = ({ children, className, ...props }) => {
  return (
    <Link {...props}>
      <a className={style[className]}>{children}</a>
    </Link>
  );
};

export default Anchor;
