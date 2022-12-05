import React from "react";
import Head from "next/head";
import Navbar from "../components/Navbar";
import ApprovedMentee from "../components/ApprovedMentee";

function approvedmentee() {

  return (
    <div>
      <Head>
        <title>Approved Mentee</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Navbar />
      <ApprovedMentee />
    </div>
  );
}

export default approvedmentee;
