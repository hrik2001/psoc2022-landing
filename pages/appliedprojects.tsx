import React from "react";
import Head from "next/head";
import Navbar from "../components/Navbar";
import AppliedProjects from "../components/AppliedProjects";

function appliedprojects() {

  return (
    <div>
      <Head>
        <title>Applied Projects</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Navbar />
      <AppliedProjects />
    </div>
  );
}

export default appliedprojects;
