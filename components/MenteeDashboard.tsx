import React, {useState, useEffect } from 'react';
import Link from "next/link";
import styles from "../styles/menteedashboard.module.scss";
import axios from "axios";

function MenteeDashboard() {

  const [project,setProject] = useState([]);

  const findProjects = async() => {
        try {
          const userToken = JSON.parse(localStorage.getItem("userToken"));
          console.log(userToken);
          const config = {headers:{"Content-type": "application/json",Authorization: `Bearer ${userToken}`,},};
          const { data } = await axios.get("/api/projects/by-mentor",config);
          console.log(data);
          setProject(data.data);
          console.log(project);



        } catch (error) {
          console.log(error);
        }
      }

      useEffect(() => {
        findProjects();
      },[]);




return(

      <div className={styles.container}>
       <div className={styles.introContainer}>
         <div className={styles.introtxt}>
         <p className={styles.dashboard}>
           <Link href={"/dashboard"} passHref>
            Dashboard
           </Link>
         </p>
           <h1 className={styles.project}>Approved or Finalized Mentee</h1>

            <section className={styles.projectSection}>
              <section>
                <div className={styles.projectCardContainer}>

                {project.map((item) => {

                   return (
                     <div onClick={() => {
                       localStorage.setItem("ApprovedId",JSON.stringify(item.id))
                     }} key={item.id} className={styles.projectCard}>
                     <div className={styles.projectCardImageContainer}>
                       <img src={item.logo} alt="work card image" />
                     </div>

                       <h4>{item.name}</h4>

                       <p>{item.description}</p>
                       <p className={styles.link}>
                       <Link href={"/approvedmentee"} passHref>Approved Mentee</Link>
                       </p>
                        <p className={styles.link}>
                        <Link href={"/finalizedmentee"} passHref>Finalized Mentee</Link>
                        </p>
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


export default MenteeDashboard;
