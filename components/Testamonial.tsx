import React from "react";
import styles from "../styles/Testamonial.module.scss";

const Testamonial = ({ content, name, title }: TestamonialProps) => {
  return (
    <div className={styles.testamonialCard}>
      {/* <h2 className={styles.testmonialQoute}>&#8220;</h2> */}
      <div className={styles.testamonialQouteImg}>
        <img src="/img/qoute.svg" alt="" />
      </div>

      <h2>{content}</h2>

      <h4>{name}</h4>
      <h4>{title}</h4>
    </div>
  );
};

export default Testamonial;
