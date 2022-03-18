import React from "react";
import Link from "next/link";
import style from "./Link.module.css";
export const Anchor = ({
  children,
  className,
  target,
  onClick,
  refs,
  rel,
  ...props
}) => {
  return (
    <Link {...props}>
      <a
        className={style[className]}
        target={target}
        rel={rel}
        onClick={onClick}
        ref={refs}
      >
        {children}
      </a>
    </Link>
  );
};

export default Anchor;
