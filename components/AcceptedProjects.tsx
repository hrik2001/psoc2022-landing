import React, {useState,useEffect} from "react";
import styles from "../styles/AcceptedProject.module.scss";
import axios from "axios";
import { useRouter } from 'next/router';
import Link from "next/link";


function AcceptedProjects() {

  const router = useRouter();
  const [project,setProject] = useState([]);
  const [projectId,setProjectId] = useState("");

  const acceptedProject = async() => {
    try {
      const userToken = JSON.parse(localStorage.getItem("userToken"));
      console.log(userToken);
      const config = {headers:{"Content-type": "application/json",Authorization: `Bearer ${userToken}`,},};
      const { data } = await axios.get("/api/mentee/accepted-projects",config);
      console.log(data);
      setProject(data.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    acceptedProject();
  },[]);

  const submitHandler = async() => {
    try {
      const userToken = JSON.parse(localStorage.getItem("userToken"));
      console.log(userToken);
      console.log(projectId);
      const config = {headers:{"Content-type": "application/json",Authorization: `Bearer ${userToken}`,},};
      const { data } = await axios.post("/api/mentee/finalize-project",{projectId},config);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if(projectId){
      submitHandler();
    }
  },[projectId]);


  return(
    <div className={styles.container}>
    <div className={styles.introContainer}>
      <div className={styles.introtxt}>
      <p className={styles.dashboard}>
        <Link href={"/dashboard"} passHref>
         Dashboard
        </Link>
      </p>
         <h1 className={styles.project}>Accepted Projects</h1>
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

                    <p onClick={() => {setProjectId(item.id)}} className={styles.link}>
                      <Link href={"/finalizedprojects"} passHref>
                       Finalize
                     </Link>

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

export default AcceptedProjects;
