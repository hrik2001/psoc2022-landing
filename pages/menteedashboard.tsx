import React from "react";
import Head from "next/head";
import Navbar from "../components/Navbar";
import MenteeDashboard from "../components/MenteeDashboard";

function menteedashboard() {

  return (
    <div>
      <Head>
        <title>Mentee Dashboard</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Navbar />
      <MenteeDashboard />
    </div>
  );
}

export default menteedashboard;
