import React from "react";
import Head from "next/head";
import Navbar from "../../components/Navbar";
import Projects from "../../components/Projects";

function projects() {
  return (
    <div>
      <Head>
        <title>Projects</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Navbar />
      <Projects />
    </div>
  );
}

export default projects;
