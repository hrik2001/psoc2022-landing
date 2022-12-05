import React from "react";
import Head from "next/head";
import Register from "../components/Register";
import Navbar from "../components/Navbar";

function register() {
  return (
    <div>
      <Head>
        <title>Register</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Navbar />
      <Register />
    </div>
  );
}

export default register;
