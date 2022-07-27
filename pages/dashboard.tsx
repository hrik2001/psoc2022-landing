import React from "react";
import Head from "next/head";
import Navbar from "../components/Navbar";

function dashboard() {
  return (
    <div>
      <Head>
        <title>Register</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Navbar />
    </div>
  );
}

export default dashboard;
