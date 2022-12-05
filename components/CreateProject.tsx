import React, {useState} from "react";
import Link from "next/link";
import styles from "../styles/createProject.module.scss";
import { useRouter } from 'next/router';
import axios from "axios";

function CreateProject() {

  const [name, setName] = useState();
  const [url, setUrl] = useState();
  const [description, setDescription] = useState();
  const [logo,setLogo] = useState();

  const router = useRouter();



  const submitHandler = async() => {
    try {
      const userToken = JSON.parse(localStorage.getItem("userToken"));
      console.log(userToken);
      const config = {headers:{"Content-type": "application/json",Authorization: `Bearer ${userToken}`,},};
      const { data } = await axios.post("/api/mentor/create-project",{name,url,description,logo},config);
      console.log(data);
      router.push("/dashboard")
    } catch (error) {
      console.log(error);
    }
  }


  return(
    <div className={styles.container}>
    <div className={styles.inputs}>
    {<div className={styles.form}>
      <input type="text" placeholder='Project Name' value={name} onChange={(e) => setName(e.target.value)} required />
      <input type="text" placeholder='Github Repo Link' value={url} onChange={(e) => setUrl(e.target.value)} required />
      <input type="text" placeholder='Logo Link' value={logo} onChange={(e) => setLogo(e.target.value)} required />
      <input placeholder="Project Description" value={description} onChange={(e) => setDescription(e.target.value)} required />
      <button onClick={submitHandler}>Create Project</button>
      </div>}
    </div>
    </div>
  );
}

export default CreateProject;
