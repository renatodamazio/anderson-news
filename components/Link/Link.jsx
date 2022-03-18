import React from "react";
import Link from "next/link";
import style from "./Link.module.css";
export const Anchor = ({ children, className, onClick, refs, ...props }) => {
  return (
    <Link {...props}>
      <a className={style[className]} onClick={onClick} ref={refs}>
        {children}
      </a>
    </Link>
  );
};

export default Anchor;
