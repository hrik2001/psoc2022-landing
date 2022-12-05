import React from "react";
import Head from "next/head";
import Login from "../components/Login";
import Navbar from "../components/Navbar";

function login() {

  return (
    <div>
      <Head>
        <title>Login</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Navbar />
      <Login />
    </div>
  );
}

export default login;
