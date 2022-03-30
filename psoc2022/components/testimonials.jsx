import React from "react";
// import Testimonials from "../Testimonials.js";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import styles from "../styles/testimonials.module.css";

function Testimonial() {
    return (
        <div>
            <h1 className={styles.title}>Testimonials</h1>
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
                            Some review about this was an amazing event and
                            changed that person’s life in very eloquent words.
                        </p>
                        <h3 className={styles.name}>Random Name</h3>
                        <h6 className={styles.post}>Designer</h6>
                    </div>
                </div>
                <div className={styles.container}>
                    <div className={styles.card}>
                        <h1 className={styles.comma}>"</h1>
                        <p className={styles.comment}>
                            Some review about this was an amazing event and
                            changed that person’s life in very eloquent words.
                        </p>
                        <h3 className={styles.name}>Random Name</h3>
                        <h6 className={styles.post}>Designer</h6>
                    </div>
                </div>
                <div className={styles.container}>
                    <div className={styles.card}>
                        <h1 className={styles.comma}>"</h1>
                        <p className={styles.comment}>
                            Some review about this was an amazing event and
                            changed that person’s life in very eloquent words.
                        </p>
                        <h3 className={styles.name}>Random Name</h3>
                        <h6 className={styles.post}>Designer</h6>
                    </div>
                </div>
            </Carousel>
        </div>
    );
}

export default Testimonial;
