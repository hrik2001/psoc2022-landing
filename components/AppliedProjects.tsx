import React, {useState,useEffect} from "react";
import styles from "../styles/AppliedProject.module.scss";
import axios from "axios";
import Link from "next/link";


function AppliedProjects() {

  const [project,setProject] = useState([]);

  const appliedProject = async() => {
    try {
      const userToken = JSON.parse(localStorage.getItem("userToken"));
      console.log(userToken);
      const config = {headers:{"Content-type": "application/json",Authorization: `Bearer ${userToken}`,},};
      const { data } = await axios.get("/api/mentee/applied-project",config);
      console.log(data);
      setProject(data.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    appliedProject();
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
         <h1 className={styles.project}>Applied Projects</h1>
         <section className={styles.projectSection}>
           <section>
             <div className={styles.projectCardContainer}>

             {project.map((item) => {
                return (
                  <div key={item.id} className={styles.projectCard}>
                  <div className={styles.projectCardImageContainer}>
                    <img src={item.logo} alt="work card image" />
                  </div>

                    <h4>{item.name}</h4>
                    <h4>{item.mentorName}</h4>
                    <p>
                      <Link href={item.url} passHref>
                        Github Repo
                      </Link>
                    </p>
                    <p>{item.description}</p>

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

export default AppliedProjects;
