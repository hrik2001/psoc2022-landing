import React, { useState } from "react";
import styles from "../styles/register.module.scss";
import axios from "axios";
import { useRouter } from 'next/router';

function Register() {

  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [role, setRole] = useState();

  const router = useRouter();


  const submitHandler = async() => {
      try {
        const config = {headers:{"Content-type": "application/json",},};
        const { data } = await axios.post("/api/auth/register",{name,email,password,role},config);
        localStorage.removeItem("userToken");
        console.log(data);
        const token = data.data.token;
        console.log(token);
        localStorage.setItem("userToken",JSON.stringify(token));
        router.push("/dashboard")
      } catch (error) {
        console.log(error);
      }
  }


  return(
    <div className={styles.container}>
    <div className={styles.inputs}>
    {<div className={styles.form}>
      <input type="text" placeholder='Enter your Name' value={name} onChange={(e) => setName(e.target.value)} required />
      <input type="email" placeholder='Enter your Email' value={email} onChange={(e) => setEmail(e.target.value)} required />
      <input type="password" placeholder='Enter your Password' value={password} onChange={(e) => setPassword(e.target.value)} required />
      <input type="text" placeholder='Enter mentee/mentor' value={role} onChange={(e) => setRole(e.target.value)} required />
      <button onClick={submitHandler}>Register</button>
      </div>}
    </div>
    </div>
  );
}

export default Register;
