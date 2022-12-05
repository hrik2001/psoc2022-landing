import React from "react";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Dashboard from "../components/Dashboard";

function dashboard() {

  return (
    <div>
      <Head>
        <title>Dashboard</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Navbar />
      <Dashboard />
    </div>
  );
}

export default dashboard;
