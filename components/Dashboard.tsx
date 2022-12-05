import React, {useState, useEffect } from 'react';
import Link from "next/link";
import styles from "../styles/dashboard.module.scss";
import axios from "axios";
import AcceptMentee from "./AcceptMentee";



function Dashboard() {

  const [project,setProject] = useState([]);
  const [allProjects,setAllProjects] = useState([]);
  const [role,setRole] = useState();



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

    const findRole = async() => {
      try {
        const userToken = JSON.parse(localStorage.getItem("userToken"));
        console.log(userToken);
        const config = {headers:{"Content-type": "application/json",Authorization: `Bearer ${userToken}`,},};
        const { data } = await axios.get("/api/user/me",config);
        setRole(data.data.role);
      } catch (error) {
        console.log(error);

      }
    }

    const findAllProjects = async() => {
      try {
        const userToken = JSON.parse(localStorage.getItem("userToken"));
        console.log(userToken);
        const config = {headers:{"Content-type": "application/json",Authorization: `Bearer ${userToken}`,},};
        const { data } = await axios.get("/api/projects",config);
        console.log(data);
        setAllProjects(data.data);
      } catch (error) {
        console.log(error);
      }
    }
    useEffect(() => {
      findRole();
    },[]);

    useEffect(() => {
      findAllProjects();
    },[]);

    useEffect(() => {
      findProjects();
    },[]);




if(role === "MENTOR"){
  return(

    <div className={styles.container}>
     <div className={styles.introContainer}>
       <div className={styles.introtxt}>
       <p className={styles.applied}>
         <Link href={"/menteedashboard"} passHref>
          Approved or Finalized  Mentee
         </Link>
       </p>
         <h1>Register Your Project for Mentee</h1>
        <p className={styles.link}>
          <Link href={"/createProject"} passHref>
            Create Project
          </Link>
          </p>
          <h1 className={styles.project}>All Projects</h1>

          <section className={styles.projectSection}>
            <section>
              <div className={styles.projectCardContainer}>



              {project.map((item) => {

                 return (
                   <Link  href={"/acceptmentee"} passHref>
                   <div onClick={() => {
                     localStorage.setItem("MentorProjectId",JSON.stringify(item.id))
                   }} key={item.id} className={styles.projectCard}>
                   <div className={styles.projectCardImageContainer}>
                     <img src={item.logo} alt="work card image" />
                   </div>

                     <h4>{item.name}</h4>

                     <p>{item.description}</p>
                   </div>
                     </Link>
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

if(role === "MENTEE"){
  return(
    <div className={styles.container}>
     <div className={styles.introContainerMentee}>
       <div className={styles.introtxt}>
         <h1>All Projects</h1>
         <p className={styles.applied}>
           <Link href={"/appliedprojects"} passHref>
            Applied  Projects
           </Link>
         </p>
         <p className={styles.applied}>
           <Link href={"/acceptedprojects"} passHref>
             Accepted Projects
           </Link>
         </p>
         <p className={styles.applied}>
           <Link href={"/finalizedprojects"} passHref>
             Finalized Project
           </Link>
         </p>
         <section className={styles.projectSection}>
           <section>
             <div className={styles.projectCardContainer}>



             {allProjects.map((item) => {


                return (
                  <div onClick={() => {
                    localStorage.setItem("projectId",JSON.stringify(item.id))
                  }} key={item.id} className={styles.projectCard}>
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

                    <p className={styles.link}>
                      <Link href={"/applymentee"} passHref>
                        Apply
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



}

export default Dashboard;
