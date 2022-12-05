import React, {useState,useEffect} from "react";
import styles from "../styles/FinalizedProject.module.scss";
import axios from "axios";
import Link from "next/link";
import { useRouter } from 'next/router';


function FinalizedProject() {

    const [project,setProject] = useState([]);
      const router = useRouter();


    const findProjects = async() => {
          try {
            const userToken = JSON.parse(localStorage.getItem("userToken"));
            console.log(userToken);
            const config = {headers:{"Content-type": "application/json",Authorization: `Bearer ${userToken}`,},};
            const { data } = await axios.get("/api/mentee/finalized-project",config);
            console.log(data);
            setProject(data.data);
          } catch (error) {
            console.log(error);
          }
        }

        useEffect(() => {
          findProjects();
          setProject("");
        },[]);

        console.log(project);

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
                 <h1 className={styles.project}>Finalized Project</h1>

                 <section className={styles.projectSection}>
                   <section>
                     <div className={styles.projectCardContainer}>


                    {
                        <div key={project.id} className={styles.projectCard}>
                          <div className={styles.projectCardImageContainer}>
                            <img src={project.logo} alt="work card image" />
                          </div>

                            <h4>{project.name}</h4>
                            <h4>{project.mentorName}</h4>

                            <p>{project.description}</p>

                            <p onClick={() => {
                              const url = project.url;
                              router.push(url)}}>
                                Github Repo
                            </p>

                        </div>
                      }

                     </div>
                   </section>
                 </section>
               </div>
            </div>

            </div>
          );
        }


}

export default FinalizedProject;
