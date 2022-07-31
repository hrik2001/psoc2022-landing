import React, {useState, useEffect } from 'react';
import Link from "next/link";
import styles from "../styles/approvedmentee.module.scss";
import axios from "axios";

function ApprovedMentee() {


  const [project,setProject] = useState([]);

  const approved = async() => {
        try {
          const userToken = JSON.parse(localStorage.getItem("userToken"));
          console.log(userToken);
          const projectId = JSON.parse(localStorage.getItem("ApprovedId"));
          console.log(projectId);
          const config = {headers:{"Content-type": "application/json",Authorization: `Bearer ${userToken}`,},};
          const { data } = await axios.post("/api/mentor/project-mentees",{projectId},config);
          console.log(data);
          setProject(data.data.approvedMentees);



        } catch (error) {
          console.log(error);
        }
      }

      useEffect(() => {
        approved();
      },[]);

if(project){
  return(
      <div className={styles.container}>
       <div className={styles.introContainer}>
         <div className={styles.introtxt}>
         <p className={styles.dashboard}>
           <Link href={"/dashboard"} passHref>
            Dashboard
           </Link>
         </p>
           <h1 className={styles.project}>Approved Mentee</h1>
             <section className={styles.projectSection}>
               <section>
                 <div className={styles.projectCardContainer}>
                 <div className={styles.projectCard}>

                 {project.map((item) => {

                    return (
                      <p>{item.name}</p>

                    );
                  })
               }
                  </div>
                 </div>
               </section>
             </section>


          </div>
       </div>
      </div>

      );
}


}

export default ApprovedMentee;
