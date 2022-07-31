import React from "react";
import Head from "next/head";
import Navbar from "../components/Navbar";
import CreateProject from "../components/CreateProject";

function createProject() {
  return (
    <div>
      <Head>
        <title>Create Project</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Navbar />
      <CreateProject />
    </div>
  );
}

export default createProject;
