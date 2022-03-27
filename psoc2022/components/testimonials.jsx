import React from "react";
import Testimonials from "../Testimonials.js";
import styles from '../styles/testimonials.module.css'


function Testimonial() {
  return (
    <div>
        <h1 className={styles.title}>Testimonials</h1>
        <Testimonials />
    </div>
  );
}

export default Testimonial;