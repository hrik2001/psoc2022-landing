import React, {useState} from "react";
import styles from "../styles/ApplyMentee.module.scss";
import axios from "axios";
import { useRouter } from 'next/router';


function ApplyMentee() {

    const router = useRouter();

  const [application,setApplication] = useState();
  console.log(application);



const submitHandler = async() => {
  try {
    const userToken = JSON.parse(localStorage.getItem("userToken"));
    console.log(userToken);
    const projectId = JSON.parse(localStorage.getItem("projectId"));
    console.log(projectId);
    const config = {headers:{"Content-type": "application/json",Authorization: `Bearer ${userToken}`,},};
    const { data } = await axios.post("/api/mentee/apply-project",{application,projectId},config);
    console.log(data);
    router.push("/menteedashboard");
  } catch (error) {
    console.log(error);
  }
}


  return(
    <div className={styles.container}>
    <div className={styles.inputs}>
    {<div className={styles.form}>
      <textArea type="text" placeholder='Type your Proposal' value={application} onChange={(e) => setApplication(e.target.value)} required></textArea>
      <button onClick={submitHandler}>Submit</button>
      </div>}
    </div>
    </div>
  );
}

export default ApplyMentee;
