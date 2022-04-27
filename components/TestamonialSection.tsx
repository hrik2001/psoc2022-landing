import React from "react";
import Testamonials from "../data/Testamonial";
import style from "../styles/Testamonial.module.scss";
import Testamonial from "./Testamonial";
import Carousel from "react-material-ui-carousel";

const TestamonialSection = () => {
  return (
    <section className={style.TestamonialSection}>
      <div className={style.sectionTitle}>
        <h2>Testamonials</h2>
        <div className={style.underline}></div>
      </div>
      <div className={style.testamonialContainer}>
        <Carousel animation="slide">
          {Testamonials.map((item, index) => {
            return <Testamonial {...item} key={index} />;
          })}
        </Carousel>
      </div>
    </section>
  );
};

export default TestamonialSection;
