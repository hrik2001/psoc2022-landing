import React from "react";
// import Testimonials from "../Testimonials.js";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import styles from "../styles/testimonials.module.css";

const reviews = [
    {
        content:
            "It was a great opportunity to learn many new things. It also gave me an insight into the open source community.",
        name: "Gaurika ",
        title: "Student",
    },
    {
        content:
            "Thus it was a journey where I learned a lot and spent time implementing it.",
        name: "Diksha Mahajan",
        title: "Student",
    },
    {
        content:
            "Through this project, I gained a lot of experience and came across new things.",
        name: "Aditi Shandyal",
        title: "Student",
    },
];

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
                {reviews.map((review) => (
                    <div className={styles.container}>
                        <div className={styles.card}>
                            <h1 className={styles.comma}>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    // width="24"
                                    // height="24"
                                    viewBox="0 0 24 24"
                                    className={styles.commasvg}
                                >
                                    <path d="M9.983 3v7.391c0 5.704-3.731 9.57-8.983 10.609l-.995-2.151c2.432-.917 3.995-3.638 3.995-5.849h-4v-10h9.983zm14.017 0v7.391c0 5.704-3.748 9.571-9 10.609l-.996-2.151c2.433-.917 3.996-3.638 3.996-5.849h-3.983v-10h9.983z" />
                                </svg>
                            </h1>
                            <p className={styles.comment}>{review.content}</p>
                            <h3 className={styles.name}>{review.name}</h3>
                            <h6 className={styles.post}>{review.title}</h6>
                        </div>
                    </div>
                ))}
            </Carousel>
        </div>
    );
}

export default Testimonial;
