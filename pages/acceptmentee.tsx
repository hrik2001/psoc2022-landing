import React from "react";
import Head from "next/head";
import Navbar from "../components/Navbar";
import AcceptMentee from "../components/AcceptMentee";

function acceptmentee() {

  return (
    <div>
      <Head>
        <title>Accept Mentee</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Navbar />
      <AcceptMentee />
    </div>
  );
}

export default acceptmentee;
