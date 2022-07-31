import React from "react";
import Head from "next/head";
import Navbar from "../components/Navbar";
import AcceptedProjects from "../components/AcceptedProjects";

function acceptedprojects() {

  return (
    <div>
      <Head>
        <title>Accepted Projects</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Navbar />
      <AcceptedProjects />
    </div>
  );
}

export default acceptedprojects;
