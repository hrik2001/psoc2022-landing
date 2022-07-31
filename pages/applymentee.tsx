import React from "react";
import Head from "next/head";
import Navbar from "../components/Navbar";
import ApplyMentee from "../components/ApplyMentee";

function applymentee() {
  return (
    <div>
      <Head>
        <title>Apply Mentee</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Navbar />
      <ApplyMentee />
    </div>
  );
}

export default applymentee;
