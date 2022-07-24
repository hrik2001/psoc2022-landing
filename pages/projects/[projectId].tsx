import React from "react";
import Head from "next/head";
import Detail from "../../components/Detail";
import Navbar from "../../components/Navbar";
import { useRouter } from 'next/router';

function detail() {
   const router = useRouter();
    const projectId = router.query.projectId;
  return (
    <div>
      <Head>
        <title>Project Detail</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Navbar />
      <Detail id={projectId} />
    </div>
  );
}

export default detail;
