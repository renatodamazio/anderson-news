import React from "react";
import style from "./Header.module.css";
import Image from "../Image/Image";
import Link from "../Link/Link";

export const Header = () => {
  return (
    <header className={style.header}>
      <section className={style.section}>
        <div></div>
        
        <div className={style.logo}>
          <Image
            src="./images/logo.svg"
            width="188px"
            height="20.81px"
            alt="Anderson News Logo"
          />
        </div>

        <div className={style.topMenu}>
          <Link href="/">Newsletter</Link>

          <Link href="/">Sign In</Link>

          <Link href="/" className="primary">
            Subscribe
          </Link>
          <Link href="/">
            <Image
              src="./images/search.svg"
              alt="Search Icon"
              width="18px"
              height="18px"
            />
          </Link>
        </div>
      </section>
      <hr className={style.separation} />
      <section className={style.section}>
        <nav className={style.navigation}>
            <Link href="/">Top Headlines</Link>
            <Link href="/">Business</Link>
            <Link href="/">Entertainment</Link>
            <Link href="/">General</Link>
            <Link href="/">Health</Link>
            <Link href="/">Science</Link>
            <Link href="/">Sports</Link>
            <Link href="/">Technology</Link>
        </nav>
      </section>
    </header>
  );
};

export default Header;
