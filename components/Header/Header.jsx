import React from "react";
import style from "./Header.module.css";
import Image from "../Image/Image";
import Link from "../Link/Link";
import { useRouter } from "next/router";
import { useEffect, useState, useRef } from "react";

export const Header = () => {
  const router = useRouter();
  const [selectMenu, setSelectMenu] = useState("top-headlines");
  const [selectorPos, setSelectorPos] = useState(0);

  const refs = {
    topHeadlines: useRef(),
    business: useRef(),
    entertainment: useRef(),
    general: useRef(),
    health: useRef(),
    science: useRef(),
    sports: useRef(),
    technology: useRef(),
  };

  useEffect(() => {
    const { category } = router.query;

    if (category == undefined) category = "topHeadlines";

    setSelectMenu(category);

    const pos = refs[category]?.current;

    setSelectorPos({
      x: parseInt(pos?.offsetLeft),
      width: parseInt(pos?.offsetWidth),
    });
  }, [router]);

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
          <Link
            refs={refs.topHeadlines}
            href="/"
            className={selectMenu === "topHeadlines" ? "active-category" : ""}
          >
            Top Headlines
          </Link>

          <Link
            refs={refs.business}
            href="?category=business"
            className={selectMenu === "business" ? "active-category" : ""}
          >
            Business
          </Link>
          <Link
            refs={refs.entertainment}
            href="?category=entertainment"
            className={selectMenu === "entertainment" ? "active-category" : ""}
          >
            Entertainment
          </Link>
          <Link
            refs={refs.general}
            href="?category=general"
            className={selectMenu === "general" ? "active-category" : ""}
          >
            General
          </Link>
          <Link
            refs={refs.health}
            href="?category=health"
            className={selectMenu === "health" ? "active-category" : ""}
          >
            Health
          </Link>
          <Link
            refs={refs.science}
            href="?category=science"
            className={selectMenu === "science" ? "active-category" : ""}
          >
            Science
          </Link>
          <Link
            refs={refs.sports}
            href="?category=sports"
            className={selectMenu === "sports" ? "active-category" : ""}
          >
            Sports
          </Link>
          <Link
            refs={refs.technology}
            href="?category=technology"
            className={selectMenu === "technology" ? "active-category" : ""}
          >
            Technology
          </Link>

          <span
            style={{
              left: `${selectorPos.x}px`,
              width: `${selectorPos.width}px`,
            }}
            className={style.selector}
          ></span>
        </nav>
      </section>
    </header>
  );
};

export default Header;
