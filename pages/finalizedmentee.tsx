import React from "react";
import Head from "next/head";
import Navbar from "../components/Navbar";
import FinalizedMentee from "../components/FinalizedMentee";

function finalizedmentee() {

  return (
    <div>
      <Head>
        <title>Finalized Mentee</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Navbar />
      <FinalizedMentee />
    </div>
  );
}

export default finalizedmentee;
