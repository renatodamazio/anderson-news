import React from "react";
import Link from "../components/Link/Link";
import styles from "../styles/404.module.css";
export const Error404 = () => {
  return (
    <div className={styles.wrapper}>
      <section>
        <h1 className={styles.h1}> 404 </h1>
        <h2 className={styles.h2}>PAGE NOT FOUND</h2>
        <Link href="/" className="secondary">
          Back to the Home page
        </Link>
      </section>
    </div>
  );
};

export default Error404;
