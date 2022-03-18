import React from "react";
import style from "./Header.module.css";
import Image from "../Image/Image";
import Link from "../Link/Link";

export const Header = () => {
  return (
    <header className={style.header}>
      <section className={style.section}>
        <div>
          <div className={style.mobileMenu}>
            <span></span>
          </div>
        </div>

        <div className={style.logo}>
          <Image
            src="./images/logo.svg"
            width="188px"
            height="20.81px"
            alt="Anderson News Logo"
          />
        </div>

        <div className={style.topMenu}>
          <div className={style.topMenuItems}>
            <Link href="/">Newsletter</Link>

            <Link href="/">Sign In</Link>

            <Link href="/" className="primary">
              Subscribe
            </Link>
          </div>
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
          <Link href="?category=business">Business</Link>
          <Link href="?category=entertainment">Entertainment</Link>
          <Link href="?category=general">General</Link>
          <Link href="?category=health">Health</Link>
          <Link href="?category=science">Science</Link>
          <Link href="?category=sports">Sports</Link>
          <Link href="?category=technology">Technology</Link>
        </nav>
      </section>
    </header>
  );
};

export default Header;
