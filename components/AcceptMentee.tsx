import React, {useState,useEffect} from "react";
import styles from "../styles/AcceptMentee.module.scss";
import axios from "axios";
import { useRouter } from 'next/router';
import Link from "next/link";


function AcceptMentee(props) {

  const router = useRouter();

  const [mentees,setMentees] = useState([]);
  const [menteeId,setMenteeId] = useState("");

  const Mentee = async() => {
    try {
      const userToken = JSON.parse(localStorage.getItem("userToken"));
      console.log(userToken);
      const projectId = JSON.parse(localStorage.getItem("MentorProjectId"));
      console.log(projectId);
      const config = {headers:{"Content-type": "application/json",Authorization: `Bearer ${userToken}`,},};
      const { data } = await axios.post("/api/mentor/project-applicants",{projectId},config);
      console.log(data);
      setMentees(data.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    Mentee();
  },[]);

  const submitHandler = async() => {
    try {
      const userToken = JSON.parse(localStorage.getItem("userToken"));
      console.log(userToken);
      const projectId = JSON.parse(localStorage.getItem("MenteeProjectId"));
      console.log(projectId);
      const config = {headers:{"Content-type": "application/json",Authorization: `Bearer ${userToken}`,},};
      const { data } = await axios.post("/api/mentor/accept-mentee",{projectId,menteeId},config);
      console.log(data);
      console.log(menteeId);
      router.push("/approvedmentee");
    } catch (error) {
      console.log(error);
    }
  }

  console.log(menteeId);

  useEffect(() => {
    if(menteeId){
      submitHandler();
    }

  },[menteeId])


  return(
    <div className={styles.container}>
    <div className={styles.introContainer}>
      <div className={styles.introtxt}>
      <p className={styles.dashboard}>
        <Link href={"/dashboard"} passHref>
         Dashboard
        </Link>
      </p>
         <h1 className={styles.project}>Select Mentee For Project</h1>
         <section className={styles.projectSection}>
           <section>
             <div className={styles.projectCardContainer}>
             {mentees.map((item) => {
                return (
                  <div key={item.menteeId} className={styles.projectCard}>
                    <h4>{item.name}</h4>
                    <p>{item.application}</p>
                    <p className={styles.link} onClick={() => {
                      setMenteeId(item.menteeId)
                    }}>Accept Mentee</p>
                  </div>
                );
              })
           }


             </div>
           </section>
         </section>
       </div>
    </div>
    </div>
  );

}

export default AcceptMentee;
