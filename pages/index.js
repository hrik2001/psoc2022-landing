import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Intro from "../components/intro";
import How from "../components/how-it-works";
import { how_it_works } from "../how_it_works";
import Testimonial from "../components/testimonials";
import About from "../components/about";
import Projects from "../components/projects";
import Team from "../components/team";

export default function Home({ how }) {
    return (
        <div>
            <Head>
                <title>PSOC 2022</title>
                <meta name="description" content="PClub Summer Of Code" />
                <link
                    href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
                    rel="stylesheet"
                    integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
                    crossorigin="anonymous"
                ></link>
            </Head>
            <Intro />
            <About />
            <Testimonial />
            <How how={how} />
            <Projects />
            <Team />
        </div>
    );
}

export const getStaticProps = async () => {
    const how = how_it_works;
    return {
        props: { how },
    };
};
