import React, { useState } from "react";
import styles from "../styles/login.module.scss";
import axios from "axios";
import { useRouter } from 'next/router';

function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const router = useRouter();


  const submitHandler = async() => {
      try {
        const config = {headers:{"Content-type": "application/json",},};
        const { data } = await axios.post("/api/auth/login",{email,password},config);
        const token = data.data.token;
                console.log(token);
        router.push("/dashboard");
      } catch (error) {
        console.log(error);
      }
  }

  return(
    <div className={styles.container}>
    <div className={styles.inputs}>
    {<div className={styles.form}>
    <input type="email" placeholder='Enter your Email' value={email} onChange={(e) => setEmail(e.target.value)} required />
    <input type="password" placeholder='Enter your Password' value={password} onChange={(e) => setPassword(e.target.value)} required />
    <button onClick={submitHandler}>Login</button>
    </div>}
    </div>
    </div>
  );
}

export default Login;
