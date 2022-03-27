import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from "react-responsive-carousel"
import styles from './styles/testimonials.module.css'


export default class Testimonials extends Component {
  render() {
    return (
      <Carousel
        showArrows={false}
        wrap={true}
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        interval={5000}
      >
        <div className={styles.container}>
            <div className={styles.card}>
                <h1 className={styles.comma}>"</h1>
                <p className={styles.comment}>
                Some review about this was an amazing event and changed that person’s life in very eloquent words.
                </p>
                <h3 className={styles.name}>Random Name</h3>
                <h6 className={styles.post}>Designer</h6>
          </div>
        </div>

        <div>
            <div className={styles.card}>
                <h1 className={styles.comma}>"</h1>
                <p className={styles.comment}>
                Some review about this was an amazing event and changed that person’s life in very eloquent words.
                </p>
                <h3 className={styles.name}>Random Name</h3>
                <h6 className={styles.post}>Designer</h6>
          </div>
        </div>

        <div>
            <div className={styles.card}>
                <h1 className={styles.comma}>"</h1>
                <p className={styles.comment}>
                Some review about this was an amazing event and changed that person’s life in very eloquent words.
                </p>
                <h3 className={styles.name}>Random Name</h3>
                <h6 className={styles.post}>Designer</h6>
          </div>
        </div>
      </Carousel>
    );
  }
}