import React from "react";
import Head from "next/head";
import Navbar from "../components/Navbar";
import FinalizedProject from "../components/FinalizedProject";

function finalizedprojects() {

  return (
    <div>
      <Head>
        <title>Finalized Projects</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Navbar />
      <FinalizedProject />
    </div>
  );
}

export default finalizedprojects;
